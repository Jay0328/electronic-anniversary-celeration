import{d as B,r as v,w as k,o as E,c as g,a as t,b as J,e as z,f as X,g as H,n as w,u as Y,p as b,h as I,i as G}from"./index.4905770d.js";import{_ as x}from"./plugin-vueexport-helper.2444895f.js";const m=24,j=1500,$=20,q=10;function K(u){const n=u.getContext("2d"),l=u.height,s=l/2,d=u.width,r=d/2,f=[];let o=Date.now(),e=0,i;function p(c,_){c=(c-r)/r*3,_=(_-s)/s*-3;const a=c*c,h=_*_;return Math.pow(a+h-1,3)-a*(h*_)<0}function F(c,_){let a=0,h=_;do c/=h,h+=_,a+=c*Math.random();while(c>=1);return a}function L(){let c=r,_=s;const a=~~F(m,2.4);let h=(m+$-a)/2-Math.random()*(m+$-a),A=(m+$-a)/2-Math.random()*(m+$-a),y=c,D=_,S,R,P;const O=.05*a;return{draw(){S=~~(255*(c/d)),R=~~(255*(1-_/l)),P=~~(255-S),n.fillStyle="rgba("+S+","+R+","+P+","+O+")",n.beginPath(),n.arc(c,_,a,0,Math.PI*2,!0),n.closePath(),n.fill()},move(M){if(y+=h*M,D+=A*M,!p(y,D)){if(!p(y,_)){h*=-1;return}if(!p(c,D)){A*=-1;return}h=-1*A,A=-1*h;return}c=y,_=D}}}function N(){const c=f.length,_=j-c;for(let a=0;a<_&&a<q;a++)f.push(L());e=Date.now(),i=o-e,i/=1e3,o=e,f.forEach(function(a){a.move(i)})}function T(){n.clearRect(0,0,d,l),f.forEach(function(c){c.draw()}),requestAnimationFrame(T)}setInterval(N,16),T()}const Q={class:"love-cover"},U=B({__name:"LoveCover",setup(u){const n=v();return k(()=>{const l=n.value;!l||K(l)}),(l,s)=>(E(),g("div",Q,[t("canvas",{ref_key:"canvasRef",ref:n,width:480,height:480},null,512)]))}});const W=x(U,[["__scopeId","data-v-e6b56100"]]),C=u=>(b("data-v-02ef17f8"),u=u(),I(),u),Z={class:"wrap"},ee=C(()=>t("p",null,"\u55E8~\u6211\u5BB6\u7684\u53EF\u611B\u5BF6\u8C9D\u55B5\u55B5",-1)),te=C(()=>t("p",null," \u4E0D\u77E5\u4E0D\u89BA\u6211\u5011\u8A8D\u8B58\u8D85\u904E\u56DB\u5E74\u4E86\uFF0C\u4E5F\u7FD2\u6163\u4E86\u4F60\u6BCF\u5929\u966A\u4F34\u5728\u6211\u8EAB\u908A\u7684\u65E5\u5E38\uFF0C\u6709\u6642\u5019\u6211\u7368\u81EA\u5728\u5BB6\u7684\u6642\u5019\u7E3D\u662F\u89BA\u5F97\u4E0D\u592A\u81EA\u5728\uFF0C \u4F60\u7684\u5B58\u5728\u597D\u50CF\u6F38\u6F38\u5730\u8B8A\u6210\u6211\u9019\u500B\u4EBA\u7684\u4E00\u90E8\u4EFD\u3002 ",-1)),ue=C(()=>t("p",null," \u5C31\u7B97\u665A\u4E0A\u7684\u6642\u5019\u6211\u5011\u5404\u81EA\u505A\u8457\u4E0D\u540C\u7684\u4E8B\uFF0C\u53EA\u8981\u6709\u4F60\u5728\u6211\u8EAB\u908A\uFF0C\u6211\u5C31\u6703\u89BA\u5F97\u6211\u7684\u5FC3\u662F\u5E73\u975C\u7684\uFF0C\u4F60\u5C0D\u6211\u4F86\u8AAA\u5C31\u662F\u6709\u7A2E\u795E\u79D8\u7684\u55B5\u55B5\u529B\u91CF\u3002 ",-1)),se=C(()=>t("p",null,"\u6700\u611B\u4F60\u4E86\uFF0C\u4EE5\u5F8C\u4E5F\u6703\u4E00\u76F4\u611B\u4F60",-1)),ne=C(()=>t("p",null,"\u5E0C\u671B\u63A5\u4E0B\u4F86\u6211\u5011\u4E5F\u80FD\u4E00\u6A23\u5FEB\u6A02",-1)),oe=C(()=>t("p",{class:"signed"},"Jay, 2022-10-22",-1)),ce={class:"wrap"},ae=C(()=>t("h1",null,"Angie & Jay",-1)),le=C(()=>t("h1",null,"4th",-1)),ie=B({__name:"Card",emits:["show-gift"],setup(u,{emit:n}){const l=v(!1),s=v("fully"),d=J(()=>`${l.value?"open":"close"}-${s.value}`),r=e=>{s.value==="fully"&&(l.value=e)},f=()=>r(!0),o=()=>r(!1);return z(l,(e,i,p)=>{s.value="half";const F=window.setTimeout(()=>{s.value="fully"},1e3);p(()=>{window.clearTimeout(F)})}),(e,i)=>(E(),g("div",{class:w(["card",Y(d)])},[t("div",{class:"content",onClick:o},[t("div",Z,[ee,te,ue,se,ne,oe,t("button",{class:"receive-gift",onClick:i[0]||(i[0]=X(p=>n("show-gift"),["stop"]))}," \u9818\u53D6\u79AE\u7269 ")])]),t("div",{class:"cover",onClick:f},[t("div",ce,[H(W),ae,le])])],2))}});const _e=x(ie,[["__scopeId","data-v-02ef17f8"]]),V=u=>(b("data-v-6cde0240"),u=u(),I(),u),re=V(()=>t("div",{class:"cover"},[t("div")],-1)),de=V(()=>t("div",{class:"box"},null,-1)),fe=[re,de],ve=B({__name:"Gift",emits:["opened"],setup(u,{emit:n}){const l=v(),s=v(0),d=[1500,600];let r=!1;const f=()=>{r||(r=!0,o())},o=()=>{const e=s.value,i=e+1;i<3?(s.value=i,window.setTimeout(o,d[e])):n("opened")};return(e,i)=>(E(),g("div",{ref_key:"boxRef",ref:l,class:w(["giftbox",{[`step-${s.value}`]:s.value}]),onClick:f},fe,2))}});const he=x(ve,[["__scopeId","data-v-6cde0240"]]),pe=u=>(b("data-v-41792ad8"),u=u(),I(),u),Ce={class:"scratch"},Ee=pe(()=>t("h1",null,"\u79B9\u6770\u724C\u522E\u522E\u6A02",-1)),Fe={class:"canvas-container"},me=B({__name:"Scratch",setup(u){const s=v(),d=v(),r=v(!1),f=o=>{if(!r.value)return;const i=d.value.getContext("2d"),p=o.offsetX,F=o.offsetY;i.beginPath(),i.arc(p,F,20,0,Math.PI*2),i.fill()};return k(()=>{const o=s.value;if(!o)return;const e=o.getContext("2d");e.font="16px Noto Sans TC",e.fillText("\u8ACB\u622A\u5716\u5B58\u8B49",150,320),e.fillText("\u5230\u79B9\u6770\u5E8A\u4E0A\u9818\u734E",150,340),e.fillText("10\u842C\u51FA\u570B\u723D\u5237",20,20),e.fillText("\u9CF3\u51F0\u96FB\u6CE2\u7121\u9650\u8D0A\u52A9",200,150),e.fillText("\u4E0B\u6B21\u642C\u5BB6\u5C31\u990A\u8C93\u8C93",60,500)}),k(()=>{const o=d.value;if(!o)return;const e=o.getContext("2d");e.fillStyle="silver",e.fillRect(0,0,360,600),e.globalCompositeOperation="destination-out"}),(o,e)=>(E(),g("div",Ce,[Ee,t("div",Fe,[t("canvas",{ref_key:"bgCanvasRef",ref:s,width:360,height:600},null,512),t("canvas",{ref_key:"fgCanvasRef",ref:d,width:360,height:600,onPointerdown:e[0]||(e[0]=i=>r.value=!0),onPointerup:e[1]||(e[1]=i=>r.value=!1),onPointermove:f},null,544)])]))}});const we=x(me,[["__scopeId","data-v-41792ad8"]]),Be={key:1,class:"gift-container"},ge=B({__name:"HomeView",setup(u){const n=v("card"),l=v(!1),s=v(!1),d=v(!1),r=()=>{l.value=!0,window.setTimeout(()=>{n.value="gift",window.setTimeout(()=>{s.value=!0},100)},1e3)},f=()=>{n.value="scratch",window.setTimeout(()=>{d.value=!0},100)};return(o,e)=>n.value==="card"?(E(),G(_e,{key:0,class:w({hidden:l.value}),onShowGift:r},null,8,["class"])):n.value==="gift"?(E(),g("div",Be,[H(he,{class:w({shown:s.value}),onOpened:f},null,8,["class"])])):(E(),G(we,{key:2,class:w({shown:d.value})},null,8,["class"]))}});const ye=x(ge,[["__scopeId","data-v-c94e097e"]]);export{ye as default};