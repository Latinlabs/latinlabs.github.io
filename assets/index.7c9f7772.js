export function __vite_legacy_guard(){import("data:text/javascript,")}import{c as e,r as t,w as n,u as a,a as s,b as i,d as o,e as r,f as l,g as d,h as u,i as c,N as p,E as y,W as m,C as h,_ as w,j as b,k as f,l as g,J as x,m as v,n as T,o as k,p as M,q as S,s as I,t as G,v as N,x as C,y as P,z as A,A as B,F as L,B as O,D as j,G as $,H as D,I as _,K as E,L as X,M as R,O as F,P as W,Q as q,R as z,S as V,U,T as H,V as J,X as K,Y as Q,Z as Y,$ as Z,a0 as ee,a1 as te,a2 as ne,a3 as ae,a4 as se,a5 as ie,a6 as oe,a7 as re}from"./vendor.11218433.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const le=e();var de,ue,ce,pe;(ue=de||(de={})).XS="XS",ue.SM="SM",ue.MD="MD",ue.LG="LG",ue.XL="XL",ue.XXL="XXL",(pe=ce||(ce={}))[pe.XS=480]="XS",pe[pe.SM=576]="SM",pe[pe.MD=768]="MD",pe[pe.LG=992]="LG",pe[pe.XL=1200]="XL",pe[pe.XXL=1600]="XXL";const ye=new Map;let me,he,we;function be(e){const r=t(de.XL),l=t(window.innerWidth);function d(){const e=document.body.clientWidth,t=ye.get(de.XS),n=ye.get(de.SM),a=ye.get(de.MD),s=ye.get(de.LG),i=ye.get(de.XL);r.value=e<t?de.XS:e<n?de.SM:e<a?de.MD:e<s?de.LG:e<i?de.XL:de.XXL,l.value=e}function u(){null==e||e({screen:me,width:he,realWidth:we,screenEnum:ce,screenMap:ye,sizeEnum:de})}return function({el:e=window,name:o,listener:r,options:l,autoRemove:d=!0,isDebounce:u=!0,wait:c=80}){let p=()=>{};const y=t(!1);if(e){const m=t(e),h=u?s(r,c):i(r,c),w=c?h:r,b=e=>{y.value=!0,e.removeEventListener(o,w,l)},f=e=>e.addEventListener(o,w,l),g=n(m,((e,t,n)=>{e&&(!a(y)&&f(e),n((()=>{d&&b(e)})))}),{immediate:!0});p=()=>{b(m.value),g()}}}({el:window,name:"resize",listener:()=>{d(),u()}}),d(),me=o((()=>a(r))),he=o((()=>ye.get(a(r)))),we=o((()=>a(l))),u(),{screenRef:me,screenEnum:ce,widthRef:he,realWidthRef:we}}ye.set(de.XS,480),ye.set(de.SM,576),ye.set(de.MD,768),ye.set(de.LG,992),ye.set(de.XL,1200),ye.set(de.XXL,1600);var fe={roundTime:600,web:{chainId:97,rpc_url:"https://data-seed-prebsc-1-s1.binance.org:8545/",topics:["0x88b7d29fc1e47c6850bc8ec1b11aa721e95300e4453154622db7a4c2e7c3518b"]},connector:{address:"0x5bcD5e5381fd770f27c59307781F3109D3D170dF",abi:[{inputs:[{internalType:"contract IGmgn",name:"_gmgn",type:"address"},{internalType:"address",name:"_devaddr",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"previousAdmin",type:"address"},{indexed:!1,internalType:"address",name:"newAdmin",type:"address"}],name:"AdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"beacon",type:"address"}],name:"BeaconUpgraded",type:"event"},{inputs:[{internalType:"address",name:"_devaddr",type:"address"}],name:"dev",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IGmgn",name:"_gmgn",type:"address"},{internalType:"address",name:"_devaddr",type:"address"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintGmgn",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"oldDevAddr",type:"address"},{indexed:!1,internalType:"address",name:"newDevAddr",type:"address"}],name:"NewDevAddr",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"string",name:"emoji",type:"string"}],name:"punch",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"player",type:"address"},{indexed:!1,internalType:"uint256",name:"roundId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"hour",type:"uint256"},{indexed:!1,internalType:"uint256",name:"minute",type:"uint256"},{indexed:!1,internalType:"uint256",name:"second",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"emoji",type:"string"}],name:"Punched",type:"event"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"implementation",type:"address"}],name:"Upgraded",type:"event"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"}],name:"upgradeTo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"},{internalType:"bytes",name:"data",type:"bytes"}],name:"upgradeToAndCall",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"payable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"target",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Withdraw",type:"event"},{inputs:[],name:"decimals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"devaddr",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"gmgn",outputs:[{internalType:"contract IGmgn",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"initRoundBlock",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_roundId",type:"uint256"}],name:"punchTime",outputs:[{components:[{internalType:"uint256",name:"hour",type:"uint256"},{internalType:"uint256",name:"minute",type:"uint256"},{internalType:"uint256",name:"second",type:"uint256"},{internalType:"enum GmgnMaker.PunchType",name:"punchType",type:"uint8"},{internalType:"bool",name:"isPunched",type:"bool"},{internalType:"string",name:"emoji",type:"string"},{internalType:"uint256",name:"nowBlock",type:"uint256"}],internalType:"struct GmgnMaker.PunchRecord",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"rewardAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"roundBlockNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"roundId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"roundInfos",outputs:[{internalType:"uint256",name:"roundId",type:"uint256"},{internalType:"enum GmgnMaker.PunchType",name:"winnerType",type:"uint8"},{internalType:"uint256",name:"totalPoint",type:"uint256"},{internalType:"uint256",name:"totalReward",type:"uint256"},{internalType:"uint256",name:"accGmgnPerShare",type:"uint256"},{internalType:"uint256",name:"devShare",type:"uint256"},{internalType:"uint256",name:"gmPoint",type:"uint256"},{internalType:"uint256",name:"gnPoint",type:"uint256"},{internalType:"bool",name:"enabled",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userInfos",outputs:[{internalType:"uint256",name:"settledCount",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"userPunchRecord",outputs:[{components:[{internalType:"uint256[]",name:"historyRoundIds",type:"uint256[]"},{internalType:"uint256",name:"settledCount",type:"uint256"}],internalType:"struct GmgnMaker.UserInfo",name:"userInfo",type:"tuple"}],stateMutability:"view",type:"function"}],tokenAddress:"0x0BA0f150bd5A93BbFd74eBF0D7303855295031C6",tokenAbi:[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"delegator",type:"address"},{indexed:!0,internalType:"address",name:"fromDelegate",type:"address"},{indexed:!0,internalType:"address",name:"toDelegate",type:"address"}],name:"DelegateChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"delegate",type:"address"},{indexed:!1,internalType:"uint256",name:"previousBalance",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newBalance",type:"uint256"}],name:"DelegateVotesChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"DOMAIN_SEPARATOR",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint32",name:"pos",type:"uint32"}],name:"checkpoints",outputs:[{components:[{internalType:"uint32",name:"fromBlock",type:"uint32"},{internalType:"uint224",name:"votes",type:"uint224"}],internalType:"struct ERC20Votes.Checkpoint",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"delegatee",type:"address"}],name:"delegate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"delegatee",type:"address"},{internalType:"uint256",name:"nonce",type:"uint256"},{internalType:"uint256",name:"expiry",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"delegateBySig",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"delegates",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"blockNumber",type:"uint256"}],name:"getPastTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"blockNumber",type:"uint256"}],name:"getPastVotes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getVotes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"numCheckpoints",outputs:[{internalType:"uint32",name:"",type:"uint32"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"permit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}]},walletConnect:{api_key:"4950a481285046e28d71fa9676d46554"}};function ge(e,t=6){return!e||e.length<15?"":e.substr(0,t)+"..."+e.substr(e.length-4)}function xe(e,t,n,a=3){return 1e3*(fe.roundTime-(t-e-(n-1)*(fe.roundTime/3))*a)}r.extend(l),r.extend(d),r.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"1 minutes ago",ss:"1 minutes ago",m:"1 minutes ago",mm:"%d mins",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}});var ve={install:async(e,t)=>{e.config.globalProperties.$strSub=ge,e.config.globalProperties.$round=xe}};const Te=u("userStore",{state:()=>({userInfo:{},address:"",chainId:0,provider:{},contract:{},isMobile:!1,initRoundBlock:0,blockNumber:0,rewardAmount:"0",roundId:0,GMPoint:0,GNPoint:0,sumPoint:"0",OtherPoint:0,countDown:0}),getters:{getEchartsData:e=>[e.GMPoint,e.GNPoint,e.OtherPoint]},actions:{async setAddress(e){this.address=e||""},setChainId(e){this.chainId=e||0},delAddress(){this.address=""},delChainId(){this.chainId=0},async init(){const e=await window.$contract,t=await window.$provider,n=await window.$token;if(this.address){const t=await e.rewardAmount(this.address);this.rewardAmount=c(t.toString(),18)}const a=await e.initRoundBlock();this.initRoundBlock=a.toNumber(),this.blockNumber=await t.getBlockNumber();const s=await e.roundId();this.roundId=s.toNumber();const i=await n.totalSupply();this.sumPoint=c(i.toString(),18);const o=await e.roundInfos(this.roundId);this.GMPoint=o.gmPoint.toNumber(),this.GNPoint=o.gnPoint.toNumber(),this.OtherPoint=o.totalPoint.sub(o.gmPoint).sub(o.gnPoint).toNumber();const r=await t.getBlockNumber();this.countDown=xe(this.initRoundBlock,r,this.roundId)},logout(){this.address="",this.chainId=0,this.provider={},this.contract={},this.rewardAmount="0",localStorage.setItem("walletType","0"),this.isMobile?p({type:"success",message:"Exit Success"}):y.success({title:"Exit Success",offset:100,duration:1500})},setMobile(){be((({screenMap:e,sizeEnum:t,width:n})=>{const a=e.get(t.LG);a&&(this.isMobile=n.value-1<a)}))}}});function ke(){return Te(le)}async function Me(e,t,n){return new h(e,t,n)}const Se=u({id:"walletStore",state:()=>({connector:{},connected:!1}),getters:{},actions:{setConnector(e){this.connector=e},async subscribeToEvents(){this.connector&&(this.connector.on("accountsChanged",(e=>{console.log("accountsChanged");const t=ke(),n=new m(this.connector);n.ready.then((async e=>{if(e.chainId!==fe.web.chainId)return void(t.isMobile?p({type:"danger",message:"Please connect to the appropriate BSC network"}):y.error({title:"Please connect to the appropriate BSC network",offset:100,duration:1500}));window.$provider=n,await t.setAddress(this.connector.accounts[0]),await t.setChainId(e.chainId);const a=n.getSigner();window.$contract=await Me(fe.connector.address,fe.connector.abi,a),window.$token=await Me(fe.connector.tokenAddress,fe.connector.tokenAbi,a),await t.init(),localStorage.setItem("walletType","2")}))})),this.connector.on("chainChanged",(e=>{console.log("chainChanged")})),this.connector.on("connect",(()=>{console.log('connector.on("connect")');const e=ke(),t=new m(this.connector);t.ready.then((async n=>{if(n.chainId!==fe.web.chainId)return void(e.isMobile?p({type:"danger",message:"Please connect to the appropriate BSC network"}):y.error({title:"Please connect to the appropriate BSC network",offset:100,duration:1500}));window.$provider=t,await e.setAddress(this.connector.accounts[0]),await e.setChainId(n.chainId);const a=t.getSigner();window.$contract=await Me(fe.connector.address,fe.connector.abi,a),window.$token=await Me(fe.connector.tokenAddress,fe.connector.tokenAbi,a),await e.init(),localStorage.setItem("walletType","2")}))})),this.connector.on("disconnect",((e,t)=>{console.log('connector.on("disconnect")'),this.connector={},this.connected=!1;ke().logout()})))}}});const Ie=e=>($("data-v-db2e0e52"),e=e(),D(),e),Ge={class:"max-w-screen-xl mx-auto h-20 flex items-center justify-between px-2 md:px-10"},Ne=Ie((()=>N("div",{class:"logo"},[N("img",{width:"100",src:"/test/assets/logo.09e823ec.png",alt:"GMGN"})],-1))),Ce={class:"flex items-center"},Pe=Ie((()=>N("a",{href:"#",class:"sm:inline-block text-base text-gray-300 hover:text-white pr-4 sm:pr-10"}," Twitter ",-1))),Ae=Ie((()=>N("a",{href:"#",class:"hidden sm:inline-block text-base text-gray-300 hover:text-white pr-4 sm:pr-10"}," Discord ",-1))),Be=Ie((()=>N("a",{href:"#",class:"sm:inline-block text-base text-gray-300 hover:text-white pr-4 sm:pr-10"}," Contract ",-1))),Le={key:0},Oe=j("Exit"),je=[j(" Connect "),Ie((()=>N("span",{class:"hidden sm:inline-block"},"Wallet",-1)))],$e={class:"text-center"},De=["src"],_e=Ie((()=>N("p",null,"MetaMask",-1))),Ee=Ie((()=>N("p",{class:"text-sm text-gray-700 font-thin"},"Connect to your MetaMask Wallet",-1))),Xe=["src"],Re=Ie((()=>N("p",null,"WalletConnect",-1))),Fe=Ie((()=>N("p",{class:"text-sm text-gray-700 font-thin"},"Scan with WalletConnect to connect",-1)));var We=w({setup(e,{expose:t}){const n=window.localStorage,s=_.Component,i=b({dialog:!1,exit:!1}),r=ke(),{proxy:l}=E(),d=[{name:"Exit",color:"#ee0a24",active:"exit"}],u=o((()=>ke().address));function c(e){const t=ke();if("exit"===e.active)"2"===n.getItem("walletType")&&window.$provider.provider.disconnect(),n.setItem("walletType","0"),t.logout()}function w(){window.web3&&window.ethereum?i.dialog=!0:D()}async function $(){await window.ethereum.request({method:"eth_requestAccounts"}).then((async()=>{const e=await new m(window.web3.currentProvider);await e.ready.then((async t=>{if(t.chainId!==fe.web.chainId)return void(r.isMobile?p({type:"danger",message:"Please connect to the appropriate BSC network"}):y.error({title:"Please connect to the appropriate BSC network",offset:100,duration:1500}));i.dialog=!1,window.$provider=e;const a=e.getSigner();await r.setAddress(await a.getAddress()),window.$contract=await X(fe.connector.address,fe.connector.abi,a),window.$token=await X(fe.connector.tokenAddress,fe.connector.tokenAbi,a),r.setChainId(t.chainId),n.setItem("walletType","1"),await r.init()}))}))}async function D(){const e=await new f({chainId:fe.web.chainId,rpc:{[fe.web.chainId]:fe.web.rpc_url},qrcodeModal:g}),t=Se(le);t.setConnector(e),await t.subscribeToEvents(),e.connected||await e.enable(),i.dialog=!1,n.setItem("walletType","2")}async function X(e,t,n){return new h(e,t,n)}return t({connect:w,ethersJs:$,walletConnect:D,defaultConnect:async function(){let e=await new x(fe.web.rpc_url);await e.ready.then((async t=>{window.$provider=e,window.$contract=await new h(fe.connector.address,fe.connector.abi,e),window.$token=await X(fe.connector.tokenAddress,fe.connector.tokenAbi,e),n.setItem("walletType","0"),await r.init()}))}}),(e,t)=>{const n=v,o=T,p=k,y=M,m=S("action-sheet");return I(),G("div",null,[N("header",Ge,[Ne,N("div",Ce,[Pe,Ae,Be,a(u)?(I(),G("div",Le,[a(r).isMobile?(I(),G("button",{key:0,class:"bg-blue-700 py-3 px-2 bg-btn rounded cursor-pointer",onClick:t[0]||(t[0]=e=>a(i).exit=!0)},C(a(l).$strSub(a(u))),1)):(I(),P(y,{key:1,trigger:"click"},{dropdown:A((()=>[B(p,null,{default:A((()=>[(I(),G(L,null,O(d,(e=>B(o,{onClick:t=>c(e)},{default:A((()=>[Oe])),_:2},1032,["onClick"]))),64))])),_:1})])),default:A((()=>[B(n,{size:"mini",type:"primary"},{default:A((()=>[j(C(a(l).$strSub(a(u))),1)])),_:1})])),_:1}))])):(I(),G("button",{key:1,class:"bg-blue-700 font-light py-1 sm:py-2 px-3 bg-btn rounded-lg cursor-pointer",onClick:w},je))])]),B(a(s),{class:"text-black",show:a(i).dialog,"onUpdate:show":t[1]||(t[1]=e=>a(i).dialog=e),width:"400",closeOnClickOverlay:!0,showConfirmButton:!1},{default:A((()=>[N("ul",$e,[N("li",{class:"py-10 cursor-pointer border-b border-bg border-opacity-20",onClick:$},[N("img",{class:"w-14 mx-auto mb-4",src:a("/test/assets/metamask.86c31dd9.svg"),alt:""},null,8,De),_e,Ee]),N("li",{class:"py-10 cursor-pointer",onClick:D},[N("img",{class:"w-14 mx-auto mb-4",src:a("/test/assets/WalletConnect.a23d2c74.svg"),alt:""},null,8,Xe),Re,Fe])])])),_:1},8,["show"]),B(m,{show:a(i).exit,"onUpdate:show":t[2]||(t[2]=e=>a(i).exit=e),actions:d,"cancel-text":"Cancel","close-on-click-action":"",onSelect:c},null,8,["show"])])}}},[["__scopeId","data-v-db2e0e52"]]);X([R,F,W,q,z,V]);let qe=document.documentElement.clientWidth<420;var ze=w({setup(e,{expose:n}){const s=ke(),i=t({tooltip:{trigger:"item"},title:{text:"Circulating Supply",left:"center",top:"55%",textStyle:{color:"#BBB",fontSize:14,align:"center",fontWeight:"300",fontFamily:"'Jost', sans-serif"}},graphic:{type:"text",left:"center",top:"45%",style:{text:"0.0",textAlign:"center",fill:"#fff",fontSize:32,fontWeight:700}},legend:{bottom:"0%",left:"center",textStyle:{color:"#fff"},formatter:function(e){let t=e;return-1!==e.indexOf("(")&&(t=e.slice(0,e.indexOf("("))),qe?t:e}},series:[{name:"",type:"pie",radius:["50%","80%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:5,borderColor:"#191934",borderWidth:3},data:[{value:s.GMPoint,name:"GM(6:00:00-09:59:59)",itemStyle:{color:"#FDDA5E"}},{value:s.GNPoint,name:"GN(22:00:00-01:59:59)",itemStyle:{color:"#28283B"}},{value:s.OtherPoint,name:"Other",itemStyle:{color:"#F0F0F0"}}],label:{show:!1,position:"center"},labelLine:{show:!1},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0)"}}}]}),o=t();let r;return n({updateEcharts:async function(){clearTimeout(r),r=setInterval((async()=>{await s.init(),setTimeout((()=>{o.value.setOption({graphic:{style:{text:(.92*s.sumPoint).toFixed(2)}},series:[{data:[{value:s.GMPoint,name:"GM(6:00:00-09:59:59)",itemStyle:{color:"#FDDA5E"}},{value:s.GNPoint,name:"GN(22:00:00-01:59:59)",itemStyle:{color:"#28283B"}},{value:s.OtherPoint,name:"Other",itemStyle:{color:"#F0F0F0"}}]}]})}),300)}),3e3)}}),(e,t)=>(I(),P(a(U),{ref:(e,t)=>{t.echarts=e,o.value=e},class:"chart",option:i.value,autoresize:!0},null,8,["option"]))}},[["__scopeId","data-v-7a5c812e"]]);const Ve={class:"mt-10 mx-auto px-5 sm:px-0"},Ue=N("h1",{class:"text-2xl my-5 font-light"},"FAQ",-1),He={class:"p-5 sm:p-10 leading-6 sm:leading-8 text-left bg-white bg-opacity-20 text-base sm:text-2xl font-light sm:font-extralight"},Je=H('<p class="mb-2 font-medium">What is GMGN?</p><p>GMGN is a decentralised cryptocurrency based on the GM/GN meme.</p><p class="mt-6 mb-2 font-medium">What do you mean by &quot;decentralised&quot;?</p><p>GMGN is not run by any individual company or person. Technically speaking, it operates according to rules agreed by consensus, rather than decided upon by some founding or owning entity.</p><p class="mt-6 font-medium">What do you mean by &quot;cryptocurrency&quot;?</p><p>A cryptocurrency is a digital currency that is secured by cryptography, in contrast to conventional (fiat) currencies where they are secured by a government or governments.</p><p class="mt-6 font-medium">Okay, but What is &quot;GM/GN” meme?</p><p>Although some people think it&#39;s silly, they take it too seriously, we just need more fun and cool language symbols to express our expectations for the future.</p><p class="mt-6 font-medium">So How to get GMGN coins?</p>',9),Ke=j("1. First you need to have a MetaMask wallet with a little BNB in it to pay for gas, then click here to "),Qe=H('<p class="mt-2">2. Every 12 hours you can participate and get a time, randomly combined by the program in hours (00-23), minutes (00-59) and seconds (00-59), e.g. 07:35:46. The protocol defines the GM time zone as 6:00:00 -- 09:59:59 and the GN as 22:00:00 -- 01:59:59. </p><p class="mt-2">3. The number of tokens issued every 12 hours is equal to the number of participants, with a maximum cap of 86400, Every 6000 hours the reward cap decreases by 3600 until the cap is 3600, the decreasing model is: 86400→82800→79200→... →7200→3600→3600... </p><p class="mt-2">4. When the countdown ends, if no one is in the GM and GN sections, all participants share the token rewards equally</p><p class="mt-2">5. If the number of GMs and GNs is the same, still all participants share the token reward equally. </p><p class="mt-2">6. Otherwise, the group with the higher number of GMs or GNs shares the token reward equally. </p><p class="mt-2">7. Earned tokens can be withdrawn to your wallet at any time, and an 8% tax will be charged to the treasury for each withdrawal. </p>',6),Ye={class:"mt-2"},Ze=j("8. If you don't see GMGN tokens in your wallet after withdrawing them, please click on Copy "),et=["href"],tt=j(" and import tokens in MetaMask."),nt=N("p",{class:"mt-2"},"9. In the future, the treasury will be put under the control of the community, and all holders of the tokens will work together to set the appropriate monetary policy, such as using the tokens from the treasury for loans, interest payments on deposits, and investments around the GMGN ecosystem, etc. ",-1),at=N("p",{class:"mt-2"},"10. Note: GMGN.org is new, unaudited, and not guaranteed to work perfectly. Before participate, do your own research: ask questions, check out the code, understand the risks and good luck! ",-1),st={setup(e){var t;return(e,n)=>(I(),G("div",Ve,[Ue,N("div",He,[Je,N("p",null,[Ke,N("span",{class:"cursor-pointer underline",onClick:n[0]||(n[0]=e=>async function(e){if("web3"===e&&(t="undefined"!=typeof ethereum?new m(ethereum):"undefined"!=typeof web3?new m(web3.givenProvider):new m(ethereum)),void 0!==t){let e,n=0;if(n=await t.getNetwork(),console.log(n),"56"==n.chainId)return void alert("BSC Network has already been added to Metamask.");e=[{chainId:"0x38",chainName:"Binance Smart Chain Mainnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed1.binance.org/"],blockExplorerUrls:["https://bscscan.com/"]}],window.ethereum.request({method:"wallet_addEthereumChain",params:e}).then((()=>console.log("Success"))).catch((e=>console.log("Error",e.message)))}else alert("Unable to locate a compatible web3 browser!")}("web3"))},"Add BSC Network")]),Qe,N("p",Ye,[Ze,N("a",{class:"cursor-pointer underline",href:`https://testnet.bscscan.com/address/${a(fe).connector.address}`,target:"_blank"}," Token Contract ",8,et),tt]),nt,at])]))}},it={},ot={class:"max-w-screen-md mt-10 mx-auto px-5 sm:px-0"},rt=[N("div",{class:"text-left border-solid border-t border-white border-opacity-20"},[N("div",{class:"flex justify-between items-center py-5 font-thin"},[N("div",{class:"text-sm sm:text-xl"},"© 2021 GMGN.ORG"),N("div",{class:"text-sm sm:text-xl"},"Developed with love by Latin Labs")])],-1)];var lt=w(it,[["render",function(e,t){return I(),G("footer",ot,rt)}]]);const dt={class:"mt-10 mx-auto px-5 sm:px-0"},ut={class:"flex justify-between items-end border-b pb-3 border-opacity-30"},ct={class:"flex"},pt=["href"],yt={key:0,class:"mt-5"},mt={class:"h-14 my-5 pb-5 text-xl font-light flex justify-between items-center border-solid border-b border-white border-opacity-20"},ht={class:"w-3/5 text-left flex my-emoji"},wt={key:0,class:"bg-white w-12 h-12 bg-opacity-20 mr-3 rounded flex items-center justify-center"},bt={class:"truncate w-2/3"},ft=["href"],gt={class:"text-xs text-gray-400"},xt={class:"flex-1 text-right flex items-center justify-end"},vt={class:"text-xs mr-3 text-gray-400"},Tt={class:"w-6 sm:w-8 text-center py-1 inline-block bg-white bg-opacity-20 text-xs sm:text-base"},kt={class:"w-6 sm:w-8 text-center py-1 inline-block bg-white bg-opacity-20 text-xs sm:text-base mx-1"},Mt={class:"w-6 sm:w-8 text-center py-1 inline-block bg-white bg-opacity-20 text-xs sm:text-base"},St={key:1,class:"py-10"},It={key:0},Gt={key:1,class:"text-gray-400 font-light"},Nt={setup(e,{expose:t}){const n=ke(),s=b({list:[],listType:"latest",loading:!0}),{proxy:i}=E();let o,l,d=new J(K);let u={};async function p(){s.listType="latest",s.loading=!0,s.list=[],await f(),clearTimeout(u),u=setInterval((()=>{f()}),3e3)}async function y(){n.address&&(s.listType="history",s.loading=!0,clearTimeout(u),s.list=[],await async function(){if(s.listType="history",window.$contract){l=await new Z(fe.connector.abi);const e=[];await window.$contract.functions.userPunchRecord().then((async t=>{const a=t.userInfo.historyRoundIds;if(a.length>0){let t=a.length;for(let s=t-1;s>t-10;s--)if(a[s]){let t={},i={};await window.$contract.functions.roundInfos(a[s].toNumber()).then((e=>{i={winnerType:e.winnerType,accGmgnPerShare:c(e.accGmgnPerShare.toString(),18)}})),await window.$contract.functions.punchTime(a[s].toNumber()).then((e=>{t={address:n.address,blockNumber:e[0].nowBlock.toNumber(),hour:e[0].hour.toNumber(),minute:e[0].minute.toNumber(),second:e[0].second.toNumber(),roundId:a[s].toNumber(),emoji:e[0].emoji?e[0].emoji.toString():null,punchType:e[0].punchType}})),e.push(Object.assign(i,t))}}s.loading=!1})),s.list=e}}())}function m(e){return e<10?`0${e}`:e}function h(e){if("history"===s.listType)return e.punchType===e.winnerType?"/ Received tokens: "+e.accGmgnPerShare:"/ Received tokens: 0"}function w(e){return function(e,t){return r().subtract(3*(e-t),"second").fromNow()}(n.blockNumber,e)}async function f(){if(window.$provider){o=window.$provider;const e=await o.getBlockNumber();l=await new Z(fe.connector.abi),o.getLogs({fromBlock:e-4999,toBlock:e,topics:fe.web.topics}).then((async e=>{if(s.list=[],e.length>0){let t=e.length;for(let n=t-1;n>t-10;n--)if(e[n]){const t=await l.parseLog(e[n]),a={address:t.args[0],blockNumber:e[n].blockNumber,hour:t.args.hour.toNumber(),minute:t.args.minute.toNumber(),second:t.args.second.toNumber(),roundId:t.args.roundId.toNumber(),emoji:t.args.emoji?t.args.emoji.toString():null};s.list.push(a)}}s.loading=!1}))}}return t({latest:p}),(e,t)=>(I(),G("div",dt,[N("div",ut,[N("div",ct,[N("p",{class:Q(["text-xl sm:text-2xl font-light text-left cursor-pointer",["latest"===a(s).listType?"text-white":"text-gray-400"]]),onClick:p},"Latest",2),N("p",{class:Q(["text-xl sm:text-2xl font-light text-left px-5 cursor-pointer",["history"===a(s).listType?"text-white":"text-gray-500"]]),onClick:y},"History",2)]),N("a",{class:"font-light text-btn",href:`https://testnet.bscscan.com/address/${a(fe).connector.address}`,target:"_blank"},"View more",8,pt)]),a(s).list.length>0?(I(),G("ul",yt,[(I(!0),G(L,null,O(a(s).list,(e=>{return I(),G("li",{key:e},[N("div",mt,[N("div",ht,[e.emoji&&"has1"!==e.emoji?(I(),G("div",wt,[B(a(ee),{class:"leading-none",data:a(d),skin:1,set:"apple",emoji:(t=e.emoji,d.search(t).length?t:"joy")},null,8,["data","emoji"])])):te("",!0),N("div",bt,[N("a",{class:"text-btn text-base sm:text-xl",href:`https://testnet.bscscan.com/address/${e.address}`,target:"_blank"},C(a(i).$strSub(e.address,a(n).isMobile?6:18)),9,ft),N("div",gt,C(w(e.blockNumber))+" "+C(h(e)),1)])]),N("div",xt,[N("span",vt,"#"+C(e.roundId),1),N("span",Tt,C(m(e.hour)),1),N("span",kt,C(m(e.minute)),1),N("span",Mt,C(m(e.second)),1)])])]);var t})),128))])):(I(),G("div",St,[a(s).loading?(I(),G("div",It,[B(a(Y))])):(I(),G("div",Gt," No Data "))]))]))}};const Ct={class:"max-w-screen-md mx-auto text-center"},Pt=N("h1",{class:"text-2xl sm:text-5xl font-normal mt-5"},"Good Morning & Good Night",-1),At=N("p",{class:"text-base sm:text-2xl sm:text-base mt-2 font-light"},"Wish you have a nice day and sweet dreams",-1),Bt={class:"flex justify-center mt-10 flex-col sm:flex-row md:container mx-auto"},Lt={class:"h-12 sm:h-16 text-xl tip-btn rounded-xl flex justify-between items-center flex-1 sm:mr-3 w-11/12 mx-auto"},Ot={class:"w-1/5 text-gray-400 font-light"},jt={class:"text-left"},$t={class:"h-12 sm:h-16 text-xl tip-btn rounded-xl flex justify-between items-center flex-1 sm:ml-3 mt-5 sm:mt-0 w-11/12 mx-auto"},Dt=N("div",{class:"w-1/4 text-base text-gray-400 font-light"},"Awarded",-1),_t={class:"w-1/4 text-left"},Et={setup(e){const n=_.Component;let s=new J(K,{exclude:["flags"]});const i=ke();i.setMobile();let o=t(),r=t(),l=t();t();const d=b({dialog:!1,emoji:""});function u(){const e=setInterval((async()=>{await i.init(),i.countDown>10&&clearInterval(e)}),3e3)}function c(e){d.emoji=e.id,d.dialog=!1,async function(){window.$contract.functions.punch(d.emoji).then((e=>{i.isMobile?p({type:"success",message:"Punch Success"}):y.success({title:"Punch Success",offset:100,duration:1500}),r.value.latest()})).catch((e=>{console.log(e)}))}()}function m(){i.address?d.dialog=!0:o.value.connect()}function h(){i.address?i.rewardAmount<=0||window.$contract.withdraw():o.value.connect()}return ne((async()=>{switch(localStorage.getItem("walletType")){case"1":await o.value.ethersJs();break;case"2":await o.value.walletConnect();break;default:await o.value.defaultConnect()}await l.value.updateEcharts(),await r.value.latest()})),(e,t)=>{const p=S("q-dialog");return I(),G("div",null,[B(We,{ref:(e,t)=>{t.myHead=e,se(o)?o.value=e:o=e}},null,512),N("main",Ct,[Pt,At,B(ze,{ref:(e,t)=>{t.echartsRef=e,se(l)?l.value=e:l=e}},null,512),B(a(n),{show:a(d).dialog,"onUpdate:show":t[0]||(t[0]=e=>a(d).dialog=e),class:"w-84 sm:w-86",closeOnClickOverlay:!0,showConfirmButton:!1},{default:A((()=>[B(a(ie),{emojiSize:42,perLine:6,showPreview:!1,showSearch:!1,data:a(s),onSelect:c},null,8,["data"])])),_:1},8,["show"]),N("div",Bt,[N("div",Lt,[N("div",Ot,"#"+C(a(i).roundId),1),N("div",jt,[B(a(ae),{class:"text-white text-xl",time:a(i).countDown,onFinish:u},null,8,["time"])]),N("div",{class:"h-full text-base sm:text-xl bg-btn rounded-md w-2/5 leading-0 font-medium flex items-center justify-center cursor-pointer",onClick:m},"GM/GN ")]),N("div",$t,[Dt,N("div",_t,C(parseFloat(a(i).rewardAmount).toFixed(5)),1),N("div",{class:"h-full text-base sm:text-xl bg-white text-black rounded-md w-2/5 leading-0 font-medium flex items-center justify-center cursor-pointer",onClick:h},"Earned ")])]),B(Nt,{ref:(e,t)=>{t.myList=e,se(r)?r.value=e:r=e}},null,512),B(st)]),B(lt),B(p,{modelValue:a(d).dialog,"onUpdate:modelValue":t[1]||(t[1]=e=>a(d).dialog=e)},null,8,["modelValue"])])}}};window.Buffer=oe.Buffer;const Xt=re(Et);Xt.use(ve),Xt.mount("#app");
