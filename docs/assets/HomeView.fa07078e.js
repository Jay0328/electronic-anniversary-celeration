import{d as k,r as h,w as q,o as w,c as S,a as s,b as z,e as F,f as J,g as O,n as R,u as j,p as T,h as D,i as P}from"./index.2cf9ee0a.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";const m=24,K=1500,b=20,Q=10;function U(c){const n=c.getContext("2d"),o=c.height,i=o/2,u=c.width,l=u/2,r=[];let g=Date.now(),p=0,v;function f(e,a){e=(e-l)/l*3,a=(a-i)/i*-3;const t=e*e,_=a*a;return Math.pow(t+_-1,3)-t*(_*a)<0}function $(e,a){let t=0,_=a;do e/=_,_+=a,t+=e*Math.random();while(e>=1);return t}function A(){let e=l,a=i;const t=~~$(m,2.4);let _=(m+b-t)/2-Math.random()*(m+b-t),x=(m+b-t)/2-Math.random()*(m+b-t),y=e,C=a,I,B,G;const N=.05*t;return{draw(){I=~~(255*(e/u)),B=~~(255*(1-a/o)),G=~~(255-I),n.fillStyle="rgba("+I+","+B+","+G+","+N+")",n.beginPath(),n.arc(e,a,t,0,Math.PI*2,!0),n.closePath(),n.fill()},move(L){if(y+=_*L,C+=x*L,!f(y,C)){if(!f(y,a)){_*=-1;return}if(!f(e,C)){x*=-1;return}_=-1*x,x=-1*_;return}e=y,a=C}}}function H(){const e=r.length,a=K-e;for(let t=0;t<a&&t<Q;t++)r.push(A());p=Date.now(),v=g-p,v/=1e3,g=p,r.forEach(function(t){t.move(v)})}function E(){n.clearRect(0,0,u,o),r.forEach(function(e){e.draw()}),requestAnimationFrame(E)}setInterval(H,16),E()}const W={class:"love-cover"},X=k({__name:"LoveCover",setup(c){const n=h();return q(()=>{const o=n.value;!o||U(o)}),(o,i)=>(w(),S("div",W,[s("canvas",{ref_key:"canvasRef",ref:n,width:480,height:480},null,512)]))}});const Y=M(X,[["__scopeId","data-v-e6b56100"]]),d=c=>(T("data-v-d05c03a3"),c=c(),D(),c),Z={class:"wrap"},ee=d(()=>s("p",null,"Hi birthday person,",-1)),te=d(()=>s("p",null,"Congratulations with your xxth birthday!",-1)),oe=d(()=>s("p",null," I hope you'll have a splendid day. Lorem ipsum dolor sit amet consectetur adipiscing elit. ",-1)),se=d(()=>s("p",null," Maecenas sed elit id elit molestie fringilla. Vivamus urna elit, bibendum vel congue ullamcorper, interdum ut turpis. ",-1)),ne=d(()=>s("p",null," Praesent porta magna et scelerisque egestas. Donec ullamcorper dolor vitae tempor volutpat. ",-1)),ae=d(()=>s("p",{class:"signed"},"Micha\xEBl",-1)),ce={class:"wrap"},ie=d(()=>s("h1",null,"Angie & Jay",-1)),le=d(()=>s("h1",null,"4th",-1)),re=k({__name:"Card",emits:["show-gift"],setup(c,{emit:n}){const o=h(!1),i=h("fully"),u=z(()=>`${o.value?"open":"close"}-${i.value}`),l=p=>{i.value==="fully"&&(o.value=p)},r=()=>l(!0),g=()=>l(!1);return F(o,(p,v,f)=>{i.value="half";const $=window.setTimeout(()=>{i.value="fully"},1e3);f(()=>{window.clearTimeout($)})}),(p,v)=>(w(),S("div",{class:R(["card",j(u)])},[s("div",{class:"content",onClick:g},[s("div",Z,[ee,te,oe,se,ne,ae,s("button",{onClick:v[0]||(v[0]=J(f=>n("show-gift"),["stop"]))},"\u9818\u53D6\u79AE\u7269")])]),s("div",{class:"cover",onClick:r},[s("div",ce,[O(Y),ie,le])])],2))}});const _e=M(re,[["__scopeId","data-v-d05c03a3"]]),V=c=>(T("data-v-66e3925c"),c=c(),D(),c),ue=V(()=>s("div",{class:"cover"},[s("div")],-1)),de=V(()=>s("div",{class:"box"},null,-1)),pe=[ue,de],ve=k({__name:"Gift",setup(c){const n=h(),o=h(0),i=[2e3,2e3,1e3,1e3],u=()=>{const l=o.value,r=l+1;o.value=r,r<4&&window.setTimeout(u,i[l])};return(l,r)=>(w(),S("div",{ref_key:"boxRef",ref:n,class:R(["giftbox",{[`step-${o.value}`]:o.value}]),onClick:u},pe,2))}});const fe=M(ve,[["__scopeId","data-v-66e3925c"]]),we=k({__name:"HomeView",setup(c){const n=h(!1);return(o,i)=>n.value?(w(),P(fe,{key:0})):(w(),P(_e,{key:1,onShowGift:i[0]||(i[0]=u=>n.value=!0)}))}});export{we as default};
