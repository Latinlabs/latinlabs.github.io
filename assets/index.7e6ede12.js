export function __vite_legacy_guard(){import("data:text/javascript,")}import{c as e,r as t,w as n,u as a,a as s,b as i,d as o,e as r,f as l,g as u,h as d,i as c,N as p,E as y,W as m,C as h,_ as b,j as w,k as f,l as g,J as x,m as v,n as T,o as M,p as k,q as G,s as S,t as N,v as I,x as C,y as P,z as B,A,B as L,F as O,D as j,G as _,H as D,I as E,K as X,L as $,M as R,O as W,P as F,Q as q,R as z,S as U,T as V,U as H,V as J,X as K,Y as Q,Z as Y,$ as Z,a0 as ee,a1 as te,a2 as ne,a3 as ae,a4 as se,a5 as ie,a6 as oe,a7 as re,a8 as le,a9 as ue}from"./vendor.fd541659.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const de=e();var ce,pe,ye,me;(pe=ce||(ce={})).XS="XS",pe.SM="SM",pe.MD="MD",pe.LG="LG",pe.XL="XL",pe.XXL="XXL",(me=ye||(ye={}))[me.XS=480]="XS",me[me.SM=576]="SM",me[me.MD=768]="MD",me[me.LG=992]="LG",me[me.XL=1200]="XL",me[me.XXL=1600]="XXL";const he=new Map;let be,we,fe;function ge(e){const r=t(ce.XL),l=t(window.innerWidth);function u(){const e=document.body.clientWidth,t=he.get(ce.XS),n=he.get(ce.SM),a=he.get(ce.MD),s=he.get(ce.LG),i=he.get(ce.XL);r.value=e<t?ce.XS:e<n?ce.SM:e<a?ce.MD:e<s?ce.LG:e<i?ce.XL:ce.XXL,l.value=e}function d(){null==e||e({screen:be,width:we,realWidth:fe,screenEnum:ye,screenMap:he,sizeEnum:ce})}return function({el:e=window,name:o,listener:r,options:l,autoRemove:u=!0,isDebounce:d=!0,wait:c=80}){let p=()=>{};const y=t(!1);if(e){const m=t(e),h=d?s(r,c):i(r,c),b=c?h:r,w=e=>{y.value=!0,e.removeEventListener(o,b,l)},f=e=>e.addEventListener(o,b,l),g=n(m,((e,t,n)=>{e&&(!a(y)&&f(e),n((()=>{u&&w(e)})))}),{immediate:!0});p=()=>{w(m.value),g()}}}({el:window,name:"resize",listener:()=>{u(),d()}}),u(),be=o((()=>a(r))),we=o((()=>he.get(a(r)))),fe=o((()=>a(l))),d(),{screenRef:be,screenEnum:ye,widthRef:we,realWidthRef:fe}}he.set(ce.XS,480),he.set(ce.SM,576),he.set(ce.MD,768),he.set(ce.LG,992),he.set(ce.XL,1200),he.set(ce.XXL,1600);var xe={roundTime:600,web:{chainId:97,rpc_url:"https://data-seed-prebsc-1-s1.binance.org:8545/",topics:["0x88b7d29fc1e47c6850bc8ec1b11aa721e95300e4453154622db7a4c2e7c3518b"]},connector:{address:"0x4305de5d9ab260f58163fBD97F554C9c40040173",abi:[{inputs:[{internalType:"contract IGmgn",name:"_gmgn",type:"address"},{internalType:"address",name:"_devaddr",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"previousAdmin",type:"address"},{indexed:!1,internalType:"address",name:"newAdmin",type:"address"}],name:"AdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"beacon",type:"address"}],name:"BeaconUpgraded",type:"event"},{inputs:[{internalType:"address",name:"_devaddr",type:"address"}],name:"dev",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IGmgn",name:"_gmgn",type:"address"},{internalType:"address",name:"_devaddr",type:"address"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintGmgn",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"oldDevAddr",type:"address"},{indexed:!1,internalType:"address",name:"newDevAddr",type:"address"}],name:"NewDevAddr",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"string",name:"emoji",type:"string"}],name:"punch",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"player",type:"address"},{indexed:!1,internalType:"uint256",name:"roundId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"hour",type:"uint256"},{indexed:!1,internalType:"uint256",name:"minute",type:"uint256"},{indexed:!1,internalType:"uint256",name:"second",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"emoji",type:"string"}],name:"Punched",type:"event"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"implementation",type:"address"}],name:"Upgraded",type:"event"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"}],name:"upgradeTo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"},{internalType:"bytes",name:"data",type:"bytes"}],name:"upgradeToAndCall",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"payable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"target",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Withdraw",type:"event"},{inputs:[],name:"decimals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"devaddr",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"gmgn",outputs:[{internalType:"contract IGmgn",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"initRoundBlock",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_roundId",type:"uint256"}],name:"punchTime",outputs:[{components:[{internalType:"uint256",name:"hour",type:"uint256"},{internalType:"uint256",name:"minute",type:"uint256"},{internalType:"uint256",name:"second",type:"uint256"},{internalType:"enum GmgnMaker.PunchType",name:"punchType",type:"uint8"},{internalType:"bool",name:"isPunched",type:"bool"},{internalType:"string",name:"emoji",type:"string"},{internalType:"uint256",name:"nowBlock",type:"uint256"}],internalType:"struct GmgnMaker.PunchRecord",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"rewardAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"roundBlockNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"roundId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"roundInfos",outputs:[{internalType:"uint256",name:"roundId",type:"uint256"},{internalType:"enum GmgnMaker.PunchType",name:"winnerType",type:"uint8"},{internalType:"uint256",name:"totalPoint",type:"uint256"},{internalType:"uint256",name:"totalReward",type:"uint256"},{internalType:"uint256",name:"accGmgnPerShare",type:"uint256"},{internalType:"uint256",name:"devShare",type:"uint256"},{internalType:"uint256",name:"gmPoint",type:"uint256"},{internalType:"uint256",name:"gnPoint",type:"uint256"},{internalType:"bool",name:"enabled",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userInfos",outputs:[{internalType:"uint256",name:"settledCount",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"userPunchRecord",outputs:[{components:[{internalType:"uint256[]",name:"historyRoundIds",type:"uint256[]"},{internalType:"uint256",name:"settledCount",type:"uint256"}],internalType:"struct GmgnMaker.UserInfo",name:"userInfo",type:"tuple"}],stateMutability:"view",type:"function"}],tokenAddress:"0x4804a2a1Ed24e22A621771834cD2784B931aBc74",tokenAbi:[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"delegator",type:"address"},{indexed:!0,internalType:"address",name:"fromDelegate",type:"address"},{indexed:!0,internalType:"address",name:"toDelegate",type:"address"}],name:"DelegateChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"delegate",type:"address"},{indexed:!1,internalType:"uint256",name:"previousBalance",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newBalance",type:"uint256"}],name:"DelegateVotesChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"DOMAIN_SEPARATOR",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint32",name:"pos",type:"uint32"}],name:"checkpoints",outputs:[{components:[{internalType:"uint32",name:"fromBlock",type:"uint32"},{internalType:"uint224",name:"votes",type:"uint224"}],internalType:"struct ERC20Votes.Checkpoint",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"delegatee",type:"address"}],name:"delegate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"delegatee",type:"address"},{internalType:"uint256",name:"nonce",type:"uint256"},{internalType:"uint256",name:"expiry",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"delegateBySig",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"delegates",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"blockNumber",type:"uint256"}],name:"getPastTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"blockNumber",type:"uint256"}],name:"getPastVotes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getVotes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"numCheckpoints",outputs:[{internalType:"uint32",name:"",type:"uint32"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"permit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}]},walletConnect:{api_key:"4950a481285046e28d71fa9676d46554"}};function ve(e){return!e||e.length<15?"":e.substr(0,6)+"..."+e.substr(e.length-4)}function Te(e,t,n,a=3){return 1e3*(xe.roundTime-(t-e-(n-1)*(xe.roundTime/3))*a)}r.extend(l),r.extend(u),r.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"a sec",ss:"%s secs",m:"a min",mm:"%d mins",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}});var Me={install:async(e,t)=>{e.config.globalProperties.$strSub=ve,e.config.globalProperties.$round=Te}};const ke=d("userStore",{state:()=>({userInfo:{},address:"",chainId:0,provider:{},contract:{},isMobile:!1,initRoundBlock:0,blockNumber:0,rewardAmount:"0",roundId:0,GMPoint:0,GNPoint:0,sumPoint:"0",OtherPoint:0,countDown:0}),getters:{getEchartsData:e=>[e.GMPoint,e.GNPoint,e.OtherPoint]},actions:{async setAddress(e){this.address=e||""},setChainId(e){this.chainId=e||0},delAddress(){this.address=""},delChainId(){this.chainId=0},async init(){const e=await window.$contract,t=await window.$provider,n=await window.$token;if(this.address){const t=await e.rewardAmount(this.address);this.rewardAmount=c(t.toString(),18)}const a=await e.initRoundBlock();this.initRoundBlock=a.toNumber(),this.blockNumber=await t.getBlockNumber();const s=await e.roundId();this.roundId=s.toNumber();const i=await n.totalSupply();this.sumPoint=c(i.toString(),18);const o=await e.roundInfos(this.roundId);this.GMPoint=o.gmPoint.toNumber(),this.GNPoint=o.gnPoint.toNumber(),this.OtherPoint=o.totalPoint.sub(o.gmPoint).sub(o.gnPoint).toNumber();const r=await t.getBlockNumber();this.countDown=Te(this.initRoundBlock,r,this.roundId)},async setProvider(e){await(()=>this.provider=e)},async initContract(e){},logout(){this.address="",this.chainId=0,this.provider={},this.contract={},this.rewardAmount="0",this.isMobile?p({type:"success",message:"Exit Success"}):y.success({title:"Exit Success",offset:100,duration:1500})},setMobile(){ge((({screenMap:e,sizeEnum:t,width:n})=>{const a=e.get(t.LG);a&&(this.isMobile=n.value-1<a)}))}}});function Ge(){return ke(de)}async function Se(e,t,n){return new h(e,t,n)}const Ne=d({id:"walletStore",state:()=>({connector:{},connected:!1}),getters:{},actions:{setConnector(e){this.connector=e},async subscribeToEvents(){this.connector&&(this.connector.on("accountsChanged",(e=>{console.log("accountsChanged")})),this.connector.on("chainChanged",(e=>{console.log("chainChanged")})),this.connector.on("connect",(()=>{console.log('connector.on("connect")');const e=Ge(),t=new m(this.connector);t.ready.then((async n=>{if(n.chainId!==xe.web.chainId)return void(e.isMobile?p({type:"danger",message:"Please connect to the appropriate BSC network"}):y.error({title:"Please connect to the appropriate BSC network",offset:100,duration:1500}));window.$provider=t,await e.setAddress(this.connector.accounts[0]),await e.setChainId(n.chainId);const a=t.getSigner();window.$contract=await Se(xe.connector.address,xe.connector.abi,a),window.$token=await Se(xe.connector.tokenAddress,xe.connector.tokenAbi,a),await e.init(),localStorage.setItem("walletType","2")}))})),this.connector.on("disconnect",((e,t)=>{console.log('connector.on("disconnect")'),this.connector={},this.connected=!1;Ge().logout(),localStorage.setItem("walletType","0")})))}}});const Ie=e=>(E("data-v-94927c00"),e=e(),X(),e),Ce={class:"max-w-screen-xl mx-auto h-20 flex items-center justify-between px-2 md:px-10"},Pe=Ie((()=>C("div",{class:"logo"},[C("img",{width:"100",src:"/test/assets/1637307487230.84f60acb.jpg",alt:"GMGN"})],-1))),Be={class:"flex items-center"},Ae=Ie((()=>C("a",{href:"#",class:"sm:inline-block text-base text-gray-300 hover:text-white pr-4 sm:pr-10"}," Twitter ",-1))),Le=Ie((()=>C("a",{href:"#",class:"hidden sm:inline-block text-base text-gray-300 hover:text-white pr-4 sm:pr-10"}," Discord ",-1))),Oe=Ie((()=>C("a",{href:"#",class:"sm:inline-block text-base text-gray-300 hover:text-white pr-4 sm:pr-10"}," Contract ",-1))),je={key:0},_e=_("Exit"),De={class:"text-center"},Ee=["src"],Xe=Ie((()=>C("p",null,"MetaMask",-1))),$e=Ie((()=>C("p",{class:"text-sm text-gray-400 font-thin"},"Connect to your MetaMask Wallet",-1))),Re=["src"],We=Ie((()=>C("p",null,"WalletConnect",-1))),Fe=Ie((()=>C("p",{class:"text-sm text-gray-400 font-thin"},"Scan with WalletConnect to connect",-1)));var qe=b({setup(e,{expose:t}){const n=window.localStorage,s=$.Component,i=w({dialog:!1,exit:!1}),r=Ge(),{proxy:l}=R(),u=[{name:"Exit",color:"#ee0a24",active:"exit"}],d=o((()=>Ge().address));function c(e){const t=Ge();if("exit"===e.active)"2"===n.getItem("walletType")&&window.$provider.provider.disconnect(),n.setItem("walletType","0"),t.logout()}function b(){window.web3&&window.ethereum?i.dialog=!0:X()}async function E(){await window.ethereum.request({method:"eth_requestAccounts"}).then((async()=>{const e=await new m(window.web3.currentProvider);await e.ready.then((async t=>{if(t.chainId!==xe.web.chainId)return void(r.isMobile?p({type:"danger",message:"Please connect to the appropriate BSC network"}):y.error({title:"Please connect to the appropriate BSC network",offset:100,duration:1500}));i.dialog=!1,window.$provider=e;const a=e.getSigner();console.log(a.getAddress()),await r.setAddress(await a.getAddress()),window.$contract=await W(xe.connector.address,xe.connector.abi,a),window.$token=await W(xe.connector.tokenAddress,xe.connector.tokenAbi,a),r.setChainId(t.chainId),n.setItem("walletType","1"),await r.init()}))}))}async function X(){const e=await new f({chainId:xe.web.chainId,rpc:{[xe.web.chainId]:xe.web.rpc_url},qrcodeModal:g}),t=Ne(de);t.setConnector(e),await t.subscribeToEvents(),e.connected||await e.enable(),i.dialog=!1,n.setItem("walletType","2")}async function W(e,t,n){return new h(e,t,n)}return t({connect:b,ethersJs:E,walletConnect:X,defaultConnect:async function(){let e=await new x(xe.web.rpc_url);await e.ready.then((async t=>{window.$provider=e,window.$contract=await new h(xe.connector.address,xe.connector.abi,e),await r.init()}))}}),(e,t)=>{const n=v,o=T,p=M,y=k,m=G,h=S("action-sheet");return N(),I("div",null,[C("header",Ce,[Pe,C("div",Be,[Ae,Le,Oe,a(d)?(N(),I("div",je,[a(r).isMobile?(N(),I("button",{key:0,class:"bg-blue-700 py-3 px-2 bg-btn rounded cursor-pointer",onClick:t[0]||(t[0]=e=>a(i).exit=!0)},P(a(l).$strSub(a(d))),1)):(N(),B(m,{key:1,trigger:"click"},{dropdown:A((()=>[L(y,null,{default:A((()=>[(N(),I(O,null,j(u,(e=>L(p,{onClick:t=>c(e)},{default:A((()=>[_e])),_:2},1032,["onClick"]))),64))])),_:1})])),default:A((()=>[L(o,{size:"mini",type:"primary"},{default:A((()=>[_(P(a(l).$strSub(a(d)))+" ",1),L(n,{class:"el-icon--right"},{default:A((()=>[L(a(D))])),_:1})])),_:1})])),_:1}))])):(N(),I("button",{key:1,class:"bg-blue-700 font-light p-3 px-3 bg-btn rounded-lg cursor-pointer",onClick:b}," Connect Wallet "))])]),L(a(s),{class:"text-black",show:a(i).dialog,"onUpdate:show":t[1]||(t[1]=e=>a(i).dialog=e),width:"400",closeOnClickOverlay:!0,showConfirmButton:!1},{default:A((()=>[C("ul",De,[C("li",{class:"py-10 cursor-pointer border-b border-bg border-opacity-20",onClick:E},[C("img",{class:"w-14 mx-auto mb-4",src:a("/test/assets/metamask.86c31dd9.svg"),alt:""},null,8,Ee),Xe,$e]),C("li",{class:"py-10 cursor-pointer",onClick:X},[C("img",{class:"w-14 mx-auto mb-4",src:a("/test/assets/WalletConnect.a23d2c74.svg"),alt:""},null,8,Re),We,Fe])])])),_:1},8,["show"]),L(h,{show:a(i).exit,"onUpdate:show":t[2]||(t[2]=e=>a(i).exit=e),actions:u,"cancel-text":"Cancel","close-on-click-action":"",onSelect:c},null,8,["show"])])}}},[["__scopeId","data-v-94927c00"]]);W([F,q,z,U,V,H]);let ze=document.documentElement.clientWidth<420;var Ue=b({setup(e,{expose:n}){const s=Ge(),i=t({tooltip:{trigger:"item"},title:{text:"Total GMGN",left:"center",top:"55%",textStyle:{color:"#BBB",fontSize:16,align:"center",fontWeight:"300",fontFamily:"'Jost', sans-serif"}},graphic:{type:"text",left:"center",top:"45%",style:{text:"0.0",textAlign:"center",fill:"#fff",fontSize:32,fontWeight:700}},legend:{bottom:"0%",left:"center",textStyle:{color:"#fff"},formatter:function(e){let t=e;return-1!==e.indexOf("(")&&(t=e.slice(0,e.indexOf("("))),ze?t:e}},series:[{name:"",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:5,borderColor:"#191934",borderWidth:3},data:[{value:s.GMPoint,name:"GM(6:00:00-09:59:59)",itemStyle:{color:"#FDDA5E"}},{value:s.GNPoint,name:"GN(22:00:00-01:59:59)",itemStyle:{color:"#28283B"}},{value:s.OtherPoint,name:"Other",itemStyle:{color:"#F0F0F0"}}],label:{show:!1,position:"center"},labelLine:{show:!1},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0)"}}}]}),o=t();let r;return n({updateEcharts:function(){clearTimeout(r),r=setInterval((async()=>{setTimeout((()=>{o.value.setOption({graphic:{style:{text:s.sumPoint}},series:[{data:[{value:s.GMPoint,name:"GM(6:00:00-09:59:59)",itemStyle:{color:"#FDDA5E"}},{value:s.GNPoint,name:"GN(22:00:00-01:59:59)",itemStyle:{color:"#28283B"}},{value:s.OtherPoint,name:"Other",itemStyle:{color:"#F0F0F0"}}]}]})}),300)}),3e3)}}),(e,t)=>(N(),B(a(J),{ref:(e,t)=>{t.echarts=e,o.value=e},class:"chart",option:i.value,autoresize:!0},null,8,["option"]))}},[["__scopeId","data-v-29e6aaa8"]]);const Ve={class:"mt-10 mx-auto px-5 sm:px-0"},He=C("h1",{class:"text-2xl my-5 font-light"},"FAQ",-1),Je={class:"p-5 text-left bg-white bg-opacity-20 text-xl sm:text-2xl font-thin leading-relaxed"},Ke=K('<span class="text-2xl font-medium">What is GMGN?</span><br><br> GMGN is a decentralised cryptocurrency based on the GM/GN meme.<br><br><span class="text-2xl font-medium">What do you mean by &quot;decentralised&quot;?</span><br><br> GMGN is not run by any individual company or person. Technically speaking, it operates according to rules agreed by consensus, rather than decided upon by some founding or owning entity.<br><br><span class="text-2xl font-medium">What do you mean by &quot;cryptocurrency&quot;?</span><br><br> A cryptocurrency is a digital currency that is secured by cryptography, in contrast to conventional (fiat) currencies where they are secured by a government or governments.<br><br><span class="text-2xl font-medium">Okay, but What is &quot;GM/GN” meme?</span><br><br> Although some people think it&#39;s silly, they take it too seriously, we just need more fun and cool language symbols to express our expectations for the future.<br><br><span class="text-2xl font-medium">So How to get GMGN coins?</span><br><br> First you need to have a MetaMask wallet with a little BNB in it to pay for gas, then click here to <br>',29),Qe=K(" <br><br> Every 12 hours you can participate and get a time, randomly combined by the program in hours (00-23), minutes (00-59) and seconds (00-59), e.g. 07:35:46. The protocol defines the GM time zone as 6:00:00 -- 09:59:59 and the GN as 22:00:00 -- 01:59:59. <br><br> The number of tokens issued every 12 hours is equal to the number of participants, with a maximum cap of 86400, Every 6000 hours the reward cap decreases by 3600 until the cap is 3600, the decreasing model is: 86400→82800→79200→... →7200→3600→3600... <br><br> When the countdown ends, if no one is in the GM and GN sections, all participants share the token rewards equally <br><br> If the number of GMs and GNs is the same, still all participants share the token reward equally. <br><br> Otherwise, the group with the higher number of GMs or GNs shares the token reward equally. <br><br> Earned tokens can be withdrawn to your wallet at any time, and an 8% tax will be charged to the treasury for each withdrawal. <br><br> If you don&#39;t see GMGN tokens in your wallet after withdrawing them, please click on Copy Token Contract and import tokens in MetaMask. <br><br> In the future, the treasury will be put under the control of the community, and all holders of the tokens will work together to set the appropriate monetary policy, such as using the tokens from the treasury for loans, interest payments on deposits, and investments around the GMGN ecosystem, etc. <br><br> Note: GMGN.org is new, unaudited, and not guaranteed to work perfectly. Before participate, do your own research: ask questions, check out the code, understand the risks and good luck! <br><br>",30),Ye={setup(e){var t;return(e,n)=>(N(),I("div",Ve,[He,C("div",Je,[Ke,C("span",{class:"font-normal cursor-pointer underline",onClick:n[0]||(n[0]=e=>async function(e){if("web3"===e&&(t="undefined"!=typeof ethereum?new m(ethereum):"undefined"!=typeof web3?new m(web3.givenProvider):new m(ethereum)),void 0!==t){let e,n=0;if(n=await t.getNetwork(),console.log(n),"56"==n.chainId)return void alert("BSC Network has already been added to Metamask.");e=[{chainId:"0x38",chainName:"Binance Smart Chain Mainnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed1.binance.org/"],blockExplorerUrls:["https://bscscan.com/"]}],window.ethereum.request({method:"wallet_addEthereumChain",params:e}).then((()=>console.log("Success"))).catch((e=>console.log("Error",e.message)))}else alert("Unable to locate a compatible web3 browser!")}("web3"))},"Add BSC Network"),Qe])]))}},Ze={},et={class:"mt-10 sm:w-11/12 md:w-3/4 mx-auto px-5 sm:px-0"},tt=[C("div",{class:"text-left border-solid border-t border-white border-opacity-20"},[C("div",{class:"flex justify-between items-center py-5 font-thin"},[C("div",null,"© 2021 GMGN.ORG"),C("div",null,"Developed with love by Latin Labs")])],-1)];var nt=b(Ze,[["render",function(e,t){return N(),I("footer",et,tt)}]]);const at={class:"mt-10 mx-auto px-5 sm:px-0"},st={class:"flex justify-between items-end border-b pb-3 border-opacity-30"},it={class:"flex"},ot=["href"],rt={key:0,class:"mt-5"},lt={class:"h-14 my-5 pb-5 text-xl font-light flex justify-between items-center border-solid border-b border-white border-opacity-20"},ut={class:"w-3/5 text-left flex my-emoji"},dt={key:0,class:"bg-white w-12 h-12 bg-opacity-20 mr-3 rounded flex items-center justify-center"},ct={class:"truncate w-2/3"},pt=["href"],yt={class:"text-xs text-gray-400"},mt={class:"flex-1 text-right"},ht={class:"text-xs mr-3 text-gray-400"},bt={class:"px-2 py-1 bg-white bg-opacity-20 text-xs sm:text-base"},wt={class:"px-2 py-1 bg-white bg-opacity-20 text-xs sm:text-base mx-1"},ft={class:"px-2 py-1 bg-white bg-opacity-20 text-xs sm:text-base"},gt={key:1,class:"py-10"},xt={key:0},vt={key:1,class:"text-gray-400 font-light"},Tt={setup(e,{expose:t}){const n=Ge(),s=w({list:[],listType:"latest",loading:!0});let i,o,l=new Q(Y),u={};async function d(){s.listType="latest",s.loading=!0,s.list=[],await b(),clearTimeout(u),u=setInterval((()=>{b()}),3e3)}async function p(){n.address&&(s.listType="history",s.loading=!0,clearTimeout(u),s.list=[],await async function(){if(s.listType="history",window.$contract){o=await new te(xe.connector.abi);const e=[];await window.$contract.functions.userPunchRecord().then((async t=>{const a=t.userInfo.historyRoundIds;if(a.length>0){let t=a.length;for(let s=t-1;s>t-10;s--)if(a[s]){let t={},i={};await window.$contract.functions.roundInfos(a[s].toNumber()).then((e=>{i={winnerType:e.winnerType,accGmgnPerShare:c(e.accGmgnPerShare.toString(),18)}})),await window.$contract.functions.punchTime(a[s].toNumber()).then((e=>{t={address:n.address,blockNumber:e[0].nowBlock.toNumber(),hour:e[0].hour.toNumber(),minute:e[0].minute.toNumber(),second:e[0].second.toNumber(),roundId:a[s].toNumber(),emoji:e[0].emoji?e[0].emoji.toString():null,punchType:e[0].punchType}})),e.push(Object.assign(i,t))}}s.loading=!1})),s.list=e}}())}function y(e){return e<10?`0${e}`:e}function m(e){if("history"===s.listType)return e.punchType===e.winnerType?e.accGmgnPerShare:0}function h(e){return function(e,t){return r().subtract(3*(e-t),"second").fromNow()}(n.blockNumber,e)}async function b(){if(window.$provider){i=window.$provider;const e=await i.getBlockNumber();o=await new te(xe.connector.abi),i.getLogs({fromBlock:e-4999,toBlock:e,topics:xe.web.topics}).then((async e=>{if(s.list=[],e.length>0){let t=e.length;for(let n=t-1;n>t-10;n--)if(e[n]){const t=await o.parseLog(e[n]),a={address:t.args[0],blockNumber:e[n].blockNumber,hour:t.args.hour.toNumber(),minute:t.args.minute.toNumber(),second:t.args.second.toNumber(),roundId:t.args.roundId.toNumber(),emoji:t.args.emoji?t.args.emoji.toString():null};s.list.push(a)}}s.loading=!1}))}}return t({latest:d}),(e,t)=>(N(),I("div",at,[C("div",st,[C("div",it,[C("p",{class:Z(["text-xl sm:text-2xl font-light text-left cursor-pointer",["latest"===a(s).listType?"text-white":"text-gray-400"]]),onClick:d},"Latest",2),C("p",{class:Z(["text-xl sm:text-2xl font-light text-left px-5 cursor-pointer",["history"===a(s).listType?"text-white":"text-gray-500"]]),onClick:p},"History",2)]),C("a",{class:"font-light text-blue-500",href:`https://testnet.bscscan.com/address/${a(xe).connector.address}`,target:"_blank"},"View more",8,ot)]),a(s).list.length>0?(N(),I("ul",rt,[(N(!0),I(O,null,j(a(s).list,(e=>(N(),I("li",{key:e},[C("div",lt,[C("div",ut,[e.emoji&&"has1"!==e.emoji?(N(),I("div",dt,[L(a(ne),{class:"leading-none",data:a(l),skin:1,set:"apple",emoji:e.emoji},null,8,["data","emoji"])])):ae("",!0),C("div",ct,[C("a",{class:"text-blue-600",href:`https://testnet.bscscan.com/address/${e.address}`,target:"_blank"},P(e.address),9,pt),C("div",yt,P(h(e.blockNumber))+" "+P(m(e)),1)])]),C("div",mt,[C("span",ht,"#"+P(e.roundId),1),C("span",bt,P(y(e.hour)),1),C("span",wt,P(y(e.minute)),1),C("span",ft,P(y(e.second)),1)])])])))),128))])):(N(),I("div",gt,[a(s).loading?(N(),I("div",xt,[L(a(ee))])):(N(),I("div",vt," No Data "))]))]))}};const Mt={class:"max-w-screen-md mx-auto text-center"},kt=C("h1",{class:"text-2xl sm:text-5xl font-medium mt-5"},"Good Morning & Good Night",-1),Gt=C("p",{class:"text-xl sm:text-2xl sm:text-base mt-2 font-light"},"Wish you have a nice day and sweet dreams",-1),St={class:"flex justify-center mt-10 flex-col sm:flex-row md:container mx-auto"},Nt={class:"h-14 sm:h-16 text-xl tip-btn rounded-xl flex justify-between items-center flex-1 sm:mr-3 w-11/12 mx-auto"},It={class:"w-1/5 text-gray-400 font-light"},Ct={class:"text-left"},Pt={class:"h-14 sm:h-16 text-xl tip-btn rounded-xl flex justify-between items-center flex-1 sm:ml-3 mt-5 sm:mt-0 w-11/12 mx-auto"},Bt=C("div",{class:"w-1/4 text-base text-gray-400 font-light"},"Awarded",-1),At={class:"w-1/4 font-medium text-left"},Lt={setup(e){const n=$.Component;let s=new Q(Y);const i=Ge();i.setMobile();let o=t(),r=t(),l=t();const u=w({dialog:!1,emoji:""});function d(e){u.emoji=e.id,u.dialog=!1,async function(){window.$contract.functions.punch(u.emoji).then((e=>{i.isMobile?p({type:"success",message:"Punch Success"}):y.success({title:"Punch Success",offset:100,duration:1500}),r.value.latest()})).catch((e=>{console.log(e)}))}()}function c(){i.address?u.dialog=!0:o.value.connect()}function m(){i.address?i.rewardAmount<=0||window.$contract.withdraw().then((e=>{})):o.value.connect()}return se((async()=>{switch(localStorage.getItem("walletType")){case"1":await o.value.ethersJs();break;case"2":await o.value.walletConnect();break;default:await o.value.defaultConnect()}r.value.latest(),l.value.updateEcharts()})),(e,t)=>(N(),I("div",null,[L(qe,{ref:(e,t)=>{t.myHead=e,oe(o)?o.value=e:o=e}},null,512),C("main",Mt,[kt,Gt,L(Ue,{ref:(e,t)=>{t.echartsRef=e,oe(l)?l.value=e:l=e}},null,512),L(a(n),{show:a(u).dialog,"onUpdate:show":t[0]||(t[0]=e=>a(u).dialog=e),class:"w-84 sm:w-86",closeOnClickOverlay:!0,showConfirmButton:!1},{default:A((()=>[a(u).dialog?(N(),B(a(re),{key:0,emojiSize:42,perLine:6,showPreview:!1,showSearch:!1,data:a(s),onSelect:d},null,8,["data"])):ae("",!0)])),_:1},8,["show"]),C("div",St,[C("div",Nt,[C("div",It,"#"+P(a(i).roundId),1),C("div",Ct,[L(a(ie),{class:"text-white text-xl font-medium",time:a(i).countDown,onFinish:e.onFinish},null,8,["time","onFinish"])]),C("div",{class:"h-full bg-btn rounded-md w-2/5 leading-0 font-medium flex items-center justify-center cursor-pointer",onClick:c},"GM/GN ")]),C("div",Pt,[Bt,C("div",At,P(parseFloat(a(i).rewardAmount).toFixed(5)),1),C("div",{class:"h-full bg-white text-black rounded-md w-2/5 leading-0 font-medium flex items-center justify-center cursor-pointer",onClick:m},"Withdraw ")])]),L(Tt,{ref:(e,t)=>{t.myList=e,oe(r)?r.value=e:r=e}},null,512),L(Ye)]),L(nt)]))}};window.Buffer=le.Buffer,ue(Lt).use(Me).mount("#app");
