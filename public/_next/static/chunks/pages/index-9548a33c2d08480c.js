(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2071)}])},2071:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return T}});var r=t(85893),i=t(76808),a=t(82729),s=t(67294),l=t(64146),u=t(95853);function o(){let n=(0,a._)(["\n  display: flex;\n  gap: 20px;\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);return o=function(){return n},n}function c(){let n=(0,a._)(["\n  flex: 1;\n"]);return c=function(){return n},n}function d(){let n=(0,a._)(["\n  padding: 10px 0px;\n"]);return d=function(){return n},n}function h(){let n=(0,a._)(["\n  padding: 1em;\n  border: 0.5px lightgray solid;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 1em;\n"]);return h=function(){return n},n}function p(){let n=(0,a._)(["\n  width: 100%;\n  font-size: 1.5em;\n  margin-bottom: 5px;\n  color: darkgrey;\n"]);return p=function(){return n},n}function x(){let n=(0,a._)(["\n  font-size: 1.5em;\n  padding: 10px 40px;\n  background: darkgrey;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  margin-top: 10px;\n  cursor: pointer;\n"]);return x=function(){return n},n}function f(){let n=(0,a._)(["\n  font-size: 1.5em;\n  margin: 0;\n  margin-right: 5px;\n  hieght: 20px;\n  width: 20px;\n"]);return f=function(){return n},n}function b(){let n=(0,a._)(["\n  color: red;\n  font-size: 12px;\n  margin-top: 5px;\n"]);return b=function(){return n},n}function m(){let n=(0,a._)(["\n  width: 100%;\n  font-size: 1.5em;\n  margin-bottom: 5px;\n  color: red;\n"]);return m=function(){return n},n}let j={tokenName:"",symbol:"",initialSupply:"",mintable:!1,burnable:!1,pausable:!1};function g(){let n=(0,i.SFn)(),e=(0,i.mx9)(),[{data:t,error:a,loading:u},o]=(0,i.LNv)();(0,s.useEffect)(()=>{var n;void 0!==t.chain&&([80001,137,1,84531].includes(null==t?void 0:null===(n=t.chain)||void 0===n?void 0:n.chainId)?G(!1):G(!0))},[t]);let[c,d]=(0,s.useState)(""),[h,p]=(0,s.useState)(""),[x,f]=(0,s.useState)(""),[b,m]=(0,s.useState)(!1),[g,T]=(0,s.useState)(!1),[Z,E]=(0,s.useState)(!1),[z,I]=(0,s.useState)(""),[M,O]=(0,s.useState)(""),[q,F]=(0,s.useState)(""),[B,X]=(0,s.useState)(""),[A,J]=(0,s.useState)(""),[L,U]=(0,s.useState)(!1),[V,Y]=(0,s.useState)(""),[D,G]=(0,s.useState)(!1),[H,K]=(0,s.useState)(!1),Q=async()=>{K(!0),I(""),O(""),F(""),X("");let t=!1;if(""===c&&(I("Token name is required."),t=!0),""===h&&(O("Symbol is required."),t=!0),""===x&&(F("Initial supply is required."),t=!0),n||(X("Please connect your wallet."),t=!0),t||D){K(!1);return}let r=await fetch("/contract",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({name:c,symbol:h,initialSupply:x,isMintable:b,isBurnable:g,isPausable:Z})}),i=await r.json(),a=new l.lV(i.abi,i.bytecode,e);try{let n=await a.deploy();U(!0),await n.deployTransaction.wait(),U(!1),Y(n.address)}catch(n){K(!1);return}d(j.tokenName),p(j.symbol),f(j.initialSupply),m(j.mintable),T(j.burnable),E(j.pausable),K(!1)};return L?(0,r.jsx)(_,{children:"Transaction in progress..."}):(0,r.jsxs)(r.Fragment,{children:[""!==V&&(0,r.jsxs)(_,{children:["Contract Address: ",V]}),D&&(0,r.jsx)(N,{children:"Unsupported network. Please switch to Polygon or Ethereum."}),(0,r.jsxs)(y,{children:[(0,r.jsxs)(S,{children:[(0,r.jsxs)(v,{children:[(0,r.jsx)(_,{children:"Token name"}),(0,r.jsx)(w,{placeholder:"e.g. My Token Name",value:c,onChange:n=>{d(n.target.value),I("")}}),z&&(0,r.jsx)(C,{children:z})]}),(0,r.jsxs)(v,{children:[(0,r.jsx)(_,{children:"Symbol"}),(0,r.jsx)(w,{placeholder:"e.g. SYM",value:h,onChange:n=>{p(n.target.value),O("")}}),M&&(0,r.jsx)(C,{children:M})]}),(0,r.jsxs)(v,{children:[(0,r.jsx)(_,{children:"Initial supply"}),(0,r.jsx)(w,{type:"number",min:"0",placeholder:"e.g. 123456789",value:x,onChange:n=>{f(n.target.value),F("")}}),q&&(0,r.jsx)(C,{children:q})]}),(0,r.jsx)(v,{children:(0,r.jsxs)(_,{children:[(0,r.jsx)(P,{id:"mintable",checked:b,onChange:()=>m(!b)}),"Mintable"]})}),(0,r.jsx)(v,{children:(0,r.jsxs)(_,{children:[(0,r.jsx)(P,{id:"burnable",checked:g,onChange:()=>T(!g)}),"Burnable"]})}),(0,r.jsx)(v,{children:(0,r.jsxs)(_,{children:[(0,r.jsx)(P,{id:"pausable",checked:Z,onChange:()=>E(!Z)}),"Pausable"]})})]}),(0,r.jsx)(S,{})]}),(0,r.jsx)(k,{onClick:Q,children:H?"In progress...":"Create Token"}),(0,r.jsx)("div",{children:B&&(0,r.jsx)(C,{children:B})})]})}let y=u.ZP.div(o()),S=u.ZP.div(c()),v=u.ZP.div(d()),w=u.ZP.input(h()),_=u.ZP.div(p()),k=u.ZP.button(x()),P=u.ZP.input.attrs({type:"checkbox"})(f()),C=u.ZP.span(b()),N=u.ZP.div(m());var T=()=>((0,i.SFn)(),(0,r.jsx)("div",{className:"container",children:(0,r.jsx)(g,{})}))}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=48312)}),_N_E=n.O()}]);