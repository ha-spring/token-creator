(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2071)}])},2071:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return T}});var i=t(85893),r=t(76808),a=t(82729),l=t(67294),o=t(64146),s=t(95853);function u(){let n=(0,a._)(["\n  display: flex;\n  gap: 20px;\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);return u=function(){return n},n}function c(){let n=(0,a._)(["\n  flex: 1;\n"]);return c=function(){return n},n}function d(){let n=(0,a._)(["\n  padding: 10px 0px;\n"]);return d=function(){return n},n}function h(){let n=(0,a._)(["\n  padding: 1em;\n  border: 0.5px lightgray solid;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 1em;\n"]);return h=function(){return n},n}function p(){let n=(0,a._)(["\n  width: 100%;\n  font-size: 1.5em;\n  margin-bottom: 5px;\n  color: darkgrey;\n"]);return p=function(){return n},n}function x(){let n=(0,a._)(["\n  font-size: 1.5em;\n  padding: 10px 40px;\n  background: darkgrey;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  margin-top: 10px;\n  cursor: pointer;\n"]);return x=function(){return n},n}function f(){let n=(0,a._)(["\n  font-size: 1.5em;\n  margin: 0;\n  margin-right: 5px;\n  hieght: 20px;\n  width: 20px;\n"]);return f=function(){return n},n}function b(){let n=(0,a._)(["\n  color: red;\n  font-size: 12px;\n  margin-top: 5px;\n"]);return b=function(){return n},n}function g(){let n=(0,a._)(["\n  width: 100%;\n  font-size: 1.5em;\n  margin-bottom: 5px;\n  color: red;\n"]);return g=function(){return n},n}let m={tokenName:"",symbol:"",initialSupply:"",mintable:!1,burnable:!1,pausable:!1};function j(){let n=(0,r.SFn)(),e=(0,r.mx9)(),[{data:t,error:a,loading:s},u]=(0,r.LNv)();(0,l.useEffect)(()=>{var n;void 0!==t.chain&&([80001,137,1,84531].includes(null==t?void 0:null===(n=t.chain)||void 0===n?void 0:n.chainId)?G(!1):G(!0))},[t]);let[c,d]=(0,l.useState)(""),[h,p]=(0,l.useState)(""),[x,f]=(0,l.useState)(""),[b,g]=(0,l.useState)(!1),[j,T]=(0,l.useState)(!1),[Z,E]=(0,l.useState)(!1),[z,M]=(0,l.useState)(""),[I,O]=(0,l.useState)(""),[q,B]=(0,l.useState)(""),[F,X]=(0,l.useState)(""),[A,J]=(0,l.useState)(""),[L,U]=(0,l.useState)(!1),[V,Y]=(0,l.useState)(""),[D,G]=(0,l.useState)(!1),H=async()=>{M(""),O(""),B(""),X("");let t=!1;if(""===c&&(M("Token name is required."),t=!0),""===h&&(O("Symbol is required."),t=!0),""===x&&(B("Initial supply is required."),t=!0),n||(X("Please connect your wallet."),t=!0),t||D)return;console.log("Token name:",c),console.log("Symbol:",h),console.log("Initial supply:",x),console.log("Mintable:",b),console.log("Burnable:",j),console.log("Pausable:",Z);let i=await fetch("/contract",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({name:c,symbol:h,initialSupply:x,isMintable:b,isBurnable:j,isPausable:Z})}),r=await i.json(),a=new o.lV(r.abi,r.bytecode,e);try{let n=await a.deploy();U(!0),await n.deployTransaction.wait(),U(!1),Y(n.address)}catch(n){return}d(m.tokenName),p(m.symbol),f(m.initialSupply),g(m.mintable),T(m.burnable),E(m.pausable)};return L?(0,i.jsx)(_,{children:"Transaction in progress..."}):(0,i.jsxs)(i.Fragment,{children:[""!==V&&(0,i.jsxs)(_,{children:["Contract Address: ",V]}),D&&(0,i.jsx)(N,{children:"Unsupported network. Please switch to Polygon or Ethereum."}),(0,i.jsxs)(y,{children:[(0,i.jsxs)(S,{children:[(0,i.jsxs)(v,{children:[(0,i.jsx)(_,{children:"Token name"}),(0,i.jsx)(w,{placeholder:"e.g. My Token Name",value:c,onChange:n=>{d(n.target.value),M("")}}),z&&(0,i.jsx)(C,{children:z})]}),(0,i.jsxs)(v,{children:[(0,i.jsx)(_,{children:"Symbol"}),(0,i.jsx)(w,{placeholder:"e.g. SYM",value:h,onChange:n=>{p(n.target.value),O("")}}),I&&(0,i.jsx)(C,{children:I})]}),(0,i.jsxs)(v,{children:[(0,i.jsx)(_,{children:"Initial supply"}),(0,i.jsx)(w,{type:"number",min:"0",placeholder:"e.g. 123456789",value:x,onChange:n=>{f(n.target.value),B("")}}),q&&(0,i.jsx)(C,{children:q})]}),(0,i.jsx)(v,{children:(0,i.jsxs)(_,{children:[(0,i.jsx)(P,{id:"mintable",checked:b,onChange:()=>g(!b)}),"Mintable"]})}),(0,i.jsx)(v,{children:(0,i.jsxs)(_,{children:[(0,i.jsx)(P,{id:"burnable",checked:j,onChange:()=>T(!j)}),"Burnable"]})}),(0,i.jsx)(v,{children:(0,i.jsxs)(_,{children:[(0,i.jsx)(P,{id:"pausable",checked:Z,onChange:()=>E(!Z)}),"Pausable"]})})]}),(0,i.jsx)(S,{})]}),(0,i.jsx)(k,{onClick:H,children:"Create Token"}),(0,i.jsx)("div",{children:F&&(0,i.jsx)(C,{children:F})})]})}let y=s.ZP.div(u()),S=s.ZP.div(c()),v=s.ZP.div(d()),w=s.ZP.input(h()),_=s.ZP.div(p()),k=s.ZP.button(x()),P=s.ZP.input.attrs({type:"checkbox"})(f()),C=s.ZP.span(b()),N=s.ZP.div(g());var T=()=>((0,r.SFn)(),(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(j,{})}))}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=48312)}),_N_E=n.O()}]);