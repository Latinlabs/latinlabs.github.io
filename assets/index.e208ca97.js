export function __vite_legacy_guard(){import("data:text/javascript,")}import{c as e,r as t,w as n,u as a,a as s,b as i,d as o,e as r,f as l,g as d,h as u,i as c,N as p,E as y,W as m,C as h,j as w,k as b,l as f,J as g,m as x,n as v,o as T,p as k,q as M,s as I,t as S,v as N,x as G,y as C,z as P,A as B,D as A,F as L,B as E,G as O,H as j,I as $,K as D,L as _,M as X,O as R,P as F,Q as W,R as q,S as z,U,T as V,V as H,X as J,Y as Q,Z as K,_ as Y,$ as Z,a0 as ee,a1 as te,a2 as ne,a3 as ae,a4 as se,a5 as ie}from"./vendor.15824b8c.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const oe=e();var re,le,de,ue;(le=re||(re={})).XS="XS",le.SM="SM",le.MD="MD",le.LG="LG",le.XL="XL",le.XXL="XXL",(ue=de||(de={}))[ue.XS=480]="XS",ue[ue.SM=576]="SM",ue[ue.MD=768]="MD",ue[ue.LG=992]="LG",ue[ue.XL=1200]="XL",ue[ue.XXL=1600]="XXL";const ce=new Map;let pe,ye,me;function he(e){const r=t(re.XL),l=t(window.innerWidth);function d(){const e=document.body.clientWidth,t=ce.get(re.XS),n=ce.get(re.SM),a=ce.get(re.MD),s=ce.get(re.LG),i=ce.get(re.XL);r.value=e<t?re.XS:e<n?re.SM:e<a?re.MD:e<s?re.LG:e<i?re.XL:re.XXL,l.value=e}function u(){null==e||e({screen:pe,width:ye,realWidth:me,screenEnum:de,screenMap:ce,sizeEnum:re})}return function({el:e=window,name:o,listener:r,options:l,autoRemove:d=!0,isDebounce:u=!0,wait:c=80}){let p=()=>{};const y=t(!1);if(e){const m=t(e),h=u?s(r,c):i(r,c),w=c?h:r,b=e=>{y.value=!0,e.removeEventListener(o,w,l)},f=e=>e.addEventListener(o,w,l),g=n(m,((e,t,n)=>{e&&(!a(y)&&f(e),n((()=>{d&&b(e)})))}),{immediate:!0});p=()=>{b(m.value),g()}}}({el:window,name:"resize",listener:()=>{d(),u()}}),d(),pe=o((()=>a(r))),ye=o((()=>ce.get(a(r)))),me=o((()=>a(l))),u(),{screenRef:pe,screenEnum:de,widthRef:ye,realWidthRef:me}}ce.set(re.XS,480),ce.set(re.SM,576),ce.set(re.MD,768),ce.set(re.LG,992),ce.set(re.XL,1200),ce.set(re.XXL,1600);var we={roundTime:28800,web:{chainId:97,rpc_url:"https://data-seed-prebsc-1-s1.binance.org:8545/",topics:["0x88b7d29fc1e47c6850bc8ec1b11aa721e95300e4453154622db7a4c2e7c3518b"]},connector:{address:"0x7567bEba6d3297c423DdB6fB3b55Dd3abaC41652",abi:[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"previousAdmin",type:"address"},{indexed:!1,internalType:"address",name:"newAdmin",type:"address"}],name:"AdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"beacon",type:"address"}],name:"BeaconUpgraded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"oldDevAddr",type:"address"},{indexed:!1,internalType:"address",name:"newDevAddr",type:"address"}],name:"NewDevAddr",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"player",type:"address"},{indexed:!1,internalType:"uint256",name:"roundId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"hour",type:"uint256"},{indexed:!1,internalType:"uint256",name:"minute",type:"uint256"},{indexed:!1,internalType:"uint256",name:"second",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"emoji",type:"string"}],name:"Punched",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"implementation",type:"address"}],name:"Upgraded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"target",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Withdraw",type:"event"},{inputs:[],name:"decimals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_devaddr",type:"address"}],name:"dev",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"devaddr",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"gmgn",outputs:[{internalType:"contract IGmgn",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"initRoundBlock",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IGmgn",name:"_gmgn",type:"address"},{internalType:"address",name:"_devaddr",type:"address"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"lastRoundId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"emoji",type:"string"}],name:"punch",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_roundId",type:"uint256"}],name:"punchTime",outputs:[{components:[{internalType:"uint256",name:"hour",type:"uint256"},{internalType:"uint256",name:"minute",type:"uint256"},{internalType:"uint256",name:"second",type:"uint256"},{internalType:"enum GmgnMaker.PunchType",name:"punchType",type:"uint8"},{internalType:"bool",name:"isPunched",type:"bool"},{internalType:"string",name:"emoji",type:"string"},{internalType:"uint256",name:"nowBlock",type:"uint256"}],internalType:"struct GmgnMaker.PunchRecord",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"rewardAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"roundBlockNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"roundId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"roundInfos",outputs:[{internalType:"uint256",name:"roundId",type:"uint256"},{internalType:"enum GmgnMaker.PunchType",name:"winnerType",type:"uint8"},{internalType:"uint256",name:"totalPoint",type:"uint256"},{internalType:"uint256",name:"totalReward",type:"uint256"},{internalType:"uint256",name:"accGmgnPerShare",type:"uint256"},{internalType:"uint256",name:"devShare",type:"uint256"},{internalType:"uint256",name:"gmPoint",type:"uint256"},{internalType:"uint256",name:"gnPoint",type:"uint256"},{internalType:"bool",name:"enabled",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"}],name:"upgradeTo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"},{internalType:"bytes",name:"data",type:"bytes"}],name:"upgradeToAndCall",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userInfos",outputs:[{internalType:"uint256",name:"settledCount",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"userPunchRecord",outputs:[{components:[{internalType:"uint256[]",name:"historyRoundIds",type:"uint256[]"},{internalType:"uint256",name:"settledCount",type:"uint256"}],internalType:"struct GmgnMaker.UserInfo",name:"userInfo",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"payable",type:"function"}],tokenAddress:"0x0A4d693183526266EaBb6c2fb778703B2c3d5975",tokenAbi:[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"delegator",type:"address"},{indexed:!0,internalType:"address",name:"fromDelegate",type:"address"},{indexed:!0,internalType:"address",name:"toDelegate",type:"address"}],name:"DelegateChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"delegate",type:"address"},{indexed:!1,internalType:"uint256",name:"previousBalance",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newBalance",type:"uint256"}],name:"DelegateVotesChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"DOMAIN_SEPARATOR",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint32",name:"pos",type:"uint32"}],name:"checkpoints",outputs:[{components:[{internalType:"uint32",name:"fromBlock",type:"uint32"},{internalType:"uint224",name:"votes",type:"uint224"}],internalType:"struct ERC20Votes.Checkpoint",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"delegatee",type:"address"}],name:"delegate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"delegatee",type:"address"},{internalType:"uint256",name:"nonce",type:"uint256"},{internalType:"uint256",name:"expiry",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"delegateBySig",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"delegates",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"blockNumber",type:"uint256"}],name:"getPastTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"blockNumber",type:"uint256"}],name:"getPastVotes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getVotes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"numCheckpoints",outputs:[{internalType:"uint32",name:"",type:"uint32"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"permit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}]},walletConnect:{api_key:"4950a481285046e28d71fa9676d46554"}};function be(e,t=6){return!e||e.length<15?"":e.substr(0,t)+"..."+e.substr(e.length-4)}function fe(e,t,n,a=3){return 1e3*(we.roundTime-(t-e-(n-1)*(we.roundTime/3))*a)}r.extend(l),r.extend(d),r.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"1 min",ss:"1 min",m:"1 min",mm:"%d mins",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}});var ge={install:async(e,t)=>{e.config.globalProperties.$strSub=be,e.config.globalProperties.$round=fe}};const xe=u("userStore",{state:()=>({userInfo:{},address:"",chainId:0,provider:{},contract:{},isMobile:!1,initRoundBlock:0,blockNumber:0,rewardAmount:"0",roundId:0,GMPoint:0,GNPoint:0,sumPoint:"0",OtherPoint:0,countDown:0}),getters:{getEchartsData:e=>[e.GMPoint,e.GNPoint,e.OtherPoint]},actions:{async setAddress(e){this.address=e||""},setChainId(e){this.chainId=e||0},delAddress(){this.address=""},delChainId(){this.chainId=0},async init(){const e=await window.$contract,t=await window.$provider,n=await window.$token;if(this.address){const t=await e.rewardAmount(this.address);this.rewardAmount=c(t.toString(),18)}try{const a=await e.initRoundBlock();this.initRoundBlock=a.toNumber(),this.blockNumber=await t.getBlockNumber();const s=await e.roundId();this.roundId=s.toNumber();const i=await n.totalSupply();this.sumPoint=c(i.toString(),18);const o=await e.roundInfos(this.roundId);this.GMPoint=o.gmPoint.toNumber(),this.GNPoint=o.gnPoint.toNumber(),this.OtherPoint=o.totalPoint.sub(o.gmPoint).sub(o.gnPoint).toNumber();const r=await t.getBlockNumber();this.countDown=fe(this.initRoundBlock,r,this.roundId)}catch(a){}},logout(){this.address="",this.chainId=0,this.provider={},this.contract={},this.rewardAmount="0",localStorage.setItem("walletType","0"),this.isMobile?p({type:"success",message:"Exit Success"}):y.success({title:"Exit Success",offset:100,duration:1500})},setMobile(){he((({screenMap:e,sizeEnum:t,width:n})=>{const a=e.get(t.LG);a&&(this.isMobile=n.value-1<a)}))}}});function ve(){return xe(oe)}async function Te(e,t,n){return new h(e,t,n)}const ke=u({id:"walletStore",state:()=>({connector:{},connected:!1}),getters:{},actions:{setConnector(e){this.connector=e},async subscribeToEvents(){this.connector&&(this.connector.on("accountsChanged",(e=>{console.log("accountsChanged");const t=ve(),n=new m(this.connector);n.ready.then((async e=>{if(e.chainId!==we.web.chainId)return void(t.isMobile?p({type:"danger",message:"Please connect to the appropriate BSC network"}):y.error({title:"Please connect to the appropriate BSC network",offset:100,duration:1500}));window.$provider=n,await t.setAddress(this.connector.accounts[0]),await t.setChainId(e.chainId);const a=n.getSigner();window.$contract=await Te(we.connector.address,we.connector.abi,a),window.$token=await Te(we.connector.tokenAddress,we.connector.tokenAbi,a),await t.init(),localStorage.setItem("walletType","2")}))})),this.connector.on("chainChanged",(e=>{console.log("chainChanged")})),this.connector.on("connect",(()=>{console.log('connector.on("connect")');const e=ve(),t=new m(this.connector);t.ready.then((async n=>{if(n.chainId!==we.web.chainId)return void(e.isMobile?p({type:"danger",message:"Please connect to the appropriate BSC network"}):y.error({title:"Please connect to the appropriate BSC network",offset:100,duration:1500}));window.$provider=t,await e.setAddress(this.connector.accounts[0]),await e.setChainId(n.chainId);const a=t.getSigner();window.$contract=await Te(we.connector.address,we.connector.abi,a),window.$token=await Te(we.connector.tokenAddress,we.connector.tokenAbi,a),await e.init(),localStorage.setItem("walletType","2")}))})),this.connector.on("disconnect",((e,t)=>{console.log('connector.on("disconnect")'),this.connector={},this.connected=!1;ve().logout()})))}}});var Me=(e,t)=>{for(const[n,a]of t)e[n]=a;return e};const Ie=e=>(P("data-v-45acea16"),e=e(),B(),e),Se={class:"max-w-screen-xl mx-auto h-20 flex items-center justify-between px-2 md:px-10"},Ne=Ie((()=>N("div",{class:"logo"},[N("a",{href:"https://gmgn.org"},[N("img",{class:"w-24 sm:w-32",src:"/assets/logo.09e823ec.png",alt:"GMGN"})])],-1))),Ge={class:"flex items-center"},Ce=Ie((()=>N("a",{href:"https://twitter.com/gmgn2048",target:"_blank",class:"sm:inline-block text-base text-gray-300 hover:text-white pr-4 sm:pr-10"}," Twitter ",-1))),Pe=["href"],Be={key:0},Ae=O("Exit"),Le=[O(" Connect "),Ie((()=>N("span",{class:"hidden sm:inline-block"},"Wallet",-1)))],Ee={class:"text-center"},Oe=["src"],je=Ie((()=>N("p",null,"MetaMask",-1))),$e=Ie((()=>N("p",{class:"text-sm text-gray-700 font-light mt-2"},"Connect to your MetaMask Wallet",-1))),De=["src"],_e=Ie((()=>N("p",null,"WalletConnect",-1))),Xe=Ie((()=>N("p",{class:"text-sm text-gray-700 font-light mt-2"},"Scan with WalletConnect to connect",-1)));var Re=Me({setup(e,{expose:t}){const n=window.localStorage,s=A.Component,i=w({dialog:!1,exit:!1}),r=ve(),{proxy:l}=$(),d=[{name:"Exit",color:"#ee0a24",active:"exit"}],u=o((()=>ve().address));function c(e){const t=ve();if("exit"===e.active)"2"===n.getItem("walletType")&&window.$provider.provider.disconnect(),n.setItem("walletType","0"),t.logout()}function P(){window.web3&&window.ethereum?i.dialog=!0:D()}async function B(){await window.ethereum.request({method:"eth_requestAccounts"}).then((async()=>{const e=await new m(window.web3.currentProvider);await e.ready.then((async t=>{if(t.chainId!==we.web.chainId)return void(r.isMobile?p({type:"danger",message:"Please connect to the appropriate BSC network"}):y.error({title:"Please connect to the appropriate BSC network",offset:100,duration:1500}));i.dialog=!1,window.$provider=e;const a=e.getSigner();await r.setAddress(await a.getAddress()),window.$contract=await _(we.connector.address,we.connector.abi,a),window.$token=await _(we.connector.tokenAddress,we.connector.tokenAbi,a),r.setChainId(t.chainId),n.setItem("walletType","1"),await r.init()}))}))}async function D(){const e=await new b({chainId:we.web.chainId,rpc:{[we.web.chainId]:we.web.rpc_url},qrcodeModal:f}),t=ke(oe);t.setConnector(e),await t.subscribeToEvents(),e.connected||await e.enable(),i.dialog=!1,n.setItem("walletType","2")}async function _(e,t,n){return new h(e,t,n)}return t({connect:P,ethersJs:B,walletConnect:D,defaultConnect:async function(){let e=new g(we.web.rpc_url);e.ready.then((async t=>{window.$provider=e,window.$contract=await new h(we.connector.address,we.connector.abi,e),window.$token=await _(we.connector.tokenAddress,we.connector.tokenAbi,e),n.setItem("walletType","0"),await r.init()}))}}),(e,t)=>{const n=x,o=v,r=T,p=k,y=M("action-sheet");return I(),S("div",null,[N("header",Se,[Ne,N("div",Ge,[Ce,N("a",{href:`https://testnet.bscscan.com/address/${a(we).connector.address}`,target:"_blank",class:"sm:inline-block text-base text-gray-300 hover:text-white pr-4 sm:pr-10"}," Contract ",8,Pe),a(u)?(I(),S("div",Be,[G(p,{trigger:"click"},{dropdown:C((()=>[G(r,null,{default:C((()=>[(I(),S(L,null,E(d,(e=>G(o,{onClick:t=>c(e)},{default:C((()=>[Ae])),_:2},1032,["onClick"]))),64))])),_:1})])),default:C((()=>[G(n,{class:"py-1 sm:py-2 px-3 rounded-lg font-light",size:"mini",type:"primary"},{default:C((()=>[O(j(a(l).$strSub(a(u))),1)])),_:1})])),_:1})])):(I(),S("button",{key:1,class:"bg-blue-700 font-light py-1 sm:py-2 px-3 bg-btn rounded-lg cursor-pointer",onClick:P},Le))])]),G(a(s),{class:"text-black",show:a(i).dialog,"onUpdate:show":t[0]||(t[0]=e=>a(i).dialog=e),width:"400",closeOnClickOverlay:!0,showConfirmButton:!1},{default:C((()=>[N("ul",Ee,[N("li",{class:"py-10 cursor-pointer border-b border-bg border-opacity-20",onClick:B},[N("img",{class:"w-14 mx-auto mb-4",src:a("/assets/metamask.86c31dd9.svg"),alt:""},null,8,Oe),je,$e]),N("li",{class:"py-10 cursor-pointer",onClick:D},[N("img",{class:"w-14 mx-auto mb-4",src:a("/assets/WalletConnect.a23d2c74.svg"),alt:""},null,8,De),_e,Xe])])])),_:1},8,["show"]),G(y,{show:a(i).exit,"onUpdate:show":t[1]||(t[1]=e=>a(i).exit=e),actions:d,"cancel-text":"Cancel","close-on-click-action":"",onSelect:c},null,8,["show"])])}}},[["__scopeId","data-v-45acea16"]]);D([_,X,R,F,W,q]);let Fe=document.documentElement.clientWidth<420;var We=Me({setup(e,{expose:n}){const s=ve(),i=t({tooltip:{trigger:"item"},title:{text:"Circulating Supply",left:"center",top:"55%",textStyle:{color:"#BBB",fontSize:14,align:"center",fontWeight:"300",fontFamily:"'Jost', sans-serif"}},graphic:{type:"text",left:"center",top:"45%",style:{text:"0.0",textAlign:"center",fill:"#fff",fontSize:Fe?28:32,fontWeight:400}},legend:{bottom:"0%",left:"center",textStyle:{color:"#BBB"},itemStyle:{borderWidth:.1,borderColor:"#fff"},formatter:function(e){let t=e;return-1!==e.indexOf("(")&&(t=e.slice(0,e.indexOf("("))),Fe?t:e}},series:[{name:"",type:"pie",radius:["50%","80%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:5,borderColor:"#191934",borderWidth:3},data:[{value:s.GMPoint,name:"GM(6:00:00-09:59:59)",itemStyle:{color:"#FDDA5E"}},{value:s.GNPoint,name:"GN(22:00:00-01:59:59)",itemStyle:{color:"#28283B"}},{value:s.OtherPoint,name:"Other",itemStyle:{color:"#F0F0F0"}}],label:{show:!1,position:"center"},labelLine:{show:!1},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0)"}}}]}),o=t();let r;return n({updateEcharts:async function(){clearTimeout(r),r=setInterval((async()=>{await s.init(),setTimeout((()=>{o.value.setOption({graphic:{style:{text:(.92*s.sumPoint).toFixed(2)}},series:[{data:[{value:s.GMPoint,name:"GM(6:00:00-09:59:59)",itemStyle:{color:"#FDDA5E"}},{value:s.GNPoint,name:"GN(22:00:00-01:59:59)",itemStyle:{color:"#28283B"}},{value:s.OtherPoint,name:"Other",itemStyle:{color:"#F0F0F0"}}]}]})}),300)}),3e3)}}),(e,t)=>(I(),z(a(U),{ref:(e,t)=>{t.echarts=e,o.value=e},class:"chart",option:i.value,autoresize:!0},null,8,["option"]))}},[["__scopeId","data-v-240e21ef"]]);const qe={class:"mt-10 mx-auto px-5 sm:px-0"},ze=N("h1",{class:"text-2xl my-5 font-light"},"FAQ",-1),Ue={class:"p-5 sm:p-10 leading-6 sm:leading-7 text-left bg-white bg-opacity-20 text-base sm:text-xl font-light sm:font-extralight"},Ve=V('<p class="mb-2 font-medium sm:text-2xl">What is GMGN?</p><p>GMGN is a decentralised cryptocurrency based on the GM/GN meme.</p><p class="mt-6 mb-2 font-medium sm:text-2xl">What do you mean by &quot;decentralised&quot;?</p><p>GMGN is not run by any individual company or person. Technically speaking, it operates according to rules agreed by consensus, rather than decided upon by some founding or owning entity.</p><p class="mt-6 mb-2 font-medium sm:text-2xl">What do you mean by &quot;cryptocurrency&quot;?</p><p>A cryptocurrency is a digital currency that is secured by cryptography, in contrast to conventional (fiat) currencies where they are secured by a government or governments.</p><p class="mt-6 mb-2 font-medium sm:text-2xl">Okay, but What is &quot;GM/GN” meme?</p><p>Although some people think it&#39;s silly and they take it too seriously, we need a simple way to say hello and we want to convey a consensus: To make each day count.</p><p class="mt-6 mb-2 font-medium sm:text-2xl">So How to get GMGN coins?</p>',9),He={class:"list-decimal pl-8"},Je=O("You will need a MetaMask wallet or other major crypto wallet and a little BNB for the gas payments.If it is a newly created wallet, click and "),Qe=O("."),Ke=V('<li class="mt-2">Every 8 hours you can participate and get a time, randomly combined by the program in hours (00-23), minutes (00-59) and seconds (00-59), e.g. 07:35:46/19:08:36. </li><li class="mt-2">The protocol defines the GM time zone as 6:00:00 -- 09:59:59 and the GN as 22:00:00 -- 01:59:59. If you get a time of 00:51:28, then you belong to the GN group.</li><li class="mt-2">The number of tokens issued every 8 hours is equal to the number of participants, with a maximum cap of 86400, Every 4800 hours the cap is reduced by 3600 until the cap is 3600, the decreasing model is: 86400→82800→79200→... →7200→3600→3600...</li><li class="mt-2">For example, if there are 1000 participants in 8 hours, 1000 GMGN tokens will be issued, or if there are 50,000 participants and the current limit is 28,800, 28,800 tokens will be issued.</li><li class="mt-2">After the countdown is over, if none of the participants belong to the GM or GN section, or if the number of GMs and GNs is the same, all participants share the issued tokens equally.</li><li class="mt-2">Otherwise, the group with the higher number of GMs or GNs shares the issued tokens equally.</li><li class="mt-2">All issued tokens, 8% will be deposited into the treasury, In the future, the treasury will be governed jointly by all token holders to develop a more equitable and inclusive monetary policy.</li>',7),Ye={class:"mt-2"},Ze=O("Earned tokens can be withdrawn to your wallet at any time.If you don't see GMGN tokens in your wallet, please click and copy "),et=["href"],tt=O(" and import tokens in MetaMask."),nt=N("li",{class:"mt-2"},"Note! GMGN is new, unaudited, and not guaranteed to work perfectly. Before participate, do your own research: ask questions, check out the code, understand the risks and good luck!",-1),at={setup(e){var t;return(e,n)=>(I(),S("div",qe,[ze,N("div",Ue,[Ve,N("ul",He,[N("li",null,[Je,N("span",{class:"cursor-pointer underline font-light",onClick:n[0]||(n[0]=e=>async function(e){if("web3"===e&&(t="undefined"!=typeof ethereum?new m(ethereum):"undefined"!=typeof web3?new m(web3.givenProvider):new m(ethereum)),void 0!==t){let e,n=0;if(n=await t.getNetwork(),"56"==n.chainId)return void alert("BSC Network has already been added to Metamask.");e=[{chainId:"0x38",chainName:"Binance Smart Chain Mainnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed1.binance.org/"],blockExplorerUrls:["https://bscscan.com/"]}],window.ethereum.request({method:"wallet_addEthereumChain",params:e}).then((()=>console.log("Success"))).catch((e=>console.log("Error",e.message)))}else alert("Unable to locate a compatible web3 browser!")}("web3"))},"Add BSC Network"),Qe]),Ke,N("li",Ye,[Ze,N("a",{class:"cursor-pointer underline font-light",href:`https://testnet.bscscan.com/address/${a(we).connector.tokenAddress}`,target:"_blank"},"Token Contract",8,et),tt]),nt])])]))}},st={},it={class:"max-w-screen-md mt-10 mx-auto px-5 sm:px-0"},ot=[N("div",{class:"text-left border-solid border-t border-white border-opacity-20"},[N("div",{class:"flex justify-between items-center py-5 font-light text-footer text-xs sm:text-base"},[N("div",null,"© 2021 GMGN.ORG"),N("div",null,"Developed with love by Latin Labs")])],-1)];var rt=Me(st,[["render",function(e,t){return I(),S("footer",it,ot)}]]);const lt={class:"mt-10 mx-auto px-5 sm:px-0"},dt={class:"flex justify-between items-end border-b pb-3 border-opacity-30"},ut={class:"flex"},ct=["href"],pt={key:0,class:"mt-5"},yt={class:"h-14 my-5 pb-5 text-xl font-light flex justify-between items-center border-solid border-b border-white border-opacity-20"},mt={class:"w-3/5 text-left flex my-emoji"},ht={class:"bg-white w-12 h-12 bg-opacity-20 mr-3 rounded overflow-hidden relative"},wt=["innerHTML"],bt={class:"truncate w-2/3"},ft=["href"],gt={class:"text-sm text-gray-400"},xt={class:"flex-1 text-right flex items-center justify-end"},vt={class:"text-sm mr-3 text-gray-400"},Tt={class:"text-center text-xs sm:text-base font-medium"},kt={key:1,class:"py-10"},Mt={key:0},It={key:1,class:"text-gray-400 font-light"},St={setup(e,{expose:t}){const n=H(),s=ve(),i=w({list:[],listType:"latest",loading:!0}),{proxy:o}=$();let l,d,u={};async function p(){i.listType="latest",i.loading=!0,i.list=[],await g(),clearTimeout(u),u=setInterval((()=>{g()}),3e3)}async function y(){s.address&&(i.listType="history",i.loading=!0,clearTimeout(u),i.list=[],await async function(){if(i.listType="history",window.$contract){d=await new K(we.connector.abi);const e=[];await window.$contract.functions.userPunchRecord().then((async t=>{const a=t.userInfo.historyRoundIds;if(a.length>0){let t=a.length;for(let i=t-1;i>t-10;i--)if(a[i]){let t={},o={};await window.$contract.functions.roundInfos(a[i].toNumber()).then((e=>{o={winnerType:e.winnerType,accGmgnPerShare:c(e.accGmgnPerShare.toString(),18)}})),await window.$contract.functions.punchTime(a[i].toNumber()).then((async e=>{let o;if(e[0].emoji){const t=await n.getEmojiBySearchQuery(e[0].emoji);t.length&&(o=t[0].unicode)}else o="😀";t={address:s.address,blockNumber:e[0].nowBlock.toNumber(),hour:e[0].hour.toNumber(),minute:e[0].minute.toNumber(),second:e[0].second.toNumber(),roundId:a[i].toNumber(),punchType:e[0].punchType,emoji:o}})),e.push(Object.assign(o,t))}}i.loading=!1})),i.list=e}}())}function m(e){let t=[];return t=-1!==[6,7,8,9].indexOf(e)?["bg-gm","text-bg"]:-1!==[22,23,0,1].indexOf(e)?["bg-gn"]:["bg-white","bg-opacity-20"],t}function h(e){return e<10?`0${e}`:e}function b(e){if("history"===i.listType)return 0==e.winnerType||e.punchType===e.winnerType?"/ Received tokens: "+parseFloat(e.accGmgnPerShare).toFixed(5)/1:"/ Received tokens: 0"}function f(e){return function(e,t){return r().subtract(3*(e-t),"second").fromNow()}(s.blockNumber,e)}async function g(){if(window.$provider){l=window.$provider;const e=await l.getBlockNumber();d=await new K(we.connector.abi);const t=[];l.getLogs({fromBlock:e-4999,toBlock:e,topics:we.web.topics}).then((async e=>{if(e.length>0){let a=e.length;for(let s=a-1;s>a-10;s--)if(e[s]){const a=await d.parseLog(e[s]);let i;if(a.args.emoji){const e=await n.getEmojiBySearchQuery(a.args.emoji);e.length&&(i=e[0].unicode)}else i="😀";const o={address:a.args[0],blockNumber:e[s].blockNumber,hour:a.args.hour.toNumber(),minute:a.args.minute.toNumber(),second:a.args.second.toNumber(),roundId:a.args.roundId.toNumber(),emoji:i};t.push(o)}}i.list=t,i.loading=!1}))}}return t({latest:p}),(e,t)=>(I(),S("div",lt,[N("div",dt,[N("div",ut,[N("p",{class:J(["text-xl sm:text-2xl font-normal text-left cursor-pointer",["latest"===a(i).listType?"text-white":"text-gray-400"]]),onClick:p},"Latest",2),N("p",{class:J(["text-xl sm:text-2xl font-normal text-left px-5 cursor-pointer",["history"===a(i).listType?"text-white":"text-gray-500"]]),onClick:y},"History",2)]),N("a",{class:"font-normal text-btn",href:`https://testnet.bscscan.com/address/${a(we).connector.address}`,target:"_blank"},"View More",8,ct)]),a(i).list.length>0?(I(),S("ul",pt,[(I(!0),S(L,null,E(a(i).list,(e=>(I(),S("li",{key:e},[N("div",yt,[N("div",mt,[N("div",ht,[N("div",{class:"text-center text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",innerHTML:e.emoji},null,8,wt)]),N("div",bt,[N("a",{class:"text-btn text-base sm:text-xl",href:`https://testnet.bscscan.com/address/${e.address}`,target:"_blank"},j(a(o).$strSub(e.address,a(s).isMobile?6:18)),9,ft),N("div",gt,j(f(e.blockNumber))+" "+j(b(e)),1)])]),N("div",xt,[N("span",vt,"#"+j(e.roundId),1),N("span",Tt,[N("span",{class:J(["w-6 sm:w-8 py-1 inline-block",m(e.hour)])},j(h(e.hour)),3),N("span",{class:J(["w-6 sm:w-8 py-1 inline-block mx-1",m(e.hour)])},j(h(e.minute)),3),N("span",{class:J(["w-6 sm:w-8 py-1 inline-block",m(e.hour)])},j(h(e.second)),3)])])])])))),128))])):(I(),S("div",kt,[a(i).loading?(I(),S("div",Mt,[G(a(Q))])):(I(),S("div",It," No Data "))]))]))}};const Nt={class:"max-w-screen-md mx-auto text-center main"},Gt=N("h1",{class:"text-2.5xl sm:text-3.2 font-normal mt-5"},"Good Morning & Good Night",-1),Ct=N("p",{class:"text-base sm:text-2xl mt-2 font-light"},"Wish you have a nice day and sweet dreams",-1),Pt={class:"flex justify-center mt-10 flex-col sm:flex-row md:container mx-auto"},Bt={class:"h-12 sm:h-16 text-xl tip-btn rounded-xl flex justify-between items-center flex-1 sm:mr-3 w-11/12 mx-auto"},At={key:0,class:"flex items-center h-12"},Lt={class:"text-base text-gray-400 font-light text-left pl-5 pr-8"},Et={class:"text-left"},Ot={class:"text-base text-gray-400 font-light text-left pl-5"},jt={class:"text-left"},$t={class:"h-12 sm:h-16 text-xl tip-btn rounded-xl flex justify-between items-center flex-1 sm:ml-3 mt-3 sm:mt-0 w-11/12 mx-auto"},Dt={key:0,class:"flex items-center h-12"},_t=N("div",{class:"text-base text-gray-400 font-light text-left pl-5 pr-8"},"Earned",-1),Xt={class:"text-left"},Rt=N("div",{class:"text-base text-gray-400 font-light text-left pl-5"},"Earned",-1),Ft={class:"text-left"},Wt={setup(e){const n=A.Component,s=ve();s.setMobile();const i={width:"360px",height:"460px",numColumns:6,emojiSize:"2.6rem",categoryEmojiSize:"1.5rem"};let o=t(),r=t(),l=t();const d=w({dialog:!1,emoji:""});function u(){s.init();const e=setInterval((async()=>{await s.init(),s.countDown>10&&clearInterval(e)}),3e3)}async function c(e){d.emoji=e.emoji.annotation,d.dialog=!1,await async function(){window.$contract.functions.punch(d.emoji).then((e=>{s.isMobile?p({type:"success",message:"Punch Success"}):y.success({title:"Punch Success",offset:100,duration:1500})})).catch((e=>{console.log(e),s.isMobile?p({type:"danger",message:e.data.message||"Punch Error"}):y.error({title:e.data.message||"Punch Error",offset:100,duration:1500})}))}()}function m(){s.address?d.dialog=!0:o.value.connect()}function h(e){const t=parseInt(e);return t<10?"000"+t:t<100&&t>9?"00"+t:t<1e3&&t>99?"0"+t:t}function b(){s.address?s.rewardAmount<=0||window.$contract.withdraw():o.value.connect()}return Y((async()=>{switch(localStorage.getItem("walletType")){case"1":await o.value.ethersJs();break;case"2":await o.value.walletConnect();break;default:await o.value.defaultConnect()}await l.value.updateEcharts(),await r.value.latest()})),(e,t)=>(I(),S("div",null,[G(Re,{ref:(e,t)=>{t.myHead=e,ae(o)?o.value=e:o=e}},null,512),N("main",Nt,[Gt,Ct,G(We,{ref:(e,t)=>{t.echartsRef=e,ae(l)?l.value=e:l=e}},null,512),G(a(n),{show:a(d).dialog,"onUpdate:show":t[0]||(t[0]=e=>a(d).dialog=e),title:"标题",showConfirmButton:!1,"close-on-click-overlay":!0},null,8,["show"]),Z(G(a(te),{style:{"z-index":"2010"},class:"rounded-xl overflow-hidden fixed z-50 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2",width:"380px","is-dark":!1,"picker-style":i,onEmojiClick:c},null,512),[[ee,a(d).dialog]]),N("div",Pt,[N("div",Bt,[a(s).isMobile?(I(),S("div",At,[N("div",Lt,"# "+j(h(a(s).roundId)),1),N("div",Et,[G(a(ne),{class:"text-white text-xl",time:a(s).countDown,onFinish:u},null,8,["time"])])])):(I(),S(L,{key:1},[N("div",Ot,"# "+j(h(a(s).roundId)),1),N("div",jt,[G(a(ne),{class:"text-white text-xl",time:a(s).countDown,onFinish:u},null,8,["time"])])],64)),N("div",{class:"h-full text-base sm:text-xl bg-btn rounded-md w-1/3 sm:w-2/5 leading-0 font-medium flex items-center justify-center cursor-pointer hover:bg-blue-500",onClick:m},"GM/GN ")]),N("div",$t,[a(s).isMobile?(I(),S("div",Dt,[_t,N("div",Xt,j(parseFloat(a(s).rewardAmount).toFixed(5)),1)])):(I(),S(L,{key:1},[Rt,N("div",Ft,j(parseFloat(a(s).rewardAmount).toFixed(5)),1)],64)),N("div",{class:"h-full text-base sm:text-xl bg-white text-black rounded-md w-1/3 sm:w-2/5 font-medium flex items-center justify-center cursor-pointer hover:bg-gray-200",onClick:b},"Withdraw ")])]),G(St,{ref:(e,t)=>{t.myList=e,ae(r)?r.value=e:r=e}},null,512),G(at)]),G(rt)]))}};window.Buffer=se.Buffer;const qt=ie(Wt);qt.use(ge),qt.mount("#app");
