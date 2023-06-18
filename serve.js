const { getBytecodeAbi } = require("./helpers.js");
const express = require("express");
const app = express();
const ip = require("ip");

app.use(express.json());
app.use(express.static("public"));

app.post("/contract", async (req, res) => {
  try {
    const { name, symbol, initialSupply, isMintable, isBurnable, isPausable } =
      req.body;
    const contract = getBytecodeAbi(name, symbol, initialSupply, isMintable, isBurnable, isPausable);
    res.status(200).json({ contract });
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () =>
  console.log(`listening on port ${ip.address()}:${port}`)
);
