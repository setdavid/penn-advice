(this.webpackJsonppenn_advice=this.webpackJsonppenn_advice||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(9),o=c.n(a),s=(c(19),c(20),c(21),c(3)),r=1500,l=250,d=2*Math.PI/8,u=[{type:"Penn Life",index:0,text:"hello 0 personal",count:353,percentRight:0},{type:"Penn Life",index:1,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at odio placerat, pulvinar felis et, sodales diam. Curabitur non libero aliquet, lacinia orci ut, iaculis ante. Aliquam lacinia commodo varius. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sapien sem, dictum quis vehicula ultricies, aliquet vitae risus. Nulla sit amet ex sed mi porttitor venenatis eget eget massa. Maecenas non tellus accumsan, semper quam vitae, aliquet massa. Nullam sit amet neque risus. Phasellus congue velit magna, sed posuere ex gravida ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ut ornare lorem. Sed nec sem semper, ullamcorper leo sit amet, suscipit velit.",count:10,percentRight:.75},{type:"Penn Life",index:2,text:"hello 2 personal",count:34,percentRight:0},{type:"Penn Life",index:3,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at odio placerat, pulvinar felis et, sodales diam. Curabitur non libero aliquet, lacinia orci ut, iaculis ante. Aliquam lacinia commodo varius. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sapien sem, dictum quis vehicula ultricies, aliquet vitae risus. Nulla sit amet ex sed mi porttitor venenatis eget eget massa. Maecenas non tellus accumsan, semper quam vitae, aliquet massa. Nullam sit amet neque risus. Phasellus congue velit magna, sed posuere ex gravida ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ut ornare lorem. Sed nec sem semper, ullamcorper leo sit amet, suscipit velit.",count:50,percentRight:1}],j=c(0);var b=function(){var e=Object(s.c)((function(e){return e.swipe.percentRight})),t=100*(1-e);e*=100;var c={height:"".concat(80,"px")};return Object(j.jsxs)("div",{id:"title-bar",className:"container-fluid",style:c,children:[Object(j.jsx)("div",{className:"row d-flex",style:{height:"90%",minHeight:"90%",paddingTop:"7px"},children:Object(j.jsxs)("div",{className:"col-12",style:{fontSize:"2.5rem",lineHeight:"1"},children:[Object(j.jsx)("div",{children:"PennHub"}),Object(j.jsx)("div",{style:{fontSize:"0.75rem"},children:"\xa0 by Penn Spark Gray"})]})}),Object(j.jsxs)("div",{className:"row",style:{height:"10%",minHeight:"10%"},children:[Object(j.jsx)("div",{className:"percent-bar",style:{width:"".concat(t,"%"),minWidth:"".concat(t,"%"),backgroundColor:"#990000",borderRight:"".concat(t>0?"2px solid white":"")}}),Object(j.jsx)("div",{className:"percent-bar",style:{width:"".concat(e,"%"),minWidth:"".concat(e,"%"),backgroundColor:"#011F5b",borderLeft:"".concat(e>0?"2px solid white":"")}})]})]})},h=c(2),O="SET_DISPLAY_DESKTOP",m="ACCOUNT_CONTENT",p="PERSONAL_CONTENT",f=function(e){return{type:O,payload:{display:e}}},x={display:p},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;return t.type===O?Object(h.a)(Object(h.a)({},e),{},{display:t.payload.display}):e},g=c(7),y=c(6),w="LOGGED_IN",N="LOGGED_OUT",S={loggedIn:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(h.a)(Object(h.a)({},e),{},{loggedIn:!0});case N:return Object(h.a)(Object(h.a)({},e),{},{loggedIn:!1});default:return e}};var E=function(e){var t=e.style,c=Object(s.b)();return Object(j.jsxs)("div",{id:"account-content",className:"full-height",style:Object(h.a)(Object(h.a)({},t),{}),children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-12 d-flex justify-content-center",style:{marginTop:"5vh"},children:Object(j.jsx)(y.a,{icon:g.e,size:"6x"})})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-12 d-flex justify-content-center",style:{marginTop:"10px",fontSize:"1.5rem",fontWeight:"bold"},children:"User #12345"})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-12 d-flex justify-content-center",style:{marginTop:"10px",fontWeight:"bold"},children:Object(j.jsxs)("div",{onClick:function(){return c({type:N})},className:"clickable",children:["Log out \xa0",Object(j.jsx)(y.a,{icon:g.b,size:"lg"})]})})})]})},T=c(5);var _=function(e){var t=e.infoObj,c=Object(n.useState)("ACTIVE"),i=Object(T.a)(c,2),a=(i[0],i[1]),o=100*t.percentRight,s=100*(1-t.percentRight);return Object(j.jsxs)("div",{className:"personal-card",style:{},children:[Object(j.jsxs)("div",{className:"personal-card-title",children:["".concat(t.type," #").concat(t.index),Object(j.jsx)(y.a,{className:"clickable",icon:g.d,onClick:function(){console.log("Delete ".concat(t.type," #").concat(t.index)),fetch("/api/delete").then((function(e){return e.json()})).then((function(e){return a(e.status)}),(function(e){return console.log(e)}))}})]}),Object(j.jsx)("div",{children:t.text}),Object(j.jsx)("div",{className:"personal-card-count",children:"".concat(t.count," entries")}),Object(j.jsxs)("div",{className:"personal-card-percent-bar",children:[Object(j.jsx)("div",{className:"percent-bar",style:{width:"".concat(s,"%"),minWidth:"".concat(s,"%"),backgroundColor:"#990000",borderRight:"".concat(s>0?"2px solid white":"")}}),Object(j.jsx)("div",{className:"percent-bar",style:{width:"".concat(o,"%"),minWidth:"".concat(o,"%"),backgroundColor:"#011F5b",borderLeft:"".concat(o>0?"2px solid white":"")}})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("div",{children:"".concat(s,"%")}),Object(j.jsx)("div",{children:"".concat(o,"%")})]})]})};var k=function(e){var t=e.style;return Object(j.jsxs)("div",{id:"personal-content",className:"full-height",style:Object(h.a)(Object(h.a)({},t),{}),children:[Object(j.jsx)("div",{id:"personal-content-header",children:"Personal Content"}),Object(j.jsx)(_,{infoObj:u[0]}),Object(j.jsx)(_,{infoObj:u[1]}),Object(j.jsx)(_,{infoObj:u[2]}),Object(j.jsx)(_,{infoObj:u[3]})]})},P="SET_BUFFER",R="SET_NEXT_BUFFER",I=function(e){return{type:P,payload:{buffer:e}}},L={buffer:[],nextBuffer:[]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(h.a)(Object(h.a)({},e),{},{buffer:t.payload.buffer});case R:return Object(h.a)(Object(h.a)({},e),{},{nextBuffer:t.payload.nextBuffer});default:return e}},D="NO_SWIPE_CARD",q="NEW_SWIPE_CARD",z="NEW_PERCENT_RIGHT",B={hasSwipeCard:!0,percentRight:1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(h.a)(Object(h.a)({},e),{},{hasSwipeCard:!1});case q:return Object(h.a)(Object(h.a)({},e),{},{hasSwipeCard:!0});case z:return Object(h.a)(Object(h.a)({},e),{},{percentRight:t.payload.percent});default:return e}};var W=function(e){var t=e.infoObj,c=e.immobile,a=e.boundPos,o=e.color,r=Object(n.useRef)(!0),l=Object(n.useState)({x:0,y:0}),u=Object(T.a)(l,2),b=u[0],h=u[1],O=Object(n.useState)({x:0,y:0,timeStamp:0}),m=Object(T.a)(O,2),p=m[0],f=m[1],x=Object(n.useState)(!1),v=Object(T.a)(x,2),g=v[0],y=v[1],w=Object(n.useState)({x:0,y:0}),N=Object(T.a)(w,2),S=N[0],C=N[1],E=Object(n.useState)(0),_=Object(T.a)(E,2),k=_[0],P=_[1],R=Object(n.useState)({theta:0,direction:1}),I=Object(T.a)(R,2),L=I[0],M=I[1],q=Object(n.useState)(!0),z=Object(T.a)(q,2),B=z[0],H=z[1],W=Object(n.useState)(!1),A=Object(T.a)(W,2),F=A[0],U=A[1],X=Object(s.b)(),G=window.innerWidth,Y=window.innerHeight,V=Object(s.c)((function(e){return e.windowConfig.windowHeight})),J="#990000";1==L.direction&&(J="#011F5b");var K=S.x-a.x,Q={width:"".concat(G<Y?"85vw":.5*V+"px"),height:"".concat(G<Y?.7*V+"px":.75*V+"px"),left:"".concat(B?"auto":b.x-a.x+"px"),top:"".concat(B?"auto":b.y-a.y+"px"),opacity:"".concat(F?0:1),background:"".concat(F?J:""),transform:"rotate(".concat(1*(b.x-S.x)/K*(K>=.1*a.width?7:.5),"deg)"),transitionDuration:"".concat(F?"500ms":"")},Z=Object(n.useRef)(0),$=function(){var e;e=function(e){e.current&&H(!0)},clearTimeout(Z.current),Z.current=setTimeout(e,50,r)};Object(n.useEffect)((function(){return window.addEventListener("resize",$),function(){window.removeEventListener("resize",$),r.current=!1}}),[]);var ee=Object(n.useRef)(),te=function(){var e=ee.current.getBoundingClientRect();C(e),h(e)},ce=function(e){if(!F)if(y(!1),k>1&&Math.abs(L.theta)<d&&(1==L.direction&&b.x-S.x>=100||-1==L.direction&&S.x-b.x>=100)){var t=window.innerWidth/5,c=Math.tan(L.theta),n=L.direction,i={x:n*t+b.x,y:n*t*c+b.y};U(!0),h(i),setTimeout((function(){X({type:D,payload:{}})}),500)}else h(S)},ne=function(e,t,c){var n=Math.sqrt(Math.pow(e,2)+Math.pow(t,2))/c,i=Math.atan(t/e),a=1;return e<0&&(a=-1),M({theta:i,direction:a}),P(n),n},ie=Object(j.jsxs)("div",{className:"swipe-card-actual-content",style:{marginTop:"".concat(.1*V,"px"),marginBottom:"".concat(.1*V,"px")},children:[Object(j.jsx)("div",{style:{fontSize:"2rem",fontWeight:"bold",marginBottom:"10px"},children:"".concat(t.type," #").concat(t.index)}),Object(j.jsx)("div",{children:t.text})]});return Object(j.jsx)(i.a.Fragment,{children:c?Object(j.jsx)("div",{ref:ee,className:"no-select swipe-card swipe-card-return",style:Q,children:Object(j.jsx)("div",{className:"swipe-card-content d-flex",style:{backgroundColor:"".concat(F?J:o)},children:ie})}):Object(j.jsx)("div",{ref:ee,className:"no-select swipe-card ".concat(F?"swipe-card-swiped":""," ").concat(g||F?"":"swipe-card-return"),style:Q,onMouseDown:function(e){if(!F){var t={x:e.clientX,y:e.clientY,timeStamp:e.timeStamp};B&&(te(),H(!1)),y(!0),f(t)}},onMouseUp:ce,onMouseOut:ce,onMouseMove:function(e){if(!F&&g){var t=e.clientX,c=e.clientY,n=t-p.x,i=c-p.y,a={x:b.x+n,y:b.y+i},o={x:t,y:c,timeStamp:e.timeStamp};ne(n,i,e.timeStamp-p.timeStamp),h(a),f(o)}},onTouchStart:function(e){if(!F){var t={x:e.touches[0].clientX,y:e.touches[0].clientY,timeStamp:e.timeStamp};B&&(te(),H(!1)),y(!0),f(t)}},onTouchEnd:ce,onTouchMove:function(e){if(!F&&g){var t=e.touches[0].clientX,c=e.touches[0].clientY,n=t-p.x,i=c-p.y,a={x:b.x+n,y:b.y+i},o={x:t,y:c,timeStamp:e.timeStamp};ne(n,i,e.timeStamp-p.timeStamp),h(a),f(o)}},children:Object(j.jsx)("div",{className:"swipe-card-content d-flex",style:{backgroundColor:"".concat(F?J:o)},children:ie})})})};var A=function(){var e=Object(n.useRef)(!0),t=Object(n.useRef)(),c=Object(n.useState)({x:0,y:0}),i=Object(T.a)(c,2),a=i[0],o=i[1],r=Object(s.c)((function(e){return e.cardManager})),l=r.buffer,d=r.nextBuffer,u=Object(n.useRef)(0),b=function(){var c;c=function(e){e.current&&o(t.current.getBoundingClientRect())},clearTimeout(u.current),u.current=setTimeout(c,50,e)};Object(n.useEffect)((function(){return window.addEventListener("resize",b),o(t.current.getBoundingClientRect()),function(){window.removeEventListener("resize",b),e.current=!1}}),[]);var h=Object(n.useState)(0),O=Object(T.a)(h,2),m=O[0],p=O[1],f=Object(s.c)((function(e){return e.swipe.hasSwipeCard})),x=Object(s.b)();Object(n.useEffect)((function(){var e;f||(m>=9?(p(0),x(I(d))):p(m+1),4==m&&fetch("/api/get_cards").then((function(e){return e.json()})).then((function(e){x(function(e){return{type:R,payload:{nextBuffer:e}}}(e))}),(function(e){return console.log(e)})),x({type:q,payload:{}}),x((e=v.percentRight,{type:z,payload:{percent:e}})))}),[f]);var v=l[m],g=l[m+1],y={type:"Penn Life",index:"?",text:"NO NEW CONTENT (but swiping is fun :) )",percentRight:Math.random()};return m+1>=10&&(g=d[m+1-10]),void 0===v&&(v=y),void 0===g&&(g=y),Object(j.jsx)("div",{ref:t,id:"swipe-content",className:"full-height container-fluid",style:{},children:Object(j.jsx)("div",{className:"row full-height",children:Object(j.jsxs)("div",{className:"col-12 full-height d-flex justify-content-center align-items-center",children:[Object(j.jsx)(W,{immobile:!0,boundPos:a,color:"#000000",infoObj:g}),f?Object(j.jsx)(W,{immobile:!1,boundPos:a,color:"#000000",infoObj:v}):""]})})})};var F=function(){var e=Object(s.c)((function(e){return e.mode.modeIsMobile})),t=Object(s.c)((function(e){return e.desktop.display})),c={width:"calc(100vw - ".concat(e?0:60,"px)")},n={transitionDuration:"".concat(250,"ms")},i={};if(t===m)i={accountContent:0,personalContent:100};else i={accountContent:-100,personalContent:0};return Object(j.jsxs)("div",{id:"desktop-content",className:"row full-height",style:c,children:[Object(j.jsxs)("div",{className:"col-lg-4 full-height",style:{paddingLeft:0},children:[Object(j.jsx)(E,{style:Object(h.a)(Object(h.a)({},n),{},{top:"".concat(i.accountContent,"%")})}),Object(j.jsx)(k,{style:Object(h.a)(Object(h.a)({},n),{},{top:"".concat(i.personalContent,"%")})})]}),Object(j.jsx)("div",{className:"col-lg-8 full-height",children:Object(j.jsx)(A,{})})]})},U="SET_DISPLAY_MOBILE",X="SWIPE_CONTENT",G="PERSONAL_CONTENT",Y="ACCOUNT_CONTENT",V=function(e){return{type:U,payload:{display:e}}},J={display:X},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;return t.type===U?Object(h.a)(Object(h.a)({},e),{},{display:t.payload.display}):e};var Q=function(){var e=Object(s.c)((function(e){return e.mobile.display})),t={transitionDuration:"".concat(l,"ms")};Object(n.useEffect)((function(){e==X&&window.setTimeout((function(){return window.dispatchEvent(new Event("resize"))}),l)}),[e]);var c={};switch(e){default:c={swipeContent:0,personalContent:100,accountContent:-100};break;case G:c={swipeContent:-100,personalContent:0,accountContent:-200};break;case Y:c={swipeContent:100,personalContent:200,accountContent:0}}return Object(j.jsxs)("div",{id:"mobile-content",className:"row full-height",style:{},children:[Object(j.jsx)("div",{className:"col-12 full-height",style:Object(h.a)(Object(h.a)({},t),{},{left:"".concat(c.accountContent,"%")}),children:Object(j.jsx)(E,{})}),Object(j.jsx)("div",{className:"col-12 full-height",style:Object(h.a)(Object(h.a)({},t),{},{left:"".concat(c.swipeContent,"%")}),children:Object(j.jsx)(A,{})}),Object(j.jsx)("div",{className:"col-12 full-height",style:Object(h.a)(Object(h.a)({},t),{},{left:"".concat(c.personalContent,"%")}),children:Object(j.jsx)(k,{})})]})};var Z=function(){var e=Object(s.c)((function(e){return e.mode.modeIsMobile})),t=Object(s.c)((function(e){return e.desktop.display})),c=Object(s.b)(),n={color:"white",transitionDuration:"".concat(250,"ms"),height:"calc(0.13 * (".concat(window.innerHeight,"px - ").concat(80,"px - ").concat(e?60:0,"px))")},i={color:"var(--theme-color-4)",transitionDuration:"".concat(250,"ms"),height:"calc(0.13 * (".concat(window.innerHeight,"px - ").concat(80,"px - ").concat(e?60:0,"px))")},a={display:"".concat(e?"none":"block"),height:"calc(".concat(window.innerHeight,"px - ").concat(80,"px - ").concat(e?60:0,"px)"),width:"".concat(60,"px")};return Object(j.jsxs)("div",{id:"side-bar",className:"row full-height justify-content-center align-items-center",style:a,children:[Object(j.jsx)("div",{className:"col-12 nav-bar-btn clickable",onClick:function(){return c(f(m))},children:Object(j.jsx)(y.a,{icon:g.e,size:"lg",style:t==m?n:i})}),Object(j.jsx)("div",{className:"col-12 nav-bar-btn clickable",onClick:function(){return c(f(p))},children:Object(j.jsx)(y.a,{icon:g.c,size:"lg",style:t==p?n:i})})]})};var $=function(){var e=Object(s.c)((function(e){return e.mode.modeIsMobile})),t=Object(s.c)((function(e){return e.windowConfig.windowHeight})),c={height:"calc(".concat(t,"px - ").concat(80,"px - ").concat(e?60:0,"px)")};return Object(j.jsx)("div",{id:"main-content",className:"container-fluid",style:c,children:Object(j.jsx)("div",{className:"row full-height",children:e?Object(j.jsx)("div",{className:"col-12 full-height",children:Object(j.jsx)(Q,{})}):Object(j.jsxs)("div",{className:"col-12 full-height d-flex",children:[Object(j.jsx)(Z,{}),Object(j.jsx)(F,{})]})})})};var ee=function(){var e=Object(s.c)((function(e){return e.mode.modeIsMobile})),t=Object(s.c)((function(e){return e.mobile.display})),c=Object(s.b)(),n={color:"white",transitionDuration:"".concat(l,"ms")},i={color:"var(--theme-color-4)",transitionDuration:"".concat(l,"ms")},a={display:"".concat(e?"block":"none"),height:"".concat(60,"px")};return Object(j.jsx)("div",{id:"nav-bar",className:"container-fluid",style:a,children:Object(j.jsxs)("div",{className:"row full-height",children:[Object(j.jsx)("div",{className:"col-4 full-height nav-bar-btn clickable",onClick:function(){return c(V(Y))},children:Object(j.jsx)(y.a,{icon:g.e,size:"lg",style:t==Y?n:i})}),Object(j.jsx)("div",{className:"col-4 full-height nav-bar-btn clickable",onClick:function(){return c(V(X))},children:Object(j.jsx)(y.a,{icon:g.a,size:"lg",style:t==X?n:i})}),Object(j.jsx)("div",{className:"col-4 full-height nav-bar-btn clickable",onClick:function(){return c(V(G))},children:Object(j.jsx)(y.a,{icon:g.c,size:"lg",style:t==G?n:i})})]})})};var te=function(){var e=Object(n.useState)(""),t=Object(T.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(""),o=Object(T.a)(a,2),l=o[0],d=o[1],u=Object(n.useState)(""),b=Object(T.a)(u,2),O=b[0],m=(b[1],Object(n.useState)(!0)),p=Object(T.a)(m,2),f=p[0],x=p[1],v=Object(n.useState)(!1),g=Object(T.a)(v,2),y=g[0],N=g[1],S=Object(s.b)(),C=Object(s.c)((function(e){return e.login.loggedIn})),E={transitionDuration:"".concat(r,"ms"),width:"".concat(f?"100%":"0")};return E=y?Object(h.a)(Object(h.a)({},E),{},{opacity:0,transform:"scale(25)"}):Object(h.a)(Object(h.a)({},E),{},{opacity:1,transform:"scale(1)"}),Object(n.useEffect)((function(){C?(N(!0),window.setTimeout((function(){x(!1)}),r)):(N(!1),x(!0))}),[C]),Object(j.jsx)("div",{id:"login-page",className:"container-fluid full-height",style:E,children:Object(j.jsx)("div",{className:"row full-height",style:{opacity:"".concat(y?0:1),transitionDuration:"".concat(y?375:4500,"ms")},children:Object(j.jsxs)("div",{className:"col-12 full-height d-flex flex-column justify-content-center align-items-center",children:[Object(j.jsx)("div",{className:"row d-flex",style:{marginBottom:"2rem"},children:Object(j.jsxs)("div",{className:"col-12",style:{fontSize:"2.5rem",lineHeight:"1"},children:[Object(j.jsx)("div",{children:"PennHub"}),Object(j.jsx)("div",{style:{fontSize:"0.75rem"},children:"\xa0 by Penn Spark Gray"})]})}),""==O?"":Object(j.jsx)("div",{className:"row d-flex",style:{marginBottom:"1rem",color:"red",fontSize:"0.75rem"},children:Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)("div",{children:O})})}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("Username: ".concat(c,", Password: ").concat(l)),S({type:w})},children:[Object(j.jsx)("div",{className:"row",style:{marginBottom:"1rem"},children:Object(j.jsx)("div",{className:"col-12",children:Object(j.jsxs)("label",{children:[" Username",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"username",value:c,onChange:function(e){return i(e.target.value)},disabled:"".concat(y?"disabled":"")})]})})}),Object(j.jsx)("div",{className:"row",style:{marginBottom:"1rem"},children:Object(j.jsx)("div",{className:"col-12",children:Object(j.jsxs)("label",{children:[" Password",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"password",value:l,onChange:function(e){return d(e.target.value)},disabled:"".concat(y?"disabled":"")})]})})}),Object(j.jsx)("div",{className:"row",style:{marginBottom:"1rem"},children:Object(j.jsx)("div",{className:"col-12 d-flex justify-content-center",children:Object(j.jsx)("input",{className:"clickable",type:"submit",value:"Log in",disabled:"".concat(y?"disabled":"")})})})]})]})})})};var ce=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)(te,{}),Object(j.jsx)(b,{}),Object(j.jsx)($,{}),Object(j.jsx)(ee,{})]})})},ne=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),i(e),a(e),o(e)}))},ie=c(13),ae="SET_MOBILE",oe="SET_DESKTOP",se={modeIsMobile:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return Object(h.a)(Object(h.a)({},e),{},{modeIsMobile:!0});case oe:return Object(h.a)(Object(h.a)({},e),{},{modeIsMobile:!1});default:return e}},le="SET_WINDOW_HEIGHT",de={windowHeight:0},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;return t.type===le?Object(h.a)(Object(h.a)({},e),{},{windowHeight:t.payload.windowHeight}):e},je=Object(ie.a)({mode:re,swipe:H,mobile:K,windowConfig:ue,desktop:v,cardManager:M,login:C}),be=Object(ie.b)(je,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),he=function(){var e=window.innerWidth,t=window.innerHeight;be.dispatch(function(e){return{type:le,payload:{windowHeight:e}}}(t)),e>=992&&e>t?be.dispatch({type:oe,payload:{}}):be.dispatch({type:ae,payload:{}})};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(s.a,{store:be,children:Object(j.jsx)(ce,{})})}),document.getElementById("root")),console.log("Initializing React App..."),window.addEventListener("resize",(function(){he()})),he(),fetch("/api/get_cards").then((function(e){return e.json()})).then((function(e){console.log(e),be.dispatch(I(e))}),(function(e){return console.log(e)})),ne()}},[[31,1,2]]]);
//# sourceMappingURL=main.5be3949a.chunk.js.map