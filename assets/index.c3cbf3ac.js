var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;export function __vite_legacy_guard(){import("data:text/javascript,")}import{c as o,r as c,w as d,u as l,a as u,b as p,d as m,e as y,f as h,g as b,N as w,E as f,J as v,C as g,h as x,W as k,i as _,j as T,k as M,l as A,m as E,n as I,o as C,p as G,q as P,s as N,t as S,v as O,x as L,y as B,z as D,A as X,D as H,B as R,F,G as $,H as j,I as W,K,L as q,M as z,O as Y,P as U,Q as J,U as Q,R as V,S as Z,T as ee,V as te,X as ne,Y as ae,Z as se,_ as ie}from"./vendor.9e3bd396.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const re=o();var oe,ce,de,le;(ce=oe||(oe={})).XS="XS",ce.SM="SM",ce.MD="MD",ce.LG="LG",ce.XL="XL",ce.XXL="XXL",(le=de||(de={}))[le.XS=480]="XS",le[le.SM=576]="SM",le[le.MD=768]="MD",le[le.LG=992]="LG",le[le.XL=1200]="XL",le[le.XXL=1600]="XXL";const ue=new Map;let pe,me,ye;function he(e){const t=c(oe.XL),n=c(window.innerWidth);function a(){const e=document.body.clientWidth,a=ue.get(oe.XS),s=ue.get(oe.SM),i=ue.get(oe.MD),r=ue.get(oe.LG),o=ue.get(oe.XL);t.value=e<a?oe.XS:e<s?oe.SM:e<i?oe.MD:e<r?oe.LG:e<o?oe.XL:oe.XXL,n.value=e}function s(){null==e||e({screen:pe,width:me,realWidth:ye,screenEnum:de,screenMap:ue,sizeEnum:oe})}return function({el:e=window,name:t,listener:n,options:a,autoRemove:s=!0,isDebounce:i=!0,wait:r=80}){let o=()=>{};const m=c(!1);if(e){const y=c(e),h=i?u(n,r):p(n,r),b=r?h:n,w=e=>{m.value=!0,e.removeEventListener(t,b,a)},f=e=>e.addEventListener(t,b,a),v=d(y,((e,t,n)=>{e&&(!l(m)&&f(e),n((()=>{s&&w(e)})))}),{immediate:!0});o=()=>{w(y.value),v()}}}({el:window,name:"resize",listener:()=>{a(),s()}}),a(),pe=m((()=>l(t))),me=m((()=>ue.get(l(t)))),ye=m((()=>l(n))),s(),{screenRef:pe,screenEnum:de,widthRef:me,realWidthRef:ye}}ue.set(oe.XS,480),ue.set(oe.SM,576),ue.set(oe.MD,768),ue.set(oe.LG,992),ue.set(oe.XL,1200),ue.set(oe.XXL,1600);var be={roundTime:600,web:{rpc_url:"https://data-seed-prebsc-1-s3.binance.org:8545/",topics:["0x59630d31166dee819f08867a8979e9dc56fe60259974e44e7fee1e538b266971"]},connector:{address:"0x0d91c5D93acACdA18F2354D58F325BFbF73267bF",abi:[{inputs:[{internalType:"contract IGmgn",name:"_gmgn",type:"address"},{internalType:"address",name:"_devaddr",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"previousAdmin",type:"address"},{indexed:!1,internalType:"address",name:"newAdmin",type:"address"}],name:"AdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"beacon",type:"address"}],name:"BeaconUpgraded",type:"event"},{inputs:[{internalType:"address",name:"_target",type:"address"}],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"target",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Claim",type:"event"},{inputs:[{internalType:"address",name:"_devaddr",type:"address"}],name:"dev",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IGmgn",name:"_gmgn",type:"address"},{internalType:"address",name:"_devaddr",type:"address"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mintGmgn",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"oldDevAddr",type:"address"},{indexed:!1,internalType:"address",name:"newDevAddr",type:"address"}],name:"NewDevAddr",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"punch",outputs:[],stateMutability:"payable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"player",type:"address"},{indexed:!1,internalType:"uint256",name:"roundId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"hour",type:"uint256"},{indexed:!1,internalType:"uint256",name:"minute",type:"uint256"},{indexed:!1,internalType:"uint256",name:"second",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"}],name:"Punched",type:"event"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"implementation",type:"address"}],name:"Upgraded",type:"event"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"}],name:"upgradeTo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"},{internalType:"bytes",name:"data",type:"bytes"}],name:"upgradeToAndCall",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"payable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"target",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Withdraw",type:"event"},{inputs:[],name:"decimals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"devaddr",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"gmgn",outputs:[{internalType:"contract IGmgn",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"initRoundBlock",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_roundId",type:"uint256"}],name:"punchTime",outputs:[{components:[{internalType:"uint256",name:"hour",type:"uint256"},{internalType:"uint256",name:"minute",type:"uint256"},{internalType:"uint256",name:"second",type:"uint256"},{internalType:"enum GmgnMaker.PunchType",name:"punchType",type:"uint8"},{internalType:"bool",name:"isPunched",type:"bool"}],internalType:"struct GmgnMaker.PunchRecord",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"rewardAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"roundBlockNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"roundId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"roundInfos",outputs:[{internalType:"uint256",name:"roundId",type:"uint256"},{internalType:"uint256",name:"startBlock",type:"uint256"},{internalType:"uint256",name:"endBlock",type:"uint256"},{internalType:"enum GmgnMaker.PunchType",name:"winnerType",type:"uint8"},{internalType:"uint256",name:"totalPoint",type:"uint256"},{internalType:"uint256",name:"totalReward",type:"uint256"},{internalType:"uint256",name:"accGmgnPerShare",type:"uint256"},{internalType:"uint256",name:"devShare",type:"uint256"},{internalType:"uint256",name:"gmPoint",type:"uint256"},{internalType:"uint256",name:"gnPoint",type:"uint256"},{internalType:"bool",name:"enabled",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userInfos",outputs:[{internalType:"uint256",name:"settledCount",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"userPunchRecord",outputs:[{components:[{internalType:"uint256[]",name:"historyRoundIds",type:"uint256[]"},{internalType:"uint256",name:"settledCount",type:"uint256"}],internalType:"struct GmgnMaker.UserInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"}]},walletConnect:{api_key:"4950a481285046e28d71fa9676d46554"}};function we(e){return!e||e.length<15?"":e.substr(0,6)+"..."+e.substr(e.length-4)}function fe(e,t,n,a=3){return 1e3*(be.roundTime-(t-e-(n-1)*(be.roundTime/3))*a)}y.extend(h);var ve={install:async(e,t)=>{e.config.globalProperties.$strSub=we,e.config.globalProperties.$round=fe}};const ge=b("userStore",{state:()=>({userInfo:{},address:"",chainId:0,provider:{},contract:{},isMobile:!1,initRoundBlock:0,blockNumber:0,rewardAmount:0,roundId:0,GMPoint:0,GNPoint:0,OtherPoint:0,countDown:0}),getters:{getEchartsData:e=>[e.GMPoint,e.GNPoint,e.OtherPoint]},actions:{async setAddress(e){this.address=e||""},setChainId(e){this.chainId=e||0},delAddress(){this.address=""},delChainId(){this.chainId=0},async init(){const e=await window.$contract,t=await window.$provider;if(this.address){const t=await e.rewardAmount(this.address);this.rewardAmount=t.toNumber()}const n=await e.initRoundBlock();this.initRoundBlock=n.toNumber(),this.blockNumber=await t.getBlockNumber();const a=await e.roundId();this.roundId=a.toNumber();const s=await e.roundInfos(this.roundId);this.GMPoint=s.gmPoint.toNumber(),this.GNPoint=s.gnPoint.toNumber(),this.OtherPoint=s.totalPoint.sub(s.gmPoint).sub(s.gnPoint).toNumber();const i=await t.getBlockNumber();this.countDown=fe(this.initRoundBlock,i,this.roundId)},async setProvider(e){await(()=>this.provider=e)},async initContract(e){},logout(){this.address="",this.chainId=0,this.provider={},this.contract={},this.isMobile?w({type:"success",message:"Exit Success"}):f.success({title:"Exit Success",offset:100,duration:1500})},setMobile(){he((({screenMap:e,sizeEnum:t,width:n})=>{const a=e.get(t.LG);a&&(this.isMobile=n.value-1<a)}))}}});function xe(){return ge(re)}const ke=[{name:"Ethereum Mainnet",short_name:"eth",chain:"ETH",network:"mainnet",chain_id:1,network_id:1,rpc_url:"https://mainnet.infura.io/v3/%API_KEY%",native_currency:{symbol:"ETH",name:"Ether",decimals:"18",contractAddress:"",balance:""}},{name:"Ethereum Ropsten",short_name:"rop",chain:"ETH",network:"ropsten",chain_id:3,network_id:3,rpc_url:"https://ropsten.infura.io/v3/%API_KEY%",native_currency:{symbol:"ETH",name:"Ether",decimals:"18",contractAddress:"",balance:""}},{name:"Ethereum Rinkeby",short_name:"rin",chain:"ETH",network:"rinkeby",chain_id:4,network_id:4,rpc_url:"https://rinkeby.infura.io/v3/%API_KEY%",native_currency:{symbol:"ETH",name:"Ether",decimals:"18",contractAddress:"",balance:""}},{name:"Ethereum Görli",short_name:"gor",chain:"ETH",network:"goerli",chain_id:5,network_id:5,rpc_url:"https://goerli.infura.io/v3/%API_KEY%",native_currency:{symbol:"ETH",name:"Ether",decimals:"18",contractAddress:"",balance:""}},{name:"RSK Mainnet",short_name:"rsk",chain:"RSK",network:"mainnet",chain_id:30,network_id:30,rpc_url:"https://public-node.rsk.co",native_currency:{symbol:"RSK",name:"RSK",decimals:"18",contractAddress:"",balance:""}},{name:"Ethereum Kovan",short_name:"kov",chain:"ETH",network:"kovan",chain_id:42,network_id:42,rpc_url:"https://kovan.infura.io/v3/%API_KEY%",native_currency:{symbol:"ETH",name:"Ether",decimals:"18",contractAddress:"",balance:""}},{name:"Ethereum Classic Mainnet",short_name:"etc",chain:"ETC",network:"mainnet",chain_id:61,network_id:1,rpc_url:"https://ethereumclassic.network",native_currency:{symbol:"ETH",name:"Ether Classic",decimals:"18",contractAddress:"",balance:""}},{name:"POA Network Sokol",short_name:"poa",chain:"POA",network:"sokol",chain_id:77,network_id:77,rpc_url:"https://sokol.poa.network",native_currency:{symbol:"POA",name:"POA",decimals:"18",contractAddress:"",balance:""}},{name:"BNB",short_name:"bnb",chain:"BNB",network:"sokol",chain_id:97,network_id:97,rpc_url:"https://data-seed-prebsc-1-s1.binance.org:8545/",native_currency:{symbol:"BNB",name:"BNB",decimals:"18",contractAddress:"",balance:""}},{name:"POA Network Core",short_name:"skl",chain:"POA",network:"core",chain_id:99,network_id:99,rpc_url:"https://core.poa.network",native_currency:{symbol:"POA",name:"POA",decimals:"18",contractAddress:"",balance:""}},{name:"xDAI Chain",short_name:"xdai",chain:"POA",network:"dai",chain_id:100,network_id:100,rpc_url:"https://dai.poa.network",native_currency:{symbol:"xDAI",name:"xDAI",decimals:"18",contractAddress:"",balance:""}},{name:"HECO Mainnet",short_name:"heco",chain:"heco",network:"HECO",chain_id:128,network_id:128,rpc_url:"https://http-mainnet-node.huobichain.com",native_currency:{symbol:"HECO",name:"HECO",decimals:"18",contractAddress:"0x3Fc4769f5d8ddfC1b6bbeCeD34c56d91386a7A35",balance:""}},{name:"HECO Test",short_name:"heco",chain:"heco",network:"HECO",chain_id:256,network_id:256,rpc_url:"https://http-testnet.hecochain.com",native_currency:{symbol:"HECO",name:"HECO",decimals:"18",contractAddress:"0x3A536cad374968dE9D3b37110B06F4ba06883d48",balance:""}},{name:"Callisto Mainnet",short_name:"clo",chain:"callisto",network:"mainnet",chain_id:820,network_id:1,rpc_url:"https://clo-geth.0xinfra.com/",native_currency:{symbol:"CLO",name:"CLO",decimals:"18",contractAddress:"",balance:""}}];function _e(e){const o=ke.filter((t=>t.chain_id===e))[0];if(!o)throw new Error("ChainId missing or not supported");const c="4950a481285046e28d71fa9676d46554";if(o.rpc_url.includes("infura.io")&&o.rpc_url.includes("%API_KEY%")){const e=o.rpc_url.replace("%API_KEY%",c);return d=((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&r(e,n,t[n]);if(a)for(var n of a(t))i.call(t,n)&&r(e,n,t[n]);return e})({},o),t(d,n({rpc_url:e}))}var d;return o}const Te=b({id:"walletStore",state:()=>({connector:{},connected:!1}),getters:{},actions:{setConnector(e){this.connector=e},async subscribeToEvents(){this.connector&&(this.connector.on("session_update",(async(e,t)=>{if(console.log('connector.on("session_update")'),e)throw e})),this.connector.on("connect",(async(e,t)=>{if(console.log('connector.on("connect")'),e)throw e;const{chainId:n,accounts:a}=t.params[0],s=_e(n).rpc_url,i=new v(s);i.ready.then((async()=>{this.connected=!0;const e=xe(),t=i.getSigner();e.setAddress(a[0]),e.setChainId(n),window.$provider=i,window.$contract=async function(e){return new g(be.connector.address,be.connector.abi,e)}(t),e.init(),localStorage.setItem("walletType","2")}))})),this.connector.on("disconnect",(e=>{if(console.log('connector.on("disconnect")'),e)throw e;this.kill()})))},kill(){if(console.log('connector.on("Kill")'),!this.connector)return;this.connector.killSession(),this.connector={},this.connected=!1;xe().logout(),localStorage.setItem("walletType","")},setConnect(e){}}});var Me=(e,t)=>{for(const[n,a]of t)e[n]=a;return e};const Ae=e=>(D("data-v-5feabd28"),e=e(),X(),e),Ee={class:"max-w-screen-xl mx-auto h-24 flex items-center justify-between px-2 md:px-10"},Ie=Ae((()=>N("div",{class:"logo"},[N("img",{width:"100",src:"/test/assets/1637307487230.84f60acb.jpg",alt:"GMGN"})],-1))),Ce={class:"flex items-center"},Ge=Ae((()=>N("a",{href:"#",class:"sm:inline-block text-base font-medium text-gray-300 hover:text-white pr-4"}," Twitter ",-1))),Pe=Ae((()=>N("a",{href:"#",class:"hidden sm:inline-block text-base font-medium text-gray-300 hover:text-white pr-4"}," Discord ",-1))),Ne=Ae((()=>N("a",{href:"#",class:"sm:inline-block text-base font-medium text-gray-300 hover:text-white pr-4"}," Contract ",-1))),Se={key:0},Oe=j("Exit"),Le={class:"text-center"},Be=["src"],De=Ae((()=>N("p",null,"MetaMask",-1))),Xe=Ae((()=>N("p",{class:"text-sm text-gray-400 font-thin"},"Connect to your MetaMask Wallet",-1))),He=["src"],Re=Ae((()=>N("p",null,"WalletConnect",-1))),Fe=Ae((()=>N("p",{class:"text-sm text-gray-400 font-thin"},"Scan with WalletConnect to connect",-1)));var $e=Me({setup(e,{expose:t}){const n=window.localStorage,a=H.Component,s=x({dialog:!1,exit:!1}),i=xe(),{proxy:r}=R(),o=[{name:"Exit",color:"#ee0a24",active:"exit"}],c=m((()=>xe().address));function d(e){const t=xe();if("exit"===e.active)n.setItem("walletType","0"),t.logout()}function u(){window.web3&&window.ethereum?s.dialog=!0:y()}async function p(){await window.ethereum.request({method:"eth_requestAccounts"}).then((async()=>{const e=await new k(window.web3.currentProvider);await e.ready.then((async t=>{window.$provider=e;const a=e.getSigner();await i.setAddress(await a.getAddress()),window.$contract=await h(a),await i.init(),i.setChainId(t.chainId),n.setItem("walletType","1"),s.dialog=!1}))}))}async function y(){const e=new _({bridge:"https://bridge.walletconnect.org",qrcodeModal:T});s.dialog=!1;const t=Te(re);if(t.setConnector(e),e.connected){const t=_e(e.chainId).rpc_url,a=new v(t);a.ready.then((async()=>{const t=a.getSigner();i.setAddress(e.accounts[0]),i.setChainId(e.chainId),window.$provider=a,window.$contract=h(t),await i.init(),n.setItem("walletType","2")}))}else await e.createSession();await t.subscribeToEvents()}async function h(e){return new g(be.connector.address,be.connector.abi,e)}return t({connect:u,ethersJs:p,walletConnect:y,defaultConnect:async function(){let e=await new v(be.web.rpc_url);await e.ready.then((async t=>{window.$provider=e,window.$contract=await new g(be.connector.address,be.connector.abi,e),await i.init()}))}}),(e,t)=>{const n=M("arrow-down"),m=W,h=A,b=E,w=I,f=C,v=M("action-sheet");return G(),P("div",null,[N("header",Ee,[Ie,N("div",Ce,[Ge,Pe,Ne,l(c)?(G(),P("div",Se,[l(i).isMobile?(G(),P("button",{key:0,class:"bg-blue-700 py-3 px-2 bg-btn rounded cursor-pointer",onClick:t[0]||(t[0]=e=>l(s).exit=!0)},S(l(r).$strSub(l(c))),1)):(G(),O(f,{key:1,trigger:"click"},{dropdown:L((()=>[B(w,null,{default:L((()=>[(G(),P(F,null,$(o,(e=>B(b,{onClick:t=>d(e)},{default:L((()=>[Oe])),_:2},1032,["onClick"]))),64))])),_:1})])),default:L((()=>[B(h,{size:"mini",type:"primary"},{default:L((()=>[j(S(l(r).$strSub(l(c)))+" ",1),B(m,{class:"el-icon--right"},{default:L((()=>[B(n)])),_:1})])),_:1})])),_:1}))])):(G(),P("button",{key:1,class:"bg-blue-700 text-xs py-3 px-2 bg-btn rounded cursor-pointer",onClick:u}," Connect Wallet "))])]),B(l(a),{class:"text-black",show:l(s).dialog,"onUpdate:show":t[1]||(t[1]=e=>l(s).dialog=e),closeOnClickOverlay:!0,showConfirmButton:!1},{default:L((()=>[N("ul",Le,[N("li",{class:"py-6 cursor-pointer border-b border-bg border-opacity-20",onClick:p},[N("img",{class:"w-14 mx-auto mb-4",src:l("/test/assets/metamask.86c31dd9.svg"),alt:""},null,8,Be),De,Xe]),N("li",{class:"py-6 cursor-pointer",onClick:y},[N("img",{class:"w-14 mx-auto mb-4",src:l("/test/assets/WalletConnect.a23d2c74.svg"),alt:""},null,8,He),Re,Fe])])])),_:1},8,["show"]),B(v,{show:l(s).exit,"onUpdate:show":t[2]||(t[2]=e=>l(s).exit=e),actions:o,"cancel-text":"Cancel","close-on-click-action":"",onSelect:d},null,8,["show"])])}}},[["__scopeId","data-v-5feabd28"]]);K([q,z,Y,U,J]);let je=document.documentElement.clientWidth<420;var We=Me({setup(e,{expose:t}){const n=xe(),a=c({tooltip:{trigger:"item"},legend:{bottom:"0%",left:"center",textStyle:{color:"#fff"},formatter:function(e){let t=e;return-1!==e.indexOf("(")&&(t=e.slice(0,e.indexOf("("))),je?t:e}},series:[{name:"Demo Pie",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:5,borderColor:"#191934",borderWidth:3},data:[{value:n.GMPoint,name:"GM(6:00:00-09:59:59)",itemStyle:{color:"#FDDA5E"}},{value:n.GNPoint,name:"GN(22:00:00-01:59:59)",itemStyle:{color:"#28283B"}},{value:n.OtherPoint,name:"Other",itemStyle:{color:"#F0F0F0"}}],label:{show:!1,position:"center"},labelLine:{show:!1},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0)"}}}]}),s=c();let i;return t({updateEcharts:function(){clearTimeout(i),i=setInterval((async()=>{await n.init(),setTimeout((()=>{s.value.setOption({series:[{data:[{value:n.GMPoint,name:"GM(6:00:00-09:59:59)",itemStyle:{color:"#FDDA5E"}},{value:n.GNPoint,name:"GN(22:00:00-01:59:59)",itemStyle:{color:"#28283B"}},{value:n.OtherPoint,name:"Other",itemStyle:{color:"#F0F0F0"}}]}]})}),200)}),3e3)}}),(e,t)=>(G(),O(l(Q),{ref:(e,t)=>{t.echarts=e,s.value=e},class:"chart",option:a.value,autoresize:!0},null,8,["option"]))}},[["__scopeId","data-v-9470b0bc"]]);const Ke={},qe={class:"mt-10 sm:w-11/12 md:w-3/4 mx-auto px-5 sm:px-0"},ze=[V('<h1 class="text-xl my-5">FAQ</h1><div class="p-5 text-left bg-gray-600 text-xl sm:text-base font-thin"><span class="font-medium">What is GMGN?</span><br> GMGN is a decentralised cryptocurrency based on the GM/GN meme.<br><br><span class="font-medium">What do you mean by &quot;decentralised&quot;?</span><br> GMGN is not run by any individual company or person. Technically speaking, it operates according to rules agreed by consensus, rather than decided upon by some founding or owning entity.<br><br><span class="font-medium">What do you mean by &quot;cryptocurrency&quot;?</span><br> A cryptocurrency is a digital currency that is secured by cryptography, in contrast to conventional (fiat) currencies where they are secured by a government or governments.<br><br><span class="font-medium">Okay, but What is &quot;GM/GN” meme?</span><br> Although some people think it&#39;s silly, they take it too seriously, we just need more fun and cool language symbols to express our expectations for the future.<br><br><span class="font-medium">So How to get GMGN coins?</span><br> First you need to have a wallet and make sure it contains at least 0.5 BNB<br> Every 12 hours you can participate and get a time stamp, randomly combined by the program in hours (00-23), minutes (00-59) and seconds (00-59), e.g. 07:35:46. The protocol defines the GM time zone as 6:00:00 -- 09:59:59 and the GN as 22:00:00 -- 01:59:59.<br> The number of tokens issued every 12 hours is equal to the number of participants, with a maximum cap of 86400, halved every two years(Per 1461).<br> When the countdown ends, if no one is in the GM and GN sections, all participants share the token rewards equally<br> If the number of GMs and GNs is the same, then all participants share the token reward equally.<br> Otherwise, the group with the greater number of GMs and GNs will split the token reward equally.<br> Users can withdraw the earned tokens to their wallets at any time.<br> As an incentive for the development team, an additional 5% of each token award is issued.<br></div>',2)];var Ye=Me(Ke,[["render",function(e,t){return G(),P("div",qe,ze)}]]);const Ue={},Je={class:"mt-10 sm:w-11/12 md:w-3/4 mx-auto px-5 sm:px-0"},Qe=[N("div",{class:"text-left border-solid border-t border-white border-opacity-20"},[N("div",{class:"flex justify-between items-center py-5 font-thin"},[N("div",null,"© 2021 GMGN.ORG"),N("div",null,"Developed with love by Latin Labs")])],-1)];var Ve=Me(Ue,[["render",function(e,t){return G(),P("footer",Je,Qe)}]]);const Ze={class:"mt-10 sm:w-11/12 md:w-3/4 mx-auto px-5 sm:px-0"},et={key:0,class:"mt-5"},tt={class:"h-14 text-xl font-light flex justify-between items-center border-solid border-b border-white border-opacity-20"},nt={class:"truncate w-1/12 text-left"},at=["href"],st={class:"flex-1"},it={class:"flex-1 text-right"},rt={key:1},ot=[N("div",{class:"py-10 text-gray-400"}," No Data ",-1)],ct=N("div",{class:"py-3 bg-gray-600"},[N("a",{href:"https://testnet.bscscan.com/address/0x4f14546b27E07F476dB074cf73BE12fE8d041867",target:"_blank"},"View more")],-1),dt={setup(e,{expose:t}){const n=xe(),a=x({list:[]});let s,i,r;function o(){d(),clearTimeout(r),r=setInterval((()=>{d()}),3e3)}function c(e){return function(e,t){return y().subtract(3*(e-t),"second").fromNow()}(n.blockNumber,e)}async function d(){if(window.$provider){s=window.$provider;const e=await s.getBlockNumber();i=await new Z(be.connector.abi),s.getLogs({fromBlock:e-4999,toBlock:e,topics:be.web.topics}).then((e=>{if(a.list=[],e){let t=e.length>10?10:e.length;for(let n=0;n<=t;n++){const t={address:e[n].address,blockNumber:e[n].blockNumber,hour:i.parseLog(e[n]).args.hour.toNumber(),minute:i.parseLog(e[n]).args.minute.toNumber(),second:i.parseLog(e[n]).args.second.toNumber(),roundId:i.parseLog(e[n]).args.roundId.toNumber()};a.list.unshift(t)}}}))}}async function u(){const e=await window.$provider;let t=new ee;const a=await e.getBlockNumber();console.log(t);let s=n.address;t.getHistory(s,a-4999,a).then((function(e){console.log(e)}))}return t({latest:o}),(e,t)=>(G(),P("div",Ze,[N("div",{class:"flex"},[N("p",{class:"text-base text-left cursor-pointer",onClick:o},"Latest"),N("p",{class:"text-base text-left px-5 cursor-pointer",onClick:u},"History")]),l(a).list.length>0?(G(),P("ul",et,[(G(!0),P(F,null,$(l(a).list,(e=>(G(),P("li",{key:e},[N("div",tt,[N("div",nt,"#"+S(e.roundId),1),N("a",{class:"text-blue-600 truncate w-2/5 text-left",href:`https://testnet.bscscan.com/address/${e.address}`,target:"_blank"},S(e.address),9,at),N("div",st,S(c(e.blockNumber)),1),N("div",it,S(e.hour)+":"+S(e.minute)+":"+S(e.second),1)])])))),128))])):(G(),P("div",rt,ot)),ct]))}};const lt={class:"max-w-screen-xl mx-auto text-center"},ut=N("h1",{class:"text-3xl font-medium mt-5"},"Good Morning & Good Night",-1),pt=N("p",{class:"text-xl sm:text-base mt-2 font-light"},"Have a nice day and sweet dreams",-1),mt={class:"flex justify-center mt-10 flex-col sm:flex-row sm:w-11/12 md:w-3/4 mx-auto"},yt={class:"h-12 text-xl tip-btn rounded-xl flex justify-between items-center flex-1 sm:mr-3 w-11/12 mx-auto"},ht={class:"w-1/5"},bt={class:"text-left"},wt={class:"h-12 text-xl tip-btn rounded-xl flex justify-between items-center flex-1 sm:ml-3 mt-5 sm:mt-0 w-11/12 mx-auto"},ft=N("div",{class:"w-1/4 text-base text-gray-400"},"Awarded",-1),vt={class:"w-1/4 font-medium text-left"},gt={setup(e){const t=xe();t.setMobile();let n=c(),a=c(),s=c();function i(){const e=setInterval((async()=>{await t.init(),t.countDown>10&&clearInterval(e)}),3e3)}async function r(){t.address?window.$contract.functions.punch().then((e=>{t.isMobile?w({type:"success",message:"Punch Success"}):f.success({title:"Punch Success",offset:100,duration:1500}),a.value.latest()})).catch((e=>{console.log(e)})):n.value.connect()}function o(){t.address?t.rewardAmount<=0||window.$contract.withdraw().then((e=>{})):n.value.connect()}return te((async()=>{switch(localStorage.getItem("walletType")){case"1":await n.value.ethersJs();break;case"2":await n.value.walletConnect();break;default:await n.value.defaultConnect()}a.value.latest(),s.value.updateEcharts()})),(e,c)=>(G(),P("div",null,[B($e,{ref:(e,t)=>{t.myHead=e,ae(n)?n.value=e:n=e}},null,512),N("main",lt,[ut,pt,B(We,{ref:(e,t)=>{t.echartsRef=e,ae(s)?s.value=e:s=e}},null,512),N("div",mt,[N("div",yt,[N("div",ht,"#"+S(l(t).roundId),1),N("div",bt,[B(l(ne),{class:"text-white text-xl font-medium",time:l(t).countDown,onFinish:i},null,8,["time"])]),N("div",{class:"h-full bg-btn rounded-xl w-2/5 leading-0 font-medium flex items-center justify-center cursor-pointer",onClick:r},"GM/GN")]),N("div",wt,[ft,N("div",vt,S(l(t).rewardAmount),1),N("div",{class:"h-full bg-white text-black rounded-xl w-2/5 leading-0 font-medium flex items-center justify-center cursor-pointer",onClick:o},"Withdraw")])]),B(dt,{ref:(e,t)=>{t.myList=e,ae(a)?a.value=e:a=e}},null,512),B(Ye)]),B(Ve)]))}};window.Buffer=se.Buffer,ie(gt).use(ve).mount("#app");
