(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),l=n.n(o),c=(n(67),n(30)),i=(n(39),n(20));n(68),n(70);i.initializeApp({apiKey:"AIzaSyBBS80nTMy6fGWvydIHYM4P5dE_czOBF2U",authDomain:"parallax-art.firebaseapp.com",databaseURL:"https://parallax-art.firebaseio.com",projectId:"parallax-art",storageBucket:"parallax-art.appspot.com",messagingSenderId:"359463380945",appId:"1:359463380945:web:bd20bac823da05910622f0",measurementId:"G-F7CSSCZWB8"});var s=i.firestore(),u=new i.auth.GoogleAuthProvider,d=function(e){console.log("shoudl open popup"),i.auth().signInWithPopup(u).then((function(t){var n=t.credential.accessToken,a=t.user;e({loggedIn:!0,token:n,user:a})})).catch((function(e){var t=e.code,n=e.message,a=e.email,r=e.credential;console.log(t,n,a,r)}))},m=n(128),p=n(134),f=n(130),h=n(132),g=n(133),v=n(131),E=n(52),y=n.n(E),w=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function b(e){var t=e.login,n=w();return r.a.createElement("div",{className:n.root},r.a.createElement(p.a,{position:"fixed",color:"transparent",style:{color:"white",boxShadow:"none"}},r.a.createElement(f.a,null,r.a.createElement(v.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(y.a,null)),r.a.createElement(h.a,{variant:"h6",className:n.title},"Parallax Art"),r.a.createElement(g.a,{onClick:t,color:"inherit"},"Login"))))}var x={display:"flex",alignItems:"center",minHeight:"100%",justifyContent:"center"},I=function(e){var t=e.loggedIn,n=e.nameLoggedIn;return r.a.createElement("div",{style:x},r.a.createElement("h1",null,t?"Welcome ".concat(n,"!"):"Login!"))},j=n(56),O=n(53),k=n(5),B=n(23),C=n(54),L=n.n(C),S=function(e){var t=e.x,n=e.y,a=e.top,o=(e.left,e.scale),l=e.src,c=e.onload,i=e.children;return r.a.createElement(B.Parallax,{y:n,x:t,styleOuter:{position:"absolute",display:"flex",width:"".concat(100*o,"vh"),height:"".concat(100*o,"vh"),top:"".concat(a-50*o,"vh"),overflow:"hidden"},styleInner:{display:"flex",justifyContent:"center",width:"100%",height:"100%",overflow:"hidden"}},l?r.a.createElement("img",{src:l,style:{height:"100%"},alt:"window",onLoad:c}):i)},A=n(35),N=n.n(A),P=n(55),W=function(){var e=Object(P.a)(N.a.mark((function e(t){var n,a,r,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.collection(t),a={},e.prev=2,e.next=5,n.get();case 5:return r=e.sent,o={},r.forEach((function(e){"options"===e.id?a.options=e.data():o[e.id]=e.data()})),a.layers=o,e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),G={alignItems:"center",justifyContent:"center",flexDirection:"column",width:"100%",position:"relative",backgroundColor:" #000a13",overflowY:"scroll"},z=function(e){Object(O.a)(e);var t=Object(a.useState)({layers:{none:{imageUrl:"nothing"}}}),n=Object(c.a)(t,2),o=n[0],l=n[1],i=Object(k.f)(),s=i.user,u=i.artwork;return Object(a.useEffect)((function(){W("/users/".concat(s,"/").concat(u)).then((function(e){return l(e)}))}),[]),r.a.createElement("div",{className:"Anomaly"},r.a.createElement("div",{className:"Anomaly",style:Object(j.a)({},G,{display:"flex"})},o?Object.values(o.layers).map((function(e){return e.html?r.a.createElement(S,{x:e.x,y:e.y,top:e.top,scale:e.scale||1},L()(e.html)):r.a.createElement(S,{x:e.x,y:e.y,top:e.top,src:e.imageUrl,scale:e.scale||1})})):null))},U=function(){var e=Object(B.useController)().parallaxController;return window.onresize=function(){e.update()},Object(a.useLayoutEffect)((function(){return window.addEventListener("load",(function(){return e.update()})),function(){return window.removeEventListener("load",(function(){return e.update()}))}}),[e]),r.a.createElement(z,null)},M=function(){return r.a.createElement(B.ParallaxProvider,null,r.a.createElement(U,null))},D=n(34);var F=function(){var e,t=Object(a.useState)({loggedIn:!1,name:""}),n=Object(c.a)(t,2),o=n[0],l=n[1];return r.a.createElement("div",{className:"App"},r.a.createElement(b,{login:function(){return d(l)}}),r.a.createElement(D.a,null,r.a.createElement(k.c,null,r.a.createElement(k.a,{path:"/art/:user/:artwork"},r.a.createElement(M,null)),r.a.createElement(k.a,{path:"/"},r.a.createElement(I,{loggedIn:o.loggedIn,nameLoggedIn:null===(e=o.user)||void 0===e?void 0:e.displayName})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,t,n){},62:function(e,t,n){e.exports=n(108)},67:function(e,t,n){}},[[62,1,2]]]);
//# sourceMappingURL=main.0e94ab21.chunk.js.map