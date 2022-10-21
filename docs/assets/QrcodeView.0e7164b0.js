import{j as Ut,r as dt,w as kt,b as Ot,d as zt,c as Vt,k as Ht,a as Kt,u as Jt,o as Qt}from"./index.2cf9ee0a.js";import{_ as Yt}from"./_plugin-vue_export-helper.cdc0426e.js";var gt;const Q=typeof window<"u",$t=()=>{};Q&&((gt=window==null?void 0:window.navigator)==null?void 0:gt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function jt(e){return e}function Gt(e,t,o){let i;Ut(o)?i={evaluating:o}:i=o||{};const{lazy:r=!1,evaluating:n=void 0,onError:s=$t}=i,a=dt(!r),u=dt(t);let c=0;return kt(async l=>{if(!a.value)return;c++;const C=c;let g=!1;n&&Promise.resolve().then(()=>{n.value=!0});try{const f=await e(m=>{l(()=>{n&&(n.value=!1),g||m()})});C===c&&(u.value=f)}catch(f){s(f)}finally{n&&C===c&&(n.value=!1),g=!0}}),r?Ot(()=>(a.value=!0,u.value)):u}Q&&window.document;Q&&window.navigator;Q&&window.location;const et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nt="__vueuse_ssr_handlers__";et[nt]=et[nt]||{};et[nt];var ht;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ht||(ht={}));var qt=Object.defineProperty,wt=Object.getOwnPropertySymbols,Wt=Object.prototype.hasOwnProperty,Zt=Object.prototype.propertyIsEnumerable,mt=(e,t,o)=>t in e?qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Xt=(e,t)=>{for(var o in t||(t={}))Wt.call(t,o)&&mt(e,o,t[o]);if(wt)for(var o of wt(t))Zt.call(t,o)&&mt(e,o,t[o]);return e};const xt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Xt({linear:jt},xt);var te=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},pt={},N={};let ut;const ee=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];N.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};N.getSymbolTotalCodewords=function(t){return ee[t]};N.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};N.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');ut=t};N.isKanjiModeEnabled=function(){return typeof ut<"u"};N.toSJIS=function(t){return ut(t)};var Y={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+o)}}e.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},e.from=function(i,r){if(e.isValid(i))return i;try{return t(i)}catch{return r}}})(Y);function Bt(){this.buffer=[],this.length=0}Bt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let o=0;o<t;o++)this.putBit((e>>>t-o-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var ne=Bt;function z(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}z.prototype.set=function(e,t,o,i){const r=e*this.size+t;this.data[r]=o,i&&(this.reservedBit[r]=!0)};z.prototype.get=function(e,t){return this.data[e*this.size+t]};z.prototype.xor=function(e,t,o){this.data[e*this.size+t]^=o};z.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var re=z,It={};(function(e){const t=N.getSymbolSize;e.getRowColCoords=function(i){if(i===1)return[];const r=Math.floor(i/7)+2,n=t(i),s=n===145?26:Math.ceil((n-13)/(2*r-2))*2,a=[n-7];for(let u=1;u<r-1;u++)a[u]=a[u-1]-s;return a.push(6),a.reverse()},e.getPositions=function(i){const r=[],n=e.getRowColCoords(i),s=n.length;for(let a=0;a<s;a++)for(let u=0;u<s;u++)a===0&&u===0||a===0&&u===s-1||a===s-1&&u===0||r.push([n[a],n[u]]);return r}})(It);var At={};const oe=N.getSymbolSize,yt=7;At.getPositions=function(t){const o=oe(t);return[[0,0],[o-yt,0],[0,o-yt]]};var Nt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){const n=r.size;let s=0,a=0,u=0,c=null,l=null;for(let C=0;C<n;C++){a=u=0,c=l=null;for(let g=0;g<n;g++){let f=r.get(C,g);f===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=f,a=1),f=r.get(g,C),f===l?u++:(u>=5&&(s+=t.N1+(u-5)),l=f,u=1)}a>=5&&(s+=t.N1+(a-5)),u>=5&&(s+=t.N1+(u-5))}return s},e.getPenaltyN2=function(r){const n=r.size;let s=0;for(let a=0;a<n-1;a++)for(let u=0;u<n-1;u++){const c=r.get(a,u)+r.get(a,u+1)+r.get(a+1,u)+r.get(a+1,u+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(r){const n=r.size;let s=0,a=0,u=0;for(let c=0;c<n;c++){a=u=0;for(let l=0;l<n;l++)a=a<<1&2047|r.get(c,l),l>=10&&(a===1488||a===93)&&s++,u=u<<1&2047|r.get(l,c),l>=10&&(u===1488||u===93)&&s++}return s*t.N3},e.getPenaltyN4=function(r){let n=0;const s=r.data.length;for(let u=0;u<s;u++)n+=r.data[u];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function o(i,r,n){switch(i){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}e.applyMask=function(r,n){const s=n.size;for(let a=0;a<s;a++)for(let u=0;u<s;u++)n.isReserved(u,a)||n.xor(u,a,o(r,u,a))},e.getBestMask=function(r,n){const s=Object.keys(e.Patterns).length;let a=0,u=1/0;for(let c=0;c<s;c++){n(c),e.applyMask(c,r);const l=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(c,r),l<u&&(u=l,a=c)}return a}})(Nt);var $={};const S=Y,V=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],H=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];$.getBlocksCount=function(t,o){switch(o){case S.L:return V[(t-1)*4+0];case S.M:return V[(t-1)*4+1];case S.Q:return V[(t-1)*4+2];case S.H:return V[(t-1)*4+3];default:return}};$.getTotalCodewordsCount=function(t,o){switch(o){case S.L:return H[(t-1)*4+0];case S.M:return H[(t-1)*4+1];case S.Q:return H[(t-1)*4+2];case S.H:return H[(t-1)*4+3];default:return}};var Tt={},j={};const k=new Uint8Array(512),K=new Uint8Array(256);(function(){let t=1;for(let o=0;o<255;o++)k[o]=t,K[t]=o,t<<=1,t&256&&(t^=285);for(let o=255;o<512;o++)k[o]=k[o-255]})();j.log=function(t){if(t<1)throw new Error("log("+t+")");return K[t]};j.exp=function(t){return k[t]};j.mul=function(t,o){return t===0||o===0?0:k[K[t]+K[o]]};(function(e){const t=j;e.mul=function(i,r){const n=new Uint8Array(i.length+r.length-1);for(let s=0;s<i.length;s++)for(let a=0;a<r.length;a++)n[s+a]^=t.mul(i[s],r[a]);return n},e.mod=function(i,r){let n=new Uint8Array(i);for(;n.length-r.length>=0;){const s=n[0];for(let u=0;u<r.length;u++)n[u]^=t.mul(r[u],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},e.generateECPolynomial=function(i){let r=new Uint8Array([1]);for(let n=0;n<i;n++)r=e.mul(r,new Uint8Array([1,t.exp(n)]));return r}})(Tt);const _t=Tt;function at(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}at.prototype.initialize=function(t){this.degree=t,this.genPoly=_t.generateECPolynomial(this.degree)};at.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const o=new Uint8Array(t.length+this.degree);o.set(t);const i=_t.mod(o,this.genPoly),r=this.degree-i.length;if(r>0){const n=new Uint8Array(this.degree);return n.set(i,r),n}return i};var ie=at,Pt={},R={},ct={};ct.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var P={};const bt="[0-9]+",se="[A-Z $%*+\\-./:]+";let O="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";O=O.replace(/u/g,"\\u");const ue="(?:(?![A-Z0-9 $%*+\\-./:]|"+O+`)(?:.|[\r
]))+`;P.KANJI=new RegExp(O,"g");P.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");P.BYTE=new RegExp(ue,"g");P.NUMERIC=new RegExp(bt,"g");P.ALPHANUMERIC=new RegExp(se,"g");const ae=new RegExp("^"+O+"$"),ce=new RegExp("^"+bt+"$"),le=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");P.testKanji=function(t){return ae.test(t)};P.testNumeric=function(t){return ce.test(t)};P.testAlphanumeric=function(t){return le.test(t)};(function(e){const t=ct,o=P;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return o.testNumeric(n)?e.NUMERIC:o.testAlphanumeric(n)?e.ALPHANUMERIC:o.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function i(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(n,s){if(e.isValid(n))return n;try{return i(n)}catch{return s}}})(R);(function(e){const t=N,o=$,i=Y,r=R,n=ct,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,a=t.getBCHDigit(s);function u(g,f,m){for(let y=1;y<=40;y++)if(f<=e.getCapacity(y,m,g))return y}function c(g,f){return r.getCharCountIndicator(g,f)+4}function l(g,f){let m=0;return g.forEach(function(y){const A=c(y.mode,f);m+=A+y.getBitsLength()}),m}function C(g,f){for(let m=1;m<=40;m++)if(l(g,m)<=e.getCapacity(m,f,r.MIXED))return m}e.from=function(f,m){return n.isValid(f)?parseInt(f,10):m},e.getCapacity=function(f,m,y){if(!n.isValid(f))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=r.BYTE);const A=t.getSymbolTotalCodewords(f),w=o.getTotalCodewordsCount(f,m),E=(A-w)*8;if(y===r.MIXED)return E;const h=E-c(y,f);switch(y){case r.NUMERIC:return Math.floor(h/10*3);case r.ALPHANUMERIC:return Math.floor(h/11*2);case r.KANJI:return Math.floor(h/13);case r.BYTE:default:return Math.floor(h/8)}},e.getBestVersionForData=function(f,m){let y;const A=i.from(m,i.M);if(Array.isArray(f)){if(f.length>1)return C(f,A);if(f.length===0)return 1;y=f[0]}else y=f;return u(y.mode,y.getLength(),A)},e.getEncodedBits=function(f){if(!n.isValid(f)||f<7)throw new Error("Invalid QR Code version");let m=f<<12;for(;t.getBCHDigit(m)-a>=0;)m^=s<<t.getBCHDigit(m)-a;return f<<12|m}})(Pt);var Mt={};const rt=N,St=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,fe=1<<14|1<<12|1<<10|1<<4|1<<1,Et=rt.getBCHDigit(St);Mt.getEncodedBits=function(t,o){const i=t.bit<<3|o;let r=i<<10;for(;rt.getBCHDigit(r)-Et>=0;)r^=St<<rt.getBCHDigit(r)-Et;return(i<<10|r)^fe};var Rt={};const de=R;function L(e){this.mode=de.NUMERIC,this.data=e.toString()}L.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};L.prototype.getLength=function(){return this.data.length};L.prototype.getBitsLength=function(){return L.getBitsLength(this.data.length)};L.prototype.write=function(t){let o,i,r;for(o=0;o+3<=this.data.length;o+=3)i=this.data.substr(o,3),r=parseInt(i,10),t.put(r,10);const n=this.data.length-o;n>0&&(i=this.data.substr(o),r=parseInt(i,10),t.put(r,n*3+1))};var ge=L;const he=R,W=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function v(e){this.mode=he.ALPHANUMERIC,this.data=e}v.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};v.prototype.getLength=function(){return this.data.length};v.prototype.getBitsLength=function(){return v.getBitsLength(this.data.length)};v.prototype.write=function(t){let o;for(o=0;o+2<=this.data.length;o+=2){let i=W.indexOf(this.data[o])*45;i+=W.indexOf(this.data[o+1]),t.put(i,11)}this.data.length%2&&t.put(W.indexOf(this.data[o]),6)};var we=v,me=function(t){for(var o=[],i=t.length,r=0;r<i;r++){var n=t.charCodeAt(r);if(n>=55296&&n<=56319&&i>r+1){var s=t.charCodeAt(r+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,r+=1)}if(n<128){o.push(n);continue}if(n<2048){o.push(n>>6|192),o.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){o.push(n>>12|224),o.push(n>>6&63|128),o.push(n&63|128);continue}if(n>=65536&&n<=1114111){o.push(n>>18|240),o.push(n>>12&63|128),o.push(n>>6&63|128),o.push(n&63|128);continue}o.push(239,191,189)}return new Uint8Array(o).buffer};const ye=me,Ee=R;function D(e){this.mode=Ee.BYTE,typeof e=="string"&&(e=ye(e)),this.data=new Uint8Array(e)}D.getBitsLength=function(t){return t*8};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(e){for(let t=0,o=this.data.length;t<o;t++)e.put(this.data[t],8)};var Ce=D;const pe=R,Be=N;function F(e){this.mode=pe.KANJI,this.data=e}F.getBitsLength=function(t){return t*13};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let o=Be.toSJIS(this.data[t]);if(o>=33088&&o<=40956)o-=33088;else if(o>=57408&&o<=60351)o-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);o=(o>>>8&255)*192+(o&255),e.put(o,13)}};var Ie=F,Lt={exports:{}};(function(e){var t={single_source_shortest_paths:function(o,i,r){var n={},s={};s[i]=0;var a=t.PriorityQueue.make();a.push(i,0);for(var u,c,l,C,g,f,m,y,A;!a.empty();){u=a.pop(),c=u.value,C=u.cost,g=o[c]||{};for(l in g)g.hasOwnProperty(l)&&(f=g[l],m=C+f,y=s[l],A=typeof s[l]>"u",(A||y>m)&&(s[l]=m,a.push(l,m),n[l]=c))}if(typeof r<"u"&&typeof s[r]>"u"){var w=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(w)}return n},extract_shortest_path_from_predecessor_list:function(o,i){for(var r=[],n=i;n;)r.push(n),o[n],n=o[n];return r.reverse(),r},find_path:function(o,i,r){var n=t.single_source_shortest_paths(o,i,r);return t.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(o){var i=t.PriorityQueue,r={},n;o=o||{};for(n in i)i.hasOwnProperty(n)&&(r[n]=i[n]);return r.queue=[],r.sorter=o.sorter||i.default_sorter,r},default_sorter:function(o,i){return o.cost-i.cost},push:function(o,i){var r={value:o,cost:i};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Lt);(function(e){const t=R,o=ge,i=we,r=Ce,n=Ie,s=P,a=N,u=Lt.exports;function c(w){return unescape(encodeURIComponent(w)).length}function l(w,E,h){const d=[];let p;for(;(p=w.exec(h))!==null;)d.push({data:p[0],index:p.index,mode:E,length:p[0].length});return d}function C(w){const E=l(s.NUMERIC,t.NUMERIC,w),h=l(s.ALPHANUMERIC,t.ALPHANUMERIC,w);let d,p;return a.isKanjiModeEnabled()?(d=l(s.BYTE,t.BYTE,w),p=l(s.KANJI,t.KANJI,w)):(d=l(s.BYTE_KANJI,t.BYTE,w),p=[]),E.concat(h,d,p).sort(function(I,T){return I.index-T.index}).map(function(I){return{data:I.data,mode:I.mode,length:I.length}})}function g(w,E){switch(E){case t.NUMERIC:return o.getBitsLength(w);case t.ALPHANUMERIC:return i.getBitsLength(w);case t.KANJI:return n.getBitsLength(w);case t.BYTE:return r.getBitsLength(w)}}function f(w){return w.reduce(function(E,h){const d=E.length-1>=0?E[E.length-1]:null;return d&&d.mode===h.mode?(E[E.length-1].data+=h.data,E):(E.push(h),E)},[])}function m(w){const E=[];for(let h=0;h<w.length;h++){const d=w[h];switch(d.mode){case t.NUMERIC:E.push([d,{data:d.data,mode:t.ALPHANUMERIC,length:d.length},{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.ALPHANUMERIC:E.push([d,{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.KANJI:E.push([d,{data:d.data,mode:t.BYTE,length:c(d.data)}]);break;case t.BYTE:E.push([{data:d.data,mode:t.BYTE,length:c(d.data)}])}}return E}function y(w,E){const h={},d={start:{}};let p=["start"];for(let B=0;B<w.length;B++){const I=w[B],T=[];for(let M=0;M<I.length;M++){const _=I[M],U=""+B+M;T.push(U),h[U]={node:_,lastCount:0},d[U]={};for(let q=0;q<p.length;q++){const b=p[q];h[b]&&h[b].node.mode===_.mode?(d[b][U]=g(h[b].lastCount+_.length,_.mode)-g(h[b].lastCount,_.mode),h[b].lastCount+=_.length):(h[b]&&(h[b].lastCount=_.length),d[b][U]=g(_.length,_.mode)+4+t.getCharCountIndicator(_.mode,E))}}p=T}for(let B=0;B<p.length;B++)d[p[B]].end=0;return{map:d,table:h}}function A(w,E){let h;const d=t.getBestModeForData(w);if(h=t.from(E,d),h!==t.BYTE&&h.bit<d.bit)throw new Error('"'+w+'" cannot be encoded with mode '+t.toString(h)+`.
 Suggested mode is: `+t.toString(d));switch(h===t.KANJI&&!a.isKanjiModeEnabled()&&(h=t.BYTE),h){case t.NUMERIC:return new o(w);case t.ALPHANUMERIC:return new i(w);case t.KANJI:return new n(w);case t.BYTE:return new r(w)}}e.fromArray=function(E){return E.reduce(function(h,d){return typeof d=="string"?h.push(A(d,null)):d.data&&h.push(A(d.data,d.mode)),h},[])},e.fromString=function(E,h){const d=C(E,a.isKanjiModeEnabled()),p=m(d),B=y(p,h),I=u.find_path(B.map,"start","end"),T=[];for(let M=1;M<I.length-1;M++)T.push(B.table[I[M]].node);return e.fromArray(f(T))},e.rawSplit=function(E){return e.fromArray(C(E,a.isKanjiModeEnabled()))}})(Rt);const G=N,Z=Y,Ae=ne,Ne=re,Te=It,_e=At,ot=Nt,it=$,Pe=ie,J=Pt,be=Mt,Me=R,X=Rt;function Se(e,t){const o=e.size,i=_e.getPositions(t);for(let r=0;r<i.length;r++){const n=i[r][0],s=i[r][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||o<=n+a))for(let u=-1;u<=7;u++)s+u<=-1||o<=s+u||(a>=0&&a<=6&&(u===0||u===6)||u>=0&&u<=6&&(a===0||a===6)||a>=2&&a<=4&&u>=2&&u<=4?e.set(n+a,s+u,!0,!0):e.set(n+a,s+u,!1,!0))}}function Re(e){const t=e.size;for(let o=8;o<t-8;o++){const i=o%2===0;e.set(o,6,i,!0),e.set(6,o,i,!0)}}function Le(e,t){const o=Te.getPositions(t);for(let i=0;i<o.length;i++){const r=o[i][0],n=o[i][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(r+s,n+a,!0,!0):e.set(r+s,n+a,!1,!0)}}function ve(e,t){const o=e.size,i=J.getEncodedBits(t);let r,n,s;for(let a=0;a<18;a++)r=Math.floor(a/3),n=a%3+o-8-3,s=(i>>a&1)===1,e.set(r,n,s,!0),e.set(n,r,s,!0)}function x(e,t,o){const i=e.size,r=be.getEncodedBits(t,o);let n,s;for(n=0;n<15;n++)s=(r>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(i-15+n,8,s,!0),n<8?e.set(8,i-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(i-8,8,1,!0)}function De(e,t){const o=e.size;let i=-1,r=o-1,n=7,s=0;for(let a=o-1;a>0;a-=2)for(a===6&&a--;;){for(let u=0;u<2;u++)if(!e.isReserved(r,a-u)){let c=!1;s<t.length&&(c=(t[s]>>>n&1)===1),e.set(r,a-u,c),n--,n===-1&&(s++,n=7)}if(r+=i,r<0||o<=r){r-=i,i=-i;break}}}function Fe(e,t,o){const i=new Ae;o.forEach(function(u){i.put(u.mode.bit,4),i.put(u.getLength(),Me.getCharCountIndicator(u.mode,e)),u.write(i)});const r=G.getSymbolTotalCodewords(e),n=it.getTotalCodewordsCount(e,t),s=(r-n)*8;for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const a=(s-i.getLengthInBits())/8;for(let u=0;u<a;u++)i.put(u%2?17:236,8);return Ue(i,e,t)}function Ue(e,t,o){const i=G.getSymbolTotalCodewords(t),r=it.getTotalCodewordsCount(t,o),n=i-r,s=it.getBlocksCount(t,o),a=i%s,u=s-a,c=Math.floor(i/s),l=Math.floor(n/s),C=l+1,g=c-l,f=new Pe(g);let m=0;const y=new Array(s),A=new Array(s);let w=0;const E=new Uint8Array(e.buffer);for(let I=0;I<s;I++){const T=I<u?l:C;y[I]=E.slice(m,m+T),A[I]=f.encode(y[I]),m+=T,w=Math.max(w,T)}const h=new Uint8Array(i);let d=0,p,B;for(p=0;p<w;p++)for(B=0;B<s;B++)p<y[B].length&&(h[d++]=y[B][p]);for(p=0;p<g;p++)for(B=0;B<s;B++)h[d++]=A[B][p];return h}function ke(e,t,o,i){let r;if(Array.isArray(e))r=X.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const l=X.rawSplit(e);c=J.getBestVersionForData(l,o)}r=X.fromString(e,c||40)}else throw new Error("Invalid data");const n=J.getBestVersionForData(r,o);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Fe(t,o,r),a=G.getSymbolSize(t),u=new Ne(a);return Se(u,t),Re(u),Le(u,t),x(u,o,0),t>=7&&ve(u,t),De(u,s),isNaN(i)&&(i=ot.getBestMask(u,x.bind(null,u,o))),ot.applyMask(i,u),x(u,o,i),{modules:u,version:t,errorCorrectionLevel:o,maskPattern:i,segments:r}}pt.create=function(t,o){if(typeof t>"u"||t==="")throw new Error("No input text");let i=Z.M,r,n;return typeof o<"u"&&(i=Z.from(o.errorCorrectionLevel,Z.M),r=J.from(o.version),n=ot.from(o.maskPattern),o.toSJISFunc&&G.setToSJISFunction(o.toSJISFunc)),ke(t,r,i,n)};var vt={},lt={};(function(e){function t(o){if(typeof o=="number"&&(o=o.toString()),typeof o!="string")throw new Error("Color should be defined as hex string");let i=o.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+o);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(n){return[n,n]}))),i.length===6&&i.push("F","F");const r=parseInt(i.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+i.slice(0,6).join("")}}e.getOptions=function(i){i||(i={}),i.color||(i.color={});const r=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,n=i.width&&i.width>=21?i.width:void 0,s=i.scale||4;return{width:n,scale:n?4:s,margin:r,color:{dark:t(i.color.dark||"#000000ff"),light:t(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},e.getScale=function(i,r){return r.width&&r.width>=i+r.margin*2?r.width/(i+r.margin*2):r.scale},e.getImageWidth=function(i,r){const n=e.getScale(i,r);return Math.floor((i+r.margin*2)*n)},e.qrToImageData=function(i,r,n){const s=r.modules.size,a=r.modules.data,u=e.getScale(s,n),c=Math.floor((s+n.margin*2)*u),l=n.margin*u,C=[n.color.light,n.color.dark];for(let g=0;g<c;g++)for(let f=0;f<c;f++){let m=(g*c+f)*4,y=n.color.light;if(g>=l&&f>=l&&g<c-l&&f<c-l){const A=Math.floor((g-l)/u),w=Math.floor((f-l)/u);y=C[a[A*s+w]?1:0]}i[m++]=y.r,i[m++]=y.g,i[m++]=y.b,i[m]=y.a}}})(lt);(function(e){const t=lt;function o(r,n,s){r.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,a){let u=a,c=s;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(c=i()),u=t.getOptions(u);const l=t.getImageWidth(n.modules.size,u),C=c.getContext("2d"),g=C.createImageData(l,l);return t.qrToImageData(g.data,n,u),o(C,c,l),C.putImageData(g,0,0),c},e.renderToDataURL=function(n,s,a){let u=a;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const c=e.render(n,s,u),l=u.type||"image/png",C=u.rendererOpts||{};return c.toDataURL(l,C.quality)}})(vt);var Dt={};const Oe=lt;function Ct(e,t){const o=e.a/255,i=t+'="'+e.hex+'"';return o<1?i+" "+t+'-opacity="'+o.toFixed(2).slice(1)+'"':i}function tt(e,t,o){let i=e+t;return typeof o<"u"&&(i+=" "+o),i}function ze(e,t,o){let i="",r=0,n=!1,s=0;for(let a=0;a<e.length;a++){const u=Math.floor(a%t),c=Math.floor(a/t);!u&&!n&&(n=!0),e[a]?(s++,a>0&&u>0&&e[a-1]||(i+=n?tt("M",u+o,.5+c+o):tt("m",r,0),r=0,n=!1),u+1<t&&e[a+1]||(i+=tt("h",s),s=0)):r++}return i}Dt.render=function(t,o,i){const r=Oe.getOptions(o),n=t.modules.size,s=t.modules.data,a=n+r.margin*2,u=r.color.light.a?"<path "+Ct(r.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+Ct(r.color.dark,"stroke")+' d="'+ze(s,n,r.margin)+'"/>',l='viewBox="0 0 '+a+" "+a+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+l+' shape-rendering="crispEdges">'+u+c+`</svg>
`;return typeof i=="function"&&i(null,g),g};const Ve=te,st=pt,Ft=vt,He=Dt;function ft(e,t,o,i,r){const n=[].slice.call(arguments,1),s=n.length,a=typeof n[s-1]=="function";if(!a&&!Ve())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(r=o,o=t,t=i=void 0):s===3&&(t.getContext&&typeof r>"u"?(r=i,i=void 0):(r=i,i=o,o=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(o=t,t=i=void 0):s===2&&!t.getContext&&(i=o,o=t,t=void 0),new Promise(function(u,c){try{const l=st.create(o,i);u(e(l,t,i))}catch(l){c(l)}})}try{const u=st.create(o,i);r(null,e(u,t,i))}catch(u){r(u)}}st.create;ft.bind(null,Ft.render);var Ke=ft.bind(null,Ft.renderToDataURL);ft.bind(null,function(e,t,o){return He.render(e,o)});const Je={class:"container"},Qe=["src"],Ye=zt({__name:"QrcodeView",setup(e){const t="https://github.com/Jay0328/electronic-anniversary-celeration",o={margin:2,scale:4,errorCorrectionLevel:"H"},i=Gt(()=>Ke(t,o));return(r,n)=>(Qt(),Vt("div",Je,[Ht(" \u8ACB\u6383\u63CF\u5DF2\u958B\u555F\u5361\u7247 "),Kt("img",{class:"qrcode",src:Jt(i)},null,8,Qe)]))}});const Ge=Yt(Ye,[["__scopeId","data-v-34a99701"]]);export{Ge as default};
