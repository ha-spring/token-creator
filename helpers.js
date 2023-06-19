const fs = require("fs");
const solc = require("solc");

// returns a contract object compiled using solc
// baseContractPath: relative path of the base contract, i.e. "./BaseContract.sol"
const instantiateContract = (baseContractPath) => {
  const sources = {};
  compileImports(baseContractPath, sources);

  var input = {
    language: "Solidity",
    sources: sources,
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };

  const output = solc.compile(JSON.stringify(input));
  const contract = JSON.parse(output);
  console.log('CONTRACT', contract)
  const bytecode =
    "0x" + contract.contracts[baseContractPath]["Base"].evm.bytecode.object;
  const abi = contract.contracts[baseContractPath]["Base"].abi;
  return {
    bytecode: bytecode,
    abi: abi,
  };
};

// returns sources: { "Contract.sol": { content: fs.readFileSync("pathName.sol",utf8)...}}
// using recursion
const compileImports = (root, sources) => {
  sources[root] = { content: fs.readFileSync(root, "utf8") };
  const imports = getNeededImports(root);
  for (let i = 0; i < imports.length; i++) {
    compileImports(imports[i], sources);
  }
};

// returns all the import paths in absolute path
const getNeededImports = (path) => {
  const file = fs.readFileSync(path, "utf8");
  const files = new Array();
  file
    .toString()
    .split("\n")
    .forEach(function (line, index, arr) {
      if (
        (index === arr.length - 1 && line === "") ||
        !line.trim().startsWith("import")
      ) {
        return;
      }
      // the import is legit
      const relativePath = line.substring(8, line.length - 2);
      const fullPath = buildFullPath(path, relativePath);
      files.push(fullPath.replace('./import "', ''));
    });
  return files;
};

// parent: node_modules/.../ERC721/ERC721.sol
// returns absolute path of a relative one using the parent path
const buildFullPath = (parent, path) => {
  let curDir = parent.substr(0, parent.lastIndexOf("/")); //i.e. ./node/.../ERC721
  if (path.startsWith("./")) {
    return curDir + "/" + path.substr(2);
  }

  while (path.startsWith("../")) {
    curDir = curDir.substr(0, curDir.lastIndexOf("/"));
    path = path.substr(3);
  }

  return curDir + "/" + path;
};

const getBytecodeAbi = (
  name,
  symbol,
  initialSupply,
  isMintable,
  isBurnable,
  isPausable
) => {
  const isOwnable = isMintable || isPausable;
  const solidityCode = `
                // SPDX-License-Identifier: MIT
                pragma solidity 0.8.19;

        import "./node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
        ${
          isOwnable
            ? 'import "./node_modules/@openzeppelin/contracts/access/Ownable.sol";'
            : ""
        }
        ${
          isBurnable
            ? 'import "./node_modules/@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";'
            : ""
        }
        ${
          isPausable
            ? 'import "./node_modules/@openzeppelin/contracts/security/Pausable.sol";'
            : ""
        }

        contract Base is ERC20
                ${isBurnable ? ", ERC20Burnable" : ""}
        ${isPausable ? ", Pausable" : ""}
        ${isOwnable ? ", Ownable" : ""}
        {
                constructor() ERC20("${name}", "${symbol}") {
                        ${
                          initialSupply > 0
                            ? `_mint(msg.sender, ${initialSupply} * 10 ** decimals());`
                            : ""
                        }
                }
                ${
                  isMintable
                    ? `
                                function mint(address to, uint256 amount) public onlyOwner {
                                        _mint(to, amount);
                                }`
                    : ""
                }
                ${
                  isPausable
                    ? `
                                function pause() public onlyOwner {
                                        _pause();
                                }

                        function unpause() public onlyOwner {
                                _unpause();
                        }

                        function _beforeTokenTransfer(address from, address to, uint256 amount)
                                internal
                                whenNotPaused
                                override
                                {
                                        super._beforeTokenTransfer(from, to, amount);
                                }
                        `
                    : ""
                }
        }`;

  /*
  fs.promises.writefile("./base.sol", soliditycode, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return;
    } else {
      console.log("Writing was successful.");
      return instantiateContract("./Base.sol");
    }
  });
  */
  fs.writeFileSync("./Base.sol", solidityCode)
  return instantiateContract("./Base.sol");

};

module.exports = {
  getBytecodeAbi,
};
