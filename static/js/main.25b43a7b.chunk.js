(this.webpackJsonppenn_advice=this.webpackJsonppenn_advice||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(7),o=n.n(a),r=(n(19),n(20),n(21),n(4)),s=n(1);var l=function(){var e=Object(r.c)((function(e){return e.swipe.percentRight})),t=100*(1-e);e*=100;var n={height:"".concat(80,"px")};return Object(s.jsxs)("div",{id:"title-bar",className:"container-fluid",style:n,children:[Object(s.jsx)("div",{className:"row d-flex",style:{height:"90%",minHeight:"90%",paddingTop:"7px"},children:Object(s.jsxs)("div",{className:"col-12",style:{fontSize:"2.5rem",lineHeight:"1"},children:[Object(s.jsx)("div",{children:"PennAdvice"}),Object(s.jsx)("div",{style:{fontSize:"0.75rem"},children:"\xa0 by Penn Spark Gray"})]})}),Object(s.jsxs)("div",{className:"row",style:{height:"10%",minHeight:"10%"},children:[Object(s.jsx)("div",{className:"percent-bar",style:{width:"".concat(t,"%"),minWidth:"".concat(t,"%"),backgroundColor:"#990000",borderRight:"".concat(t>0?"1px solid white":"")}}),Object(s.jsx)("div",{className:"percent-bar",style:{width:"".concat(e,"%"),minWidth:"".concat(e,"%"),backgroundColor:"#011F5b",borderLeft:"".concat(e>0?"1px solid white":"")}})]})]})};var d=function(){return Object(s.jsx)("div",{id:"personal-content",className:"full-height",style:{},children:"Personal Content"})},u=n(5),j=n(3),h="NO_SWIPE_CARD",b="NEW_SWIPE_CARD",O="NEW_PERCENT_RIGHT",p={hasSwipeCard:!0,percentRight:1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(j.a)(Object(j.a)({},e),{},{hasSwipeCard:!1});case b:return Object(j.a)(Object(j.a)({},e),{},{hasSwipeCard:!0});case O:return Object(j.a)(Object(j.a)({},e),{},{percentRight:t.payload.percent});default:return e}};var m=function(e){var t=e.text,n=e.immobile,a=e.boundPos,o=e.color,l=Object(c.useRef)(!0),d=Object(c.useState)({x:0,y:0}),j=Object(u.a)(d,2),b=j[0],O=j[1],p=Object(c.useState)({x:0,y:0,timeStamp:0}),f=Object(u.a)(p,2),m=f[0],x=f[1],v=Object(c.useState)(!1),g=Object(u.a)(v,2),w=g[0],y=g[1],N=Object(c.useState)({x:0,y:0}),S=Object(u.a)(N,2),C=S[0],E=S[1],T=Object(c.useState)(0),R=Object(u.a)(T,2),M=R[0],I=R[1],P=Object(c.useState)({theta:0,direction:1}),_=Object(u.a)(P,2),H=_[0],W=_[1],k=Object(c.useState)(!0),A=Object(u.a)(k,2),D=A[0],L=A[1],z=Object(c.useState)(!1),F=Object(u.a)(z,2),B=F[0],Y=F[1],X=Object(r.b)(),G=3*Math.PI/8,J=window.innerWidth,q=window.innerHeight,K=Object(r.c)((function(e){return e.windowConfig.windowHeight})),U="#990000";1==H.direction&&(U="#011F5b");var Q=C.x-a.x,V={width:"".concat(J<q?"85vw":.5*K+"px"),height:"".concat(J<q?.7*K+"px":.75*K+"px"),left:"".concat(D?"auto":b.x-a.x+"px"),top:"".concat(D?"auto":b.y-a.y+"px"),opacity:"".concat(B?0:1),background:"".concat(B?U:""),transform:"rotate(".concat(1*(b.x-C.x)/Q*(Q>=.1*a.width?7:.5),"deg)"),transitionDuration:"".concat(B?"500ms":"")},Z=Object(c.useRef)(0),$=function(){var e;e=function(e){e.current&&L(!0)},clearTimeout(Z.current),Z.current=setTimeout(e,50,l)};Object(c.useEffect)((function(){return window.addEventListener("resize",$),function(){window.removeEventListener("resize",$),l.current=!1,console.log("cleanup: "+t)}}),[]);var ee=Object(c.useRef)(),te=function(){var e=ee.current.getBoundingClientRect();E(e),O(e)},ne=function(e){if(!B)if(y(!1),M>1&&Math.abs(H.theta)<G){var t=window.innerWidth/5,n=Math.tan(H.theta),c=H.direction,i={x:c*t+b.x,y:c*t*n+b.y};Y(!0),O(i),setTimeout((function(){X({type:h,payload:{}})}),500)}else O(C)},ce=function(e,t,n){var c=Math.sqrt(Math.pow(e,2)+Math.pow(t,2))/n,i=Math.atan(t/e),a=1;return e<0&&(a=-1),W({theta:i,direction:a}),I(c),c};return Object(s.jsx)(i.a.Fragment,{children:n?Object(s.jsx)("div",{ref:ee,className:"no-select swipe-card swipe-card-return",style:V,children:Object(s.jsx)("div",{className:"swipe-card-content",style:{backgroundColor:"".concat(B?U:o)},children:Object(s.jsxs)("div",{children:[t," (immobile)"]})})}):Object(s.jsx)("div",{ref:ee,className:"no-select swipe-card ".concat(B?"swipe-card-swiped":""," ").concat(w||B?"":"swipe-card-return"),style:V,onMouseDown:function(e){if(!B){var t={x:e.clientX,y:e.clientY,timeStamp:e.timeStamp};D&&(te(),L(!1)),y(!0),x(t)}},onMouseUp:ne,onMouseOut:ne,onMouseMove:function(e){if(!B&&w){var t=e.clientX,n=e.clientY,c=t-m.x,i=n-m.y,a={x:b.x+c,y:b.y+i},o={x:t,y:n,timeStamp:e.timeStamp};ce(c,i,e.timeStamp-m.timeStamp),O(a),x(o)}},onTouchStart:function(e){if(!B){var t={x:e.touches[0].clientX,y:e.touches[0].clientY,timeStamp:e.timeStamp};D&&(te(),L(!1)),y(!0),x(t)}},onTouchEnd:ne,onTouchMove:function(e){if(!B&&w){var t=e.touches[0].clientX,n=e.touches[0].clientY,c=t-m.x,i=n-m.y,a={x:b.x+c,y:b.y+i},o={x:t,y:n,timeStamp:e.timeStamp};ce(c,i,e.timeStamp-m.timeStamp),O(a),x(o)}},children:Object(s.jsx)("div",{className:"swipe-card-content",style:{backgroundColor:"".concat(B?U:o)},children:Object(s.jsx)("div",{children:t})})})})};var x=function(){var e=Object(c.useRef)(!0),t=Object(c.useRef)(),n=Object(c.useState)({x:0,y:0}),i=Object(u.a)(n,2),a=i[0],o=i[1],l=Object(c.useRef)(0),d=function(){var n;n=function(e){e.current&&o(t.current.getBoundingClientRect())},clearTimeout(l.current),l.current=setTimeout(n,50,e)};Object(c.useEffect)((function(){return window.addEventListener("resize",d),o(t.current.getBoundingClientRect()),function(){window.removeEventListener("resize",d),e.current=!1}}),[]);var j=Object(c.useState)(0),h=Object(u.a)(j,2),p=h[0],f=h[1],x=Object(r.c)((function(e){return e.swipe.hasSwipeCard})),v=Object(r.b)();Object(c.useEffect)((function(){var e;x||(f(p+1),console.log("new"),v({type:b,payload:{}}),v((e=w.percentRight,{type:O,payload:{percent:e}})))}),[x]);var g=[{text:"hello 1 testArr",percentRight:0},{text:"hello 2 testArr",percentRight:.75},{text:"hello 3 testArr",percentRight:0},{text:"hello 4 testArr",percentRight:1}],w=g[p],y=g[p+1],N={text:"NO NEW CONTENT",percentRight:Math.random()};return void 0===w&&(w=N),void 0===y&&(y=N),Object(s.jsx)("div",{ref:t,id:"swipe-content",className:"full-height container-fluid",style:{},children:Object(s.jsx)("div",{className:"row full-height",children:Object(s.jsxs)("div",{className:"col-12 full-height d-flex justify-content-center align-items-center",children:[Object(s.jsx)(m,{immobile:!0,boundPos:a,color:"#000000",text:y.text}),x?Object(s.jsx)(m,{immobile:!1,boundPos:a,color:"#000000",text:w.text}):""]})})})};var v=function(){return Object(s.jsxs)("div",{id:"desktop-content",className:"row full-height",style:{},children:[Object(s.jsx)("div",{className:"col-lg-4 full-height",children:Object(s.jsx)(d,{})}),Object(s.jsx)("div",{className:"col-lg-8 full-height",children:Object(s.jsx)(x,{})})]})},g="SET_DISPLAY",w="SWIPE_CONTENT",y="PERSONAL_CONTENT",N=function(e){return{type:g,payload:{display:e}}},S={display:"SWIPE_CONTENT"},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return t.type===g?Object(j.a)(Object(j.a)({},e),{},{display:t.payload.display}):e},E=n(11),T=n(12);var R=function(){var e=Object(r.c)((function(e){return e.mode.modeIsMobile})),t=Object(r.c)((function(e){return e.mobile.display})),n=Object(r.b)(),c={color:"white",transitionDuration:"".concat(250,"ms")},i={color:"#424242",transitionDuration:"".concat(250,"ms")},a={display:"".concat(e?"block":"none"),height:"".concat(60,"px")};return Object(s.jsx)("div",{id:"nav-bar",className:"container-fluid",style:a,children:Object(s.jsxs)("div",{className:"row full-height",children:[Object(s.jsx)("div",{className:"col-6 full-height nav-bar-btn",onClick:function(){return n(N(w))},children:Object(s.jsx)(E.a,{icon:T.a,size:"lg",style:t==w?c:i})}),Object(s.jsx)("div",{className:"col-6 full-height nav-bar-btn",onClick:function(){return n(N(y))},children:Object(s.jsx)(E.a,{icon:T.b,size:"lg",style:t==y?c:i})})]})})};var M=function(){var e=Object(r.c)((function(e){return e.mobile.display})),t={transitionDuration:"".concat(250,"ms")},n={};if(e===y)n={swipeContent:-100,personalContent:0};else n={swipeContent:0,personalContent:100};return Object(s.jsxs)("div",{id:"mobile-content",className:"row full-height",style:{},children:[Object(s.jsx)("div",{className:"col-12 full-height",style:Object(j.a)(Object(j.a)({},t),{},{left:"".concat(n.swipeContent,"%")}),children:Object(s.jsx)(x,{})}),Object(s.jsx)("div",{className:"col-12 full-height",style:Object(j.a)(Object(j.a)({},t),{},{left:"".concat(n.personalContent,"%")}),children:Object(s.jsx)(d,{})})]})};var I=function(){var e=Object(r.c)((function(e){return e.mode.modeIsMobile})),t=Object(r.c)((function(e){return e.windowConfig.windowHeight})),n={height:"calc(".concat(t,"px - ").concat(80,"px - ").concat(e?60:0,"px)")};return Object(s.jsx)("div",{id:"main-content",className:"container-fluid",style:n,children:Object(s.jsx)("div",{className:"row full-height",children:Object(s.jsx)("div",{className:"col-12 full-height",children:e?Object(s.jsx)(M,{}):Object(s.jsx)(v,{})})})})};var P=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)(l,{}),Object(s.jsx)(I,{}),Object(s.jsx)(R,{})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))},H=n(13),W="SET_MOBILE",k="SET_DESKTOP",A={modeIsMobile:!1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(j.a)(Object(j.a)({},e),{},{modeIsMobile:!0});case k:return Object(j.a)(Object(j.a)({},e),{},{modeIsMobile:!1});default:return e}},L="SET_WINDOW_HEIGHT",z={windowHeight:0},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;return t.type===L?Object(j.a)(Object(j.a)({},e),{},{windowHeight:t.payload.windowHeight}):e},B=Object(H.a)({mode:D,swipe:f,mobile:C,windowConfig:F}),Y=Object(H.b)(B),X=function(){window.addEventListener("resize",(function(){G()}))},G=function(){var e=window.innerWidth,t=window.innerHeight;Y.dispatch(function(e){return{type:L,payload:{windowHeight:e}}}(t)),e>=992&&e>t?Y.dispatch({type:k,payload:{}}):Y.dispatch({type:W,payload:{}})};o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(r.a,{store:Y,children:Object(s.jsx)(P,{})})}),document.getElementById("root")),X(),G(),_()}},[[31,1,2]]]);
//# sourceMappingURL=main.25b43a7b.chunk.js.map