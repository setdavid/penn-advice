(this.webpackJsonppenn_advice=this.webpackJsonppenn_advice||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(9),o=c.n(a),s=(c(19),c(20),c(21),c(3)),r=c(0);var l=function(){var e=Object(s.c)((function(e){return e.swipe.percentRight})),t=100*(1-e);e*=100;var c={height:"".concat(80,"px")};return Object(r.jsxs)("div",{id:"title-bar",className:"container-fluid",style:c,children:[Object(r.jsx)("div",{className:"row d-flex",style:{height:"90%",minHeight:"90%",paddingTop:"7px"},children:Object(r.jsxs)("div",{className:"col-12",style:{fontSize:"2.5rem",lineHeight:"1"},children:[Object(r.jsx)("div",{children:"PennHub"}),Object(r.jsx)("div",{style:{fontSize:"0.75rem"},children:"\xa0 by Penn Spark Gray"})]})}),Object(r.jsxs)("div",{className:"row",style:{height:"10%",minHeight:"10%"},children:[Object(r.jsx)("div",{className:"percent-bar",style:{width:"".concat(t,"%"),minWidth:"".concat(t,"%"),backgroundColor:"#990000",borderRight:"".concat(t>0?"2px solid white":"")}}),Object(r.jsx)("div",{className:"percent-bar",style:{width:"".concat(e,"%"),minWidth:"".concat(e,"%"),backgroundColor:"#011F5b",borderLeft:"".concat(e>0?"2px solid white":"")}})]})]})},d=c(2),u="SET_DISPLAY_DESKTOP",j="ACCOUNT_CONTENT",b="PERSONAL_CONTENT",h=function(e){return{type:u,payload:{display:e}}},O={display:b},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return t.type===u?Object(d.a)(Object(d.a)({},e),{},{display:t.payload.display}):e},p=c(7),f=c(6),x="LOGGED_IN",v="LOGGED_OUT",g={loggedIn:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(d.a)(Object(d.a)({},e),{},{loggedIn:!0});case v:return Object(d.a)(Object(d.a)({},e),{},{loggedIn:!1});default:return e}};var w=function(e){var t=e.style,c=Object(s.b)();return Object(r.jsxs)("div",{id:"account-content",className:"full-height",style:Object(d.a)(Object(d.a)({},t),{}),children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-12 d-flex justify-content-center",style:{marginTop:"5vh"},children:Object(r.jsx)(f.a,{icon:p.e,size:"6x"})})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-12 d-flex justify-content-center",style:{marginTop:"10px",fontSize:"1.5rem",fontWeight:"bold"},children:"User #12345"})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-12 d-flex justify-content-center",style:{marginTop:"10px",fontWeight:"bold"},children:Object(r.jsxs)("div",{onClick:function(){return c({type:v})},className:"clickable",children:["Log out \xa0",Object(r.jsx)(f.a,{icon:p.b,size:"lg"})]})})})]})},N=c(5);var S=function(e){var t=e.infoObj,c=Object(n.useState)("ACTIVE"),i=Object(N.a)(c,2),a=(i[0],i[1]),o=100*t.percentRight,s=100*(1-t.percentRight);return Object(r.jsxs)("div",{className:"personal-card",style:{},children:[Object(r.jsxs)("div",{className:"personal-card-title",children:["".concat(t.type," #").concat(t.index),Object(r.jsx)(f.a,{className:"clickable",icon:p.d,onClick:function(){console.log("Delete ".concat(t.type," #").concat(t.index)),fetch("/api/delete").then((function(e){return e.json()})).then((function(e){return a(e.status)}),(function(e){return console.log(e)}))}})]}),Object(r.jsx)("div",{children:t.text}),Object(r.jsx)("div",{className:"personal-card-count",children:"".concat(t.count," entries")}),Object(r.jsxs)("div",{className:"personal-card-percent-bar",children:[Object(r.jsx)("div",{className:"percent-bar",style:{width:"".concat(s,"%"),minWidth:"".concat(s,"%"),backgroundColor:"#990000",borderRight:"".concat(s>0?"2px solid white":"")}}),Object(r.jsx)("div",{className:"percent-bar",style:{width:"".concat(o,"%"),minWidth:"".concat(o,"%"),backgroundColor:"#011F5b",borderLeft:"".concat(o>0?"2px solid white":"")}})]}),Object(r.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(r.jsx)("div",{children:"".concat(s,"%")}),Object(r.jsx)("div",{children:"".concat(o,"%")})]})]})},C="SET_BUFFER",E="SET_NEXT_BUFFER",T=function(e){return{type:C,payload:{buffer:e}}},_={buffer:[],nextBuffer:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(d.a)(Object(d.a)({},e),{},{buffer:t.payload.buffer});case E:return Object(d.a)(Object(d.a)({},e),{},{nextBuffer:t.payload.nextBuffer});default:return e}},P="NO_SWIPE_CARD",R="NEW_SWIPE_CARD",I="NEW_PERCENT_RIGHT",L={hasSwipeCard:!0,percentRight:1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(d.a)(Object(d.a)({},e),{},{hasSwipeCard:!1});case R:return Object(d.a)(Object(d.a)({},e),{},{hasSwipeCard:!0});case I:return Object(d.a)(Object(d.a)({},e),{},{percentRight:t.payload.percent});default:return e}};var D=function(e){var t=e.infoObj,c=e.immobile,a=e.boundPos,o=e.color,l=Object(n.useRef)(!0),d=Object(n.useState)({x:0,y:0}),u=Object(N.a)(d,2),j=u[0],b=u[1],h=Object(n.useState)({x:0,y:0,timeStamp:0}),O=Object(N.a)(h,2),m=O[0],p=O[1],f=Object(n.useState)(!1),x=Object(N.a)(f,2),v=x[0],g=x[1],y=Object(n.useState)({x:0,y:0}),w=Object(N.a)(y,2),S=w[0],C=w[1],E=Object(n.useState)(0),T=Object(N.a)(E,2),_=T[0],k=T[1],R=Object(n.useState)({theta:0,direction:1}),I=Object(N.a)(R,2),L=I[0],M=I[1],D=Object(n.useState)(!0),q=Object(N.a)(D,2),B=q[0],z=q[1],H=Object(n.useState)(!1),W=Object(N.a)(H,2),A=W[0],F=W[1],U=Object(s.b)(),X=3*Math.PI/8,G=window.innerWidth,Y=window.innerHeight,V=Object(s.c)((function(e){return e.windowConfig.windowHeight})),J="#990000";1==L.direction&&(J="#011F5b");var K=S.x-a.x,Q={width:"".concat(G<Y?"85vw":.5*V+"px"),height:"".concat(G<Y?.7*V+"px":.75*V+"px"),left:"".concat(B?"auto":j.x-a.x+"px"),top:"".concat(B?"auto":j.y-a.y+"px"),opacity:"".concat(A?0:1),background:"".concat(A?J:""),transform:"rotate(".concat(1*(j.x-S.x)/K*(K>=.1*a.width?7:.5),"deg)"),transitionDuration:"".concat(A?"500ms":"")},Z=Object(n.useRef)(0),$=function(){var e;e=function(e){e.current&&z(!0)},clearTimeout(Z.current),Z.current=setTimeout(e,50,l)};Object(n.useEffect)((function(){return window.addEventListener("resize",$),function(){window.removeEventListener("resize",$),l.current=!1}}),[]);var ee=Object(n.useRef)(),te=function(){var e=ee.current.getBoundingClientRect();C(e),b(e)},ce=function(e){if(!A)if(g(!1),_>1&&Math.abs(L.theta)<X){var t=window.innerWidth/5,c=Math.tan(L.theta),n=L.direction,i={x:n*t+j.x,y:n*t*c+j.y};F(!0),b(i),setTimeout((function(){U({type:P,payload:{}})}),500)}else b(S)},ne=function(e,t,c){var n=Math.sqrt(Math.pow(e,2)+Math.pow(t,2))/c,i=Math.atan(t/e),a=1;return e<0&&(a=-1),M({theta:i,direction:a}),k(n),n},ie=Object(r.jsxs)("div",{className:"swipe-card-actual-content",style:{marginTop:"".concat(.1*V,"px"),marginBottom:"".concat(.1*V,"px")},children:[Object(r.jsx)("div",{style:{fontSize:"2rem",fontWeight:"bold",marginBottom:"10px"},children:"".concat(t.type," #").concat(t.index)}),Object(r.jsx)("div",{children:t.text})]});return Object(r.jsx)(i.a.Fragment,{children:c?Object(r.jsx)("div",{ref:ee,className:"no-select swipe-card swipe-card-return",style:Q,children:Object(r.jsx)("div",{className:"swipe-card-content d-flex",style:{backgroundColor:"".concat(A?J:o)},children:ie})}):Object(r.jsx)("div",{ref:ee,className:"no-select swipe-card ".concat(A?"swipe-card-swiped":""," ").concat(v||A?"":"swipe-card-return"),style:Q,onMouseDown:function(e){if(!A){var t={x:e.clientX,y:e.clientY,timeStamp:e.timeStamp};B&&(te(),z(!1)),g(!0),p(t)}},onMouseUp:ce,onMouseOut:ce,onMouseMove:function(e){if(!A&&v){var t=e.clientX,c=e.clientY,n=t-m.x,i=c-m.y,a={x:j.x+n,y:j.y+i},o={x:t,y:c,timeStamp:e.timeStamp};ne(n,i,e.timeStamp-m.timeStamp),b(a),p(o)}},onTouchStart:function(e){if(!A){var t={x:e.touches[0].clientX,y:e.touches[0].clientY,timeStamp:e.timeStamp};B&&(te(),z(!1)),g(!0),p(t)}},onTouchEnd:ce,onTouchMove:function(e){if(!A&&v){var t=e.touches[0].clientX,c=e.touches[0].clientY,n=t-m.x,i=c-m.y,a={x:j.x+n,y:j.y+i},o={x:t,y:c,timeStamp:e.timeStamp};ne(n,i,e.timeStamp-m.timeStamp),b(a),p(o)}},children:Object(r.jsx)("div",{className:"swipe-card-content d-flex",style:{backgroundColor:"".concat(A?J:o)},children:ie})})})},q=[{type:"Penn Life",index:0,text:"hello 0 personal",count:353,percentRight:0},{type:"Penn Life",index:1,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at odio placerat, pulvinar felis et, sodales diam. Curabitur non libero aliquet, lacinia orci ut, iaculis ante. Aliquam lacinia commodo varius. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sapien sem, dictum quis vehicula ultricies, aliquet vitae risus. Nulla sit amet ex sed mi porttitor venenatis eget eget massa. Maecenas non tellus accumsan, semper quam vitae, aliquet massa. Nullam sit amet neque risus. Phasellus congue velit magna, sed posuere ex gravida ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ut ornare lorem. Sed nec sem semper, ullamcorper leo sit amet, suscipit velit.",count:10,percentRight:.75},{type:"Penn Life",index:2,text:"hello 2 personal",count:34,percentRight:0},{type:"Penn Life",index:3,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at odio placerat, pulvinar felis et, sodales diam. Curabitur non libero aliquet, lacinia orci ut, iaculis ante. Aliquam lacinia commodo varius. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sapien sem, dictum quis vehicula ultricies, aliquet vitae risus. Nulla sit amet ex sed mi porttitor venenatis eget eget massa. Maecenas non tellus accumsan, semper quam vitae, aliquet massa. Nullam sit amet neque risus. Phasellus congue velit magna, sed posuere ex gravida ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ut ornare lorem. Sed nec sem semper, ullamcorper leo sit amet, suscipit velit.",count:50,percentRight:1}];var B=function(){var e=Object(n.useRef)(!0),t=Object(n.useRef)(),c=Object(n.useState)({x:0,y:0}),i=Object(N.a)(c,2),a=i[0],o=i[1],l=Object(s.c)((function(e){return e.cardManager})),d=l.buffer,u=l.nextBuffer,j=Object(n.useRef)(0),b=function(){var c;c=function(e){e.current&&o(t.current.getBoundingClientRect())},clearTimeout(j.current),j.current=setTimeout(c,50,e)};Object(n.useEffect)((function(){return window.addEventListener("resize",b),o(t.current.getBoundingClientRect()),function(){window.removeEventListener("resize",b),e.current=!1}}),[]);var h=Object(n.useState)(0),O=Object(N.a)(h,2),m=O[0],p=O[1],f=Object(s.c)((function(e){return e.swipe.hasSwipeCard})),x=Object(s.b)();Object(n.useEffect)((function(){var e;f||(m>=9?(p(0),x(T(u))):p(m+1),4==m&&fetch("/api/get_cards").then((function(e){return e.json()})).then((function(e){x(function(e){return{type:E,payload:{nextBuffer:e}}}(e))}),(function(e){return console.log(e)})),x({type:R,payload:{}}),x((e=v.percentRight,{type:I,payload:{percent:e}})))}),[f]);var v=d[m],g=d[m+1],y={type:"Penn Life",index:"?",text:"NO NEW CONTENT (but swiping is fun :) )",percentRight:Math.random()};return m+1>=10&&(g=u[m+1-10]),void 0===v&&(v=y),void 0===g&&(g=y),Object(r.jsx)("div",{ref:t,id:"swipe-content",className:"full-height container-fluid",style:{},children:Object(r.jsx)("div",{className:"row full-height",children:Object(r.jsxs)("div",{className:"col-12 full-height d-flex justify-content-center align-items-center",children:[Object(r.jsx)(D,{immobile:!0,boundPos:a,color:"#000000",infoObj:g}),f?Object(r.jsx)(D,{immobile:!1,boundPos:a,color:"#000000",infoObj:v}):""]})})})};var z=function(e){var t=e.style;return Object(r.jsxs)("div",{id:"personal-content",className:"full-height",style:Object(d.a)(Object(d.a)({},t),{}),children:[Object(r.jsx)("div",{id:"personal-content-header",children:"Personal Content"}),Object(r.jsx)(S,{infoObj:q[0]}),Object(r.jsx)(S,{infoObj:q[1]}),Object(r.jsx)(S,{infoObj:q[2]}),Object(r.jsx)(S,{infoObj:q[3]})]})},H="SET_DISPLAY_MOBILE",W="SWIPE_CONTENT",A="PERSONAL_CONTENT",F="ACCOUNT_CONTENT",U=function(e){return{type:H,payload:{display:e}}},X={display:W},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;return t.type===H?Object(d.a)(Object(d.a)({},e),{},{display:t.payload.display}):e};var Y=function(){var e=Object(s.c)((function(e){return e.mode.modeIsMobile})),t=Object(s.c)((function(e){return e.mobile.display})),c=Object(s.b)(),n={color:"white",transitionDuration:"".concat(250,"ms")},i={color:"var(--theme-color-4)",transitionDuration:"".concat(250,"ms")},a={display:"".concat(e?"block":"none"),height:"".concat(60,"px")};return Object(r.jsx)("div",{id:"nav-bar",className:"container-fluid",style:a,children:Object(r.jsxs)("div",{className:"row full-height",children:[Object(r.jsx)("div",{className:"col-4 full-height nav-bar-btn clickable",onClick:function(){return c(U(F))},children:Object(r.jsx)(f.a,{icon:p.e,size:"lg",style:t==F?n:i})}),Object(r.jsx)("div",{className:"col-4 full-height nav-bar-btn clickable",onClick:function(){return c(U(W))},children:Object(r.jsx)(f.a,{icon:p.a,size:"lg",style:t==W?n:i})}),Object(r.jsx)("div",{className:"col-4 full-height nav-bar-btn clickable",onClick:function(){return c(U(A))},children:Object(r.jsx)(f.a,{icon:p.c,size:"lg",style:t==A?n:i})})]})})};var V=function(){var e=Object(s.c)((function(e){return e.mode.modeIsMobile})),t=Object(s.c)((function(e){return e.desktop.display})),c=Object(s.b)(),n={color:"white",transitionDuration:"".concat(250,"ms"),height:"calc(0.13 * (".concat(window.innerHeight,"px - ").concat(80,"px - ").concat(e?60:0,"px))")},i={color:"var(--theme-color-4)",transitionDuration:"".concat(250,"ms"),height:"calc(0.13 * (".concat(window.innerHeight,"px - ").concat(80,"px - ").concat(e?60:0,"px))")},a={display:"".concat(e?"none":"block"),height:"calc(".concat(window.innerHeight,"px - ").concat(80,"px - ").concat(e?60:0,"px)"),width:"".concat(60,"px")};return Object(r.jsxs)("div",{id:"side-bar",className:"row full-height justify-content-center align-items-center",style:a,children:[Object(r.jsx)("div",{className:"col-12 nav-bar-btn clickable",onClick:function(){return c(h(j))},children:Object(r.jsx)(f.a,{icon:p.e,size:"lg",style:t==j?n:i})}),Object(r.jsx)("div",{className:"col-12 nav-bar-btn clickable",onClick:function(){return c(h(b))},children:Object(r.jsx)(f.a,{icon:p.c,size:"lg",style:t==b?n:i})})]})};var J=function(){var e=Object(s.c)((function(e){return e.mode.modeIsMobile})),t=Object(s.c)((function(e){return e.desktop.display})),c={width:"calc(100vw - ".concat(e?0:60,"px)")},n={transitionDuration:"".concat(250,"ms")},i={};if(t===j)i={accountContent:0,personalContent:100};else i={accountContent:-100,personalContent:0};return Object(r.jsxs)("div",{id:"desktop-content",className:"row full-height",style:c,children:[Object(r.jsxs)("div",{className:"col-lg-4 full-height",style:{paddingLeft:0},children:[Object(r.jsx)(w,{style:Object(d.a)(Object(d.a)({},n),{},{top:"".concat(i.accountContent,"%")})}),Object(r.jsx)(z,{style:Object(d.a)(Object(d.a)({},n),{},{top:"".concat(i.personalContent,"%")})})]}),Object(r.jsx)("div",{className:"col-lg-8 full-height",children:Object(r.jsx)(B,{})})]})};var K=function(){var e=Object(s.c)((function(e){return e.mobile.display})),t={transitionDuration:"".concat(250,"ms")},c={};switch(e){default:c={swipeContent:0,personalContent:100,accountContent:-100};break;case A:c={swipeContent:-100,personalContent:0,accountContent:-200};break;case F:c={swipeContent:100,personalContent:200,accountContent:0}}return Object(r.jsxs)("div",{id:"mobile-content",className:"row full-height",style:{},children:[Object(r.jsx)("div",{className:"col-12 full-height",style:Object(d.a)(Object(d.a)({},t),{},{left:"".concat(c.accountContent,"%")}),children:Object(r.jsx)(w,{})}),Object(r.jsx)("div",{className:"col-12 full-height",style:Object(d.a)(Object(d.a)({},t),{},{left:"".concat(c.swipeContent,"%")}),children:Object(r.jsx)(B,{})}),Object(r.jsx)("div",{className:"col-12 full-height",style:Object(d.a)(Object(d.a)({},t),{},{left:"".concat(c.personalContent,"%")}),children:Object(r.jsx)(z,{})})]})};var Q=function(){var e=Object(s.c)((function(e){return e.mode.modeIsMobile})),t=Object(s.c)((function(e){return e.windowConfig.windowHeight})),c={height:"calc(".concat(t,"px - ").concat(80,"px - ").concat(e?60:0,"px)")};return Object(r.jsx)("div",{id:"main-content",className:"container-fluid",style:c,children:Object(r.jsx)("div",{className:"row full-height",children:e?Object(r.jsx)("div",{className:"col-12 full-height",children:Object(r.jsx)(K,{})}):Object(r.jsxs)("div",{className:"col-12 full-height d-flex",children:[Object(r.jsx)(V,{}),Object(r.jsx)(J,{})]})})})},Z=1500;var $=function(){var e=Object(n.useState)(""),t=Object(N.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(""),o=Object(N.a)(a,2),l=o[0],u=o[1],j=Object(n.useState)(""),b=Object(N.a)(j,2),h=b[0],O=(b[1],Object(n.useState)(!0)),m=Object(N.a)(O,2),p=m[0],f=m[1],v=Object(n.useState)(!1),g=Object(N.a)(v,2),y=g[0],w=g[1],S=Object(s.b)(),C=Object(s.c)((function(e){return e.login.loggedIn})),E={transitionDuration:"".concat(Z,"ms"),width:"".concat(p?"100%":"0")};return E=y?Object(d.a)(Object(d.a)({},E),{},{opacity:0,transform:"scale(25)"}):Object(d.a)(Object(d.a)({},E),{},{opacity:1,transform:"scale(1)"}),Object(n.useEffect)((function(){C?(w(!0),window.setTimeout((function(){f(!1)}),Z)):(w(!1),f(!0))}),[C]),Object(r.jsx)("div",{id:"login-page",className:"container-fluid full-height",style:E,children:Object(r.jsx)("div",{className:"row full-height",style:{opacity:"".concat(y?0:1),transitionDuration:"".concat(y?375:4500,"ms")},children:Object(r.jsxs)("div",{className:"col-12 full-height d-flex flex-column justify-content-center align-items-center",children:[Object(r.jsx)("div",{className:"row d-flex",style:{marginBottom:"2rem"},children:Object(r.jsxs)("div",{className:"col-12",style:{fontSize:"2.5rem",lineHeight:"1"},children:[Object(r.jsx)("div",{children:"PennHub"}),Object(r.jsx)("div",{style:{fontSize:"0.75rem"},children:"\xa0 by Penn Spark Gray"})]})}),""==h?"":Object(r.jsx)("div",{className:"row d-flex",style:{marginBottom:"1rem",color:"red",fontSize:"0.75rem"},children:Object(r.jsx)("div",{className:"col-12",children:Object(r.jsx)("div",{children:h})})}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("Username: ".concat(c,", Password: ").concat(l)),S({type:x})},children:[Object(r.jsx)("div",{className:"row",style:{marginBottom:"1rem"},children:Object(r.jsx)("div",{className:"col-12",children:Object(r.jsxs)("label",{children:[" Username",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",name:"username",value:c,onChange:function(e){return i(e.target.value)}})]})})}),Object(r.jsx)("div",{className:"row",style:{marginBottom:"1rem"},children:Object(r.jsx)("div",{className:"col-12",children:Object(r.jsxs)("label",{children:[" Password",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",name:"password",value:l,onChange:function(e){return u(e.target.value)}})]})})}),Object(r.jsx)("div",{className:"row",style:{marginBottom:"1rem"},children:Object(r.jsx)("div",{className:"col-12 d-flex justify-content-center",children:Object(r.jsx)("input",{className:"clickable",type:"submit",value:"Log in"})})})]})]})})})};var ee=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)($,{}),Object(r.jsx)(l,{}),Object(r.jsx)(Q,{}),Object(r.jsx)(Y,{})]})})},te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),i(e),a(e),o(e)}))},ce=c(13),ne="SET_MOBILE",ie="SET_DESKTOP",ae={modeIsMobile:!1},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(d.a)(Object(d.a)({},e),{},{modeIsMobile:!0});case ie:return Object(d.a)(Object(d.a)({},e),{},{modeIsMobile:!1});default:return e}},se="SET_WINDOW_HEIGHT",re={windowHeight:0},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;return t.type===se?Object(d.a)(Object(d.a)({},e),{},{windowHeight:t.payload.windowHeight}):e},de=Object(ce.a)({mode:oe,swipe:M,mobile:G,windowConfig:le,desktop:m,cardManager:k,login:y}),ue=Object(ce.b)(de,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),je=function(){var e=window.innerWidth,t=window.innerHeight;ue.dispatch(function(e){return{type:se,payload:{windowHeight:e}}}(t)),e>=992&&e>t?ue.dispatch({type:ie,payload:{}}):ue.dispatch({type:ne,payload:{}})};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(s.a,{store:ue,children:Object(r.jsx)(ee,{})})}),document.getElementById("root")),console.log("Initializing React App..."),window.addEventListener("resize",(function(){je()})),je(),fetch("/api/get_cards").then((function(e){return e.json()})).then((function(e){console.log(e),ue.dispatch(T(e))}),(function(e){return console.log(e)})),te()}},[[31,1,2]]]);
//# sourceMappingURL=main.7d570f48.chunk.js.map