(this.webpackJsonppenn_advice=this.webpackJsonppenn_advice||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(5),r=c.n(a),o=(c(14),c(15),c(16),c(2)),s=c(1);var l=function(){var e=Object(o.c)((function(e){return e.swipe.percentRight})),t=100*(1-e);e*=100;var c={height:"".concat(80,"px"),backgroundColor:"white"};return Object(s.jsxs)("div",{id:"title-bar",className:"container-fluid",style:c,children:[Object(s.jsx)("div",{className:"row d-flex",style:{height:"60%",minHeight:"60%",paddingLeft:"5px"},children:Object(s.jsx)("div",{className:"col-12",style:{fontSize:"2.5rem"},children:"PennAdvice"})}),Object(s.jsx)("div",{className:"row d-flex",style:{height:"30%",minHeight:"30%",paddingLeft:"12px"},children:Object(s.jsx)("div",{className:"col-12",style:{fontSize:"0.75rem"},children:"by Penn Spark Gray"})}),Object(s.jsxs)("div",{className:"row",style:{height:"10%",minHeight:"10%"},children:[Object(s.jsx)("div",{className:"percent-bar",style:{width:"".concat(t,"%"),minWidth:"".concat(t,"%"),backgroundColor:"#990000"}}),Object(s.jsx)("div",{className:"percent-bar",style:{width:"".concat(e,"%"),minWidth:"".concat(e,"%"),backgroundColor:"#011F5b"}})]})]})};var d=function(){return Object(s.jsx)("div",{id:"personal-content",className:"full-height",style:{backgroundColor:"white"},children:"Personal Content"})},u=c(3),h=c(4),j="NO_SWIPE_CARD",b="NEW_SWIPE_CARD",O="NEW_PERCENT_RIGHT",f={hasSwipeCard:!0,percentRight:1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(h.a)(Object(h.a)({},e),{},{hasSwipeCard:!1});case b:return Object(h.a)(Object(h.a)({},e),{},{hasSwipeCard:!0});case O:return Object(h.a)(Object(h.a)({},e),{},{percentRight:t.payload.percent});default:return e}};var p=function(e){var t=e.text,c=e.immobile,a=e.boundPos,r=e.color,l=Object(n.useRef)(!0),d=Object(n.useState)({x:0,y:0}),h=Object(u.a)(d,2),b=h[0],O=h[1],f=Object(n.useState)({x:0,y:0,timeStamp:0}),m=Object(u.a)(f,2),p=m[0],v=m[1],x=Object(n.useState)(!1),g=Object(u.a)(x,2),w=g[0],y=g[1],S=Object(n.useState)({x:0,y:0}),N=Object(u.a)(S,2),C=N[0],E=N[1],R=Object(n.useState)(0),M=Object(u.a)(R,2),T=M[0],A=M[1],k=Object(n.useState)({theta:0,direction:1}),P=Object(u.a)(k,2),I=P[0],L=P[1],W=Object(n.useState)(!0),_=Object(u.a)(W,2),z=_[0],B=_[1],F=Object(n.useState)(!1),D=Object(u.a)(F,2),H=D[0],X=D[1],Y=Object(o.b)(),G=3*Math.PI/8,J=window.innerWidth,q=window.innerHeight,K="#990000";1==I.direction&&(K="#011F5b");var U=C.x-a.x,Q={width:"".concat(J<q?"85vw":"50vh"),height:"".concat(J<q?"70vh":"75vh"),left:"".concat(z?"auto":b.x-a.x+"px"),top:"".concat(z?"auto":b.y-a.y+"px"),opacity:"".concat(H?0:1),backgroundColor:"".concat(H?K:r),transform:"rotate(".concat(1*(b.x-C.x)/U*(U>=.1*a.width?7:.5),"deg)"),transitionDuration:"".concat(H?"500ms":"")},V=Object(n.useRef)(0),Z=function(){var e;e=function(e){e.current&&B(!0)},clearTimeout(V.current),V.current=setTimeout(e,50,l)};Object(n.useEffect)((function(){return window.addEventListener("resize",Z),function(){window.removeEventListener("resize",Z),l.current=!1,console.log("cleanup: "+t)}}),[]);var $=Object(n.useRef)(),ee=function(){var e=$.current.getBoundingClientRect();E(e),O(e)},te=function(e){if(!H)if(y(!1),T>2&&Math.abs(I.theta)<G){var t=window.innerWidth/5,c=Math.tan(I.theta),n=I.direction,i={x:n*t+b.x,y:n*t*c+b.y};X(!0),O(i),setTimeout((function(){Y({type:j,payload:{}})}),500)}else O(C)},ce=function(e,t,c){var n=Math.sqrt(Math.pow(e,2)+Math.pow(t,2))/c,i=Math.atan(t/e),a=1;return e<0&&(a=-1),L({theta:i,direction:a}),A(n),n};return Object(s.jsx)(i.a.Fragment,{children:c?Object(s.jsxs)("div",{ref:$,className:"no-select swipe-card swipe-card-return",style:Q,children:[t," (immobile)"]}):Object(s.jsx)("div",{ref:$,className:"no-select swipe-card ".concat(w||H?"":"swipe-card-return"),style:Q,onMouseDown:function(e){if(!H){var t={x:e.clientX,y:e.clientY,timeStamp:e.timeStamp};z&&(ee(),B(!1)),y(!0),v(t)}},onMouseUp:te,onMouseOut:te,onMouseMove:function(e){if(!H&&w){var t=e.clientX,c=e.clientY,n=t-p.x,i=c-p.y,a={x:b.x+n,y:b.y+i},r={x:t,y:c,timeStamp:e.timeStamp};ce(n,i,e.timeStamp-p.timeStamp),O(a),v(r)}},onTouchStart:function(e){if(!H){var t={x:e.touches[0].clientX,y:e.touches[0].clientY,timeStamp:e.timeStamp};z&&(ee(),B(!1)),y(!0),v(t)}},onTouchEnd:te,onTouchMove:function(e){if(!H&&w){var t=e.touches[0].clientX,c=e.touches[0].clientY,n=t-p.x,i=c-p.y,a={x:b.x+n,y:b.y+i},r={x:t,y:c,timeStamp:e.timeStamp};ce(n,i,e.timeStamp-p.timeStamp),O(a),v(r)}},children:t})})};var v=function(){var e=Object(n.useRef)(!0),t=Object(n.useRef)(),c=Object(n.useState)({x:0,y:0}),i=Object(u.a)(c,2),a=i[0],r=i[1],l=Object(n.useRef)(0),d=function(){var c;c=function(e){e.current&&r(t.current.getBoundingClientRect())},clearTimeout(l.current),l.current=setTimeout(c,50,e)};Object(n.useEffect)((function(){return window.addEventListener("resize",d),r(t.current.getBoundingClientRect()),function(){window.removeEventListener("resize",d),e.current=!1}}),[]);var h=Object(n.useState)(0),j=Object(u.a)(h,2),f=j[0],m=j[1],v=Object(o.c)((function(e){return e.swipe.hasSwipeCard})),x=Object(o.b)();Object(n.useEffect)((function(){var e;v||(m(f+1),console.log("new"),x({type:b,payload:{}}),x((e=w.percentRight,{type:O,payload:{percent:e}})))}),[v]);var g=[{text:"hello 1 testArr",percentRight:.25},{text:"hello 2 testArr",percentRight:.5},{text:"hello 3 testArr",percentRight:.75},{text:"hello 4 testArr",percentRight:1}],w=g[f],y=g[f+1],S={text:"NO NEW CONTENT",percentRight:Math.random()};return void 0===w&&(w=S),void 0===y&&(y=S),Object(s.jsx)("div",{ref:t,id:"swipe-content",className:"full-height container-fluid",style:{backgroundColor:"white",overflow:"hidden"},children:Object(s.jsx)("div",{className:"row full-height",children:Object(s.jsxs)("div",{className:"col-12 full-height d-flex justify-content-center align-items-center",children:[Object(s.jsx)(p,{immobile:!0,boundPos:a,color:"#A9A9A9",text:y.text}),v?Object(s.jsx)(p,{immobile:!1,boundPos:a,color:"#A9A9A9",text:w.text}):""]})})})};var x=function(){return Object(s.jsxs)("div",{id:"desktop-content",className:"row full-height",style:{},children:[Object(s.jsx)("div",{className:"col-lg-4 full-height",children:Object(s.jsx)(d,{})}),Object(s.jsx)("div",{className:"col-lg-8 full-height",children:Object(s.jsx)(v,{})})]})};var g=function(){return Object(s.jsx)("div",{id:"mobile-content",className:"row full-height",style:{},children:Object(s.jsx)("div",{className:"col-12 full-height",children:Object(s.jsx)(v,{})})})};var w=function(){var e=Object(o.c)((function(e){return e.mode.modeIsMobile})),t={display:"".concat(e?"block":"none"),height:"".concat(80,"px"),backgroundColor:"red"};return Object(s.jsx)("div",{id:"nav-bar",className:"container-fluid",style:t,children:"NavBar"})};var y=function(){Object(o.b)();var e=Object(o.c)((function(e){return e.mode.modeIsMobile})),t={height:"calc(100vh - ".concat(80,"px - ").concat(e?80:0,"px)"),backgroundColor:"green"};return Object(s.jsx)("div",{id:"main-content",className:"container-fluid",style:t,children:Object(s.jsx)("div",{className:"row full-height",children:Object(s.jsx)("div",{className:"col-12 full-height",children:e?Object(s.jsx)(g,{}):Object(s.jsx)(x,{})})})})},S=c(8),N="SET_MOBILE",C="SET_DESKTOP",E={modeIsMobile:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(h.a)(Object(h.a)({},e),{},{modeIsMobile:!0});case C:return Object(h.a)(Object(h.a)({},e),{},{modeIsMobile:!1});default:return e}},M=Object(S.a)({mode:R,swipe:m}),T=Object(S.b)(M),A=function(){window.addEventListener("resize",(function(){k()}))},k=function(){var e=window.innerWidth,t=window.innerHeight;e>=992&&e>t?T.dispatch({type:C,payload:{}}):T.dispatch({type:N,payload:{}})};var P=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)(l,{}),Object(s.jsx)(y,{}),Object(s.jsx)(w,{})]})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),a(e),r(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(o.a,{store:T,children:Object(s.jsx)(P,{})})}),document.getElementById("root")),A(),k(),I()}},[[24,1,2]]]);
//# sourceMappingURL=main.52a4ee8a.chunk.js.map