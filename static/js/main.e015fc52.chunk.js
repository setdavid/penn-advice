(this.webpackJsonppenn_advice=this.webpackJsonppenn_advice||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(9),s=c.n(a),o=(c(19),c(20),c(21),c(3)),r=1e3,l=80,d=250,u=2*Math.PI/8,j=[{type:"Penn Life",index:0,text:"hello 0 personal",count:353,percentRight:0},{type:"Penn Life",index:1,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at odio placerat, pulvinar felis et, sodales diam. Curabitur non libero aliquet, lacinia orci ut, iaculis ante. Aliquam lacinia commodo varius. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sapien sem, dictum quis vehicula ultricies, aliquet vitae risus. Nulla sit amet ex sed mi porttitor venenatis eget eget massa. Maecenas non tellus accumsan, semper quam vitae, aliquet massa. Nullam sit amet neque risus. Phasellus congue velit magna, sed posuere ex gravida ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ut ornare lorem. Sed nec sem semper, ullamcorper leo sit amet, suscipit velit.",count:10,percentRight:.75},{type:"Penn Life",index:2,text:"hello 2 personal",count:34,percentRight:0},{type:"Penn Life",index:3,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at odio placerat, pulvinar felis et, sodales diam. Curabitur non libero aliquet, lacinia orci ut, iaculis ante. Aliquam lacinia commodo varius. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sapien sem, dictum quis vehicula ultricies, aliquet vitae risus. Nulla sit amet ex sed mi porttitor venenatis eget eget massa. Maecenas non tellus accumsan, semper quam vitae, aliquet massa. Nullam sit amet neque risus. Phasellus congue velit magna, sed posuere ex gravida ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ut ornare lorem. Sed nec sem semper, ullamcorper leo sit amet, suscipit velit.",count:50,percentRight:1}],b=c(0);var h=function(){var e={height:"".concat(l,"px")};return Object(b.jsx)("div",{id:"title-bar",className:"container-fluid",style:e,children:Object(b.jsx)("div",{className:"row full-height align-items-center",children:Object(b.jsxs)("div",{className:"col-12 ",style:{fontSize:"2.5rem",lineHeight:"1"},children:[Object(b.jsx)("div",{children:"PennHub"}),Object(b.jsx)("div",{style:{fontSize:"0.75rem"},children:"\xa0 by Penn Spark Gray"})]})})})},O=c(2),m="SET_DISPLAY_DESKTOP",p="ACCOUNT_CONTENT",f="PERSONAL_CONTENT",x=function(e){return{type:m,payload:{display:e}}},v={display:f},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;return t.type===m?Object(O.a)(Object(O.a)({},e),{},{display:t.payload.display}):e},y=c(7),w=c(6),N="LOGGED_IN",S="LOGGED_OUT",C={loggedIn:!0},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(O.a)(Object(O.a)({},e),{},{loggedIn:!0});case S:return Object(O.a)(Object(O.a)({},e),{},{loggedIn:!1});default:return e}},T="SET_MOBILE",R="SET_DESKTOP",k="SET_GHOST_MODE",_=function(e){return{type:k,payload:{ghostMode:e}}},M={modeIsMobile:!1,ghostMode:!0},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(O.a)(Object(O.a)({},e),{},{modeIsMobile:!0});case R:return Object(O.a)(Object(O.a)({},e),{},{modeIsMobile:!1});case k:return Object(O.a)(Object(O.a)({},e),{},{ghostMode:t.payload.ghostMode});default:return e}};var I=function(e){var t=e.style,c=Object(o.c)(),n=Object(o.d)((function(e){return e.mode.ghostMode}));return Object(b.jsxs)("div",{id:"account-content",className:"full-height",style:Object(O.a)(Object(O.a)({},t),{}),children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-12 d-flex justify-content-center",style:{marginTop:"5vh"},children:Object(b.jsx)(w.a,{icon:y.f,size:"6x"})})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-12 d-flex justify-content-center",style:{marginTop:"10px",fontSize:"1.5rem",fontWeight:"bold"},children:"User #12345"})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-12 d-flex justify-content-center",style:{marginTop:"10px",fontWeight:"bold"},children:Object(b.jsxs)("div",{onClick:function(){return c({type:S})},className:"clickable",children:["Log out \xa0",Object(b.jsx)(w.a,{icon:y.b,size:"lg"})]})})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{id:"preferences",className:"col-12",style:{marginTop:"50px"},children:[Object(b.jsx)("div",{className:"row",style:{fontWeight:"bold"},children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsx)("div",{style:{border:"none"},children:"Preferences"})})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{style:{maxWidth:"50%"},children:"Show Ghost Card After Swipe"}),Object(b.jsxs)("span",{id:"ghost-mode-switch",className:"d-flex clickable",style:{height:"".concat(20,"px")},onClick:function(){c(_(!n))},children:[Object(b.jsx)("div",{id:"ghost-mode-switch-dot",style:{width:"".concat(20,"px"),height:"".concat(20,"px"),left:"".concat(n?"calc(100% - ".concat(20,"px)"):"0")}}),Object(b.jsx)("div",{className:"switch-comp",style:{width:"".concat(n?100:0,"%"),minWidth:"".concat(n?100:0,"%"),backgroundColor:"var(--theme-color-1)"}}),Object(b.jsx)("div",{className:"switch-comp",style:{width:"".concat(n?0:100,"%"),minWidth:"".concat(n?0:100,"%"),backgroundColor:"var(--theme-color-4)"}})]})]})})})]})})]})},L=c(5);var D=function(e){var t=e.infoObj,c=Object(n.useState)("ACTIVE"),i=Object(L.a)(c,2),a=(i[0],i[1]),s=100*t.percentRight,o=100*(1-t.percentRight);return Object(b.jsxs)("div",{className:"personal-card",style:{},children:[Object(b.jsxs)("div",{className:"personal-card-title",children:["".concat(t.type," #").concat(t.index),Object(b.jsx)(w.a,{className:"clickable",icon:y.d,onClick:function(){console.log("Delete ".concat(t.type," #").concat(t.index)),fetch("/api/delete").then((function(e){return e.json()})).then((function(e){return a(e.status)}),(function(e){return console.log(e)}))}})]}),Object(b.jsx)("div",{children:t.text}),Object(b.jsx)("div",{className:"personal-card-count",children:"".concat(t.count," entries")}),Object(b.jsxs)("div",{className:"personal-card-percent-bar",children:[Object(b.jsx)("div",{className:"percent-bar",style:{width:"".concat(o,"%"),minWidth:"".concat(o,"%"),backgroundColor:"var(--theme-color-1)",borderRight:"".concat(o>0?"2px solid white":"")}}),Object(b.jsx)("div",{className:"percent-bar",style:{width:"".concat(s,"%"),minWidth:"".concat(s,"%"),backgroundColor:"var(--theme-color-2)",borderLeft:"".concat(s>0?"2px solid white":"")}})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(b.jsx)("div",{children:"".concat(Math.round(o),"%")}),Object(b.jsx)("div",{children:"".concat(Math.round(s),"%")})]})]})};var q=function(e){var t=e.style;return Object(b.jsxs)("div",{id:"personal-content",className:"full-height",style:Object(O.a)(Object(O.a)({},t),{}),children:[Object(b.jsx)("div",{id:"personal-content-header",children:"Personal Content"}),Object(b.jsx)(D,{infoObj:j[0]}),Object(b.jsx)(D,{infoObj:j[1]}),Object(b.jsx)(D,{infoObj:j[2]}),Object(b.jsx)(D,{infoObj:j[3]})]})},B="SET_BUFFER",z="SET_NEXT_BUFFER",A=function(e){return{type:B,payload:{buffer:e}}},W={buffer:[],nextBuffer:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(O.a)(Object(O.a)({},e),{},{buffer:t.payload.buffer});case z:return Object(O.a)(Object(O.a)({},e),{},{nextBuffer:t.payload.nextBuffer});default:return e}},G="NO_SWIPE_CARD",U="NEW_SWIPE_CARD",V="SET_PREV_CARD",X="SET_DISPLAY_GHOST",F="SET_EXTERNAL_SWIPE",Y=function(e){return{type:X,payload:{displayGhost:e}}},J=function(e){return{type:F,payload:{externalSwipe:e}}},K={hasSwipeCard:!0,prevCard:{type:"Nah",index:"",text:":)",percentRight:.5},displayGhost:!1,externalSwipe:0},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(O.a)(Object(O.a)({},e),{},{hasSwipeCard:!1});case U:return Object(O.a)(Object(O.a)({},e),{},{hasSwipeCard:!0});case V:return Object(O.a)(Object(O.a)({},e),{},{prevCard:t.payload.prevCard});case X:return Object(O.a)(Object(O.a)({},e),{},{displayGhost:t.payload.displayGhost});case F:return Object(O.a)(Object(O.a)({},e),{},{externalSwipe:t.payload.externalSwipe});default:return e}};var Z=function(e){var t=e.infoObj,c=e.immobile,a=e.boundPos,s=e.color,r=e.ghost,l=Object(n.useRef)(!0),d=Object(n.useState)({x:0,y:0}),j=Object(L.a)(d,2),h=j[0],m=j[1],p=Object(n.useState)({x:0,y:0,timeStamp:0}),f=Object(L.a)(p,2),x=f[0],v=f[1],g=Object(n.useState)(!1),y=Object(L.a)(g,2),w=y[0],N=y[1],S=Object(n.useState)({x:0,y:0}),C=Object(L.a)(S,2),E=C[0],T=C[1],R=Object(n.useState)(0),k=Object(L.a)(R,2),_=k[0],M=k[1],P=Object(n.useState)({theta:0,direction:1}),I=Object(L.a)(P,2),D=I[0],q=I[1],B=Object(n.useState)(!0),z=Object(L.a)(B,2),A=z[0],W=z[1],H=Object(n.useState)(!1),U=Object(L.a)(H,2),V=U[0],X=U[1],F=Object(n.useState)(0),K=Object(L.a)(F,2),Q=K[0],Z=K[1],$=Object(o.c)(),ee=Object(o.d)((function(e){return e.windowConfig.mcHeight})),te=Object(o.d)((function(e){return e.mode.modeIsMobile})),ce=Object(o.d)((function(e){return e.swipe.externalSwipe})),ne=Object(o.d)((function(e){return e.swipe.displayGhost}));Object(n.useEffect)((function(){0==ce||c||V||!l.current||(A&&(he(),W(!1)),q({direction:ce,theta:0}),Z(2))}),[ce]),Object(n.useEffect)((function(){2==Q?window.setTimeout((function(){Z(1),m({x:E.x+100*D.direction,y:E.y})}),10):1==Q&&window.setTimeout((function(){me(),$(J(0))}),500)}),[Q]);var ie="var(--theme-color-1)";1==D.direction&&(ie="var(--theme-color-2)");var ae=E.x-a.x,se={width:"".concat(te?"85vw":.5*ee+"px"),height:"".concat(te?.95*ee+"px":.75*ee+"px"),left:"".concat(A?"auto":h.x-a.x+"px"),top:"".concat(A?"auto":h.y-a.y+"px"),opacity:"".concat(V?0:1),background:"".concat(V?ie:""),transform:"rotate(".concat(1*(h.x-E.x)/ae*(ae>=.1*a.width?7:.5),"deg)"),transitionDuration:"".concat(r||V?"500ms":"")};r&&(se=ne?Object(O.a)(Object(O.a)({},se),{},{opacity:1}):Object(O.a)(Object(O.a)({},se),{},{opacity:0,height:"0"}));var oe=100*t.percentRight,re=100*(1-t.percentRight),le=oe,de=re;ne||(le=50,de=50);var ue=Object(n.useRef)(0),je=function(){var e;e=function(e){e.current&&W(!0)},clearTimeout(ue.current),ue.current=setTimeout(e,50,l)};Object(n.useEffect)((function(){return window.addEventListener("resize",je),function(){window.removeEventListener("resize",je),l.current=!1}}),[]);var be=Object(n.useRef)(),he=function(){var e=be.current.getBoundingClientRect();T(e),m(e)},Oe=function(e){V||(N(!1),_>1&&Math.abs(D.theta)<u&&(1==D.direction&&h.x-E.x>=100||-1==D.direction&&E.x-h.x>=100)?me():m(E))},me=function(){var e=window.innerWidth/5,t=Math.tan(D.theta),c=D.direction,n={x:c*e+h.x,y:c*e*t+h.y};X(!0),m(n),setTimeout((function(){$({type:G,payload:{}})}),500)},pe=function(e,t,c){var n=Math.sqrt(Math.pow(e,2)+Math.pow(t,2))/c,i=Math.atan(t/e),a=1;return e<0&&(a=-1),q({theta:i,direction:a}),M(n),n},fe=Object(b.jsxs)("div",{className:"swipe-card-actual-content",style:{marginTop:"".concat(.1*ee,"px"),marginBottom:"".concat(.1*ee,"px")},children:[Object(b.jsx)("div",{style:{fontSize:"1.5rem",fontWeight:"bold",marginBottom:"10px"},children:"".concat(t.type," #").concat(t.index)}),Object(b.jsx)("div",{children:t.text})]});return Object(b.jsx)(i.a.Fragment,{children:c?r?Object(b.jsx)("div",{ref:be,className:"no-select swipe-card ghost-card",style:se,onClick:function(){return $(Y(!1))},onTouchEnd:function(){return $(Y(!1))},children:Object(b.jsxs)("div",{className:"swipe-card-content d-flex",style:{backgroundColor:"".concat(V?ie:s)},children:[Object(b.jsxs)("div",{style:{position:"absolute",padding:"".concat(te?.02*ee:.03*ee,"px ").concat(.05*ee,"px"),width:"100%"},children:[Object(b.jsxs)("div",{className:"ghost-percent-bar",children:[Object(b.jsx)("div",{className:"percent-bar",style:{width:"".concat(de,"%"),minWidth:"".concat(de,"%"),backgroundColor:"var(--theme-color-1)",borderRight:"".concat(re>0?"2px solid white":"")}}),Object(b.jsx)("div",{className:"percent-bar",style:{width:"".concat(le,"%"),minWidth:"".concat(le,"%"),backgroundColor:"var(--theme-color-2)",borderLeft:"".concat(oe>0?"2px solid white":"")}})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(b.jsx)("div",{children:"".concat(Math.round(re),"%")}),Object(b.jsx)("div",{children:"".concat(Math.round(oe),"%")})]})]}),fe]})}):Object(b.jsx)("div",{ref:be,className:"no-select swipe-card swipe-card-return",style:se,children:Object(b.jsx)("div",{className:"swipe-card-content d-flex",style:{backgroundColor:"".concat(V?ie:s)},children:fe})}):Object(b.jsx)("div",{ref:be,className:"no-select swipe-card ".concat(V?"swipe-card-swiped":""," ").concat(w||V?"":"swipe-card-return"),style:se,onMouseDown:function(e){if(!V){var t={x:e.clientX,y:e.clientY,timeStamp:e.timeStamp};A&&(he(),W(!1)),N(!0),v(t)}},onMouseUp:Oe,onMouseOut:Oe,onMouseMove:function(e){if(!V&&w){var t=e.clientX,c=e.clientY,n=t-x.x,i=c-x.y,a={x:h.x+n,y:h.y+i},s={x:t,y:c,timeStamp:e.timeStamp};pe(n,i,e.timeStamp-x.timeStamp),m(a),v(s)}},onTouchStart:function(e){if(!V){var t={x:e.touches[0].clientX,y:e.touches[0].clientY,timeStamp:e.timeStamp};A&&(he(),W(!1)),N(!0),v(t)}},onTouchEnd:Oe,onTouchMove:function(e){if(!V&&w){var t=e.touches[0].clientX,c=e.touches[0].clientY,n=t-x.x,i=c-x.y,a={x:h.x+n,y:h.y+i},s={x:t,y:c,timeStamp:e.timeStamp};pe(n,i,e.timeStamp-x.timeStamp),m(a),v(s)}},children:Object(b.jsx)("div",{className:"swipe-card-content d-flex",style:{backgroundColor:"".concat(V?ie:s)},children:fe})})})};var $=function(){var e=Object(n.useRef)(!0),t=Object(n.useRef)(),c=Object(n.useState)({x:0,y:0}),i=Object(L.a)(c,2),a=i[0],s=i[1],r=Object(o.d)((function(e){return e.cardManager})),l=r.buffer,d=r.nextBuffer,u=Object(o.d)((function(e){return e.mode.modeIsMobile})),h=Object(o.d)((function(e){return e.windowConfig.mcHeight})),O=Object(o.d)((function(e){return e.swipe.externalSwipe})),m=Object(o.d)((function(e){return e.swipe.prevCard})),p=Object(o.d)((function(e){return e.swipe.displayGhost})),f=Object(o.d)((function(e){return e.mode.ghostMode})),x=Object(o.c)(),v=Object(n.useRef)(0),g=function(){var c;c=function(e){e.current&&s(t.current.getBoundingClientRect())},clearTimeout(v.current),v.current=setTimeout(c,50,e)};Object(n.useEffect)((function(){return window.addEventListener("resize",g),s(t.current.getBoundingClientRect()),function(){window.removeEventListener("resize",g),e.current=!1}}),[]);var N=Object(n.useState)(0),S=Object(L.a)(N,2),C=S[0],E=S[1],T=Object(o.d)((function(e){return e.swipe.hasSwipeCard}));Object(n.useEffect)((function(){T||(C>=9?(E(0),x(A(d))):E(C+1),4==C&&x(function(e){return{type:z,payload:{nextBuffer:e}}}(j)),f&&x(Y(!0)),Object(o.b)((function(){x({type:U,payload:{}}),x(function(e){return{type:V,payload:{prevCard:e}}}(k))})))}),[T]);var R=function(e){0!=O||p||x(J(e))},k=l[C],_=l[C+1],M={type:"Penn Life",index:"?",text:"NO NEW CONTENT (but swiping is fun :) )",percentRight:Math.random()};return C+1>=10&&(_=d[C+1-10]),void 0===k&&(k=M),void 0===_&&(_=M),Object(b.jsxs)("div",{ref:t,id:"swipe-content",className:"full-height container-fluid",style:{},children:[Object(b.jsx)("div",{className:"row ".concat(u?"full-height":""),style:{height:"".concat(u?"":"".concat(.87*h,"px"))},children:Object(b.jsxs)("div",{className:"col-12 full-height d-flex justify-content-center align-items-center",children:[Object(b.jsx)(Z,{immobile:!0,boundPos:a,color:"#000000",infoObj:_}),T?Object(b.jsx)(Z,{immobile:!!p,boundPos:a,color:"#000000",infoObj:k}):"",Object(b.jsx)(Z,{immobile:!0,ghost:!0,boundPos:a,color:"#000000",infoObj:m})]})}),u?"":Object(b.jsx)("div",{className:"row",style:{height:"".concat(.13*h,"px")},children:Object(b.jsxs)("div",{className:"col-12 d-flex justify-content-center",children:[Object(b.jsx)("div",{className:"swipe-btn left-swipe-btn clickable",onClick:function(){return R(-1)},children:Object(b.jsx)("div",{children:"L"})}),Object(b.jsx)("div",{className:"swipe-btn middle-swipe-btn clickable",style:{fontSize:"3vh"},onClick:function(){return x(Y(!0))},children:Object(b.jsx)("div",{children:Object(b.jsx)(w.a,{icon:y.e})})}),Object(b.jsx)("div",{className:"swipe-btn right-swipe-btn clickable",onClick:function(){return R(1)},children:Object(b.jsx)("div",{children:"W"})})]})})]})};var ee=function(){var e=Object(o.d)((function(e){return e.mode.modeIsMobile})),t=Object(o.d)((function(e){return e.desktop.display})),c={width:"calc(100vw - ".concat(e?0:60,"px)")},n={transitionDuration:"".concat(250,"ms")},i={};if(t===p)i={accountContent:0,personalContent:100};else i={accountContent:-100,personalContent:0};return Object(b.jsxs)("div",{id:"desktop-content",className:"row full-height",style:c,children:[Object(b.jsxs)("div",{className:"col-lg-4 full-height",style:{paddingLeft:0},children:[Object(b.jsx)(I,{style:Object(O.a)(Object(O.a)({},n),{},{top:"".concat(i.accountContent,"%")})}),Object(b.jsx)(q,{style:Object(O.a)(Object(O.a)({},n),{},{top:"".concat(i.personalContent,"%")})})]}),Object(b.jsx)("div",{className:"col-lg-8 full-height",children:Object(b.jsx)($,{})})]})},te="SET_DISPLAY_MOBILE",ce="SWIPE_CONTENT",ne="PERSONAL_CONTENT",ie="ACCOUNT_CONTENT",ae=function(e){return{type:te,payload:{display:e}}},se={display:ce},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;return t.type===te?Object(O.a)(Object(O.a)({},e),{},{display:t.payload.display}):e};var re=function(){var e=Object(o.d)((function(e){return e.mobile.display})),t={transitionDuration:"".concat(d,"ms")};Object(n.useEffect)((function(){e==ce&&window.setTimeout((function(){return window.dispatchEvent(new Event("resize"))}),d)}),[e]);var c={};switch(e){default:c={swipeContent:0,personalContent:100,accountContent:-100};break;case ne:c={swipeContent:-100,personalContent:0,accountContent:-200};break;case ie:c={swipeContent:100,personalContent:200,accountContent:0}}return Object(b.jsxs)("div",{id:"mobile-content",className:"row full-height",style:{},children:[Object(b.jsx)("div",{className:"col-12 full-height",style:Object(O.a)(Object(O.a)({},t),{},{left:"".concat(c.accountContent,"%")}),children:Object(b.jsx)(I,{})}),Object(b.jsx)("div",{className:"col-12 full-height",style:Object(O.a)(Object(O.a)({},t),{},{left:"".concat(c.swipeContent,"%")}),children:Object(b.jsx)($,{})}),Object(b.jsx)("div",{className:"col-12 full-height",style:Object(O.a)(Object(O.a)({},t),{},{left:"".concat(c.personalContent,"%")}),children:Object(b.jsx)(q,{})})]})};var le=function(){var e=Object(o.d)((function(e){return e.mode.modeIsMobile})),t=Object(o.d)((function(e){return e.desktop.display})),c=Object(o.c)(),n={color:"white",transitionDuration:"".concat(250,"ms"),height:"calc(0.13 * (".concat(window.innerHeight,"px - ").concat(l,"px - ").concat(e?60:0,"px))")},i={color:"var(--theme-color-4)",transitionDuration:"".concat(250,"ms"),height:"calc(0.13 * (".concat(window.innerHeight,"px - ").concat(l,"px - ").concat(e?60:0,"px))")},a={display:"".concat(e?"none":"block"),height:"calc(".concat(window.innerHeight,"px - ").concat(l,"px - ").concat(e?60:0,"px)"),width:"".concat(60,"px")};return Object(b.jsxs)("div",{id:"side-bar",className:"row full-height justify-content-center align-items-center",style:a,children:[Object(b.jsx)("div",{className:"col-12 nav-bar-btn clickable",onClick:function(){return c(x(p))},children:Object(b.jsx)(w.a,{icon:y.f,size:"lg",style:t==p?n:i})}),Object(b.jsx)("div",{className:"col-12 nav-bar-btn clickable",onClick:function(){return c(x(f))},children:Object(b.jsx)(w.a,{icon:y.c,size:"lg",style:t==f?n:i})})]})};var de=function(){var e=Object(o.d)((function(e){return e.mode.modeIsMobile})),t=Object(o.d)((function(e){return e.windowConfig.mcHeight})),c={height:"".concat(t,"px")};return Object(b.jsx)("div",{id:"main-content",className:"container-fluid",style:c,children:Object(b.jsx)("div",{className:"row full-height",children:e?Object(b.jsx)("div",{className:"col-12 full-height",children:Object(b.jsx)(re,{})}):Object(b.jsxs)("div",{className:"col-12 full-height d-flex",children:[Object(b.jsx)(le,{}),Object(b.jsx)(ee,{})]})})})};var ue=function(){var e=Object(o.d)((function(e){return e.mode.modeIsMobile})),t=Object(o.d)((function(e){return e.mobile.display})),c=Object(o.c)(),n={color:"white",transitionDuration:"".concat(d,"ms")},i={color:"var(--theme-color-4)",transitionDuration:"".concat(d,"ms")},a={display:"".concat(e?"block":"none"),height:"".concat(60,"px")};return Object(b.jsx)("div",{id:"nav-bar",className:"container-fluid",style:a,children:Object(b.jsxs)("div",{className:"row full-height",children:[Object(b.jsx)("div",{className:"col-4 full-height nav-bar-btn clickable",onClick:function(){return c(ae(ie))},children:Object(b.jsx)(w.a,{icon:y.f,size:"lg",style:t==ie?n:i})}),Object(b.jsx)("div",{className:"col-4 full-height nav-bar-btn clickable",onClick:function(){return c(ae(ce))},children:Object(b.jsx)(w.a,{icon:y.a,size:"lg",style:t==ce?n:i})}),Object(b.jsx)("div",{className:"col-4 full-height nav-bar-btn clickable",onClick:function(){return c(ae(ne))},children:Object(b.jsx)(w.a,{icon:y.c,size:"lg",style:t==ne?n:i})})]})})},je="LOGIN_USER",be="CREATE_USER";var he=function(){var e=Object(n.useState)(""),t=Object(L.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(""),s=Object(L.a)(a,2),l=s[0],d=s[1],u=Object(n.useState)(""),j=Object(L.a)(u,2),h=j[0],m=j[1],p=Object(n.useState)(""),f=Object(L.a)(p,2),x=f[0],v=f[1],g=Object(n.useState)(!0),y=Object(L.a)(g,2),w=y[0],S=y[1],C=Object(n.useState)(!1),E=Object(L.a)(C,2),T=E[0],R=E[1],k=Object(n.useState)(je),_=Object(L.a)(k,2),M=_[0],P=_[1],I=Object(o.c)(),D=Object(o.d)((function(e){return e.login.loggedIn})),q={transitionDuration:"".concat(r,"ms"),width:"".concat(w?"100%":"0")};q=T?Object(O.a)(Object(O.a)({},q),{},{opacity:0,transform:"scale(25)"}):Object(O.a)(Object(O.a)({},q),{},{opacity:1,transform:"scale(1)"}),Object(n.useEffect)((function(){D?(R(!0),window.setTimeout((function(){S(!1)}),r)):(R(!1),S(!0))}),[D]);var B=function(){i(""),d(""),m(""),v("")},z={transitionDuration:"".concat(1e3,"ms")},A=0;if(M===be)A=-100;else A=0;return Object(b.jsx)("div",{id:"login-page",className:"container-fluid full-height",style:q,children:Object(b.jsx)("div",{className:"row full-height",style:{opacity:"".concat(T?0:1),transitionDuration:"".concat(T?250:3e3,"ms")},children:Object(b.jsxs)("div",{className:"col-12 full-height d-flex flex-column justify-content-center align-items-center",children:[Object(b.jsx)("div",{className:"row d-flex",style:{marginBottom:"2rem"},children:Object(b.jsxs)("div",{className:"col-12",style:{fontSize:"2.5rem",lineHeight:"1"},children:[Object(b.jsx)("div",{children:"PennHub"}),Object(b.jsx)("div",{style:{fontSize:"0.75rem"},children:"\xa0 by Penn Spark Gray"})]})}),""==x?"":Object(b.jsx)("div",{className:"row d-flex",style:{marginBottom:"1rem",color:"red",fontSize:"0.75rem"},children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsx)("div",{children:x})})}),Object(b.jsxs)("div",{className:"row",style:{width:"100%",position:"relative",flexWrap:"nowrap",alignItems:"start"},children:[Object(b.jsxs)("div",{className:"col-12 login-display",style:Object(O.a)(Object(O.a)({},z),{},{left:"".concat(A,"vw")}),children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/user?username=".concat(c,"&password=").concat(l)).then((function(e){return e.json()})).then((function(e){e.success?(B(),I({type:N})):"string"==typeof e.msg?v(e.msg):v("SERVER ERROR")}),(function(e){v("SERVER ERROR")}))},children:[Object(b.jsx)("div",{className:"row",style:{marginBottom:"1rem"},children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsxs)("label",{children:[" Username",Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"username",value:c,onChange:function(e){return i(e.target.value)},disabled:"".concat(T?"disabled":"")})]})})}),Object(b.jsx)("div",{className:"row",style:{marginBottom:"1rem"},children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsxs)("label",{children:[" Password",Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"password",value:l,onChange:function(e){return d(e.target.value)},disabled:"".concat(T?"disabled":"")})]})})}),Object(b.jsx)("div",{className:"row d-flex",style:{marginBottom:"2rem"},children:Object(b.jsx)("div",{className:"col-12 d-flex justify-content-center align-items-center",children:Object(b.jsx)("button",{className:"clickable login-btn login-submit-btn",disabled:"".concat(T?"disabled":""),children:"Log In"})})})]}),Object(b.jsx)("div",{className:"row d-flex",children:Object(b.jsx)("div",{className:"col-12 clickable login-btn",onClick:function(){B(),P(be)},children:Object(b.jsx)("div",{children:"Create New User"})})})]}),Object(b.jsxs)("div",{className:"col-12 login-display",style:Object(O.a)(Object(O.a)({},z),{},{left:"".concat(A,"vw")}),children:[Object(b.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),l!=h)v("passwords don't match");else if(l.length<5)v("passwords must be at least 5 characters");else{var t={username:c,password:l};fetch("/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log(e),e.success?(B(),P(je)):"string"==typeof e.msg?v(e.msg):v("SERVER ERROR")}),(function(e){v("SERVER ERROR")}))}},children:[Object(b.jsx)("div",{className:"row",style:{marginBottom:"1rem"},children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsxs)("label",{children:[" Set Username",Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"username",value:c,onChange:function(e){return i(e.target.value)},disabled:"".concat(T?"disabled":"")})]})})}),Object(b.jsx)("div",{className:"row",style:{marginBottom:"1rem"},children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsxs)("label",{children:[" Set Password",Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"password",value:l,onChange:function(e){return d(e.target.value)},disabled:"".concat(T?"disabled":"")})]})})}),Object(b.jsx)("div",{className:"row",style:{marginBottom:"1rem"},children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsxs)("label",{children:[" Confirm Password",Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"confirmPassword",value:h,onChange:function(e){return m(e.target.value)},disabled:"".concat(T?"disabled":"")})]})})}),Object(b.jsx)("div",{className:"row d-flex",style:{marginBottom:"2rem"},children:Object(b.jsx)("div",{className:"col-12 d-flex justify-content-center align-items-center",children:Object(b.jsx)("button",{className:"clickable login-btn login-submit-btn",disabled:"".concat(T?"disabled":""),children:"Create New User"})})})]}),Object(b.jsx)("div",{className:"row d-flex",children:Object(b.jsx)("div",{className:"col-12 clickable login-btn",onClick:function(){B(),P(je)},children:Object(b.jsx)("div",{children:"Cancel"})})})]})]})]})})})};var Oe=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)(he,{}),Object(b.jsx)(h,{}),Object(b.jsx)(de,{}),Object(b.jsx)(ue,{})]})})},me=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))},pe=c(13),fe="SET_MC_HEIGHT",xe=function(e){return{type:fe,payload:{mcHeight:e}}},ve={mcHeight:0},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;return t.type===fe?Object(O.a)(Object(O.a)({},e),{},{mcHeight:t.payload.mcHeight}):e},ye=Object(pe.a)({mode:P,swipe:Q,mobile:oe,windowConfig:ge,desktop:g,cardManager:H,login:E}),we=Object(pe.b)(ye,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),Ne=function(){var e=window.innerWidth,t=window.innerHeight;!(e>=992&&e>t)?(we.dispatch({type:T,payload:{}}),we.dispatch(xe(t-l-60))):(we.dispatch({type:R,payload:{}}),we.dispatch(xe(t-l)))};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(o.a,{store:we,children:Object(b.jsx)(Oe,{})})}),document.getElementById("root")),console.log("Initializing React App..."),window.addEventListener("resize",(function(){Ne()})),Ne(),we.dispatch(A(j)),me()}},[[31,1,2]]]);
//# sourceMappingURL=main.e015fc52.chunk.js.map