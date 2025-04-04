(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _h(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const dt={},Es=[],fi=()=>{},t0=()=>!1,wl=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),gh=i=>i.startsWith("onUpdate:"),cn=Object.assign,vh=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},n0=Object.prototype.hasOwnProperty,rt=(i,e)=>n0.call(i,e),Ve=Array.isArray,bs=i=>Rl(i)==="[object Map]",Qp=i=>Rl(i)==="[object Set]",qe=i=>typeof i=="function",Pt=i=>typeof i=="string",gr=i=>typeof i=="symbol",xt=i=>i!==null&&typeof i=="object",em=i=>(xt(i)||qe(i))&&qe(i.then)&&qe(i.catch),tm=Object.prototype.toString,Rl=i=>tm.call(i),i0=i=>Rl(i).slice(8,-1),nm=i=>Rl(i)==="[object Object]",xh=i=>Pt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,xo=_h(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cl=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},r0=/-(\w)/g,dr=Cl(i=>i.replace(r0,(e,t)=>t?t.toUpperCase():"")),s0=/\B([A-Z])/g,Zr=Cl(i=>i.replace(s0,"-$1").toLowerCase()),im=Cl(i=>i.charAt(0).toUpperCase()+i.slice(1)),ql=Cl(i=>i?`on${im(i)}`:""),lr=(i,e)=>!Object.is(i,e),jl=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},rm=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},o0=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Df;const Pl=()=>Df||(Df=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dl(i){if(Ve(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Pt(n)?u0(n):Dl(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(Pt(i)||xt(i))return i}const a0=/;(?![^(]*\))/g,l0=/:([^]+)/,c0=/\/\*[^]*?\*\//g;function u0(i){const e={};return i.replace(c0,"").split(a0).forEach(t=>{if(t){const n=t.split(l0);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function yh(i){let e="";if(Pt(i))e=i;else if(Ve(i))for(let t=0;t<i.length;t++){const n=yh(i[t]);n&&(e+=n+" ")}else if(xt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const h0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f0=_h(h0);function sm(i){return!!i||i===""}const om=i=>!!(i&&i.__v_isRef===!0),am=i=>Pt(i)?i:i==null?"":Ve(i)||xt(i)&&(i.toString===tm||!qe(i.toString))?om(i)?am(i.value):JSON.stringify(i,lm,2):String(i),lm=(i,e)=>om(e)?lm(i,e.value):bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[Kl(n,s)+" =>"]=r,t),{})}:Qp(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Kl(t))}:gr(e)?Kl(e):xt(e)&&!Ve(e)&&!nm(e)?String(e):e,Kl=(i,e="")=>{var t;return gr(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tn;class d0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Tn,!e&&Tn&&(this.index=(Tn.scopes||(Tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Tn;try{return Tn=this,e()}finally{Tn=t}}}on(){Tn=this}off(){Tn=this.parent}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function p0(){return Tn}let ft;const $l=new WeakSet;class cm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tn&&Tn.active&&Tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$l.has(this)&&($l.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lf(this),fm(this);const e=ft,t=$n;ft=this,$n=!0;try{return this.fn()}finally{dm(this),ft=e,$n=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Th(e);this.deps=this.depsTail=void 0,Lf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){eu(this)&&this.run()}get dirty(){return eu(this)}}let um=0,yo,Mo;function hm(i,e=!1){if(i.flags|=8,e){i.next=Mo,Mo=i;return}i.next=yo,yo=i}function Mh(){um++}function Sh(){if(--um>0)return;if(Mo){let e=Mo;for(Mo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;yo;){let e=yo;for(yo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function fm(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function dm(i){let e,t=i.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),Th(n),m0(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}i.deps=e,i.depsTail=t}function eu(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function pm(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===Io))return;i.globalVersion=Io;const e=i.dep;if(i.flags|=2,e.version>0&&!i.isSSR&&i.deps&&!eu(i)){i.flags&=-3;return}const t=ft,n=$n;ft=i,$n=!0;try{fm(i);const r=i.fn(i._value);(e.version===0||lr(r,i._value))&&(i._value=r,e.version++)}catch(r){throw e.version++,r}finally{ft=t,$n=n,dm(i),i.flags&=-3}}function Th(i,e=!1){const{dep:t,prevSub:n,nextSub:r}=i;if(n&&(n.nextSub=r,i.prevSub=void 0),r&&(r.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Th(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function m0(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let $n=!0;const mm=[];function vr(){mm.push($n),$n=!1}function xr(){const i=mm.pop();$n=i===void 0?!0:i}function Lf(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let Io=0;class _0{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Eh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ft||!$n||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new _0(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,_m(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=n)}return t}trigger(e){this.version++,Io++,this.notify(e)}notify(e){Mh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Sh()}}}function _m(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)_m(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const tu=new WeakMap,Vr=Symbol(""),nu=Symbol(""),No=Symbol("");function qt(i,e,t){if($n&&ft){let n=tu.get(i);n||tu.set(i,n=new Map);let r=n.get(t);r||(n.set(t,r=new Eh),r.map=n,r.key=t),r.track()}}function Ui(i,e,t,n,r,s){const o=tu.get(i);if(!o){Io++;return}const a=l=>{l&&l.trigger()};if(Mh(),e==="clear")o.forEach(a);else{const l=Ve(i),c=l&&xh(t);if(l&&t==="length"){const u=Number(n);o.forEach((h,f)=>{(f==="length"||f===No||!gr(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(No)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Vr)),bs(i)&&a(o.get(nu)));break;case"delete":l||(a(o.get(Vr)),bs(i)&&a(o.get(nu)));break;case"set":bs(i)&&a(o.get(Vr));break}}Sh()}function ts(i){const e=it(i);return e===i?e:(qt(e,"iterate",No),kn(i)?e:e.map(jt))}function Ll(i){return qt(i=it(i),"iterate",No),i}const g0={__proto__:null,[Symbol.iterator](){return Zl(this,Symbol.iterator,jt)},concat(...i){return ts(this).concat(...i.map(e=>Ve(e)?ts(e):e))},entries(){return Zl(this,"entries",i=>(i[1]=jt(i[1]),i))},every(i,e){return Ti(this,"every",i,e,void 0,arguments)},filter(i,e){return Ti(this,"filter",i,e,t=>t.map(jt),arguments)},find(i,e){return Ti(this,"find",i,e,jt,arguments)},findIndex(i,e){return Ti(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return Ti(this,"findLast",i,e,jt,arguments)},findLastIndex(i,e){return Ti(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return Ti(this,"forEach",i,e,void 0,arguments)},includes(...i){return Jl(this,"includes",i)},indexOf(...i){return Jl(this,"indexOf",i)},join(i){return ts(this).join(i)},lastIndexOf(...i){return Jl(this,"lastIndexOf",i)},map(i,e){return Ti(this,"map",i,e,void 0,arguments)},pop(){return to(this,"pop")},push(...i){return to(this,"push",i)},reduce(i,...e){return If(this,"reduce",i,e)},reduceRight(i,...e){return If(this,"reduceRight",i,e)},shift(){return to(this,"shift")},some(i,e){return Ti(this,"some",i,e,void 0,arguments)},splice(...i){return to(this,"splice",i)},toReversed(){return ts(this).toReversed()},toSorted(i){return ts(this).toSorted(i)},toSpliced(...i){return ts(this).toSpliced(...i)},unshift(...i){return to(this,"unshift",i)},values(){return Zl(this,"values",jt)}};function Zl(i,e,t){const n=Ll(i),r=n[e]();return n!==i&&!kn(i)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const v0=Array.prototype;function Ti(i,e,t,n,r,s){const o=Ll(i),a=o!==i&&!kn(i),l=o[e];if(l!==v0[e]){const h=l.apply(i,s);return a?jt(h):h}let c=t;o!==i&&(a?c=function(h,f){return t.call(this,jt(h),f,i)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,i)}));const u=l.call(o,c,n);return a&&r?r(u):u}function If(i,e,t,n){const r=Ll(i);let s=t;return r!==i&&(kn(i)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,i)}):s=function(o,a,l){return t.call(this,o,jt(a),l,i)}),r[e](s,...n)}function Jl(i,e,t){const n=it(i);qt(n,"iterate",No);const r=n[e](...t);return(r===-1||r===!1)&&Rh(t[0])?(t[0]=it(t[0]),n[e](...t)):r}function to(i,e,t=[]){vr(),Mh();const n=it(i)[e].apply(i,t);return Sh(),xr(),n}const x0=_h("__proto__,__v_isRef,__isVue"),gm=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(gr));function y0(i){gr(i)||(i=String(i));const e=it(this);return qt(e,"has",i),e.hasOwnProperty(i)}class vm{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?P0:Sm:s?Mm:ym).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=Ve(e);if(!r){let l;if(o&&(l=g0[t]))return l;if(t==="hasOwnProperty")return y0}const a=Reflect.get(e,t,Zt(e)?e:n);return(gr(t)?gm.has(t):x0(t))||(r||qt(e,"get",t),s)?a:Zt(a)?o&&xh(t)?a:a.value:xt(a)?r?Tm(a):Ah(a):a}}class xm extends vm{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const l=jr(s);if(!kn(n)&&!jr(n)&&(s=it(s),n=it(n)),!Ve(e)&&Zt(s)&&!Zt(n))return l?!1:(s.value=n,!0)}const o=Ve(e)&&xh(t)?Number(t)<e.length:rt(e,t),a=Reflect.set(e,t,n,Zt(e)?e:r);return e===it(r)&&(o?lr(n,s)&&Ui(e,"set",t,n):Ui(e,"add",t,n)),a}deleteProperty(e,t){const n=rt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ui(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!gr(t)||!gm.has(t))&&qt(e,"has",t),n}ownKeys(e){return qt(e,"iterate",Ve(e)?"length":Vr),Reflect.ownKeys(e)}}class M0 extends vm{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const S0=new xm,T0=new M0,E0=new xm(!0);const iu=i=>i,ha=i=>Reflect.getPrototypeOf(i);function b0(i,e,t){return function(...n){const r=this.__v_raw,s=it(r),o=bs(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?iu:e?ru:jt;return!e&&qt(s,"iterate",l?nu:Vr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function fa(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function A0(i,e){const t={get(r){const s=this.__v_raw,o=it(s),a=it(r);i||(lr(r,a)&&qt(o,"get",r),qt(o,"get",a));const{has:l}=ha(o),c=e?iu:i?ru:jt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!i&&qt(it(r),"iterate",Vr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=it(s),a=it(r);return i||(lr(r,a)&&qt(o,"has",r),qt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=it(a),c=e?iu:i?ru:jt;return!i&&qt(l,"iterate",Vr),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return cn(t,i?{add:fa("add"),set:fa("set"),delete:fa("delete"),clear:fa("clear")}:{add(r){!e&&!kn(r)&&!jr(r)&&(r=it(r));const s=it(this);return ha(s).has.call(s,r)||(s.add(r),Ui(s,"add",r,r)),this},set(r,s){!e&&!kn(s)&&!jr(s)&&(s=it(s));const o=it(this),{has:a,get:l}=ha(o);let c=a.call(o,r);c||(r=it(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?lr(s,u)&&Ui(o,"set",r,s):Ui(o,"add",r,s),this},delete(r){const s=it(this),{has:o,get:a}=ha(s);let l=o.call(s,r);l||(r=it(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Ui(s,"delete",r,void 0),c},clear(){const r=it(this),s=r.size!==0,o=r.clear();return s&&Ui(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=b0(r,i,e)}),t}function bh(i,e){const t=A0(i,e);return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(rt(t,r)&&r in n?t:n,r,s)}const w0={get:bh(!1,!1)},R0={get:bh(!1,!0)},C0={get:bh(!0,!1)};const ym=new WeakMap,Mm=new WeakMap,Sm=new WeakMap,P0=new WeakMap;function D0(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function L0(i){return i.__v_skip||!Object.isExtensible(i)?0:D0(i0(i))}function Ah(i){return jr(i)?i:wh(i,!1,S0,w0,ym)}function I0(i){return wh(i,!1,E0,R0,Mm)}function Tm(i){return wh(i,!0,T0,C0,Sm)}function wh(i,e,t,n,r){if(!xt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=L0(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function As(i){return jr(i)?As(i.__v_raw):!!(i&&i.__v_isReactive)}function jr(i){return!!(i&&i.__v_isReadonly)}function kn(i){return!!(i&&i.__v_isShallow)}function Rh(i){return i?!!i.__v_raw:!1}function it(i){const e=i&&i.__v_raw;return e?it(e):i}function N0(i){return!rt(i,"__v_skip")&&Object.isExtensible(i)&&rm(i,"__v_skip",!0),i}const jt=i=>xt(i)?Ah(i):i,ru=i=>xt(i)?Tm(i):i;function Zt(i){return i?i.__v_isRef===!0:!1}function Nf(i){return U0(i,!1)}function U0(i,e){return Zt(i)?i:new O0(i,e)}class O0{constructor(e,t){this.dep=new Eh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:it(e),this._value=t?e:jt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||kn(e)||jr(e);e=n?e:it(e),lr(e,t)&&(this._rawValue=e,this._value=n?e:jt(e),this.dep.trigger())}}function F0(i){return Zt(i)?i.value:i}const B0={get:(i,e,t)=>e==="__v_raw"?i:F0(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Zt(r)&&!Zt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function Em(i){return As(i)?i:new Proxy(i,B0)}class k0{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Eh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Io-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return hm(this,!0),!0}get value(){const e=this.dep.track();return pm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function z0(i,e,t=!1){let n,r;return qe(i)?n=i:(n=i.get,r=i.set),new k0(n,r,t)}const da={},ol=new WeakMap;let Ur;function H0(i,e=!1,t=Ur){if(t){let n=ol.get(t);n||ol.set(t,n=[]),n.push(i)}}function V0(i,e,t=dt){const{immediate:n,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=v=>r?v:kn(v)||r===!1||r===0?tr(v,1):tr(v);let u,h,f,d,g=!1,_=!1;if(Zt(i)?(h=()=>i.value,g=kn(i)):As(i)?(h=()=>c(i),g=!0):Ve(i)?(_=!0,g=i.some(v=>As(v)||kn(v)),h=()=>i.map(v=>{if(Zt(v))return v.value;if(As(v))return c(v);if(qe(v))return l?l(v,2):v()})):qe(i)?e?h=l?()=>l(i,2):i:h=()=>{if(f){vr();try{f()}finally{xr()}}const v=Ur;Ur=u;try{return l?l(i,3,[d]):i(d)}finally{Ur=v}}:h=fi,e&&r){const v=h,b=r===!0?1/0:r;h=()=>tr(v(),b)}const m=p0(),p=()=>{u.stop(),m&&m.active&&vh(m.effects,u)};if(s&&e){const v=e;e=(...b)=>{v(...b),p()}}let T=_?new Array(i.length).fill(da):da;const x=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const b=u.run();if(r||g||(_?b.some((P,C)=>lr(P,T[C])):lr(b,T))){f&&f();const P=Ur;Ur=u;try{const C=[b,T===da?void 0:_&&T[0]===da?[]:T,d];l?l(e,3,C):e(...C),T=b}finally{Ur=P}}}else u.run()};return a&&a(x),u=new cm(h),u.scheduler=o?()=>o(x,!1):x,d=v=>H0(v,!1,u),f=u.onStop=()=>{const v=ol.get(u);if(v){if(l)l(v,4);else for(const b of v)b();ol.delete(u)}},e?n?x(!0):T=u.run():o?o(x.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function tr(i,e=1/0,t){if(e<=0||!xt(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,Zt(i))tr(i.value,e,t);else if(Ve(i))for(let n=0;n<i.length;n++)tr(i[n],e,t);else if(Qp(i)||bs(i))i.forEach(n=>{tr(n,e,t)});else if(nm(i)){for(const n in i)tr(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&tr(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ia(i,e,t,n){try{return n?i(...n):i()}catch(r){Il(r,e,t)}}function _i(i,e,t,n){if(qe(i)){const r=ia(i,e,t,n);return r&&em(r)&&r.catch(s=>{Il(s,e,t)}),r}if(Ve(i)){const r=[];for(let s=0;s<i.length;s++)r.push(_i(i[s],e,t,n));return r}}function Il(i,e,t,n=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||dt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](i,l,c)===!1)return}a=a.parent}if(s){vr(),ia(s,null,10,[i,l,c]),xr();return}}G0(i,t,r,n,o)}function G0(i,e,t,n=!0,r=!1){if(r)throw i;console.error(i)}const rn=[];let ti=-1;const ws=[];let Qi=null,vs=0;const bm=Promise.resolve();let al=null;function W0(i){const e=al||bm;return i?e.then(this?i.bind(this):i):e}function X0(i){let e=ti+1,t=rn.length;for(;e<t;){const n=e+t>>>1,r=rn[n],s=Uo(r);s<i||s===i&&r.flags&2?e=n+1:t=n}return e}function Ch(i){if(!(i.flags&1)){const e=Uo(i),t=rn[rn.length-1];!t||!(i.flags&2)&&e>=Uo(t)?rn.push(i):rn.splice(X0(e),0,i),i.flags|=1,Am()}}function Am(){al||(al=bm.then(Rm))}function Y0(i){Ve(i)?ws.push(...i):Qi&&i.id===-1?Qi.splice(vs+1,0,i):i.flags&1||(ws.push(i),i.flags|=1),Am()}function Uf(i,e,t=ti+1){for(;t<rn.length;t++){const n=rn[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;rn.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function wm(i){if(ws.length){const e=[...new Set(ws)].sort((t,n)=>Uo(t)-Uo(n));if(ws.length=0,Qi){Qi.push(...e);return}for(Qi=e,vs=0;vs<Qi.length;vs++){const t=Qi[vs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Qi=null,vs=0}}const Uo=i=>i.id==null?i.flags&2?-1:1/0:i.id;function Rm(i){try{for(ti=0;ti<rn.length;ti++){const e=rn[ti];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ia(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ti<rn.length;ti++){const e=rn[ti];e&&(e.flags&=-2)}ti=-1,rn.length=0,wm(),al=null,(rn.length||ws.length)&&Rm()}}let li=null,Cm=null;function ll(i){const e=li;return li=i,Cm=i&&i.type.__scopeId||null,e}function q0(i,e=li,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Xf(-1);const s=ll(e);let o;try{o=i(...r)}finally{ll(s),n._d&&Xf(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Er(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(vr(),_i(l,t,8,[i.el,a,i,e]),xr())}}const j0=Symbol("_vte"),K0=i=>i.__isTeleport;function Ph(i,e){i.shapeFlag&6&&i.component?(i.transition=e,Ph(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function Pm(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function cl(i,e,t,n,r=!1){if(Ve(i)){i.forEach((g,_)=>cl(g,e&&(Ve(e)?e[_]:e),t,n,r));return}if(So(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&cl(i,e,t,n.component.subTree);return}const s=n.shapeFlag&4?Ih(n.component):n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===dt?a.refs={}:a.refs,h=a.setupState,f=it(h),d=h===dt?()=>!1:g=>rt(f,g);if(c!=null&&c!==l&&(Pt(c)?(u[c]=null,d(c)&&(h[c]=null)):Zt(c)&&(c.value=null)),qe(l))ia(l,a,12,[o,u]);else{const g=Pt(l),_=Zt(l);if(g||_){const m=()=>{if(i.f){const p=g?d(l)?h[l]:u[l]:l.value;r?Ve(p)&&vh(p,s):Ve(p)?p.includes(s)||p.push(s):g?(u[l]=[s],d(l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else g?(u[l]=o,d(l)&&(h[l]=o)):_&&(l.value=o,i.k&&(u[i.k]=o))};o?(m.id=-1,Sn(m,t)):m()}}}Pl().requestIdleCallback;Pl().cancelIdleCallback;const So=i=>!!i.type.__asyncLoader,Dm=i=>i.type.__isKeepAlive;function $0(i,e){Lm(i,"a",e)}function Z0(i,e){Lm(i,"da",e)}function Lm(i,e,t=sn){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Nl(e,n,t),t){let r=t.parent;for(;r&&r.parent;)Dm(r.parent.vnode)&&J0(n,e,t,r),r=r.parent}}function J0(i,e,t,n){const r=Nl(e,i,n,!0);Im(()=>{vh(n[e],r)},t)}function Nl(i,e,t=sn,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{vr();const a=ra(t),l=_i(e,t,i,o);return a(),xr(),l});return n?r.unshift(s):r.push(s),s}}const Wi=i=>(e,t=sn)=>{(!Bo||i==="sp")&&Nl(i,(...n)=>e(...n),t)},Q0=Wi("bm"),ev=Wi("m"),tv=Wi("bu"),nv=Wi("u"),iv=Wi("bum"),Im=Wi("um"),rv=Wi("sp"),sv=Wi("rtg"),ov=Wi("rtc");function av(i,e=sn){Nl("ec",i,e)}const lv=Symbol.for("v-ndc");function cv(i,e,t,n){let r;const s=t,o=Ve(i);if(o||Pt(i)){const a=o&&As(i);let l=!1;a&&(l=!kn(i),i=Ll(i)),r=new Array(i.length);for(let c=0,u=i.length;c<u;c++)r[c]=e(l?jt(i[c]):i[c],c,void 0,s)}else if(typeof i=="number"){r=new Array(i);for(let a=0;a<i;a++)r[a]=e(a+1,a,void 0,s)}else if(xt(i))if(i[Symbol.iterator])r=Array.from(i,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(i);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(i[u],u,l,s)}}else r=[];return r}const su=i=>i?e_(i)?Ih(i):su(i.parent):null,To=cn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>su(i.parent),$root:i=>su(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Um(i),$forceUpdate:i=>i.f||(i.f=()=>{Ch(i.update)}),$nextTick:i=>i.n||(i.n=W0.bind(i.proxy)),$watch:i=>Dv.bind(i)}),Ql=(i,e)=>i!==dt&&!i.__isScriptSetup&&rt(i,e),uv={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ql(n,e))return o[e]=1,n[e];if(r!==dt&&rt(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&rt(c,e))return o[e]=3,s[e];if(t!==dt&&rt(t,e))return o[e]=4,t[e];ou&&(o[e]=0)}}const u=To[e];let h,f;if(u)return e==="$attrs"&&qt(i.attrs,"get",""),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==dt&&rt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,rt(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return Ql(r,e)?(r[e]=t,!0):n!==dt&&rt(n,e)?(n[e]=t,!0):rt(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==dt&&rt(i,o)||Ql(e,o)||(a=s[0])&&rt(a,o)||rt(n,o)||rt(To,o)||rt(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:rt(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Of(i){return Ve(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let ou=!0;function hv(i){const e=Um(i),t=i.proxy,n=i.ctx;ou=!1,e.beforeCreate&&Ff(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:x,unmounted:v,render:b,renderTracked:P,renderTriggered:C,errorCaptured:w,serverPrefetch:y,expose:M,inheritAttrs:D,components:V,directives:k,filters:O}=e;if(c&&fv(c,n,null),o)for(const X in o){const H=o[X];qe(H)&&(n[X]=H.bind(t))}if(r){const X=r.call(t,t);xt(X)&&(i.data=Ah(X))}if(ou=!0,s)for(const X in s){const H=s[X],le=qe(H)?H.bind(t,t):qe(H.get)?H.get.bind(t,t):fi,he=!qe(H)&&qe(H.set)?H.set.bind(t):fi,Se=Qv({get:le,set:he});Object.defineProperty(n,X,{enumerable:!0,configurable:!0,get:()=>Se.value,set:Ee=>Se.value=Ee})}if(a)for(const X in a)Nm(a[X],n,t,X);if(l){const X=qe(l)?l.call(t):l;Reflect.ownKeys(X).forEach(H=>{vv(H,X[H])})}u&&Ff(u,i,"c");function F(X,H){Ve(H)?H.forEach(le=>X(le.bind(t))):H&&X(H.bind(t))}if(F(Q0,h),F(ev,f),F(tv,d),F(nv,g),F($0,_),F(Z0,m),F(av,w),F(ov,P),F(sv,C),F(iv,T),F(Im,v),F(rv,y),Ve(M))if(M.length){const X=i.exposed||(i.exposed={});M.forEach(H=>{Object.defineProperty(X,H,{get:()=>t[H],set:le=>t[H]=le})})}else i.exposed||(i.exposed={});b&&i.render===fi&&(i.render=b),D!=null&&(i.inheritAttrs=D),V&&(i.components=V),k&&(i.directives=k),y&&Pm(i)}function fv(i,e,t=fi){Ve(i)&&(i=au(i));for(const n in i){const r=i[n];let s;xt(r)?"default"in r?s=Ya(r.from||n,r.default,!0):s=Ya(r.from||n):s=Ya(r),Zt(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function Ff(i,e,t){_i(Ve(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Nm(i,e,t,n){let r=n.includes(".")?Km(t,n):()=>t[n];if(Pt(i)){const s=e[i];qe(s)&&tc(r,s)}else if(qe(i))tc(r,i.bind(t));else if(xt(i))if(Ve(i))i.forEach(s=>Nm(s,e,t,n));else{const s=qe(i.handler)?i.handler.bind(t):e[i.handler];qe(s)&&tc(r,s,i)}}function Um(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>ul(l,c,o,!0)),ul(l,e,o)),xt(e)&&s.set(e,l),l}function ul(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&ul(i,s,t,!0),r&&r.forEach(o=>ul(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=dv[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const dv={data:Bf,props:kf,emits:kf,methods:po,computed:po,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:po,directives:po,watch:mv,provide:Bf,inject:pv};function Bf(i,e){return e?i?function(){return cn(qe(i)?i.call(this,this):i,qe(e)?e.call(this,this):e)}:e:i}function pv(i,e){return po(au(i),au(e))}function au(i){if(Ve(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function tn(i,e){return i?[...new Set([].concat(i,e))]:e}function po(i,e){return i?cn(Object.create(null),i,e):e}function kf(i,e){return i?Ve(i)&&Ve(e)?[...new Set([...i,...e])]:cn(Object.create(null),Of(i),Of(e??{})):e}function mv(i,e){if(!i)return e;if(!e)return i;const t=cn(Object.create(null),i);for(const n in e)t[n]=tn(i[n],e[n]);return t}function Om(){return{app:null,config:{isNativeTag:t0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _v=0;function gv(i,e){return function(n,r=null){qe(n)||(n=cn({},n)),r!=null&&!xt(r)&&(r=null);const s=Om(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:_v++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:ex,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...h)):qe(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Gr(n,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),i(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Ih(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(_i(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=Rs;Rs=c;try{return u()}finally{Rs=h}}};return c}}let Rs=null;function vv(i,e){if(sn){let t=sn.provides;const n=sn.parent&&sn.parent.provides;n===t&&(t=sn.provides=Object.create(n)),t[i]=e}}function Ya(i,e,t=!1){const n=sn||li;if(n||Rs){const r=Rs?Rs._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&i in r)return r[i];if(arguments.length>1)return t&&qe(e)?e.call(n&&n.proxy):e}}const Fm={},Bm=()=>Object.create(Fm),km=i=>Object.getPrototypeOf(i)===Fm;function xv(i,e,t,n=!1){const r={},s=Bm();i.propsDefaults=Object.create(null),zm(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:I0(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function yv(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=it(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ul(i.emitsOptions,f))continue;const d=e[f];if(l)if(rt(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=dr(f);r[g]=lu(l,a,g,d,i,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{zm(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!rt(e,h)&&((u=Zr(h))===h||!rt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=lu(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!rt(e,h))&&(delete s[h],c=!0)}c&&Ui(i.attrs,"set","")}function zm(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(xo(l))continue;const c=e[l];let u;r&&rt(r,u=dr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ul(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=it(t),c=a||dt;for(let u=0;u<s.length;u++){const h=s[u];t[h]=lu(r,l,h,c[h],i,!rt(c,h))}}return o}function lu(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=rt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=ra(r);n=c[t]=l.call(null,e),u()}}else n=l;r.ce&&r.ce._setProp(t,n)}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Zr(t))&&(n=!0))}return n}const Mv=new WeakMap;function Hm(i,e,t=!1){const n=t?Mv:e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!qe(i)){const u=h=>{l=!0;const[f,d]=Hm(h,e,!0);cn(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return xt(i)&&n.set(i,Es),Es;if(Ve(s))for(let u=0;u<s.length;u++){const h=dr(s[u]);zf(h)&&(o[h]=dt)}else if(s)for(const u in s){const h=dr(u);if(zf(h)){const f=s[u],d=o[h]=Ve(f)||qe(f)?{type:f}:cn({},f),g=d.type;let _=!1,m=!0;if(Ve(g))for(let p=0;p<g.length;++p){const T=g[p],x=qe(T)&&T.name;if(x==="Boolean"){_=!0;break}else x==="String"&&(m=!1)}else _=qe(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||rt(d,"default"))&&a.push(h)}}const c=[o,a];return xt(i)&&n.set(i,c),c}function zf(i){return i[0]!=="$"&&!xo(i)}const Vm=i=>i[0]==="_"||i==="$stable",Dh=i=>Ve(i)?i.map(ri):[ri(i)],Sv=(i,e,t)=>{if(e._n)return e;const n=q0((...r)=>Dh(e(...r)),t);return n._c=!1,n},Gm=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Vm(r))continue;const s=i[r];if(qe(s))e[r]=Sv(r,s,n);else if(s!=null){const o=Dh(s);e[r]=()=>o}}},Wm=(i,e)=>{const t=Dh(e);i.slots.default=()=>t},Xm=(i,e,t)=>{for(const n in e)(t||n!=="_")&&(i[n]=e[n])},Tv=(i,e,t)=>{const n=i.slots=Bm();if(i.vnode.shapeFlag&32){const r=e._;r?(Xm(n,e,t),t&&rm(n,"_",r,!0)):Gm(e,n)}else e&&Wm(i,e)},Ev=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=dt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Xm(r,e,t):(s=!e.$stable,Gm(e,r)),o=e}else e&&(Wm(i,e),o={default:1});if(s)for(const a in r)!Vm(a)&&o[a]==null&&delete r[a]},Sn=Bv;function bv(i){return Av(i)}function Av(i,e){const t=Pl();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=fi,insertStaticContent:g}=i,_=(L,N,A,re=null,J=null,Q=null,ee=void 0,se=null,Z=!!N.dynamicChildren)=>{if(L===N)return;L&&!no(L,N)&&(re=me(L),Ee(L,J,Q,!0),L=null),N.patchFlag===-2&&(Z=!1,N.dynamicChildren=null);const{type:E,ref:S,shapeFlag:U}=N;switch(E){case Ol:m(L,N,A,re);break;case Oo:p(L,N,A,re);break;case nc:L==null&&T(N,A,re,ee);break;case ii:V(L,N,A,re,J,Q,ee,se,Z);break;default:U&1?b(L,N,A,re,J,Q,ee,se,Z):U&6?k(L,N,A,re,J,Q,ee,se,Z):(U&64||U&128)&&E.process(L,N,A,re,J,Q,ee,se,Z,Pe)}S!=null&&J&&cl(S,L&&L.ref,Q,N||L,!N)},m=(L,N,A,re)=>{if(L==null)n(N.el=a(N.children),A,re);else{const J=N.el=L.el;N.children!==L.children&&c(J,N.children)}},p=(L,N,A,re)=>{L==null?n(N.el=l(N.children||""),A,re):N.el=L.el},T=(L,N,A,re)=>{[L.el,L.anchor]=g(L.children,N,A,re,L.el,L.anchor)},x=({el:L,anchor:N},A,re)=>{let J;for(;L&&L!==N;)J=f(L),n(L,A,re),L=J;n(N,A,re)},v=({el:L,anchor:N})=>{let A;for(;L&&L!==N;)A=f(L),r(L),L=A;r(N)},b=(L,N,A,re,J,Q,ee,se,Z)=>{N.type==="svg"?ee="svg":N.type==="math"&&(ee="mathml"),L==null?P(N,A,re,J,Q,ee,se,Z):y(L,N,J,Q,ee,se,Z)},P=(L,N,A,re,J,Q,ee,se)=>{let Z,E;const{props:S,shapeFlag:U,transition:Y,dirs:j}=L;if(Z=L.el=o(L.type,Q,S&&S.is,S),U&8?u(Z,L.children):U&16&&w(L.children,Z,null,re,J,ec(L,Q),ee,se),j&&Er(L,null,re,"created"),C(Z,L,L.scopeId,ee,re),S){for(const fe in S)fe!=="value"&&!xo(fe)&&s(Z,fe,null,S[fe],Q,re);"value"in S&&s(Z,"value",null,S.value,Q),(E=S.onVnodeBeforeMount)&&ei(E,re,L)}j&&Er(L,null,re,"beforeMount");const q=wv(J,Y);q&&Y.beforeEnter(Z),n(Z,N,A),((E=S&&S.onVnodeMounted)||q||j)&&Sn(()=>{E&&ei(E,re,L),q&&Y.enter(Z),j&&Er(L,null,re,"mounted")},J)},C=(L,N,A,re,J)=>{if(A&&d(L,A),re)for(let Q=0;Q<re.length;Q++)d(L,re[Q]);if(J){let Q=J.subTree;if(N===Q||Zm(Q.type)&&(Q.ssContent===N||Q.ssFallback===N)){const ee=J.vnode;C(L,ee,ee.scopeId,ee.slotScopeIds,J.parent)}}},w=(L,N,A,re,J,Q,ee,se,Z=0)=>{for(let E=Z;E<L.length;E++){const S=L[E]=se?er(L[E]):ri(L[E]);_(null,S,N,A,re,J,Q,ee,se)}},y=(L,N,A,re,J,Q,ee)=>{const se=N.el=L.el;let{patchFlag:Z,dynamicChildren:E,dirs:S}=N;Z|=L.patchFlag&16;const U=L.props||dt,Y=N.props||dt;let j;if(A&&br(A,!1),(j=Y.onVnodeBeforeUpdate)&&ei(j,A,N,L),S&&Er(N,L,A,"beforeUpdate"),A&&br(A,!0),(U.innerHTML&&Y.innerHTML==null||U.textContent&&Y.textContent==null)&&u(se,""),E?M(L.dynamicChildren,E,se,A,re,ec(N,J),Q):ee||H(L,N,se,null,A,re,ec(N,J),Q,!1),Z>0){if(Z&16)D(se,U,Y,A,J);else if(Z&2&&U.class!==Y.class&&s(se,"class",null,Y.class,J),Z&4&&s(se,"style",U.style,Y.style,J),Z&8){const q=N.dynamicProps;for(let fe=0;fe<q.length;fe++){const oe=q[fe],de=U[oe],Ue=Y[oe];(Ue!==de||oe==="value")&&s(se,oe,de,Ue,J,A)}}Z&1&&L.children!==N.children&&u(se,N.children)}else!ee&&E==null&&D(se,U,Y,A,J);((j=Y.onVnodeUpdated)||S)&&Sn(()=>{j&&ei(j,A,N,L),S&&Er(N,L,A,"updated")},re)},M=(L,N,A,re,J,Q,ee)=>{for(let se=0;se<N.length;se++){const Z=L[se],E=N[se],S=Z.el&&(Z.type===ii||!no(Z,E)||Z.shapeFlag&70)?h(Z.el):A;_(Z,E,S,null,re,J,Q,ee,!0)}},D=(L,N,A,re,J)=>{if(N!==A){if(N!==dt)for(const Q in N)!xo(Q)&&!(Q in A)&&s(L,Q,N[Q],null,J,re);for(const Q in A){if(xo(Q))continue;const ee=A[Q],se=N[Q];ee!==se&&Q!=="value"&&s(L,Q,se,ee,J,re)}"value"in A&&s(L,"value",N.value,A.value,J)}},V=(L,N,A,re,J,Q,ee,se,Z)=>{const E=N.el=L?L.el:a(""),S=N.anchor=L?L.anchor:a("");let{patchFlag:U,dynamicChildren:Y,slotScopeIds:j}=N;j&&(se=se?se.concat(j):j),L==null?(n(E,A,re),n(S,A,re),w(N.children||[],A,S,J,Q,ee,se,Z)):U>0&&U&64&&Y&&L.dynamicChildren?(M(L.dynamicChildren,Y,A,J,Q,ee,se),(N.key!=null||J&&N===J.subTree)&&Ym(L,N,!0)):H(L,N,A,S,J,Q,ee,se,Z)},k=(L,N,A,re,J,Q,ee,se,Z)=>{N.slotScopeIds=se,L==null?N.shapeFlag&512?J.ctx.activate(N,A,re,ee,Z):O(N,A,re,J,Q,ee,Z):B(L,N,Z)},O=(L,N,A,re,J,Q,ee)=>{const se=L.component=qv(L,re,J);if(Dm(L)&&(se.ctx.renderer=Pe),jv(se,!1,ee),se.asyncDep){if(J&&J.registerDep(se,F,ee),!L.el){const Z=se.subTree=Gr(Oo);p(null,Z,N,A)}}else F(se,L,N,A,J,Q,ee)},B=(L,N,A)=>{const re=N.component=L.component;if(Ov(L,N,A))if(re.asyncDep&&!re.asyncResolved){X(re,N,A);return}else re.next=N,re.update();else N.el=L.el,re.vnode=N},F=(L,N,A,re,J,Q,ee)=>{const se=()=>{if(L.isMounted){let{next:U,bu:Y,u:j,parent:q,vnode:fe}=L;{const ge=qm(L);if(ge){U&&(U.el=fe.el,X(L,U,ee)),ge.asyncDep.then(()=>{L.isUnmounted||se()});return}}let oe=U,de;br(L,!1),U?(U.el=fe.el,X(L,U,ee)):U=fe,Y&&jl(Y),(de=U.props&&U.props.onVnodeBeforeUpdate)&&ei(de,q,U,fe),br(L,!0);const Ue=Vf(L),ae=L.subTree;L.subTree=Ue,_(ae,Ue,h(ae.el),me(ae),L,J,Q),U.el=Ue.el,oe===null&&Fv(L,Ue.el),j&&Sn(j,J),(de=U.props&&U.props.onVnodeUpdated)&&Sn(()=>ei(de,q,U,fe),J)}else{let U;const{el:Y,props:j}=N,{bm:q,m:fe,parent:oe,root:de,type:Ue}=L,ae=So(N);br(L,!1),q&&jl(q),!ae&&(U=j&&j.onVnodeBeforeMount)&&ei(U,oe,N),br(L,!0);{de.ce&&de.ce._injectChildStyle(Ue);const ge=L.subTree=Vf(L);_(null,ge,A,re,L,J,Q),N.el=ge.el}if(fe&&Sn(fe,J),!ae&&(U=j&&j.onVnodeMounted)){const ge=N;Sn(()=>ei(U,oe,ge),J)}(N.shapeFlag&256||oe&&So(oe.vnode)&&oe.vnode.shapeFlag&256)&&L.a&&Sn(L.a,J),L.isMounted=!0,N=A=re=null}};L.scope.on();const Z=L.effect=new cm(se);L.scope.off();const E=L.update=Z.run.bind(Z),S=L.job=Z.runIfDirty.bind(Z);S.i=L,S.id=L.uid,Z.scheduler=()=>Ch(S),br(L,!0),E()},X=(L,N,A)=>{N.component=L;const re=L.vnode.props;L.vnode=N,L.next=null,yv(L,N.props,re,A),Ev(L,N.children,A),vr(),Uf(L),xr()},H=(L,N,A,re,J,Q,ee,se,Z=!1)=>{const E=L&&L.children,S=L?L.shapeFlag:0,U=N.children,{patchFlag:Y,shapeFlag:j}=N;if(Y>0){if(Y&128){he(E,U,A,re,J,Q,ee,se,Z);return}else if(Y&256){le(E,U,A,re,J,Q,ee,se,Z);return}}j&8?(S&16&&be(E,J,Q),U!==E&&u(A,U)):S&16?j&16?he(E,U,A,re,J,Q,ee,se,Z):be(E,J,Q,!0):(S&8&&u(A,""),j&16&&w(U,A,re,J,Q,ee,se,Z))},le=(L,N,A,re,J,Q,ee,se,Z)=>{L=L||Es,N=N||Es;const E=L.length,S=N.length,U=Math.min(E,S);let Y;for(Y=0;Y<U;Y++){const j=N[Y]=Z?er(N[Y]):ri(N[Y]);_(L[Y],j,A,null,J,Q,ee,se,Z)}E>S?be(L,J,Q,!0,!1,U):w(N,A,re,J,Q,ee,se,Z,U)},he=(L,N,A,re,J,Q,ee,se,Z)=>{let E=0;const S=N.length;let U=L.length-1,Y=S-1;for(;E<=U&&E<=Y;){const j=L[E],q=N[E]=Z?er(N[E]):ri(N[E]);if(no(j,q))_(j,q,A,null,J,Q,ee,se,Z);else break;E++}for(;E<=U&&E<=Y;){const j=L[U],q=N[Y]=Z?er(N[Y]):ri(N[Y]);if(no(j,q))_(j,q,A,null,J,Q,ee,se,Z);else break;U--,Y--}if(E>U){if(E<=Y){const j=Y+1,q=j<S?N[j].el:re;for(;E<=Y;)_(null,N[E]=Z?er(N[E]):ri(N[E]),A,q,J,Q,ee,se,Z),E++}}else if(E>Y)for(;E<=U;)Ee(L[E],J,Q,!0),E++;else{const j=E,q=E,fe=new Map;for(E=q;E<=Y;E++){const pe=N[E]=Z?er(N[E]):ri(N[E]);pe.key!=null&&fe.set(pe.key,E)}let oe,de=0;const Ue=Y-q+1;let ae=!1,ge=0;const Re=new Array(Ue);for(E=0;E<Ue;E++)Re[E]=0;for(E=j;E<=U;E++){const pe=L[E];if(de>=Ue){Ee(pe,J,Q,!0);continue}let Be;if(pe.key!=null)Be=fe.get(pe.key);else for(oe=q;oe<=Y;oe++)if(Re[oe-q]===0&&no(pe,N[oe])){Be=oe;break}Be===void 0?Ee(pe,J,Q,!0):(Re[Be-q]=E+1,Be>=ge?ge=Be:ae=!0,_(pe,N[Be],A,null,J,Q,ee,se,Z),de++)}const Oe=ae?Rv(Re):Es;for(oe=Oe.length-1,E=Ue-1;E>=0;E--){const pe=q+E,Be=N[pe],He=pe+1<S?N[pe+1].el:re;Re[E]===0?_(null,Be,A,He,J,Q,ee,se,Z):ae&&(oe<0||E!==Oe[oe]?Se(Be,A,He,2):oe--)}}},Se=(L,N,A,re,J=null)=>{const{el:Q,type:ee,transition:se,children:Z,shapeFlag:E}=L;if(E&6){Se(L.component.subTree,N,A,re);return}if(E&128){L.suspense.move(N,A,re);return}if(E&64){ee.move(L,N,A,Pe);return}if(ee===ii){n(Q,N,A);for(let U=0;U<Z.length;U++)Se(Z[U],N,A,re);n(L.anchor,N,A);return}if(ee===nc){x(L,N,A);return}if(re!==2&&E&1&&se)if(re===0)se.beforeEnter(Q),n(Q,N,A),Sn(()=>se.enter(Q),J);else{const{leave:U,delayLeave:Y,afterLeave:j}=se,q=()=>n(Q,N,A),fe=()=>{U(Q,()=>{q(),j&&j()})};Y?Y(Q,q,fe):fe()}else n(Q,N,A)},Ee=(L,N,A,re=!1,J=!1)=>{const{type:Q,props:ee,ref:se,children:Z,dynamicChildren:E,shapeFlag:S,patchFlag:U,dirs:Y,cacheIndex:j}=L;if(U===-2&&(J=!1),se!=null&&cl(se,null,A,L,!0),j!=null&&(N.renderCache[j]=void 0),S&256){N.ctx.deactivate(L);return}const q=S&1&&Y,fe=!So(L);let oe;if(fe&&(oe=ee&&ee.onVnodeBeforeUnmount)&&ei(oe,N,L),S&6)ue(L.component,A,re);else{if(S&128){L.suspense.unmount(A,re);return}q&&Er(L,null,N,"beforeUnmount"),S&64?L.type.remove(L,N,A,Pe,re):E&&!E.hasOnce&&(Q!==ii||U>0&&U&64)?be(E,N,A,!1,!0):(Q===ii&&U&384||!J&&S&16)&&be(Z,N,A),re&&ze(L)}(fe&&(oe=ee&&ee.onVnodeUnmounted)||q)&&Sn(()=>{oe&&ei(oe,N,L),q&&Er(L,null,N,"unmounted")},A)},ze=L=>{const{type:N,el:A,anchor:re,transition:J}=L;if(N===ii){te(A,re);return}if(N===nc){v(L);return}const Q=()=>{r(A),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(L.shapeFlag&1&&J&&!J.persisted){const{leave:ee,delayLeave:se}=J,Z=()=>ee(A,Q);se?se(L.el,Q,Z):Z()}else Q()},te=(L,N)=>{let A;for(;L!==N;)A=f(L),r(L),L=A;r(N)},ue=(L,N,A)=>{const{bum:re,scope:J,job:Q,subTree:ee,um:se,m:Z,a:E}=L;Hf(Z),Hf(E),re&&jl(re),J.stop(),Q&&(Q.flags|=8,Ee(ee,L,N,A)),se&&Sn(se,N),Sn(()=>{L.isUnmounted=!0},N),N&&N.pendingBranch&&!N.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===N.pendingId&&(N.deps--,N.deps===0&&N.resolve())},be=(L,N,A,re=!1,J=!1,Q=0)=>{for(let ee=Q;ee<L.length;ee++)Ee(L[ee],N,A,re,J)},me=L=>{if(L.shapeFlag&6)return me(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const N=f(L.anchor||L.el),A=N&&N[j0];return A?f(A):N};let Ce=!1;const Je=(L,N,A)=>{L==null?N._vnode&&Ee(N._vnode,null,null,!0):_(N._vnode||null,L,N,null,null,null,A),N._vnode=L,Ce||(Ce=!0,Uf(),wm(),Ce=!1)},Pe={p:_,um:Ee,m:Se,r:ze,mt:O,mc:w,pc:H,pbc:M,n:me,o:i};return{render:Je,hydrate:void 0,createApp:gv(Je)}}function ec({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function br({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function wv(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Ym(i,e,t=!1){const n=i.children,r=e.children;if(Ve(n)&&Ve(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=er(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Ym(o,a)),a.type===Ol&&(a.el=o.el)}}function Rv(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function qm(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qm(e)}function Hf(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const Cv=Symbol.for("v-scx"),Pv=()=>Ya(Cv);function tc(i,e,t){return jm(i,e,t)}function jm(i,e,t=dt){const{immediate:n,deep:r,flush:s,once:o}=t,a=cn({},t),l=e&&n||!e&&s!=="post";let c;if(Bo){if(s==="sync"){const d=Pv();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=fi,d.resume=fi,d.pause=fi,d}}const u=sn;a.call=(d,g,_)=>_i(d,u,g,_);let h=!1;s==="post"?a.scheduler=d=>{Sn(d,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():Ch(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=V0(i,e,a);return Bo&&(c?c.push(f):l&&f()),f}function Dv(i,e,t){const n=this.proxy,r=Pt(i)?i.includes(".")?Km(n,i):()=>n[i]:i.bind(n,n);let s;qe(e)?s=e:(s=e.handler,t=e);const o=ra(this),a=jm(r,s.bind(n),t);return o(),a}function Km(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}const Lv=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${dr(e)}Modifiers`]||i[`${Zr(e)}Modifiers`];function Iv(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||dt;let r=t;const s=e.startsWith("update:"),o=s&&Lv(n,e.slice(7));o&&(o.trim&&(r=t.map(u=>Pt(u)?u.trim():u)),o.number&&(r=t.map(o0)));let a,l=n[a=ql(e)]||n[a=ql(dr(e))];!l&&s&&(l=n[a=ql(Zr(e))]),l&&_i(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,_i(c,i,6,r)}}function $m(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!qe(i)){const l=c=>{const u=$m(c,e,!0);u&&(a=!0,cn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(xt(i)&&n.set(i,null),null):(Ve(s)?s.forEach(l=>o[l]=null):cn(o,s),xt(i)&&n.set(i,o),o)}function Ul(i,e){return!i||!wl(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(i,e[0].toLowerCase()+e.slice(1))||rt(i,Zr(e))||rt(i,e))}function Vf(i){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=i,m=ll(i);let p,T;try{if(t.shapeFlag&4){const v=r||n,b=v;p=ri(c.call(b,v,u,h,d,f,g)),T=a}else{const v=e;p=ri(v.length>1?v(h,{attrs:a,slots:o,emit:l}):v(h,null)),T=e.props?a:Nv(a)}}catch(v){Eo.length=0,Il(v,i,1),p=Gr(Oo)}let x=p;if(T&&_!==!1){const v=Object.keys(T),{shapeFlag:b}=x;v.length&&b&7&&(s&&v.some(gh)&&(T=Uv(T,s)),x=Os(x,T,!1,!0))}return t.dirs&&(x=Os(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&Ph(x,t.transition),p=x,ll(m),p}const Nv=i=>{let e;for(const t in i)(t==="class"||t==="style"||wl(t))&&((e||(e={}))[t]=i[t]);return e},Uv=(i,e)=>{const t={};for(const n in i)(!gh(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Ov(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Gf(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Ul(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Gf(n,o,c):!0:!!o;return!1}function Gf(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Ul(t,s))return!0}return!1}function Fv({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const Zm=i=>i.__isSuspense;function Bv(i,e){e&&e.pendingBranch?Ve(i)?e.effects.push(...i):e.effects.push(i):Y0(i)}const ii=Symbol.for("v-fgt"),Ol=Symbol.for("v-txt"),Oo=Symbol.for("v-cmt"),nc=Symbol.for("v-stc"),Eo=[];let An=null;function Wf(i=!1){Eo.push(An=i?null:[])}function kv(){Eo.pop(),An=Eo[Eo.length-1]||null}let Fo=1;function Xf(i,e=!1){Fo+=i,i<0&&An&&e&&(An.hasOnce=!0)}function zv(i){return i.dynamicChildren=Fo>0?An||Es:null,kv(),Fo>0&&An&&An.push(i),i}function Yf(i,e,t,n,r,s){return zv(hl(i,e,t,n,r,s,!0))}function Jm(i){return i?i.__v_isVNode===!0:!1}function no(i,e){return i.type===e.type&&i.key===e.key}const Qm=({key:i})=>i??null,qa=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Pt(i)||Zt(i)||qe(i)?{i:li,r:i,k:e,f:!!t}:i:null);function hl(i,e=null,t=null,n=0,r=null,s=i===ii?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Qm(e),ref:e&&qa(e),scopeId:Cm,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:li};return a?(Lh(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Pt(t)?8:16),Fo>0&&!o&&An&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&An.push(l),l}const Gr=Hv;function Hv(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===lv)&&(i=Oo),Jm(i)){const a=Os(i,e,!0);return t&&Lh(a,t),Fo>0&&!s&&An&&(a.shapeFlag&6?An[An.indexOf(i)]=a:An.push(a)),a.patchFlag=-2,a}if(Jv(i)&&(i=i.__vccOpts),e){e=Vv(e);let{class:a,style:l}=e;a&&!Pt(a)&&(e.class=yh(a)),xt(l)&&(Rh(l)&&!Ve(l)&&(l=cn({},l)),e.style=Dl(l))}const o=Pt(i)?1:Zm(i)?128:K0(i)?64:xt(i)?4:qe(i)?2:0;return hl(i,e,t,n,r,o,s,!0)}function Vv(i){return i?Rh(i)||km(i)?cn({},i):i:null}function Os(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=i,c=e?Wv(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&Qm(c),ref:e&&e.ref?t&&s?Ve(s)?s.concat(qa(e)):[s,qa(e)]:qa(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==ii?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Os(i.ssContent),ssFallback:i.ssFallback&&Os(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&Ph(u,l.clone(u)),u}function Gv(i=" ",e=0){return Gr(Ol,null,i,e)}function ri(i){return i==null||typeof i=="boolean"?Gr(Oo):Ve(i)?Gr(ii,null,i.slice()):Jm(i)?er(i):Gr(Ol,null,String(i))}function er(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Os(i)}function Lh(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Lh(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!km(e)?e._ctx=li:r===3&&li&&(li.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:li},t=32):(e=String(e),n&64?(t=16,e=[Gv(e)]):t=8);i.children=e,i.shapeFlag|=t}function Wv(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=yh([e.class,n.class]));else if(r==="style")e.style=Dl([e.style,n.style]);else if(wl(r)){const s=e[r],o=n[r];o&&s!==o&&!(Ve(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function ei(i,e,t,n=null){_i(i,e,7,[t,n])}const Xv=Om();let Yv=0;function qv(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||Xv,s={uid:Yv++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new d0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hm(n,r),emitsOptions:$m(n,r),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:n.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Iv.bind(null,s),i.ce&&i.ce(s),s}let sn=null,fl,cu;{const i=Pl(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};fl=e("__VUE_INSTANCE_SETTERS__",t=>sn=t),cu=e("__VUE_SSR_SETTERS__",t=>Bo=t)}const ra=i=>{const e=sn;return fl(i),i.scope.on(),()=>{i.scope.off(),fl(e)}},qf=()=>{sn&&sn.scope.off(),fl(null)};function e_(i){return i.vnode.shapeFlag&4}let Bo=!1;function jv(i,e=!1,t=!1){e&&cu(e);const{props:n,children:r}=i.vnode,s=e_(i);xv(i,n,s,e),Tv(i,r,t);const o=s?Kv(i,e):void 0;return e&&cu(!1),o}function Kv(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,uv);const{setup:n}=t;if(n){vr();const r=i.setupContext=n.length>1?Zv(i):null,s=ra(i),o=ia(n,i,0,[i.props,r]),a=em(o);if(xr(),s(),(a||i.sp)&&!So(i)&&Pm(i),a){if(o.then(qf,qf),e)return o.then(l=>{jf(i,l)}).catch(l=>{Il(l,i,0)});i.asyncDep=o}else jf(i,o)}else t_(i)}function jf(i,e,t){qe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:xt(e)&&(i.setupState=Em(e)),t_(i)}function t_(i,e,t){const n=i.type;i.render||(i.render=n.render||fi);{const r=ra(i);vr();try{hv(i)}finally{xr(),r()}}}const $v={get(i,e){return qt(i,"get",""),i[e]}};function Zv(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,$v),slots:i.slots,emit:i.emit,expose:e}}function Ih(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(Em(N0(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in To)return To[t](i)},has(e,t){return t in e||t in To}})):i.proxy}function Jv(i){return qe(i)&&"__vccOpts"in i}const Qv=(i,e)=>z0(i,e,Bo),ex="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let uu;const Kf=typeof window<"u"&&window.trustedTypes;if(Kf)try{uu=Kf.createPolicy("vue",{createHTML:i=>i})}catch{}const n_=uu?i=>uu.createHTML(i):i=>i,tx="http://www.w3.org/2000/svg",nx="http://www.w3.org/1998/Math/MathML",Di=typeof document<"u"?document:null,$f=Di&&Di.createElement("template"),ix={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?Di.createElementNS(tx,i):e==="mathml"?Di.createElementNS(nx,i):t?Di.createElement(i,{is:t}):Di.createElement(i);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Di.createTextNode(i),createComment:i=>Di.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Di.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{$f.innerHTML=n_(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=$f.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},rx=Symbol("_vtc");function sx(i,e,t){const n=i[rx];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Zf=Symbol("_vod"),ox=Symbol("_vsh"),ax=Symbol(""),lx=/(^|;)\s*display\s*:/;function cx(i,e,t){const n=i.style,r=Pt(t);let s=!1;if(t&&!r){if(e)if(Pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ja(n,a,"")}else for(const o in e)t[o]==null&&ja(n,o,"");for(const o in t)o==="display"&&(s=!0),ja(n,o,t[o])}else if(r){if(e!==t){const o=n[ax];o&&(t+=";"+o),n.cssText=t,s=lx.test(t)}}else e&&i.removeAttribute("style");Zf in i&&(i[Zf]=s?n.display:"",i[ox]&&(n.display="none"))}const Jf=/\s*!important$/;function ja(i,e,t){if(Ve(t))t.forEach(n=>ja(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=ux(i,e);Jf.test(t)?i.setProperty(Zr(n),t.replace(Jf,""),"important"):i[n]=t}}const Qf=["Webkit","Moz","ms"],ic={};function ux(i,e){const t=ic[e];if(t)return t;let n=dr(e);if(n!=="filter"&&n in i)return ic[e]=n;n=im(n);for(let r=0;r<Qf.length;r++){const s=Qf[r]+n;if(s in i)return ic[e]=s}return e}const ed="http://www.w3.org/1999/xlink";function td(i,e,t,n,r,s=f0(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(ed,e.slice(6,e.length)):i.setAttributeNS(ed,e,t):t==null||s&&!sm(t)?i.removeAttribute(e):i.setAttribute(e,s?"":gr(t)?String(t):t)}function nd(i,e,t,n,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?n_(t):t);return}const s=i.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=sm(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(r||e)}function hx(i,e,t,n){i.addEventListener(e,t,n)}function fx(i,e,t,n){i.removeEventListener(e,t,n)}const id=Symbol("_vei");function dx(i,e,t,n,r=null){const s=i[id]||(i[id]={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=px(e);if(n){const c=s[e]=gx(n,r);hx(i,a,c,l)}else o&&(fx(i,a,o,l),s[e]=void 0)}}const rd=/(?:Once|Passive|Capture)$/;function px(i){let e;if(rd.test(i)){e={};let n;for(;n=i.match(rd);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Zr(i.slice(2)),e]}let rc=0;const mx=Promise.resolve(),_x=()=>rc||(mx.then(()=>rc=0),rc=Date.now());function gx(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;_i(vx(n,t.value),e,5,[n])};return t.value=i,t.attached=_x(),t}function vx(i,e){if(Ve(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const sd=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,xx=(i,e,t,n,r,s)=>{const o=r==="svg";e==="class"?sx(i,n,o):e==="style"?cx(i,t,n):wl(e)?gh(e)||dx(i,e,t,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yx(i,e,n,o))?(nd(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&td(i,e,n,o,s,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!Pt(n))?nd(i,dr(e),n,s,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),td(i,e,n,o))};function yx(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&sd(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return sd(e)&&Pt(t)?!1:e in i}const Mx=cn({patchProp:xx},ix);let od;function Sx(){return od||(od=bv(Mx))}const Tx=(...i)=>{const e=Sx().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=bx(n);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Ex(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ex(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function bx(i){return Pt(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nh="175",Cs={ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ax=0,ad=1,wx=2,i_=1,Rx=2,Pi=3,ki=0,dn=1,oi=2,cr=0,Ps=1,ld=2,cd=3,ud=4,Cx=5,Br=100,Px=101,Dx=102,Lx=103,Ix=104,Nx=200,Ux=201,Ox=202,Fx=203,hu=204,fu=205,Bx=206,kx=207,zx=208,Hx=209,Vx=210,Gx=211,Wx=212,Xx=213,Yx=214,du=0,pu=1,mu=2,Fs=3,_u=4,gu=5,vu=6,xu=7,r_=0,qx=1,jx=2,ur=0,Kx=1,$x=2,Zx=3,s_=4,Jx=5,Qx=6,ey=7,hd="attached",ty="detached",o_=300,Bs=301,ks=302,dl=303,yu=304,Fl=306,pr=1e3,ci=1001,pl=1002,an=1003,a_=1004,mo=1005,Ut=1006,Ka=1007,ui=1008,zi=1009,l_=1010,c_=1011,ko=1012,Uh=1013,Kr=1014,fn=1015,Kn=1016,Oh=1017,Fh=1018,zo=1020,u_=35902,h_=1021,f_=1022,Fn=1023,d_=1024,p_=1025,Ho=1026,Vo=1027,Bh=1028,kh=1029,m_=1030,zh=1031,Hh=1033,$a=33776,Za=33777,Ja=33778,Qa=33779,Mu=35840,Su=35841,Tu=35842,Eu=35843,bu=36196,Au=37492,wu=37496,Ru=37808,Cu=37809,Pu=37810,Du=37811,Lu=37812,Iu=37813,Nu=37814,Uu=37815,Ou=37816,Fu=37817,Bu=37818,ku=37819,zu=37820,Hu=37821,el=36492,Vu=36494,Gu=36495,__=36283,Wu=36284,Xu=36285,Yu=36286,Go=2300,Wo=2301,sc=2302,fd=2400,dd=2401,pd=2402,ny=2500,iy=0,g_=1,qu=2,ry=3200,sy=3201,v_=0,oy=1,nr="",bt="srgb",Gt="srgb-linear",ml="linear",lt="srgb",ns=7680,md=519,ay=512,ly=513,cy=514,x_=515,uy=516,hy=517,fy=518,dy=519,ju=35044,_d="300 es",Fi=2e3,_l=2001;class Jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gd=1234567;const bo=Math.PI/180,zs=180/Math.PI;function zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Ge(i,e,t){return Math.max(e,Math.min(t,i))}function Vh(i,e){return(i%e+e)%e}function py(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function my(i,e,t){return i!==e?(t-i)/(e-i):0}function Ao(i,e,t){return(1-t)*i+t*e}function _y(i,e,t,n){return Ao(i,e,1-Math.exp(-t*n))}function gy(i,e=1){return e-Math.abs(Vh(i,e*2)-e)}function vy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function xy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function yy(i,e){return i+Math.floor(Math.random()*(e-i+1))}function My(i,e){return i+Math.random()*(e-i)}function Sy(i){return i*(.5-Math.random())}function Ty(i){i!==void 0&&(gd=i);let e=gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ey(i){return i*bo}function by(i){return i*zs}function Ay(i){return(i&i-1)===0&&i!==0}function wy(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ry(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cy(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const y_={DEG2RAD:bo,RAD2DEG:zs,generateUUID:zn,clamp:Ge,euclideanModulo:Vh,mapLinear:py,inverseLerp:my,lerp:Ao,damp:_y,pingpong:gy,smoothstep:vy,smootherstep:xy,randInt:yy,randFloat:My,randFloatSpread:Sy,seededRandom:Ty,degToRad:Ey,radToDeg:by,isPowerOfTwo:Ay,ceilPowerOfTwo:wy,floorPowerOfTwo:Ry,setQuaternionFromProperEuler:Cy,normalize:ot,denormalize:qn};class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],T=r[1],x=r[4],v=r[7],b=r[2],P=r[5],C=r[8];return s[0]=o*_+a*T+l*b,s[3]=o*m+a*x+l*P,s[6]=o*p+a*v+l*C,s[1]=c*_+u*T+h*b,s[4]=c*m+u*x+h*P,s[7]=c*p+u*v+h*C,s[2]=f*_+d*T+g*b,s[5]=f*m+d*x+g*P,s[8]=f*p+d*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oc.makeScale(e,t)),this}rotate(e){return this.premultiply(oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oc=new Xe;function M_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Py(){const i=Xo("canvas");return i.style.display="block",i}const vd={};function tl(i){i in vd||(vd[i]=!0,console.warn(i))}function Dy(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Ly(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Iy(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xd=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yd=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ny(){const i={enabled:!0,workingColorSpace:Gt,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=Ds(r.r),r.g=Ds(r.g),r.b=Ds(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===nr?ml:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gt]:{primaries:e,whitePoint:n,transfer:ml,toXYZ:xd,fromXYZ:yd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:xd,fromXYZ:yd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),i}const $e=Ny();function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let is;class Uy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{is===void 0&&(is=Xo("canvas")),is.width=e.width,is.height=e.height;const r=is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bi(t[n]/255)*255):t[n]=Bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Oy=0;class Gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ac(r[o].image)):s.push(ac(r[o]))}else s=ac(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ac(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uy.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fy=0;class Ot extends Jr{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=ci,r=ci,s=Ut,o=ui,a=Fn,l=zi,c=Ot.DEFAULT_ANISOTROPY,u=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=zn(),this.name="",this.source=new Gh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==o_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pr:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pr:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=o_;Ot.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,r=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,b=(p+1)/2,P=(u+f)/4,C=(h+_)/4,w=(g+m)/4;return x>v&&x>b?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=P/n,s=C/n):v>b?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=P/r,s=w/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=C/s,r=w/s),this.set(n,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(f-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class By extends Jr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ot(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends By{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class S_ extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ky extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,T=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),P=Math.atan2(b,p*T);m=Math.sin(m*P)/b,a=Math.sin(a*P)/b}const v=a*T;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Md.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lc.copy(this).projectOnVector(e),this.sub(lc)}reflect(e){return this.sub(lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lc=new I,Md=new Zn;class Xi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),ma.subVectors(this.max,io),rs.subVectors(e.a,io),ss.subVectors(e.b,io),os.subVectors(e.c,io),Yi.subVectors(ss,rs),qi.subVectors(os,ss),Ar.subVectors(rs,os);let t=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-Ar.z,Ar.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,Ar.z,0,-Ar.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-Ar.y,Ar.x,0];return!cc(t,rs,ss,os,ma)||(t=[1,0,0,0,1,0,0,0,1],!cc(t,rs,ss,os,ma))?!1:(_a.crossVectors(Yi,qi),t=[_a.x,_a.y,_a.z],cc(t,rs,ss,os,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new I,new I,new I,new I,new I,new I,new I,new I],Gn=new I,pa=new Xi,rs=new I,ss=new I,os=new I,Yi=new I,qi=new I,Ar=new I,io=new I,ma=new I,_a=new I,wr=new I;function cc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){wr.fromArray(i,s);const a=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=t.dot(wr),u=n.dot(wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zy=new Xi,ro=new I,uc=new I;class xi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zy.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);const t=ro.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ro,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(uc)),this.expandByPoint(ro.copy(e.center).sub(uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new I,hc=new I,ga=new I,ji=new I,fc=new I,va=new I,dc=new I;class sa{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){hc.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(hc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ga),a=ji.dot(this.direction),l=-ji.dot(ga),c=ji.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(hc).addScaledVector(ga,f),d}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const n=bi.dot(this.direction),r=bi.dot(bi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,r,s){fc.subVectors(t,e),va.subVectors(n,e),dc.crossVectors(fc,va);let o=this.direction.dot(dc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const l=a*this.direction.dot(va.crossVectors(ji,va));if(l<0)return null;const c=a*this.direction.dot(fc.cross(ji));if(c<0||l+c>o)return null;const u=-a*ji.dot(dc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,n,r,s,o,a,l,c,u,h,f,d,g,_,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,r,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hy,e,Vy)}lookAt(e,t,n){const r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ki.crossVectors(n,yn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ki.crossVectors(n,yn)),Ki.normalize(),xa.crossVectors(yn,Ki),r[0]=Ki.x,r[4]=xa.x,r[8]=yn.x,r[1]=Ki.y,r[5]=xa.y,r[9]=yn.y,r[2]=Ki.z,r[6]=xa.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],x=n[7],v=n[11],b=n[15],P=r[0],C=r[4],w=r[8],y=r[12],M=r[1],D=r[5],V=r[9],k=r[13],O=r[2],B=r[6],F=r[10],X=r[14],H=r[3],le=r[7],he=r[11],Se=r[15];return s[0]=o*P+a*M+l*O+c*H,s[4]=o*C+a*D+l*B+c*le,s[8]=o*w+a*V+l*F+c*he,s[12]=o*y+a*k+l*X+c*Se,s[1]=u*P+h*M+f*O+d*H,s[5]=u*C+h*D+f*B+d*le,s[9]=u*w+h*V+f*F+d*he,s[13]=u*y+h*k+f*X+d*Se,s[2]=g*P+_*M+m*O+p*H,s[6]=g*C+_*D+m*B+p*le,s[10]=g*w+_*V+m*F+p*he,s[14]=g*y+_*k+m*X+p*Se,s[3]=T*P+x*M+v*O+b*H,s[7]=T*C+x*D+v*B+b*le,s[11]=T*w+x*V+v*F+b*he,s[15]=T*y+x*k+v*X+b*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+_*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,x=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,v=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,b=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,P=t*T+n*x+r*v+s*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=T*C,e[1]=(_*f*s-h*m*s-_*r*d+n*m*d+h*r*p-n*f*p)*C,e[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*p+n*l*p)*C,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*C,e[4]=x*C,e[5]=(u*m*s-g*f*s+g*r*d-t*m*d-u*r*p+t*f*p)*C,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*C,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*C,e[8]=v*C,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*C,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*C,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*C,e[12]=b*C,e[13]=(u*_*r-g*h*r+g*n*f-t*_*f-u*n*m+t*h*m)*C,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*m-t*a*m)*C,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,T=l*c,x=l*u,v=l*h,b=n.x,P=n.y,C=n.z;return r[0]=(1-(_+p))*b,r[1]=(d+v)*b,r[2]=(g-x)*b,r[3]=0,r[4]=(d-v)*P,r[5]=(1-(f+p))*P,r[6]=(m+T)*P,r[7]=0,r[8]=(g+x)*C,r[9]=(m-T)*C,r[10]=(1-(f+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=as.set(r[0],r[1],r[2]).length();const o=as.set(r[4],r[5],r[6]).length(),a=as.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,u=1/o,h=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,t.setFromRotationMatrix(Wn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Fi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let d,g;if(a===Fi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===_l)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Fi){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),f=(t+e)*c,d=(n+r)*u;let g,_;if(a===Fi)g=(o+s)*h,_=-2*h;else if(a===_l)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const as=new I,Wn=new Ne,Hy=new I(0,0,0),Vy=new I(1,1,1),Ki=new I,xa=new I,yn=new I,Sd=new Ne,Td=new Zn;class gi{constructor(e=0,t=0,n=0,r=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Td.setFromEuler(this),this.setFromQuaternion(Td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class T_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gy=0;const Ed=new I,ls=new Zn,Ai=new Ne,ya=new I,so=new I,Wy=new I,Xy=new Zn,bd=new I(1,0,0),Ad=new I(0,1,0),wd=new I(0,0,1),Rd={type:"added"},Yy={type:"removed"},cs={type:"childadded",child:null},pc={type:"childremoved",child:null};class vt extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new I,t=new gi,n=new Zn,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Xe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new T_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(bd,e)}rotateY(e){return this.rotateOnAxis(Ad,e)}rotateZ(e){return this.rotateOnAxis(wd,e)}translateOnAxis(e,t){return Ed.copy(e).applyQuaternion(this.quaternion),this.position.add(Ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bd,e)}translateY(e){return this.translateOnAxis(Ad,e)}translateZ(e){return this.translateOnAxis(wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ya.copy(e):ya.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(so,ya,this.up):Ai.lookAt(ya,so,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),ls.setFromRotationMatrix(Ai),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rd),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yy),pc.child=e,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rd),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,Wy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,Xy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}vt.DEFAULT_UP=new I(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new I,wi=new I,mc=new I,Ri=new I,us=new I,hs=new I,Cd=new I,_c=new I,gc=new I,vc=new I,xc=new Ke,yc=new Ke,Mc=new Ke;class jn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xn.subVectors(e,t),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Xn.subVectors(r,t),wi.subVectors(n,t),mc.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(wi),l=Xn.dot(mc),c=wi.dot(wi),u=wi.dot(mc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return xc.setScalar(0),yc.setScalar(0),Mc.setScalar(0),xc.fromBufferAttribute(e,t),yc.fromBufferAttribute(e,n),Mc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(xc,s.x),o.addScaledVector(yc,s.y),o.addScaledVector(Mc,s.z),o}static isFrontFacing(e,t,n,r){return Xn.subVectors(n,t),wi.subVectors(e,t),Xn.cross(wi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Xn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;us.subVectors(r,n),hs.subVectors(s,n),_c.subVectors(e,n);const l=us.dot(_c),c=hs.dot(_c);if(l<=0&&c<=0)return t.copy(n);gc.subVectors(e,r);const u=us.dot(gc),h=hs.dot(gc);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(us,o);vc.subVectors(e,s);const d=us.dot(vc),g=hs.dot(vc);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(hs,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Cd.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(Cd,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(us,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const E_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function Sc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=$e.workingColorSpace){if(e=Vh(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Sc(o,s,e+1/3),this.g=Sc(o,s,e),this.b=Sc(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=bt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const n=E_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return $e.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Ge(Yt.r*255,0,255))*65536+Math.round(Ge(Yt.g*255,0,255))*256+Math.round(Ge(Yt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=bt){$e.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,r=Yt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Ma);const n=Ao($i.h,Ma.h,t),r=Ao($i.s,Ma.s,t),s=Ao($i.l,Ma.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Ie;Ie.NAMES=E_;let qy=0;class di extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=Ps,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=fu,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hu&&(n.blendSrc=this.blendSrc),this.blendDst!==fu&&(n.blendDst=this.blendDst),this.blendEquation!==Br&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==md&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zr extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=r_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Oi=jy();function jy(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function Ky(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Ge(i,-65504,65504),Oi.floatView[0]=i;const e=Oi.uint32View[0],t=e>>23&511;return Oi.baseTable[t]+((e&8388607)>>Oi.shiftTable[t])}function $y(i){const e=i>>10;return Oi.uint32View[0]=Oi.mantissaTable[Oi.offsetTable[e]+(i&1023)]+Oi.exponentTable[e],Oi.floatView[0]}class Sa{static toHalfFloat(e){return Ky(e)}static fromHalfFloat(e){return $y(e)}}const wt=new I,Ta=new xe;let Zy=0;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ju,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ju&&(e.usage=this.usage),e}}class b_ extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class A_ extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ln extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jy=0;const Nn=new Ne,Tc=new vt,fs=new I,Mn=new Xi,oo=new Xi,Nt=new I;class Dn extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(M_(e)?A_:b_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Tc.lookAt(e),Tc.updateMatrix(),this.applyMatrix4(Tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ln(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(Mn.min,oo.min),Mn.expandByPoint(Nt),Nt.addVectors(Mn.max,oo.max),Mn.expandByPoint(Nt)):(Mn.expandByPoint(oo.min),Mn.expandByPoint(oo.max))}Mn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(e,c),Nt.add(fs)),r=Math.max(r,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new I,l[w]=new I;const c=new I,u=new I,h=new I,f=new xe,d=new xe,g=new xe,_=new I,m=new I;function p(w,y,M){c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,w),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[w].add(_),a[y].add(_),a[M].add(_),l[w].add(m),l[y].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let w=0,y=T.length;w<y;++w){const M=T[w],D=M.start,V=M.count;for(let k=D,O=D+V;k<O;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new I,v=new I,b=new I,P=new I;function C(w){b.fromBufferAttribute(r,w),P.copy(b);const y=a[w];x.copy(y),x.sub(b.multiplyScalar(b.dot(y))).normalize(),v.crossVectors(P,y);const D=v.dot(l[w])<0?-1:1;o.setXYZW(w,x.x,x.y,x.z,D)}for(let w=0,y=T.length;w<y;++w){const M=T[w],D=M.start,V=M.count;for(let k=D,O=D+V;k<O;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Ht(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pd=new Ne,Rr=new sa,Ea=new xi,Dd=new I,ba=new I,Aa=new I,wa=new I,Ec=new I,Ra=new I,Ld=new I,Ca=new I;class zt extends vt{constructor(e=new Dn,t=new zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ra.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ec.fromBufferAttribute(h,e),o?Ra.addScaledVector(Ec,u):Ra.addScaledVector(Ec.sub(t),u))}t.add(Ra)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(Ea.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Ea,Dd)===null||Rr.origin.distanceToSquared(Dd)>(e.far-e.near)**2))&&(Pd.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Pd),!(n.boundingBox!==null&&Rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=T,b=x;v<b;v+=3){const P=a.getX(v),C=a.getX(v+1),w=a.getX(v+2);r=Pa(this,p,e,n,c,u,h,P,C,w),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);r=Pa(this,o,e,n,c,u,h,T,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=T,b=x;v<b;v+=3){const P=v,C=v+1,w=v+2;r=Pa(this,p,e,n,c,u,h,P,C,w),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,x=m+1,v=m+2;r=Pa(this,o,e,n,c,u,h,T,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Qy(i,e,t,n,r,s,o,a){let l;if(e.side===dn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ki,a),l===null)return null;Ca.copy(a),Ca.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ca);return c<t.near||c>t.far?null:{distance:c,point:Ca.clone(),object:i}}function Pa(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,ba),i.getVertexPosition(l,Aa),i.getVertexPosition(c,wa);const u=Qy(i,e,t,n,ba,Aa,wa,Ld);if(u){const h=new I;jn.getBarycoord(Ld,ba,Aa,wa,h),r&&(u.uv=jn.getInterpolatedAttribute(r,a,l,c,h,new xe)),s&&(u.uv1=jn.getInterpolatedAttribute(s,a,l,c,h,new xe)),o&&(u.normal=jn.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};jn.getNormal(ba,Aa,wa,f.normal),u.face=f,u.barycoord=h}return u}class oa extends Dn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(h,2));function g(_,m,p,T,x,v,b,P,C,w,y){const M=v/C,D=b/w,V=v/2,k=b/2,O=P/2,B=C+1,F=w+1;let X=0,H=0;const le=new I;for(let he=0;he<F;he++){const Se=he*D-k;for(let Ee=0;Ee<B;Ee++){const ze=Ee*M-V;le[_]=ze*T,le[m]=Se*x,le[p]=O,c.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[p]=P>0?1:-1,u.push(le.x,le.y,le.z),h.push(Ee/C),h.push(1-he/w),X+=1}}for(let he=0;he<w;he++)for(let Se=0;Se<C;Se++){const Ee=f+Se+B*he,ze=f+Se+B*(he+1),te=f+(Se+1)+B*(he+1),ue=f+(Se+1)+B*he;l.push(Ee,ze,ue),l.push(ze,te,ue),H+=6}a.addGroup(d,H,y),d+=H,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function nn(i){const e={};for(let t=0;t<i.length;t++){const n=Hs(i[t]);for(const r in n)e[r]=n[r]}return e}function eM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function w_(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Bl={clone:Hs,merge:nn};var tM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tM,this.fragmentShader=nM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=eM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class R_ extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new I,Id=new xe,Nd=new xe;class kt extends R_{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,Id,Nd),t.subVectors(Nd,Id)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ds=-90,ps=1;class iM extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kt(ds,ps,e,t);r.layers=this.layers,this.add(r);const s=new kt(ds,ps,e,t);s.layers=this.layers,this.add(s);const o=new kt(ds,ps,e,t);o.layers=this.layers,this.add(o);const a=new kt(ds,ps,e,t);a.layers=this.layers,this.add(a);const l=new kt(ds,ps,e,t);l.layers=this.layers,this.add(l);const c=new kt(ds,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_l)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class C_ extends Ot{constructor(e=[],t=Bs,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rM extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new C_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oa(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:cr});s.uniforms.tEquirect.value=t;const o=new zt(r,s),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=Ut),new iM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class ir extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sM={type:"move"};class bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ir;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class oM extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class aM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ju,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new I;class Wh{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ud=new I,Od=new Ke,Fd=new Ke,lM=new I,Bd=new Ne,Da=new I,Ac=new xi,kd=new Ne,wc=new sa;class cM extends zt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hd,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Da),this.boundingBox.expandByPoint(Da)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Da),this.boundingSphere.expandByPoint(Da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ac.copy(this.boundingSphere),Ac.applyMatrix4(r),e.ray.intersectsSphere(Ac)!==!1&&(kd.copy(r).invert(),wc.copy(e.ray).applyMatrix4(kd),!(this.boundingBox!==null&&wc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ty?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Od.fromBufferAttribute(r.attributes.skinIndex,e),Fd.fromBufferAttribute(r.attributes.skinWeight,e),Ud.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Fd.getComponent(s);if(o!==0){const a=Od.getComponent(s);Bd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(lM.copy(Ud).applyMatrix4(Bd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class P_ extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xh extends Ot{constructor(e=null,t=1,n=1,r,s,o,a,l,c=an,u=an,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zd=new Ne,uM=new Ne;class Yh{constructor(e=[],t=[]){this.uuid=zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:uM;zd.multiplyMatrices(a,t[s]),zd.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Yh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xh(t,e,e,Fn,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new P_),this.bones.push(o),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class Ku extends Ht{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ms=new Ne,Hd=new Ne,La=[],Vd=new Xi,hM=new Ne,ao=new zt,lo=new xi;class D_ extends zt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ku(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,hM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),Vd.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(Vd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),lo.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(lo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(ao.geometry=this.geometry,ao.material=this.material,ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(n),e.ray.intersectsSphere(lo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ms),Hd.multiplyMatrices(n,ms),ao.matrixWorld=Hd,ao.raycast(e,La);for(let o=0,a=La.length;o<a;o++){const l=La[o];l.instanceId=s,l.object=this,t.push(l)}La.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ku(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xh(new Float32Array(r*this.count),r,this.count,Bh,fn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Rc=new I,fM=new I,dM=new Xe;class Yn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Rc.subVectors(n,t).cross(fM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Rc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||dM.getNormalMatrix(e),r=this.coplanarPoint(Rc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new xi,Ia=new I;class qh{constructor(e=new Yn,t=new Yn,n=new Yn,r=new Yn,s=new Yn,o=new Yn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],T=r[13],x=r[14],v=r[15];if(n[0].setComponents(l-s,f-c,m-d,v-p).normalize(),n[1].setComponents(l+s,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+u,m+g,v+T).normalize(),n[3].setComponents(l-o,f-u,m-g,v-T).normalize(),n[4].setComponents(l-a,f-h,m-_,v-x).normalize(),t===Fi)n[5].setComponents(l+a,f+h,m+_,v+x).normalize();else if(t===_l)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ia.x=r.normal.x>0?e.max.x:e.min.x,Ia.y=r.normal.y>0?e.max.y:e.min.y,Ia.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class L_ extends di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gl=new I,vl=new I,Gd=new Ne,co=new sa,Na=new xi,Cc=new I,Wd=new I;class jh extends vt{constructor(e=new Dn,t=new L_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)gl.fromBufferAttribute(t,r-1),vl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=gl.distanceTo(vl);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(r),Na.radius+=s,e.ray.intersectsSphere(Na)===!1)return;Gd.copy(r).invert(),co.copy(e.ray).applyMatrix4(Gd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),T=u.getX(_+1),x=Ua(this,e,co,l,p,T,_);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Ua(this,e,co,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Ua(this,e,co,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Ua(this,e,co,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ua(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(gl.fromBufferAttribute(a,r),vl.fromBufferAttribute(a,s),t.distanceSqToSegment(gl,vl,Cc,Wd)>n)return;Cc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Cc);if(!(c<e.near||c>e.far))return{distance:c,point:Wd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Xd=new I,Yd=new I;class pM extends jh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Xd.fromBufferAttribute(t,r),Yd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Xd.distanceTo(Yd);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mM extends jh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class I_ extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qd=new Ne,$u=new sa,Oa=new xi,Fa=new I;class _M extends vt{constructor(e=new Dn,t=new I_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),Oa.radius+=s,e.ray.intersectsSphere(Oa)===!1)return;qd.copy(r).invert(),$u.copy(e.ray).applyMatrix4(qd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Fa.fromBufferAttribute(h,m),jd(Fa,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Fa.fromBufferAttribute(h,g),jd(Fa,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jd(i,e,t,n,r,s,o){const a=$u.distanceSqToPoint(i);if(a<t){const l=new I;$u.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class N_ extends Ot{constructor(e,t,n=Kr,r,s,o,a=an,l=an,c,u=Ho){if(u!==Ho&&u!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new xe:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,r=[],s=[],o=[],a=new I,l=new Ne;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ge(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Ge(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Kh extends yi{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new xe){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gM extends Kh{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $h(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Ba=new I,Pc=new $h,Dc=new $h,Lc=new $h;class vM extends yi{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new I){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ba.subVectors(r[0],r[1]).add(r[0]),c=Ba);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ba.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ba),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Pc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),Dc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),Lc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Pc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Dc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Lc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Pc.calc(l),Dc.calc(l),Lc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kd(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function xM(i,e){const t=1-i;return t*t*e}function yM(i,e){return 2*(1-i)*i*e}function MM(i,e){return i*i*e}function wo(i,e,t,n){return xM(i,e)+yM(i,t)+MM(i,n)}function SM(i,e){const t=1-i;return t*t*t*e}function TM(i,e){const t=1-i;return 3*t*t*i*e}function EM(i,e){return 3*(1-i)*i*i*e}function bM(i,e){return i*i*i*e}function Ro(i,e,t,n,r){return SM(i,e)+TM(i,t)+EM(i,n)+bM(i,r)}class U_ extends yi{constructor(e=new xe,t=new xe,n=new xe,r=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new xe){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ro(e,r.x,s.x,o.x,a.x),Ro(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class AM extends yi{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ro(e,r.x,s.x,o.x,a.x),Ro(e,r.y,s.y,o.y,a.y),Ro(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class O_ extends yi{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wM extends yi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F_ extends yi{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(wo(e,r.x,s.x,o.x),wo(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class RM extends yi{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(wo(e,r.x,s.x,o.x),wo(e,r.y,s.y,o.y),wo(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B_ extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Kd(a,l.x,c.x,u.x,h.x),Kd(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new xe().fromArray(r))}return this}}var $d=Object.freeze({__proto__:null,ArcCurve:gM,CatmullRomCurve3:vM,CubicBezierCurve:U_,CubicBezierCurve3:AM,EllipseCurve:Kh,LineCurve:O_,LineCurve3:wM,QuadraticBezierCurve:F_,QuadraticBezierCurve3:RM,SplineCurve:B_});class CM extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $d[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new $d[r.type]().fromJSON(r))}return this}}class Zd extends CM{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new O_(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new F_(this.currentPoint.clone(),new xe(e,t),new xe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new U_(this.currentPoint.clone(),new xe(e,t),new xe(n,r),new xe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new B_(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new Kh(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Zh extends Dn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new I,u=new xe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ln(o,3)),this.setAttribute("normal",new ln(a,3)),this.setAttribute("uv",new ln(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class PM extends Zd{constructor(e){super(e),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Zd().fromJSON(r))}return this}}class kl extends Dn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*f-o;for(let x=0;x<c;x++){const v=x*h-s;g.push(v,-T,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const x=T+c*p,v=T+c*(p+1),b=T+1+c*(p+1),P=T+1+c*p;d.push(x,v,P),d.push(v,b,P)}this.setIndex(d),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.widthSegments,e.heightSegments)}}class xl extends Dn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,f=new I,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const T=[],x=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const P=b/t;h.x=-e*Math.cos(r+P*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+P*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(P+v,1-x),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const x=u[p][T+1],v=u[p][T],b=u[p+1][T],P=u[p+1][T+1];(p!==0||o>0)&&d.push(x,v,P),(p!==n-1||l<Math.PI)&&d.push(v,b,P)}this.setIndex(d),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yo extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=v_,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mi extends Yo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class DM extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LM extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ka(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function IM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function NM(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Jd(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function k_(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class aa{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class UM extends aa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fd,endingEnd:fd}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case dd:s=e,a=2*t-n;break;case pd:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case dd:o=e,l=2*n-t;break;case pd:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,T=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let b=0;b!==a;++b)s[b]=p*o[u+b]+T*o[c+b]+x*o[l+b]+v*o[h+b];return s}}class OM extends aa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class FM extends aa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Qn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ka(t,this.TimeBufferType),this.values=ka(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ka(e.times,Array),values:ka(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new FM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new OM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new UM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Go:t=this.InterpolantFactoryMethodDiscrete;break;case Wo:t=this.InterpolantFactoryMethodLinear;break;case sc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Go;case this.InterpolantFactoryMethodLinear:return Wo;case this.InterpolantFactoryMethodSmooth:return sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&IM(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===sc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Wo;class Zs extends Qn{constructor(e,t,n){super(e,t,n)}}Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Go;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class z_ extends Qn{constructor(e,t,n,r){super(e,t,n,r)}}z_.prototype.ValueTypeName="color";class Vs extends Qn{constructor(e,t,n,r){super(e,t,n,r)}}Vs.prototype.ValueTypeName="number";class BM extends aa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Zn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Gs extends Qn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new BM(this.times,this.values,this.getValueSize(),e)}}Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends Qn{constructor(e,t,n){super(e,t,n)}}Js.prototype.ValueTypeName="string";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Go;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends Qn{constructor(e,t,n,r){super(e,t,n,r)}}Ws.prototype.ValueTypeName="vector";class kM{constructor(e="",t=-1,n=[],r=ny){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=zn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(HM(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Qn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=NM(l);l=Jd(l,1,u),c=Jd(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Vs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];k_(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let T=0;T!==f[g].morphTargets.length;++T){const x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}r.push(new Vs(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(Ws,d+".position",f,"pos",r),n(Gs,d+".quaternion",f,"rot",r),n(Ws,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vs;case"vector":case"vector2":case"vector3":case"vector4":return Ws;case"color":return z_;case"quaternion":return Gs;case"bool":case"boolean":return Zs;case"string":return Js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function HM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zM(i.type);if(i.times===void 0){const t=[],n=[];k_(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const rr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class VM{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const GM=new VM;class yr{constructor(e){this.manager=e!==void 0?e:GM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ci={};class WM extends Error{constructor(e,t){super(e),this.response=t}}class qo extends yr{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=rr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:r});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ci[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){T();function T(){h.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let P=0,C=u.length;P<C;P++){const w=u[P];w.onProgress&&w.onProgress(b)}p.enqueue(v),T()}},x=>{p.error(x)})}}});return new Response(m)}else throw new WM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{rr.add(e,c);const u=Ci[e];delete Ci[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ci[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ci[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class XM extends yr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=rr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Xo("img");function l(){u(),rr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class YM extends yr{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Xh,a=new qo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:ci,o.wrapT=c.wrapT!==void 0?c.wrapT:ci,o.magFilter=c.magFilter!==void 0?c.magFilter:Ut,o.minFilter=c.minFilter!==void 0?c.minFilter:Ut,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ui),c.mipmapCount===1&&(o.minFilter=Ut),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class Jh extends yr{constructor(e){super(e)}load(e,t,n,r){const s=new Ot,o=new XM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Qh extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ic=new Ne,Qd=new I,ep=new I;class ef{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qh,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qd),ep.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ep),t.updateMatrixWorld(),Ic.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qM extends ef{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=zs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jM extends Qh{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new qM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const tp=new Ne,uo=new I,Nc=new I;class KM extends ef{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),uo.setFromMatrixPosition(e.matrixWorld),n.position.copy(uo),Nc.copy(n.position),Nc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nc),n.updateMatrixWorld(),r.makeTranslation(-uo.x,-uo.y,-uo.z),tp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tp)}}class Zu extends Qh{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new KM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tf extends R_{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $M extends ef{constructor(){super(new tf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H_ extends Qh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new $M}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Co{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ZM extends yr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=rr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return rr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),rr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});rr.add(e,l),s.manager.itemStart(e)}}class JM extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class QM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=np(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=np();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function np(){return performance.now()}const nf="\\[\\]\\.:\\/",eS=new RegExp("["+nf+"]","g"),rf="[^"+nf+"]",tS="[^"+nf.replace("\\.","")+"]",nS=/((?:WC+[\/:])*)/.source.replace("WC",rf),iS=/(WCOD+)?/.source.replace("WCOD",tS),rS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rf),sS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rf),oS=new RegExp("^"+nS+iS+rS+sS+"$"),aS=["material","materials","bones","map"];class lS{constructor(e,t,n){const r=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eS,"")}static parseTrackName(e){const t=oS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);aS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=lS;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ip{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cS extends Jr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function rp(i,e,t,n){const r=uS(n);switch(t){case h_:return i*e;case d_:return i*e;case p_:return i*e*2;case Bh:return i*e/r.components*r.byteLength;case kh:return i*e/r.components*r.byteLength;case m_:return i*e*2/r.components*r.byteLength;case zh:return i*e*2/r.components*r.byteLength;case f_:return i*e*3/r.components*r.byteLength;case Fn:return i*e*4/r.components*r.byteLength;case Hh:return i*e*4/r.components*r.byteLength;case $a:case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ja:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Su:case Eu:return Math.max(i,16)*Math.max(e,8)/4;case Mu:case Tu:return Math.max(i,8)*Math.max(e,8)/2;case bu:case Au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Du:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Iu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ou:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ku:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case el:case Vu:case Gu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case __:case Wu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xu:case Yu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uS(i){switch(i){case zi:case l_:return{byteLength:1,components:1};case ko:case c_:case Kn:return{byteLength:2,components:1};case Oh:case Fh:return{byteLength:2,components:4};case Kr:case Uh:case fn:return{byteLength:4,components:1};case u_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function V_(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function hS(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var fS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_S=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,MS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ES=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,AS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,US=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VS="gl_FragColor = linearToOutputTexel( gl_FragColor );",GS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$S=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_T=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,MT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ST=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ET=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$T=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,GE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:fS,alphahash_pars_fragment:dS,alphamap_fragment:pS,alphamap_pars_fragment:mS,alphatest_fragment:_S,alphatest_pars_fragment:gS,aomap_fragment:vS,aomap_pars_fragment:xS,batching_pars_vertex:yS,batching_vertex:MS,begin_vertex:SS,beginnormal_vertex:TS,bsdfs:ES,iridescence_fragment:bS,bumpmap_pars_fragment:AS,clipping_planes_fragment:wS,clipping_planes_pars_fragment:RS,clipping_planes_pars_vertex:CS,clipping_planes_vertex:PS,color_fragment:DS,color_pars_fragment:LS,color_pars_vertex:IS,color_vertex:NS,common:US,cube_uv_reflection_fragment:OS,defaultnormal_vertex:FS,displacementmap_pars_vertex:BS,displacementmap_vertex:kS,emissivemap_fragment:zS,emissivemap_pars_fragment:HS,colorspace_fragment:VS,colorspace_pars_fragment:GS,envmap_fragment:WS,envmap_common_pars_fragment:XS,envmap_pars_fragment:YS,envmap_pars_vertex:qS,envmap_physical_pars_fragment:rT,envmap_vertex:jS,fog_vertex:KS,fog_pars_vertex:$S,fog_fragment:ZS,fog_pars_fragment:JS,gradientmap_pars_fragment:QS,lightmap_pars_fragment:eT,lights_lambert_fragment:tT,lights_lambert_pars_fragment:nT,lights_pars_begin:iT,lights_toon_fragment:sT,lights_toon_pars_fragment:oT,lights_phong_fragment:aT,lights_phong_pars_fragment:lT,lights_physical_fragment:cT,lights_physical_pars_fragment:uT,lights_fragment_begin:hT,lights_fragment_maps:fT,lights_fragment_end:dT,logdepthbuf_fragment:pT,logdepthbuf_pars_fragment:mT,logdepthbuf_pars_vertex:_T,logdepthbuf_vertex:gT,map_fragment:vT,map_pars_fragment:xT,map_particle_fragment:yT,map_particle_pars_fragment:MT,metalnessmap_fragment:ST,metalnessmap_pars_fragment:TT,morphinstance_vertex:ET,morphcolor_vertex:bT,morphnormal_vertex:AT,morphtarget_pars_vertex:wT,morphtarget_vertex:RT,normal_fragment_begin:CT,normal_fragment_maps:PT,normal_pars_fragment:DT,normal_pars_vertex:LT,normal_vertex:IT,normalmap_pars_fragment:NT,clearcoat_normal_fragment_begin:UT,clearcoat_normal_fragment_maps:OT,clearcoat_pars_fragment:FT,iridescence_pars_fragment:BT,opaque_fragment:kT,packing:zT,premultiplied_alpha_fragment:HT,project_vertex:VT,dithering_fragment:GT,dithering_pars_fragment:WT,roughnessmap_fragment:XT,roughnessmap_pars_fragment:YT,shadowmap_pars_fragment:qT,shadowmap_pars_vertex:jT,shadowmap_vertex:KT,shadowmask_pars_fragment:$T,skinbase_vertex:ZT,skinning_pars_vertex:JT,skinning_vertex:QT,skinnormal_vertex:eE,specularmap_fragment:tE,specularmap_pars_fragment:nE,tonemapping_fragment:iE,tonemapping_pars_fragment:rE,transmission_fragment:sE,transmission_pars_fragment:oE,uv_pars_fragment:aE,uv_pars_vertex:lE,uv_vertex:cE,worldpos_vertex:uE,background_vert:hE,background_frag:fE,backgroundCube_vert:dE,backgroundCube_frag:pE,cube_vert:mE,cube_frag:_E,depth_vert:gE,depth_frag:vE,distanceRGBA_vert:xE,distanceRGBA_frag:yE,equirect_vert:ME,equirect_frag:SE,linedashed_vert:TE,linedashed_frag:EE,meshbasic_vert:bE,meshbasic_frag:AE,meshlambert_vert:wE,meshlambert_frag:RE,meshmatcap_vert:CE,meshmatcap_frag:PE,meshnormal_vert:DE,meshnormal_frag:LE,meshphong_vert:IE,meshphong_frag:NE,meshphysical_vert:UE,meshphysical_frag:OE,meshtoon_vert:FE,meshtoon_frag:BE,points_vert:kE,points_frag:zE,shadow_vert:HE,shadow_frag:VE,sprite_vert:GE,sprite_frag:WE},_e={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},si={basic:{uniforms:nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:nn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:nn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:nn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:nn([_e.points,_e.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:nn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:nn([_e.common,_e.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:nn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:nn([_e.sprite,_e.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:nn([_e.common,_e.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:nn([_e.lights,_e.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};si.physical={uniforms:nn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const za={r:0,b:0,g:0},Pr=new gi,XE=new Ne;function YE(i,e,t,n,r,s,o){const a=new Ie(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const b=g(x);b===null?p(a,l):b&&b.isColor&&(p(b,1),v=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===Fl)?(u===void 0&&(u=new zt(new oa(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Hs(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Pr.copy(v.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(XE.makeRotationFromEuler(Pr)),u.material.toneMapped=$e.getTransfer(b.colorSpace)!==lt,(h!==b||f!==b.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new zt(new kl(2,2),new Jn({name:"BackgroundMaterial",uniforms:Hs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=$e.getTransfer(b.colorSpace)!==lt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(za,w_(i)),n.buffers.color.setClear(za.r,za.g,za.b,v,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m,dispose:T}}function qE(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(M,D,V,k,O){let B=!1;const F=h(k,V,D);s!==F&&(s=F,c(s.object)),B=d(M,k,V,O),B&&g(M,k,V,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(M,D,V,k),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,D,V){const k=V.wireframe===!0;let O=n[M.id];O===void 0&&(O={},n[M.id]=O);let B=O[D.id];B===void 0&&(B={},O[D.id]=B);let F=B[k];return F===void 0&&(F=f(l()),B[k]=F),F}function f(M){const D=[],V=[],k=[];for(let O=0;O<t;O++)D[O]=0,V[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:k,object:M,attributes:{},index:null}}function d(M,D,V,k){const O=s.attributes,B=D.attributes;let F=0;const X=V.getAttributes();for(const H in X)if(X[H].location>=0){const he=O[H];let Se=B[H];if(Se===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),he===void 0||he.attribute!==Se||Se&&he.data!==Se.data)return!0;F++}return s.attributesNum!==F||s.index!==k}function g(M,D,V,k){const O={},B=D.attributes;let F=0;const X=V.getAttributes();for(const H in X)if(X[H].location>=0){let he=B[H];he===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const Se={};Se.attribute=he,he&&he.data&&(Se.data=he.data),O[H]=Se,F++}s.attributes=O,s.attributesNum=F,s.index=k}function _(){const M=s.newAttributes;for(let D=0,V=M.length;D<V;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const V=s.newAttributes,k=s.enabledAttributes,O=s.attributeDivisors;V[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),O[M]!==D&&(i.vertexAttribDivisor(M,D),O[M]=D)}function T(){const M=s.newAttributes,D=s.enabledAttributes;for(let V=0,k=D.length;V<k;V++)D[V]!==M[V]&&(i.disableVertexAttribArray(V),D[V]=0)}function x(M,D,V,k,O,B,F){F===!0?i.vertexAttribIPointer(M,D,V,O,B):i.vertexAttribPointer(M,D,V,k,O,B)}function v(M,D,V,k){_();const O=k.attributes,B=V.getAttributes(),F=D.defaultAttributeValues;for(const X in B){const H=B[X];if(H.location>=0){let le=O[X];if(le===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const he=le.normalized,Se=le.itemSize,Ee=e.get(le);if(Ee===void 0)continue;const ze=Ee.buffer,te=Ee.type,ue=Ee.bytesPerElement,be=te===i.INT||te===i.UNSIGNED_INT||le.gpuType===Uh;if(le.isInterleavedBufferAttribute){const me=le.data,Ce=me.stride,Je=le.offset;if(me.isInstancedInterleavedBuffer){for(let Pe=0;Pe<H.locationSize;Pe++)p(H.location+Pe,me.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Pe=0;Pe<H.locationSize;Pe++)m(H.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Pe=0;Pe<H.locationSize;Pe++)x(H.location+Pe,Se/H.locationSize,te,he,Ce*ue,(Je+Se/H.locationSize*Pe)*ue,be)}else{if(le.isInstancedBufferAttribute){for(let me=0;me<H.locationSize;me++)p(H.location+me,le.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<H.locationSize;me++)m(H.location+me);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let me=0;me<H.locationSize;me++)x(H.location+me,Se/H.locationSize,te,he,Se*ue,Se/H.locationSize*me*ue,be)}}else if(F!==void 0){const he=F[X];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(H.location,he);break;case 3:i.vertexAttrib3fv(H.location,he);break;case 4:i.vertexAttrib4fv(H.location,he);break;default:i.vertexAttrib1fv(H.location,he)}}}}T()}function b(){w();for(const M in n){const D=n[M];for(const V in D){const k=D[V];for(const O in k)u(k[O].object),delete k[O];delete D[V]}delete n[M]}}function P(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const V in D){const k=D[V];for(const O in k)u(k[O].object),delete k[O];delete D[V]}delete n[M.id]}function C(M){for(const D in n){const V=n[D];if(V[M.id]===void 0)continue;const k=V[M.id];for(const O in k)u(k[O].object),delete k[O];delete V[M.id]}}function w(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:y,dispose:b,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function jE(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function KE(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Fn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const w=C===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==zi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==fn&&!w)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:b,maxSamples:P}}function $E(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Yn,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,x=T*4;let v=p.clippingState||null;l.value=v,v=u(g,f,x,d);for(let b=0;b!==x;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(T,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ZE(i){let e=new WeakMap;function t(o,a){return a===dl?o.mapping=Bs:a===yu&&(o.mapping=ks),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===dl||a===yu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rM(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ms=4,sp=[.125,.215,.35,.446,.526,.582],kr=20,Uc=new tf,op=new Ie;let Oc=null,Fc=0,Bc=0,kc=!1;const Or=(1+Math.sqrt(5))/2,_s=1/Or,ap=[new I(-Or,_s,0),new I(Or,_s,0),new I(-_s,0,Or),new I(_s,0,Or),new I(0,Or,-_s),new I(0,Or,_s),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],JE=new I;class lp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=JE}=s;Oc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oc,Fc,Bc),this._renderer.xr.enabled=kc,e.scissorTest=!1,Ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Kn,format:Fn,colorSpace:Gt,depthBuffer:!1},r=cp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QE(s)),this._blurMaterial=eb(s,e,t)}return r}_compileMaterial(e){const t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,Uc)}_sceneToCubeUV(e,t,n,r,s){const l=new kt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(op),h.toneMapping=ur,h.autoClear=!1;const g=new zr({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),_=new zt(new oa,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(op),m=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const v=this._cubeSize;Ha(r,x*v,T>2?v:0,v,v),h.setRenderTarget(r),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Bs||e.mapping===ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=up());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ha(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Uc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ap[(r-s-1)%ap.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new zt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*kr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):kr;m>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kr}`);const p=[];let T=0;for(let C=0;C<kr;++C){const w=C/_,y=Math.exp(-w*w/2);p.push(y),C===0?T+=y:C<m&&(T+=2*y)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[r],b=3*v*(r>x-Ms?r-x+Ms:0),P=4*(this._cubeSize-v);Ha(t,b,P,3*v,2*v),l.setRenderTarget(t),l.render(h,Uc)}}function QE(i){const e=[],t=[],n=[];let r=i;const s=i-Ms+1+sp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ms?l=sp[o-i+Ms-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let P=0;P<d;P++){const C=P%3*2/3-1,w=P>2?0:-1,y=[C,w,0,C+2/3,w,0,C+2/3,w+1,0,C,w,0,C+2/3,w+1,0,C,w+1,0];T.set(y,_*g*P),x.set(f,m*g*P);const M=[P,P,P,P,P,P];v.set(M,p*g*P)}const b=new Dn;b.setAttribute("position",new Ht(T,_)),b.setAttribute("uv",new Ht(x,m)),b.setAttribute("faceIndex",new Ht(v,p)),e.push(b),r>Ms&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cp(i,e,t){const n=new Hi(i,e,t);return n.texture.mapping=Fl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ha(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function eb(i,e,t){const n=new Float32Array(kr),r=new I(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function up(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function hp(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function sf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tb(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===dl||l===yu,u=l===Bs||l===ks;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new lp(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new lp(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function nb(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&tl("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ib(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let x=0,v=T.length;x<v;x+=3){const b=T[x+0],P=T[x+1],C=T[x+2];f.push(b,P,P,C,C,b)}}else if(g!==void 0){const T=g.array;_=g.version;for(let x=0,v=T.length/3-1;x<v;x+=3){const b=x+0,P=x+1,C=x+2;f.push(b,P,P,C,C,b)}}else return;const m=new(M_(f)?A_:b_)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function rb(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function sb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ob(i,e,t){const n=new WeakMap,r=new Ke;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let M=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let b=a.attributes.position.count*v,P=1;b>e.maxTextureSize&&(P=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*P*4*h),w=new S_(C,b,P,h);w.type=fn,w.needsUpdate=!0;const y=v*4;for(let D=0;D<h;D++){const V=p[D],k=T[D],O=x[D],B=b*P*4*D;for(let F=0;F<V.count;F++){const X=F*y;g===!0&&(r.fromBufferAttribute(V,F),C[B+X+0]=r.x,C[B+X+1]=r.y,C[B+X+2]=r.z,C[B+X+3]=0),_===!0&&(r.fromBufferAttribute(k,F),C[B+X+4]=r.x,C[B+X+5]=r.y,C[B+X+6]=r.z,C[B+X+7]=0),m===!0&&(r.fromBufferAttribute(O,F),C[B+X+8]=r.x,C[B+X+9]=r.y,C[B+X+10]=r.z,C[B+X+11]=O.itemSize===4?r.w:1)}}f={count:h,texture:w,size:new xe(b,P)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function ab(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const G_=new Ot,fp=new N_(1,1),W_=new S_,X_=new ky,Y_=new C_,dp=[],pp=[],mp=new Float32Array(16),_p=new Float32Array(9),gp=new Float32Array(4);function Qs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=dp[r];if(s===void 0&&(s=new Float32Array(r),dp[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zl(i,e){let t=pp[e];t===void 0&&(t=new Int32Array(e),pp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function lb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function cb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function ub(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function hb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function fb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;gp.set(n),i.uniformMatrix2fv(this.addr,!1,gp),It(t,n)}}function db(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;_p.set(n),i.uniformMatrix3fv(this.addr,!1,_p),It(t,n)}}function pb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;mp.set(n),i.uniformMatrix4fv(this.addr,!1,mp),It(t,n)}}function mb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _b(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function gb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function vb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function xb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function Mb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function Sb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function Tb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(fp.compareFunction=x_,s=fp):s=G_,t.setTexture2D(e||s,r)}function Eb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||X_,r)}function bb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Y_,r)}function Ab(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||W_,r)}function wb(i){switch(i){case 5126:return lb;case 35664:return cb;case 35665:return ub;case 35666:return hb;case 35674:return fb;case 35675:return db;case 35676:return pb;case 5124:case 35670:return mb;case 35667:case 35671:return _b;case 35668:case 35672:return gb;case 35669:case 35673:return vb;case 5125:return xb;case 36294:return yb;case 36295:return Mb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return Ab}}function Rb(i,e){i.uniform1fv(this.addr,e)}function Cb(i,e){const t=Qs(e,this.size,2);i.uniform2fv(this.addr,t)}function Pb(i,e){const t=Qs(e,this.size,3);i.uniform3fv(this.addr,t)}function Db(i,e){const t=Qs(e,this.size,4);i.uniform4fv(this.addr,t)}function Lb(i,e){const t=Qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ib(i,e){const t=Qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Nb(i,e){const t=Qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ub(i,e){i.uniform1iv(this.addr,e)}function Ob(i,e){i.uniform2iv(this.addr,e)}function Fb(i,e){i.uniform3iv(this.addr,e)}function Bb(i,e){i.uniform4iv(this.addr,e)}function kb(i,e){i.uniform1uiv(this.addr,e)}function zb(i,e){i.uniform2uiv(this.addr,e)}function Hb(i,e){i.uniform3uiv(this.addr,e)}function Vb(i,e){i.uniform4uiv(this.addr,e)}function Gb(i,e,t){const n=this.cache,r=e.length,s=zl(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||G_,s[o])}function Wb(i,e,t){const n=this.cache,r=e.length,s=zl(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||X_,s[o])}function Xb(i,e,t){const n=this.cache,r=e.length,s=zl(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Y_,s[o])}function Yb(i,e,t){const n=this.cache,r=e.length,s=zl(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||W_,s[o])}function qb(i){switch(i){case 5126:return Rb;case 35664:return Cb;case 35665:return Pb;case 35666:return Db;case 35674:return Lb;case 35675:return Ib;case 35676:return Nb;case 5124:case 35670:return Ub;case 35667:case 35671:return Ob;case 35668:case 35672:return Fb;case 35669:case 35673:return Bb;case 5125:return kb;case 36294:return zb;case 36295:return Hb;case 36296:return Vb;case 35678:case 36198:case 36298:case 36306:case 35682:return Gb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return Yb}}class jb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wb(t.type)}}class Kb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qb(t.type)}}class $b{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const zc=/(\w+)(\])?(\[|\.)?/g;function vp(i,e){i.seq.push(e),i.map[e.id]=e}function Zb(i,e,t){const n=i.name,r=n.length;for(zc.lastIndex=0;;){const s=zc.exec(n),o=zc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){vp(t,c===void 0?new jb(a,i,e):new Kb(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new $b(a),vp(t,h)),t=h}}}class nl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Zb(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function xp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Jb=37297;let Qb=0;function eA(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const yp=new Xe;function tA(i){$e._getMatrix(yp,$e.workingColorSpace,i);const e=`mat3( ${yp.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case ml:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Mp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+eA(i.getShaderSource(e),o)}else return r}function nA(i,e){const t=tA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function iA(i,e){let t;switch(e){case Kx:t="Linear";break;case $x:t="Reinhard";break;case Zx:t="Cineon";break;case s_:t="ACESFilmic";break;case Qx:t="AgX";break;case ey:t="Neutral";break;case Jx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Va=new I;function rA(){$e.getLuminanceCoefficients(Va);const i=Va.x.toFixed(4),e=Va.y.toFixed(4),t=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function oA(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function aA(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function _o(i){return i!==""}function Sp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(i){return i.replace(lA,uA)}const cA=new Map;function uA(i,e){let t=Ye[e];if(t===void 0){const n=cA.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ju(t)}const hA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ep(i){return i.replace(hA,fA)}function fA(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dA(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===i_?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rx?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function pA(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bs:case ks:e="ENVMAP_TYPE_CUBE";break;case Fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mA(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function _A(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case r_:e="ENVMAP_BLENDING_MULTIPLY";break;case qx:e="ENVMAP_BLENDING_MIX";break;case jx:e="ENVMAP_BLENDING_ADD";break}return e}function gA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function vA(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=dA(t),c=pA(t),u=mA(t),h=_A(t),f=gA(t),d=sA(t),g=oA(s),_=r.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_o).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_o).join(`
`),p.length>0&&(p+=`
`)):(m=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),p=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ur?"#define TONE_MAPPING":"",t.toneMapping!==ur?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ur?iA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,nA("linearToOutputTexel",t.outputColorSpace),rA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_o).join(`
`)),o=Ju(o),o=Sp(o,t),o=Tp(o,t),a=Ju(a),a=Sp(a,t),a=Tp(a,t),o=Ep(o),a=Ep(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===_d?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=T+m+o,v=T+p+a,b=xp(r,r.VERTEX_SHADER,x),P=xp(r,r.FRAGMENT_SHADER,v);r.attachShader(_,b),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(D){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(b).trim(),O=r.getShaderInfoLog(P).trim();let B=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,b,P);else{const X=Mp(r,b,"vertex"),H=Mp(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+X+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||O==="")&&(F=!1);F&&(D.diagnostics={runnable:B,programLog:V,vertexShader:{log:k,prefix:m},fragmentShader:{log:O,prefix:p}})}r.deleteShader(b),r.deleteShader(P),w=new nl(r,_),y=aA(r,_)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Jb)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=P,this}let xA=0;class yA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new MA(e),t.set(e,n)),n}}class MA{constructor(e){this.id=xA++,this.code=e,this.usedTimes=0}}function SA(i,e,t,n,r,s,o){const a=new T_,l=new yA,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,D,V,k){const O=V.fog,B=k.geometry,F=y.isMeshStandardMaterial?V.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),H=X&&X.mapping===Fl?X.image.height:null,le=g[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const he=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Se=he!==void 0?he.length:0;let Ee=0;B.morphAttributes.position!==void 0&&(Ee=1),B.morphAttributes.normal!==void 0&&(Ee=2),B.morphAttributes.color!==void 0&&(Ee=3);let ze,te,ue,be;if(le){const st=si[le];ze=st.vertexShader,te=st.fragmentShader}else ze=y.vertexShader,te=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),be=l.getFragmentShaderID(y);const me=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Je=k.isInstancedMesh===!0,Pe=k.isBatchedMesh===!0,yt=!!y.map,L=!!y.matcap,N=!!X,A=!!y.aoMap,re=!!y.lightMap,J=!!y.bumpMap,Q=!!y.normalMap,ee=!!y.displacementMap,se=!!y.emissiveMap,Z=!!y.metalnessMap,E=!!y.roughnessMap,S=y.anisotropy>0,U=y.clearcoat>0,Y=y.dispersion>0,j=y.iridescence>0,q=y.sheen>0,fe=y.transmission>0,oe=S&&!!y.anisotropyMap,de=U&&!!y.clearcoatMap,Ue=U&&!!y.clearcoatNormalMap,ae=U&&!!y.clearcoatRoughnessMap,ge=j&&!!y.iridescenceMap,Re=j&&!!y.iridescenceThicknessMap,Oe=q&&!!y.sheenColorMap,pe=q&&!!y.sheenRoughnessMap,Be=!!y.specularMap,He=!!y.specularColorMap,ht=!!y.specularIntensityMap,z=fe&&!!y.transmissionMap,ye=fe&&!!y.thicknessMap,ne=!!y.gradientMap,ie=!!y.alphaMap,Te=y.alphaTest>0,Me=!!y.alphaHash,We=!!y.extensions;let Mt=ur;y.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const Wt={shaderID:le,shaderType:y.type,shaderName:y.name,vertexShader:ze,fragmentShader:te,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:be,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&k._colorsTexture!==null,instancing:Je,instancingColor:Je&&k.instanceColor!==null,instancingMorph:Je&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Gt,alphaToCoverage:!!y.alphaToCoverage,map:yt,matcap:L,envMap:N,envMapMode:N&&X.mapping,envMapCubeUVHeight:H,aoMap:A,lightMap:re,bumpMap:J,normalMap:Q,displacementMap:f&&ee,emissiveMap:se,normalMapObjectSpace:Q&&y.normalMapType===oy,normalMapTangentSpace:Q&&y.normalMapType===v_,metalnessMap:Z,roughnessMap:E,anisotropy:S,anisotropyMap:oe,clearcoat:U,clearcoatMap:de,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ae,dispersion:Y,iridescence:j,iridescenceMap:ge,iridescenceThicknessMap:Re,sheen:q,sheenColorMap:Oe,sheenRoughnessMap:pe,specularMap:Be,specularColorMap:He,specularIntensityMap:ht,transmission:fe,transmissionMap:z,thicknessMap:ye,gradientMap:ne,opaque:y.transparent===!1&&y.blending===Ps&&y.alphaToCoverage===!1,alphaMap:ie,alphaTest:Te,alphaHash:Me,combine:y.combine,mapUv:yt&&_(y.map.channel),aoMapUv:A&&_(y.aoMap.channel),lightMapUv:re&&_(y.lightMap.channel),bumpMapUv:J&&_(y.bumpMap.channel),normalMapUv:Q&&_(y.normalMap.channel),displacementMapUv:ee&&_(y.displacementMap.channel),emissiveMapUv:se&&_(y.emissiveMap.channel),metalnessMapUv:Z&&_(y.metalnessMap.channel),roughnessMapUv:E&&_(y.roughnessMap.channel),anisotropyMapUv:oe&&_(y.anisotropyMap.channel),clearcoatMapUv:de&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:pe&&_(y.sheenRoughnessMap.channel),specularMapUv:Be&&_(y.specularMap.channel),specularColorMapUv:He&&_(y.specularColorMap.channel),specularIntensityMapUv:ht&&_(y.specularIntensityMap.channel),transmissionMapUv:z&&_(y.transmissionMap.channel),thicknessMapUv:ye&&_(y.thicknessMap.channel),alphaMapUv:ie&&_(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Q||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(yt||ie),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ce,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:yt&&y.map.isVideoTexture===!0&&$e.getTransfer(y.map.colorSpace)===lt,decodeVideoTextureEmissive:se&&y.emissiveMap.isVideoTexture===!0&&$e.getTransfer(y.emissiveMap.colorSpace)===lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===oi,flipSided:y.side===dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:We&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&y.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)M.push(D),M.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(T(M,y),x(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function T(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const M=g[y.type];let D;if(M){const V=si[M];D=Bl.clone(V.uniforms)}else D=y.uniforms;return D}function b(y,M){let D;for(let V=0,k=u.length;V<k;V++){const O=u[V];if(O.cacheKey===M){D=O,++D.usedTimes;break}}return D===void 0&&(D=new vA(i,M,y,s),u.push(D)),D}function P(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:P,releaseShaderCache:C,programs:u,dispose:w}}function TA(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function EA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ap(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wp(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||EA),n.length>1&&n.sort(f||Ap),r.length>1&&r.sort(f||Ap)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function bA(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new wp,i.set(n,[o])):r>=s.length?(o=new wp,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function AA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ie};break;case"SpotLight":t={position:new I,direction:new I,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function wA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let RA=0;function CA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function PA(i){const e=new AA,t=wA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,s=new Ne,o=new Ne;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,x=0,v=0,b=0,P=0,C=0;c.sort(CA);for(let y=0,M=c.length;y<M;y++){const D=c[y],V=D.color,k=D.intensity,O=D.distance,B=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=V.r*k,h+=V.g*k,f+=V.b*k;else if(D.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(D.sh.coefficients[F],k);C++}else if(D.isDirectionalLight){const F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,H=t.get(D);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=D.shadow.matrix,T++}n.directional[d]=F,d++}else if(D.isSpotLight){const F=e.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(V).multiplyScalar(k),F.distance=O,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,n.spot[_]=F;const X=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,X.updateMatrices(D),D.castShadow&&P++),n.spotLightMatrix[_]=X.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=B,v++}_++}else if(D.isRectAreaLight){const F=e.get(D);F.color.copy(V).multiplyScalar(k),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=F,m++}else if(D.isPointLight){const F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),F.distance=D.distance,F.decay=D.decay,D.castShadow){const X=D.shadow,H=t.get(D);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=D.shadow.matrix,x++}n.point[g]=F,g++}else if(D.isHemisphereLight){const F=e.get(D);F.skyColor.copy(D.color).multiplyScalar(k),F.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const w=n.hash;(w.directionalLength!==d||w.pointLength!==g||w.spotLength!==_||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==T||w.numPointShadows!==x||w.numSpotShadows!==v||w.numSpotMaps!==b||w.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+b-P,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,w.directionalLength=d,w.pointLength=g,w.spotLength=_,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=T,w.numPointShadows=x,w.numSpotShadows=v,w.numSpotMaps=b,w.numLightProbes=C,n.version=RA++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Rp(i){const e=new PA(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function DA(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Rp(i),e.set(r,[a])):s>=o.length?(a=new Rp(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const LA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NA(i,e,t){let n=new qh;const r=new xe,s=new xe,o=new Ke,a=new DM({depthPacking:sy}),l=new LM,c={},u=t.maxTextureSize,h={[ki]:dn,[dn]:ki,[oi]:oi},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:LA,fragmentShader:IA}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Dn;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i_;let p=this.type;this.render=function(P,C,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),V=i.state;V.setBlending(cr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=p!==Pi&&this.type===Pi,O=p===Pi&&this.type!==Pi;for(let B=0,F=P.length;B<F;B++){const X=P[B],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const le=H.getFrameExtents();if(r.multiply(le),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,H.mapSize.y=s.y)),H.map===null||k===!0||O===!0){const Se=this.type!==Pi?{minFilter:an,magFilter:an}:{};H.map!==null&&H.map.dispose(),H.map=new Hi(r.x,r.y,Se),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const he=H.getViewportCount();for(let Se=0;Se<he;Se++){const Ee=H.getViewport(Se);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),V.viewport(o),H.updateMatrices(X,Se),n=H.getFrustum(),v(C,w,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===Pi&&T(H,w),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,D)};function T(P,C){const w=e.update(_);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Hi(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(C,null,w,f,_,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(C,null,w,d,_,null)}function x(P,C,w,y){let M=null;const D=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)M=D;else if(M=w.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=M.uuid,k=C.uuid;let O=c[V];O===void 0&&(O={},c[V]=O);let B=O[k];B===void 0&&(B=M.clone(),O[k]=B,C.addEventListener("dispose",b)),M=B}if(M.visible=C.visible,M.wireframe=C.wireframe,y===Pi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=w}return M}function v(P,C,w,y,M){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===Pi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const k=e.update(P),O=P.material;if(Array.isArray(O)){const B=k.groups;for(let F=0,X=B.length;F<X;F++){const H=B[F],le=O[H.materialIndex];if(le&&le.visible){const he=x(P,le,y,M);P.onBeforeShadow(i,P,C,w,k,he,H),i.renderBufferDirect(w,null,k,he,P,H),P.onAfterShadow(i,P,C,w,k,he,H)}}}else if(O.visible){const B=x(P,O,y,M);P.onBeforeShadow(i,P,C,w,k,B,null),i.renderBufferDirect(w,null,k,B,P,null),P.onAfterShadow(i,P,C,w,k,B,null)}}const V=P.children;for(let k=0,O=V.length;k<O;k++)v(V[k],C,w,y,M)}function b(P){P.target.removeEventListener("dispose",b);for(const w in c){const y=c[w],M=P.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const UA={[du]:pu,[mu]:vu,[_u]:xu,[Fs]:gu,[pu]:du,[vu]:mu,[xu]:_u,[gu]:Fs};function OA(i,e){function t(){let z=!1;const ye=new Ke;let ne=null;const ie=new Ke(0,0,0,0);return{setMask:function(Te){ne!==Te&&!z&&(i.colorMask(Te,Te,Te,Te),ne=Te)},setLocked:function(Te){z=Te},setClear:function(Te,Me,We,Mt,Wt){Wt===!0&&(Te*=Mt,Me*=Mt,We*=Mt),ye.set(Te,Me,We,Mt),ie.equals(ye)===!1&&(i.clearColor(Te,Me,We,Mt),ie.copy(ye))},reset:function(){z=!1,ne=null,ie.set(-1,0,0,0)}}}function n(){let z=!1,ye=!1,ne=null,ie=null,Te=null;return{setReversed:function(Me){if(ye!==Me){const We=e.get("EXT_clip_control");Me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ye=Me;const Mt=Te;Te=null,this.setClear(Mt)}},getReversed:function(){return ye},setTest:function(Me){Me?me(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(Me){ne!==Me&&!z&&(i.depthMask(Me),ne=Me)},setFunc:function(Me){if(ye&&(Me=UA[Me]),ie!==Me){switch(Me){case du:i.depthFunc(i.NEVER);break;case pu:i.depthFunc(i.ALWAYS);break;case mu:i.depthFunc(i.LESS);break;case Fs:i.depthFunc(i.LEQUAL);break;case _u:i.depthFunc(i.EQUAL);break;case gu:i.depthFunc(i.GEQUAL);break;case vu:i.depthFunc(i.GREATER);break;case xu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=Me}},setLocked:function(Me){z=Me},setClear:function(Me){Te!==Me&&(ye&&(Me=1-Me),i.clearDepth(Me),Te=Me)},reset:function(){z=!1,ne=null,ie=null,Te=null,ye=!1}}}function r(){let z=!1,ye=null,ne=null,ie=null,Te=null,Me=null,We=null,Mt=null,Wt=null;return{setTest:function(st){z||(st?me(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(st){ye!==st&&!z&&(i.stencilMask(st),ye=st)},setFunc:function(st,Hn,Si){(ne!==st||ie!==Hn||Te!==Si)&&(i.stencilFunc(st,Hn,Si),ne=st,ie=Hn,Te=Si)},setOp:function(st,Hn,Si){(Me!==st||We!==Hn||Mt!==Si)&&(i.stencilOp(st,Hn,Si),Me=st,We=Hn,Mt=Si)},setLocked:function(st){z=st},setClear:function(st){Wt!==st&&(i.clearStencil(st),Wt=st)},reset:function(){z=!1,ye=null,ne=null,ie=null,Te=null,Me=null,We=null,Mt=null,Wt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,x=null,v=null,b=null,P=null,C=new Ie(0,0,0),w=0,y=!1,M=null,D=null,V=null,k=null,O=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,X=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=X>=2);let le=null,he={};const Se=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),ze=new Ke().fromArray(Se),te=new Ke().fromArray(Ee);function ue(z,ye,ne,ie){const Te=new Uint8Array(4),Me=i.createTexture();i.bindTexture(z,Me),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<ne;We++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ye+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return Me}const be={};be[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(i.DEPTH_TEST),o.setFunc(Fs),J(!1),Q(ad),me(i.CULL_FACE),A(cr);function me(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function Ce(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function Je(z,ye){return h[z]!==ye?(i.bindFramebuffer(z,ye),h[z]=ye,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Pe(z,ye){let ne=d,ie=!1;if(z){ne=f.get(ye),ne===void 0&&(ne=[],f.set(ye,ne));const Te=z.textures;if(ne.length!==Te.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,We=Te.length;Me<We;Me++)ne[Me]=i.COLOR_ATTACHMENT0+Me;ne.length=Te.length,ie=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,ie=!0);ie&&i.drawBuffers(ne)}function yt(z){return g!==z?(i.useProgram(z),g=z,!0):!1}const L={[Br]:i.FUNC_ADD,[Px]:i.FUNC_SUBTRACT,[Dx]:i.FUNC_REVERSE_SUBTRACT};L[Lx]=i.MIN,L[Ix]=i.MAX;const N={[Nx]:i.ZERO,[Ux]:i.ONE,[Ox]:i.SRC_COLOR,[hu]:i.SRC_ALPHA,[Vx]:i.SRC_ALPHA_SATURATE,[zx]:i.DST_COLOR,[Bx]:i.DST_ALPHA,[Fx]:i.ONE_MINUS_SRC_COLOR,[fu]:i.ONE_MINUS_SRC_ALPHA,[Hx]:i.ONE_MINUS_DST_COLOR,[kx]:i.ONE_MINUS_DST_ALPHA,[Gx]:i.CONSTANT_COLOR,[Wx]:i.ONE_MINUS_CONSTANT_COLOR,[Xx]:i.CONSTANT_ALPHA,[Yx]:i.ONE_MINUS_CONSTANT_ALPHA};function A(z,ye,ne,ie,Te,Me,We,Mt,Wt,st){if(z===cr){_===!0&&(Ce(i.BLEND),_=!1);return}if(_===!1&&(me(i.BLEND),_=!0),z!==Cx){if(z!==m||st!==y){if((p!==Br||v!==Br)&&(i.blendEquation(i.FUNC_ADD),p=Br,v=Br),st)switch(z){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ld:i.blendFunc(i.ONE,i.ONE);break;case cd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ud:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ld:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ud:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}T=null,x=null,b=null,P=null,C.set(0,0,0),w=0,m=z,y=st}return}Te=Te||ye,Me=Me||ne,We=We||ie,(ye!==p||Te!==v)&&(i.blendEquationSeparate(L[ye],L[Te]),p=ye,v=Te),(ne!==T||ie!==x||Me!==b||We!==P)&&(i.blendFuncSeparate(N[ne],N[ie],N[Me],N[We]),T=ne,x=ie,b=Me,P=We),(Mt.equals(C)===!1||Wt!==w)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Wt),C.copy(Mt),w=Wt),m=z,y=!1}function re(z,ye){z.side===oi?Ce(i.CULL_FACE):me(i.CULL_FACE);let ne=z.side===dn;ye&&(ne=!ne),J(ne),z.blending===Ps&&z.transparent===!1?A(cr):A(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const ie=z.stencilWrite;a.setTest(ie),ie&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),se(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(z){M!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),M=z)}function Q(z){z!==Ax?(me(i.CULL_FACE),z!==D&&(z===ad?i.cullFace(i.BACK):z===wx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),D=z}function ee(z){z!==V&&(F&&i.lineWidth(z),V=z)}function se(z,ye,ne){z?(me(i.POLYGON_OFFSET_FILL),(k!==ye||O!==ne)&&(i.polygonOffset(ye,ne),k=ye,O=ne)):Ce(i.POLYGON_OFFSET_FILL)}function Z(z){z?me(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function E(z){z===void 0&&(z=i.TEXTURE0+B-1),le!==z&&(i.activeTexture(z),le=z)}function S(z,ye,ne){ne===void 0&&(le===null?ne=i.TEXTURE0+B-1:ne=le);let ie=he[ne];ie===void 0&&(ie={type:void 0,texture:void 0},he[ne]=ie),(ie.type!==z||ie.texture!==ye)&&(le!==ne&&(i.activeTexture(ne),le=ne),i.bindTexture(z,ye||be[z]),ie.type=z,ie.texture=ye)}function U(){const z=he[le];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Y(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Oe(z){ze.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ze.copy(z))}function pe(z){te.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),te.copy(z))}function Be(z,ye){let ne=c.get(ye);ne===void 0&&(ne=new WeakMap,c.set(ye,ne));let ie=ne.get(z);ie===void 0&&(ie=i.getUniformBlockIndex(ye,z.name),ne.set(z,ie))}function He(z,ye){const ie=c.get(ye).get(z);l.get(ye)!==ie&&(i.uniformBlockBinding(ye,ie,z.__bindingPointIndex),l.set(ye,ie))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,he={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,x=null,v=null,b=null,P=null,C=new Ie(0,0,0),w=0,y=!1,M=null,D=null,V=null,k=null,O=null,ze.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:me,disable:Ce,bindFramebuffer:Je,drawBuffers:Pe,useProgram:yt,setBlending:A,setMaterial:re,setFlipSided:J,setCullFace:Q,setLineWidth:ee,setPolygonOffset:se,setScissorTest:Z,activeTexture:E,bindTexture:S,unbindTexture:U,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:ge,texImage3D:Re,updateUBOMapping:Be,uniformBlockBinding:He,texStorage2D:Ue,texStorage3D:ae,texSubImage2D:q,texSubImage3D:fe,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:Oe,viewport:pe,reset:ht}}function FA(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,S){return d?new OffscreenCanvas(E,S):Xo("canvas")}function _(E,S,U){let Y=1;const j=Z(E);if((j.width>U||j.height>U)&&(Y=U/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(Y*j.width),fe=Math.floor(Y*j.height);h===void 0&&(h=g(q,fe));const oe=S?g(q,fe):h;return oe.width=q,oe.height=fe,oe.getContext("2d").drawImage(E,0,0,q,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+fe+")."),oe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(E,S,U,Y,j=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=S;if(S===i.RED&&(U===i.FLOAT&&(q=i.R32F),U===i.HALF_FLOAT&&(q=i.R16F),U===i.UNSIGNED_BYTE&&(q=i.R8)),S===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.R8UI),U===i.UNSIGNED_SHORT&&(q=i.R16UI),U===i.UNSIGNED_INT&&(q=i.R32UI),U===i.BYTE&&(q=i.R8I),U===i.SHORT&&(q=i.R16I),U===i.INT&&(q=i.R32I)),S===i.RG&&(U===i.FLOAT&&(q=i.RG32F),U===i.HALF_FLOAT&&(q=i.RG16F),U===i.UNSIGNED_BYTE&&(q=i.RG8)),S===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RG8UI),U===i.UNSIGNED_SHORT&&(q=i.RG16UI),U===i.UNSIGNED_INT&&(q=i.RG32UI),U===i.BYTE&&(q=i.RG8I),U===i.SHORT&&(q=i.RG16I),U===i.INT&&(q=i.RG32I)),S===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGB8UI),U===i.UNSIGNED_SHORT&&(q=i.RGB16UI),U===i.UNSIGNED_INT&&(q=i.RGB32UI),U===i.BYTE&&(q=i.RGB8I),U===i.SHORT&&(q=i.RGB16I),U===i.INT&&(q=i.RGB32I)),S===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),U===i.UNSIGNED_INT&&(q=i.RGBA32UI),U===i.BYTE&&(q=i.RGBA8I),U===i.SHORT&&(q=i.RGBA16I),U===i.INT&&(q=i.RGBA32I)),S===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),S===i.RGBA){const fe=j?ml:$e.getTransfer(Y);U===i.FLOAT&&(q=i.RGBA32F),U===i.HALF_FLOAT&&(q=i.RGBA16F),U===i.UNSIGNED_BYTE&&(q=fe===lt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(E,S){let U;return E?S===null||S===Kr||S===zo?U=i.DEPTH24_STENCIL8:S===fn?U=i.DEPTH32F_STENCIL8:S===ko&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Kr||S===zo?U=i.DEPTH_COMPONENT24:S===fn?U=i.DEPTH_COMPONENT32F:S===ko&&(U=i.DEPTH_COMPONENT16),U}function b(E,S){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==an&&E.minFilter!==Ut?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function P(E){const S=E.target;S.removeEventListener("dispose",P),w(S),S.isVideoTexture&&u.delete(S)}function C(E){const S=E.target;S.removeEventListener("dispose",C),M(S)}function w(E){const S=n.get(E);if(S.__webglInit===void 0)return;const U=E.source,Y=f.get(U);if(Y){const j=Y[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(E),Object.keys(Y).length===0&&f.delete(U)}n.remove(E)}function y(E){const S=n.get(E);i.deleteTexture(S.__webglTexture);const U=E.source,Y=f.get(U);delete Y[S.__cacheKey],o.memory.textures--}function M(E){const S=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let j=0;j<S.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(S.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)i.deleteFramebuffer(S.__webglFramebuffer[Y]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const U=E.textures;for(let Y=0,j=U.length;Y<j;Y++){const q=n.get(U[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(U[Y])}n.remove(E)}let D=0;function V(){D=0}function k(){const E=D;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),D+=1,E}function O(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function B(E,S){const U=n.get(E);if(E.isVideoTexture&&ee(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(U,E,S);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+S)}function F(E,S){const U=n.get(E);if(E.version>0&&U.__version!==E.version){te(U,E,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+S)}function X(E,S){const U=n.get(E);if(E.version>0&&U.__version!==E.version){te(U,E,S);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+S)}function H(E,S){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ue(U,E,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+S)}const le={[pr]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[pl]:i.MIRRORED_REPEAT},he={[an]:i.NEAREST,[a_]:i.NEAREST_MIPMAP_NEAREST,[mo]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[Ka]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},Se={[ay]:i.NEVER,[dy]:i.ALWAYS,[ly]:i.LESS,[x_]:i.LEQUAL,[cy]:i.EQUAL,[fy]:i.GEQUAL,[uy]:i.GREATER,[hy]:i.NOTEQUAL};function Ee(E,S){if(S.type===fn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ut||S.magFilter===Ka||S.magFilter===mo||S.magFilter===ui||S.minFilter===Ut||S.minFilter===Ka||S.minFilter===mo||S.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,le[S.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,le[S.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,le[S.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,he[S.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,he[S.minFilter]),S.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===an||S.minFilter!==mo&&S.minFilter!==ui||S.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ze(E,S){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",P));const Y=S.source;let j=f.get(Y);j===void 0&&(j={},f.set(Y,j));const q=O(S);if(q!==E.__cacheKey){j[q]===void 0&&(j[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),j[q].usedTimes++;const fe=j[E.__cacheKey];fe!==void 0&&(j[E.__cacheKey].usedTimes--,fe.usedTimes===0&&y(S)),E.__cacheKey=q,E.__webglTexture=j[q].texture}return U}function te(E,S,U){let Y=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=i.TEXTURE_3D);const j=ze(E,S),q=S.source;t.bindTexture(Y,E.__webglTexture,i.TEXTURE0+U);const fe=n.get(q);if(q.version!==fe.__version||j===!0){t.activeTexture(i.TEXTURE0+U);const oe=$e.getPrimaries($e.workingColorSpace),de=S.colorSpace===nr?null:$e.getPrimaries(S.colorSpace),Ue=S.colorSpace===nr||oe===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ae=_(S.image,!1,r.maxTextureSize);ae=se(S,ae);const ge=s.convert(S.format,S.colorSpace),Re=s.convert(S.type);let Oe=x(S.internalFormat,ge,Re,S.colorSpace,S.isVideoTexture);Ee(Y,S);let pe;const Be=S.mipmaps,He=S.isVideoTexture!==!0,ht=fe.__version===void 0||j===!0,z=q.dataReady,ye=b(S,ae);if(S.isDepthTexture)Oe=v(S.format===Vo,S.type),ht&&(He?t.texStorage2D(i.TEXTURE_2D,1,Oe,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Oe,ae.width,ae.height,0,ge,Re,null));else if(S.isDataTexture)if(Be.length>0){He&&ht&&t.texStorage2D(i.TEXTURE_2D,ye,Oe,Be[0].width,Be[0].height);for(let ne=0,ie=Be.length;ne<ie;ne++)pe=Be[ne],He?z&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,ge,Re,pe.data):t.texImage2D(i.TEXTURE_2D,ne,Oe,pe.width,pe.height,0,ge,Re,pe.data);S.generateMipmaps=!1}else He?(ht&&t.texStorage2D(i.TEXTURE_2D,ye,Oe,ae.width,ae.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,ge,Re,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,ae.width,ae.height,0,ge,Re,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){He&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Oe,Be[0].width,Be[0].height,ae.depth);for(let ne=0,ie=Be.length;ne<ie;ne++)if(pe=Be[ne],S.format!==Fn)if(ge!==null)if(He){if(z)if(S.layerUpdates.size>0){const Te=rp(pe.width,pe.height,S.format,S.type);for(const Me of S.layerUpdates){const We=pe.data.subarray(Me*Te/pe.data.BYTES_PER_ELEMENT,(Me+1)*Te/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Me,pe.width,pe.height,1,ge,We)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,ae.depth,ge,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Oe,pe.width,pe.height,ae.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,ae.depth,ge,Re,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Oe,pe.width,pe.height,ae.depth,0,ge,Re,pe.data)}else{He&&ht&&t.texStorage2D(i.TEXTURE_2D,ye,Oe,Be[0].width,Be[0].height);for(let ne=0,ie=Be.length;ne<ie;ne++)pe=Be[ne],S.format!==Fn?ge!==null?He?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,ge,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Oe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?z&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,ge,Re,pe.data):t.texImage2D(i.TEXTURE_2D,ne,Oe,pe.width,pe.height,0,ge,Re,pe.data)}else if(S.isDataArrayTexture)if(He){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Oe,ae.width,ae.height,ae.depth),z)if(S.layerUpdates.size>0){const ne=rp(ae.width,ae.height,S.format,S.type);for(const ie of S.layerUpdates){const Te=ae.data.subarray(ie*ne/ae.data.BYTES_PER_ELEMENT,(ie+1)*ne/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,ae.width,ae.height,1,ge,Re,Te)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ge,Re,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,ae.width,ae.height,ae.depth,0,ge,Re,ae.data);else if(S.isData3DTexture)He?(ht&&t.texStorage3D(i.TEXTURE_3D,ye,Oe,ae.width,ae.height,ae.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ge,Re,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,ae.width,ae.height,ae.depth,0,ge,Re,ae.data);else if(S.isFramebufferTexture){if(ht)if(He)t.texStorage2D(i.TEXTURE_2D,ye,Oe,ae.width,ae.height);else{let ne=ae.width,ie=ae.height;for(let Te=0;Te<ye;Te++)t.texImage2D(i.TEXTURE_2D,Te,Oe,ne,ie,0,ge,Re,null),ne>>=1,ie>>=1}}else if(Be.length>0){if(He&&ht){const ne=Z(Be[0]);t.texStorage2D(i.TEXTURE_2D,ye,Oe,ne.width,ne.height)}for(let ne=0,ie=Be.length;ne<ie;ne++)pe=Be[ne],He?z&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ge,Re,pe):t.texImage2D(i.TEXTURE_2D,ne,Oe,ge,Re,pe);S.generateMipmaps=!1}else if(He){if(ht){const ne=Z(ae);t.texStorage2D(i.TEXTURE_2D,ye,Oe,ne.width,ne.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Re,ae)}else t.texImage2D(i.TEXTURE_2D,0,Oe,ge,Re,ae);m(S)&&p(Y),fe.__version=q.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ue(E,S,U){if(S.image.length!==6)return;const Y=ze(E,S),j=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+U);const q=n.get(j);if(j.version!==q.__version||Y===!0){t.activeTexture(i.TEXTURE0+U);const fe=$e.getPrimaries($e.workingColorSpace),oe=S.colorSpace===nr?null:$e.getPrimaries(S.colorSpace),de=S.colorSpace===nr||fe===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ue=S.isCompressedTexture||S.image[0].isCompressedTexture,ae=S.image[0]&&S.image[0].isDataTexture,ge=[];for(let ie=0;ie<6;ie++)!Ue&&!ae?ge[ie]=_(S.image[ie],!0,r.maxCubemapSize):ge[ie]=ae?S.image[ie].image:S.image[ie],ge[ie]=se(S,ge[ie]);const Re=ge[0],Oe=s.convert(S.format,S.colorSpace),pe=s.convert(S.type),Be=x(S.internalFormat,Oe,pe,S.colorSpace),He=S.isVideoTexture!==!0,ht=q.__version===void 0||Y===!0,z=j.dataReady;let ye=b(S,Re);Ee(i.TEXTURE_CUBE_MAP,S);let ne;if(Ue){He&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Be,Re.width,Re.height);for(let ie=0;ie<6;ie++){ne=ge[ie].mipmaps;for(let Te=0;Te<ne.length;Te++){const Me=ne[Te];S.format!==Fn?Oe!==null?He?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,0,0,Me.width,Me.height,Oe,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,Be,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,0,0,Me.width,Me.height,Oe,pe,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,Be,Me.width,Me.height,0,Oe,pe,Me.data)}}}else{if(ne=S.mipmaps,He&&ht){ne.length>0&&ye++;const ie=Z(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Be,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ae){He?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ge[ie].width,ge[ie].height,Oe,pe,ge[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Be,ge[ie].width,ge[ie].height,0,Oe,pe,ge[ie].data);for(let Te=0;Te<ne.length;Te++){const We=ne[Te].image[ie].image;He?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,0,0,We.width,We.height,Oe,pe,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,Be,We.width,We.height,0,Oe,pe,We.data)}}else{He?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Oe,pe,ge[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Be,Oe,pe,ge[ie]);for(let Te=0;Te<ne.length;Te++){const Me=ne[Te];He?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,0,0,Oe,pe,Me.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,Be,Oe,pe,Me.image[ie])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),q.__version=j.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function be(E,S,U,Y,j,q){const fe=s.convert(U.format,U.colorSpace),oe=s.convert(U.type),de=x(U.internalFormat,fe,oe,U.colorSpace),Ue=n.get(S),ae=n.get(U);if(ae.__renderTarget=S,!Ue.__hasExternalTextures){const ge=Math.max(1,S.width>>q),Re=Math.max(1,S.height>>q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,q,de,ge,Re,S.depth,0,fe,oe,null):t.texImage2D(j,q,de,ge,Re,0,fe,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Q(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,ae.__webglTexture,0,J(S)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,ae.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(E,S,U){if(i.bindRenderbuffer(i.RENDERBUFFER,E),S.depthBuffer){const Y=S.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,q=v(S.stencilBuffer,j),fe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=J(S);Q(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,q,S.width,S.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,q,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,E)}else{const Y=S.textures;for(let j=0;j<Y.length;j++){const q=Y[j],fe=s.convert(q.format,q.colorSpace),oe=s.convert(q.type),de=x(q.internalFormat,fe,oe,q.colorSpace),Ue=J(S);U&&Q(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,de,S.width,S.height):Q(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,de,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,de,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const j=Y.__webglTexture,q=J(S);if(S.depthTexture.format===Ho)Q(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(S.depthTexture.format===Vo)Q(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Je(E){const S=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=Y}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Ce(S.__webglFramebuffer,E)}else if(U){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=i.createRenderbuffer(),me(S.__webglDepthbuffer[Y],E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),me(S.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(E,S,U){const Y=n.get(E);S!==void 0&&be(Y.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Je(E)}function yt(E){const S=E.texture,U=n.get(E),Y=n.get(S);E.addEventListener("dispose",C);const j=E.textures,q=E.isWebGLCubeRenderTarget===!0,fe=j.length>1;if(fe||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=S.version,o.memory.textures++),q){U.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[oe]=[];for(let de=0;de<S.mipmaps.length;de++)U.__webglFramebuffer[oe][de]=i.createFramebuffer()}else U.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)U.__webglFramebuffer[oe]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(fe)for(let oe=0,de=j.length;oe<de;oe++){const Ue=n.get(j[oe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Q(E)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let oe=0;oe<j.length;oe++){const de=j[oe];U.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[oe]);const Ue=s.convert(de.format,de.colorSpace),ae=s.convert(de.type),ge=x(de.internalFormat,Ue,ae,de.colorSpace,E.isXRRenderTarget===!0),Re=J(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ge,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,U.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),me(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)be(U.__webglFramebuffer[oe][de],E,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else be(U.__webglFramebuffer[oe],E,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let oe=0,de=j.length;oe<de;oe++){const Ue=j[oe],ae=n.get(Ue);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),Ee(i.TEXTURE_2D,Ue),be(U.__webglFramebuffer,E,Ue,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),m(Ue)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),Ee(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)be(U.__webglFramebuffer[de],E,S,i.COLOR_ATTACHMENT0,oe,de);else be(U.__webglFramebuffer,E,S,i.COLOR_ATTACHMENT0,oe,0);m(S)&&p(oe),t.unbindTexture()}E.depthBuffer&&Je(E)}function L(E){const S=E.textures;for(let U=0,Y=S.length;U<Y;U++){const j=S[U];if(m(j)){const q=T(E),fe=n.get(j).__webglTexture;t.bindTexture(q,fe),p(q),t.unbindTexture()}}}const N=[],A=[];function re(E){if(E.samples>0){if(Q(E)===!1){const S=E.textures,U=E.width,Y=E.height;let j=i.COLOR_BUFFER_BIT;const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(E),oe=S.length>1;if(oe)for(let de=0;de<S.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let de=0;de<S.length;de++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Ue=n.get(S[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,U,Y,0,0,U,Y,j,i.NEAREST),l===!0&&(N.length=0,A.length=0,N.push(i.COLOR_ATTACHMENT0+de),E.depthBuffer&&E.resolveDepthBuffer===!1&&(N.push(q),A.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<S.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Ue=n.get(S[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const S=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function J(E){return Math.min(r.maxSamples,E.samples)}function Q(E){const S=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ee(E){const S=o.render.frame;u.get(E)!==S&&(u.set(E,S),E.update())}function se(E,S){const U=E.colorSpace,Y=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Gt&&U!==nr&&($e.getTransfer(U)===lt?(Y!==Fn||j!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}function Z(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.setTexture2D=B,this.setTexture2DArray=F,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=Pe,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Q}function BA(i,e){function t(n,r=nr){let s;const o=$e.getTransfer(r);if(n===zi)return i.UNSIGNED_BYTE;if(n===Oh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===u_)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===l_)return i.BYTE;if(n===c_)return i.SHORT;if(n===ko)return i.UNSIGNED_SHORT;if(n===Uh)return i.INT;if(n===Kr)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===h_)return i.ALPHA;if(n===f_)return i.RGB;if(n===Fn)return i.RGBA;if(n===d_)return i.LUMINANCE;if(n===p_)return i.LUMINANCE_ALPHA;if(n===Ho)return i.DEPTH_COMPONENT;if(n===Vo)return i.DEPTH_STENCIL;if(n===Bh)return i.RED;if(n===kh)return i.RED_INTEGER;if(n===m_)return i.RG;if(n===zh)return i.RG_INTEGER;if(n===Hh)return i.RGBA_INTEGER;if(n===$a||n===Za||n===Ja||n===Qa)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===$a)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===$a)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mu||n===Su||n===Tu||n===Eu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Mu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Su)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bu||n===Au||n===wu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===bu||n===Au)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===wu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ru||n===Cu||n===Pu||n===Du||n===Lu||n===Iu||n===Nu||n===Uu||n===Ou||n===Fu||n===Bu||n===ku||n===zu||n===Hu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ru)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Du)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Iu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ou)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ku)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===el||n===Vu||n===Gu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===el)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===__||n===Wu||n===Xu||n===Yu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===el)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const kA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Ot,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jn({vertexShader:kA,fragmentShader:zA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new kl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VA extends Jr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new HA,m=t.getContextAttributes();let p=null,T=null;const x=[],v=[],b=new xe;let P=null;const C=new kt;C.viewport=new Ke;const w=new kt;w.viewport=new Ke;const y=[C,w],M=new JM;let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=x[te];return ue===void 0&&(ue=new bc,x[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=x[te];return ue===void 0&&(ue=new bc,x[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=x[te];return ue===void 0&&(ue=new bc,x[te]=ue),ue.getHandSpace()};function k(te){const ue=v.indexOf(te.inputSource);if(ue===-1)return;const be=x[ue];be!==void 0&&(be.update(te.inputSource,te.frame,c||o),be.dispatchEvent({type:te.type,data:te.inputSource}))}function O(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",B);for(let te=0;te<x.length;te++){const ue=v[te];ue!==null&&(v[te]=null,x[te].disconnect(ue))}D=null,V=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,T=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",O),r.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,me=null,Ce=null;m.depth&&(Ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=m.stencil?Vo:Ho,me=m.stencil?zo:Kr);const Je={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Je),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Hi(f.textureWidth,f.textureHeight,{format:Fn,type:zi,depthTexture:new N_(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Hi(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(te){for(let ue=0;ue<te.removed.length;ue++){const be=te.removed[ue],me=v.indexOf(be);me>=0&&(v[me]=null,x[me].disconnect(be))}for(let ue=0;ue<te.added.length;ue++){const be=te.added[ue];let me=v.indexOf(be);if(me===-1){for(let Je=0;Je<x.length;Je++)if(Je>=v.length){v.push(be),me=Je;break}else if(v[Je]===null){v[Je]=be,me=Je;break}if(me===-1)break}const Ce=x[me];Ce&&Ce.connect(be)}}const F=new I,X=new I;function H(te,ue,be){F.setFromMatrixPosition(ue.matrixWorld),X.setFromMatrixPosition(be.matrixWorld);const me=F.distanceTo(X),Ce=ue.projectionMatrix.elements,Je=be.projectionMatrix.elements,Pe=Ce[14]/(Ce[10]-1),yt=Ce[14]/(Ce[10]+1),L=(Ce[9]+1)/Ce[5],N=(Ce[9]-1)/Ce[5],A=(Ce[8]-1)/Ce[0],re=(Je[8]+1)/Je[0],J=Pe*A,Q=Pe*re,ee=me/(-A+re),se=ee*-A;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(se),te.translateZ(ee),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ce[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Z=Pe+ee,E=yt+ee,S=J-se,U=Q+(me-se),Y=L*yt/E*Z,j=N*yt/E*Z;te.projectionMatrix.makePerspective(S,U,Y,j,Z,E),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function le(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ue=te.near,be=te.far;_.texture!==null&&(_.depthNear>0&&(ue=_.depthNear),_.depthFar>0&&(be=_.depthFar)),M.near=w.near=C.near=ue,M.far=w.far=C.far=be,(D!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,V=M.far),C.layers.mask=te.layers.mask|2,w.layers.mask=te.layers.mask|4,M.layers.mask=C.layers.mask|w.layers.mask;const me=te.parent,Ce=M.cameras;le(M,me);for(let Je=0;Je<Ce.length;Je++)le(Ce[Je],me);Ce.length===2?H(M,C,w):M.projectionMatrix.copy(C.projectionMatrix),he(te,M,me)};function he(te,ue,be){be===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(be.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=zs*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Se=null;function Ee(te,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const be=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let me=!1;be.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let Pe=0;Pe<be.length;Pe++){const yt=be[Pe];let L=null;if(d!==null)L=d.getViewport(yt);else{const A=h.getViewSubImage(f,yt);L=A.viewport,Pe===0&&(e.setRenderTargetTextures(T,A.colorTexture,A.depthStencilTexture),e.setRenderTarget(T))}let N=y[Pe];N===void 0&&(N=new kt,N.layers.enable(Pe),N.viewport=new Ke,y[Pe]=N),N.matrix.fromArray(yt.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(yt.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(L.x,L.y,L.width,L.height),Pe===0&&(M.matrix.copy(N.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(N)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const Pe=h.getDepthInformation(be[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,r.renderState)}}for(let be=0;be<x.length;be++){const me=v[be],Ce=x[be];me!==null&&Ce!==void 0&&Ce.update(me,ue,c||o)}Se&&Se(te,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}const ze=new V_;ze.setAnimationLoop(Ee),this.setAnimationLoop=function(te){Se=te},this.dispose=function(){}}}const Dr=new gi,GA=new Ne;function WA(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,w_(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),x=T.envMap,v=T.envMapRotation;x&&(m.envMap.value=x,Dr.copy(v),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),m.envMapRotation.value.setFromMatrix4(GA.makeRotationFromEuler(Dr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function XA(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,x){const v=x.program;n.uniformBlockBinding(T,v)}function c(T,x){let v=r[T.id];v===void 0&&(g(T),v=u(T),r[T.id]=v,T.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(T,b);const P=e.render.frame;s[T.id]!==P&&(f(T),s[T.id]=P)}function u(T){const x=h();T.__bindingPointIndex=x;const v=i.createBuffer(),b=T.__size,P=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const x=r[T.id],v=T.uniforms,b=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let P=0,C=v.length;P<C;P++){const w=Array.isArray(v[P])?v[P]:[v[P]];for(let y=0,M=w.length;y<M;y++){const D=w[y];if(d(D,P,y,b)===!0){const V=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let O=0;for(let B=0;B<k.length;B++){const F=k[B],X=_(F);typeof F=="number"||typeof F=="boolean"?(D.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,V+O,D.__data)):F.isMatrix3?(D.__data[0]=F.elements[0],D.__data[1]=F.elements[1],D.__data[2]=F.elements[2],D.__data[3]=0,D.__data[4]=F.elements[3],D.__data[5]=F.elements[4],D.__data[6]=F.elements[5],D.__data[7]=0,D.__data[8]=F.elements[6],D.__data[9]=F.elements[7],D.__data[10]=F.elements[8],D.__data[11]=0):(F.toArray(D.__data,O),O+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,x,v,b){const P=T.value,C=x+"_"+v;if(b[C]===void 0)return typeof P=="number"||typeof P=="boolean"?b[C]=P:b[C]=P.clone(),!0;{const w=b[C];if(typeof P=="number"||typeof P=="boolean"){if(w!==P)return b[C]=P,!0}else if(w.equals(P)===!1)return w.copy(P),!0}return!1}function g(T){const x=T.uniforms;let v=0;const b=16;for(let C=0,w=x.length;C<w;C++){const y=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,D=y.length;M<D;M++){const V=y[M],k=Array.isArray(V.value)?V.value:[V.value];for(let O=0,B=k.length;O<B;O++){const F=k[O],X=_(F),H=v%b,le=H%X.boundary,he=H+le;v+=le,he!==0&&b-he<X.storage&&(v+=b-he),V.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=X.storage}}}const P=v%b;return P>0&&(v+=b-P),T.__size=v,T.__cache={},this}function _(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function m(T){const x=T.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class YA{constructor(e={}){const{canvas:t=Py(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=bt;let P=0,C=0,w=null,y=-1,M=null;const D=new Ke,V=new Ke;let k=null;const O=new Ie(0);let B=0,F=t.width,X=t.height,H=1,le=null,he=null;const Se=new Ke(0,0,F,X),Ee=new Ke(0,0,F,X);let ze=!1;const te=new qh;let ue=!1,be=!1;const me=new Ne,Ce=new Ne,Je=new I,Pe=new Ke,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let L=!1;function N(){return w===null?H:1}let A=n;function re(R,G){return t.getContext(R,G)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nh}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Me,!1),A===null){const G="webgl2";if(A=re(G,R),A===null)throw re(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let J,Q,ee,se,Z,E,S,U,Y,j,q,fe,oe,de,Ue,ae,ge,Re,Oe,pe,Be,He,ht,z;function ye(){J=new nb(A),J.init(),He=new BA(A,J),Q=new KE(A,J,e,He),ee=new OA(A,J),Q.reverseDepthBuffer&&f&&ee.buffers.depth.setReversed(!0),se=new sb(A),Z=new TA,E=new FA(A,J,ee,Z,Q,He,se),S=new ZE(v),U=new tb(v),Y=new hS(A),ht=new qE(A,Y),j=new ib(A,Y,se,ht),q=new ab(A,j,Y,se),Oe=new ob(A,Q,E),ae=new $E(Z),fe=new SA(v,S,U,J,Q,ht,ae),oe=new WA(v,Z),de=new bA,Ue=new DA(J),Re=new YE(v,S,U,ee,q,d,l),ge=new NA(v,q,Q),z=new XA(A,se,Q,ee),pe=new jE(A,J,se),Be=new rb(A,J,se),se.programs=fe.programs,v.capabilities=Q,v.extensions=J,v.properties=Z,v.renderLists=de,v.shadowMap=ge,v.state=ee,v.info=se}ye();const ne=new VA(v,A);this.xr=ne,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const R=J.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=J.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(F,X,!1))},this.getSize=function(R){return R.set(F,X)},this.setSize=function(R,G,K=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,X=G,t.width=Math.floor(R*H),t.height=Math.floor(G*H),K===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(F*H,X*H).floor()},this.setDrawingBufferSize=function(R,G,K){F=R,X=G,H=K,t.width=Math.floor(R*K),t.height=Math.floor(G*K),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(Se)},this.setViewport=function(R,G,K,$){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,G,K,$),ee.viewport(D.copy(Se).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(Ee)},this.setScissor=function(R,G,K,$){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,G,K,$),ee.scissor(V.copy(Ee).multiplyScalar(H).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(R){ee.setScissorTest(ze=R)},this.setOpaqueSort=function(R){le=R},this.setTransparentSort=function(R){he=R},this.getClearColor=function(R){return R.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,K=!0){let $=0;if(R){let W=!1;if(w!==null){const ce=w.texture.format;W=ce===Hh||ce===zh||ce===kh}if(W){const ce=w.texture.type,ve=ce===zi||ce===Kr||ce===ko||ce===zo||ce===Oh||ce===Fh,Ae=Re.getClearColor(),we=Re.getClearAlpha(),ke=Ae.r,Fe=Ae.g,De=Ae.b;ve?(g[0]=ke,g[1]=Fe,g[2]=De,g[3]=we,A.clearBufferuiv(A.COLOR,0,g)):(_[0]=ke,_[1]=Fe,_[2]=De,_[3]=we,A.clearBufferiv(A.COLOR,0,_))}else $|=A.COLOR_BUFFER_BIT}G&&($|=A.DEPTH_BUFFER_BIT),K&&($|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Re.dispose(),de.dispose(),Ue.dispose(),Z.dispose(),S.dispose(),U.dispose(),q.dispose(),ht.dispose(),z.dispose(),fe.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Ef),ne.removeEventListener("sessionend",bf),Sr.stop()};function ie(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=se.autoReset,G=ge.enabled,K=ge.autoUpdate,$=ge.needsUpdate,W=ge.type;ye(),se.autoReset=R,ge.enabled=G,ge.autoUpdate=K,ge.needsUpdate=$,ge.type=W}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function We(R){const G=R.target;G.removeEventListener("dispose",We),Mt(G)}function Mt(R){Wt(R),Z.remove(R)}function Wt(R){const G=Z.get(R).programs;G!==void 0&&(G.forEach(function(K){fe.releaseProgram(K)}),R.isShaderMaterial&&fe.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,K,$,W,ce){G===null&&(G=yt);const ve=W.isMesh&&W.matrixWorld.determinant()<0,Ae=Kg(R,G,K,$,W);ee.setMaterial($,ve);let we=K.index,ke=1;if($.wireframe===!0){if(we=j.getWireframeAttribute(K),we===void 0)return;ke=2}const Fe=K.drawRange,De=K.attributes.position;let Qe=Fe.start*ke,tt=(Fe.start+Fe.count)*ke;ce!==null&&(Qe=Math.max(Qe,ce.start*ke),tt=Math.min(tt,(ce.start+ce.count)*ke)),we!==null?(Qe=Math.max(Qe,0),tt=Math.min(tt,we.count)):De!=null&&(Qe=Math.max(Qe,0),tt=Math.min(tt,De.count));const At=tt-Qe;if(At<0||At===1/0)return;ht.setup(W,$,Ae,K,we);let St,et=pe;if(we!==null&&(St=Y.get(we),et=Be,et.setIndex(St)),W.isMesh)$.wireframe===!0?(ee.setLineWidth($.wireframeLinewidth*N()),et.setMode(A.LINES)):et.setMode(A.TRIANGLES);else if(W.isLine){let Le=$.linewidth;Le===void 0&&(Le=1),ee.setLineWidth(Le*N()),W.isLineSegments?et.setMode(A.LINES):W.isLineLoop?et.setMode(A.LINE_LOOP):et.setMode(A.LINE_STRIP)}else W.isPoints?et.setMode(A.POINTS):W.isSprite&&et.setMode(A.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)tl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))et.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Le=W._multiDrawStarts,Bt=W._multiDrawCounts,nt=W._multiDrawCount,Vn=we?Y.get(we).bytesPerElement:1,es=Z.get($).currentProgram.getUniforms();for(let xn=0;xn<nt;xn++)es.setValue(A,"_gl_DrawID",xn),et.render(Le[xn]/Vn,Bt[xn])}else if(W.isInstancedMesh)et.renderInstances(Qe,At,W.count);else if(K.isInstancedBufferGeometry){const Le=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Bt=Math.min(K.instanceCount,Le);et.renderInstances(Qe,At,Bt)}else et.render(Qe,At)};function st(R,G,K){R.transparent===!0&&R.side===oi&&R.forceSinglePass===!1?(R.side=dn,R.needsUpdate=!0,ua(R,G,K),R.side=ki,R.needsUpdate=!0,ua(R,G,K),R.side=oi):ua(R,G,K)}this.compile=function(R,G,K=null){K===null&&(K=R),p=Ue.get(K),p.init(G),x.push(p),K.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),R!==K&&R.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const $=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ce=W.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){const Ae=ce[ve];st(Ae,K,W),$.add(Ae)}else st(ce,K,W),$.add(ce)}),p=x.pop(),$},this.compileAsync=function(R,G,K=null){const $=this.compile(R,G,K);return new Promise(W=>{function ce(){if($.forEach(function(ve){Z.get(ve).currentProgram.isReady()&&$.delete(ve)}),$.size===0){W(R);return}setTimeout(ce,10)}J.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Hn=null;function Si(R){Hn&&Hn(R)}function Ef(){Sr.stop()}function bf(){Sr.start()}const Sr=new V_;Sr.setAnimationLoop(Si),typeof self<"u"&&Sr.setContext(self),this.setAnimationLoop=function(R){Hn=R,ne.setAnimationLoop(R),R===null?Sr.stop():Sr.start()},ne.addEventListener("sessionstart",Ef),ne.addEventListener("sessionend",bf),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(G),G=ne.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,G,w),p=Ue.get(R,x.length),p.init(G),x.push(p),Ce.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),te.setFromProjectionMatrix(Ce),be=this.localClippingEnabled,ue=ae.init(this.clippingPlanes,be),m=de.get(R,T.length),m.init(),T.push(m),ne.enabled===!0&&ne.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&Xl(ce,G,-1/0,v.sortObjects)}Xl(R,G,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(le,he),L=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,L&&Re.addToRenderList(m,R),this.info.render.frame++,ue===!0&&ae.beginShadows();const K=p.state.shadowsArray;ge.render(K,R,G),ue===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,W=m.transmissive;if(p.setupLights(),G.isArrayCamera){const ce=G.cameras;if(W.length>0)for(let ve=0,Ae=ce.length;ve<Ae;ve++){const we=ce[ve];wf($,W,R,we)}L&&Re.render(R);for(let ve=0,Ae=ce.length;ve<Ae;ve++){const we=ce[ve];Af(m,R,we,we.viewport)}}else W.length>0&&wf($,W,R,G),L&&Re.render(R),Af(m,R,G);w!==null&&C===0&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(v,R,G),ht.resetDefaultState(),y=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],ue===!0&&ae.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Xl(R,G,K,$){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||te.intersectsSprite(R)){$&&Pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ce);const ve=q.update(R),Ae=R.material;Ae.visible&&m.push(R,ve,Ae,K,Pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||te.intersectsObject(R))){const ve=q.update(R),Ae=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pe.copy(R.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Pe.copy(ve.boundingSphere.center)),Pe.applyMatrix4(R.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ae)){const we=ve.groups;for(let ke=0,Fe=we.length;ke<Fe;ke++){const De=we[ke],Qe=Ae[De.materialIndex];Qe&&Qe.visible&&m.push(R,ve,Qe,K,Pe.z,De)}}else Ae.visible&&m.push(R,ve,Ae,K,Pe.z,null)}}const ce=R.children;for(let ve=0,Ae=ce.length;ve<Ae;ve++)Xl(ce[ve],G,K,$)}function Af(R,G,K,$){const W=R.opaque,ce=R.transmissive,ve=R.transparent;p.setupLightsView(K),ue===!0&&ae.setGlobalState(v.clippingPlanes,K),$&&ee.viewport(D.copy($)),W.length>0&&ca(W,G,K),ce.length>0&&ca(ce,G,K),ve.length>0&&ca(ve,G,K),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function wf(R,G,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Hi(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Kn:zi,minFilter:ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ce=p.state.transmissionRenderTarget[$.id],ve=$.viewport||D;ce.setSize(ve.z*v.transmissionResolutionScale,ve.w*v.transmissionResolutionScale);const Ae=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(O),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),L&&Re.render(K);const we=v.toneMapping;v.toneMapping=ur;const ke=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),ue===!0&&ae.setGlobalState(v.clippingPlanes,$),ca(R,K,$),E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce),J.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let De=0,Qe=G.length;De<Qe;De++){const tt=G[De],At=tt.object,St=tt.geometry,et=tt.material,Le=tt.group;if(et.side===oi&&At.layers.test($.layers)){const Bt=et.side;et.side=dn,et.needsUpdate=!0,Rf(At,K,$,St,et,Le),et.side=Bt,et.needsUpdate=!0,Fe=!0}}Fe===!0&&(E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce))}v.setRenderTarget(Ae),v.setClearColor(O,B),ke!==void 0&&($.viewport=ke),v.toneMapping=we}function ca(R,G,K){const $=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ce=R.length;W<ce;W++){const ve=R[W],Ae=ve.object,we=ve.geometry,ke=ve.group;let Fe=ve.material;Fe.allowOverride===!0&&$!==null&&(Fe=$),Ae.layers.test(K.layers)&&Rf(Ae,G,K,we,Fe,ke)}}function Rf(R,G,K,$,W,ce){R.onBeforeRender(v,G,K,$,W,ce),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(v,G,K,$,R,ce),W.transparent===!0&&W.side===oi&&W.forceSinglePass===!1?(W.side=dn,W.needsUpdate=!0,v.renderBufferDirect(K,G,$,W,R,ce),W.side=ki,W.needsUpdate=!0,v.renderBufferDirect(K,G,$,W,R,ce),W.side=oi):v.renderBufferDirect(K,G,$,W,R,ce),R.onAfterRender(v,G,K,$,W,ce)}function ua(R,G,K){G.isScene!==!0&&(G=yt);const $=Z.get(R),W=p.state.lights,ce=p.state.shadowsArray,ve=W.state.version,Ae=fe.getParameters(R,W.state,ce,G,K),we=fe.getProgramCacheKey(Ae);let ke=$.programs;$.environment=R.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(R.isMeshStandardMaterial?U:S).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,ke===void 0&&(R.addEventListener("dispose",We),ke=new Map,$.programs=ke);let Fe=ke.get(we);if(Fe!==void 0){if($.currentProgram===Fe&&$.lightsStateVersion===ve)return Pf(R,Ae),Fe}else Ae.uniforms=fe.getUniforms(R),R.onBeforeCompile(Ae,v),Fe=fe.acquireProgram(Ae,we),ke.set(we,Fe),$.uniforms=Ae.uniforms;const De=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(De.clippingPlanes=ae.uniform),Pf(R,Ae),$.needsLights=Zg(R),$.lightsStateVersion=ve,$.needsLights&&(De.ambientLightColor.value=W.state.ambient,De.lightProbe.value=W.state.probe,De.directionalLights.value=W.state.directional,De.directionalLightShadows.value=W.state.directionalShadow,De.spotLights.value=W.state.spot,De.spotLightShadows.value=W.state.spotShadow,De.rectAreaLights.value=W.state.rectArea,De.ltc_1.value=W.state.rectAreaLTC1,De.ltc_2.value=W.state.rectAreaLTC2,De.pointLights.value=W.state.point,De.pointLightShadows.value=W.state.pointShadow,De.hemisphereLights.value=W.state.hemi,De.directionalShadowMap.value=W.state.directionalShadowMap,De.directionalShadowMatrix.value=W.state.directionalShadowMatrix,De.spotShadowMap.value=W.state.spotShadowMap,De.spotLightMatrix.value=W.state.spotLightMatrix,De.spotLightMap.value=W.state.spotLightMap,De.pointShadowMap.value=W.state.pointShadowMap,De.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=Fe,$.uniformsList=null,Fe}function Cf(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=nl.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Pf(R,G){const K=Z.get(R);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Kg(R,G,K,$,W){G.isScene!==!0&&(G=yt),E.resetTextureUnits();const ce=G.fog,ve=$.isMeshStandardMaterial?G.environment:null,Ae=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Gt,we=($.isMeshStandardMaterial?U:S).get($.envMap||ve),ke=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Fe=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),De=!!K.morphAttributes.position,Qe=!!K.morphAttributes.normal,tt=!!K.morphAttributes.color;let At=ur;$.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(At=v.toneMapping);const St=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,et=St!==void 0?St.length:0,Le=Z.get($),Bt=p.state.lights;if(ue===!0&&(be===!0||R!==M)){const Qt=R===M&&$.id===y;ae.setState($,R,Qt)}let nt=!1;$.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Bt.state.version||Le.outputColorSpace!==Ae||W.isBatchedMesh&&Le.batching===!1||!W.isBatchedMesh&&Le.batching===!0||W.isBatchedMesh&&Le.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Le.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Le.instancing===!1||!W.isInstancedMesh&&Le.instancing===!0||W.isSkinnedMesh&&Le.skinning===!1||!W.isSkinnedMesh&&Le.skinning===!0||W.isInstancedMesh&&Le.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Le.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Le.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Le.instancingMorph===!1&&W.morphTexture!==null||Le.envMap!==we||$.fog===!0&&Le.fog!==ce||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ae.numPlanes||Le.numIntersection!==ae.numIntersection)||Le.vertexAlphas!==ke||Le.vertexTangents!==Fe||Le.morphTargets!==De||Le.morphNormals!==Qe||Le.morphColors!==tt||Le.toneMapping!==At||Le.morphTargetsCount!==et)&&(nt=!0):(nt=!0,Le.__version=$.version);let Vn=Le.currentProgram;nt===!0&&(Vn=ua($,G,W));let es=!1,xn=!1,eo=!1;const pt=Vn.getUniforms(),Ln=Le.uniforms;if(ee.useProgram(Vn.program)&&(es=!0,xn=!0,eo=!0),$.id!==y&&(y=$.id,xn=!0),es||M!==R){ee.buffers.depth.getReversed()?(me.copy(R.projectionMatrix),Ly(me),Iy(me),pt.setValue(A,"projectionMatrix",me)):pt.setValue(A,"projectionMatrix",R.projectionMatrix),pt.setValue(A,"viewMatrix",R.matrixWorldInverse);const un=pt.map.cameraPosition;un!==void 0&&un.setValue(A,Je.setFromMatrixPosition(R.matrixWorld)),Q.logarithmicDepthBuffer&&pt.setValue(A,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&pt.setValue(A,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,xn=!0,eo=!0)}if(W.isSkinnedMesh){pt.setOptional(A,W,"bindMatrix"),pt.setOptional(A,W,"bindMatrixInverse");const Qt=W.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),pt.setValue(A,"boneTexture",Qt.boneTexture,E))}W.isBatchedMesh&&(pt.setOptional(A,W,"batchingTexture"),pt.setValue(A,"batchingTexture",W._matricesTexture,E),pt.setOptional(A,W,"batchingIdTexture"),pt.setValue(A,"batchingIdTexture",W._indirectTexture,E),pt.setOptional(A,W,"batchingColorTexture"),W._colorsTexture!==null&&pt.setValue(A,"batchingColorTexture",W._colorsTexture,E));const In=K.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Oe.update(W,K,Vn),(xn||Le.receiveShadow!==W.receiveShadow)&&(Le.receiveShadow=W.receiveShadow,pt.setValue(A,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Ln.envMap.value=we,Ln.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(Ln.envMapIntensity.value=G.environmentIntensity),xn&&(pt.setValue(A,"toneMappingExposure",v.toneMappingExposure),Le.needsLights&&$g(Ln,eo),ce&&$.fog===!0&&oe.refreshFogUniforms(Ln,ce),oe.refreshMaterialUniforms(Ln,$,H,X,p.state.transmissionRenderTarget[R.id]),nl.upload(A,Cf(Le),Ln,E)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(nl.upload(A,Cf(Le),Ln,E),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&pt.setValue(A,"center",W.center),pt.setValue(A,"modelViewMatrix",W.modelViewMatrix),pt.setValue(A,"normalMatrix",W.normalMatrix),pt.setValue(A,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Qt=$.uniformsGroups;for(let un=0,Yl=Qt.length;un<Yl;un++){const Tr=Qt[un];z.update(Tr,Vn),z.bind(Tr,Vn)}}return Vn}function $g(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Zg(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,G,K){const $=Z.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Z.get(R.texture).__webglTexture=G,Z.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){const K=Z.get(R);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0};const Jg=A.createFramebuffer();this.setRenderTarget=function(R,G=0,K=0){w=R,P=G,C=K;let $=!0,W=null,ce=!1,ve=!1;if(R){const we=Z.get(R);if(we.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(A.FRAMEBUFFER,null),$=!1;else if(we.__webglFramebuffer===void 0)E.setupRenderTarget(R);else if(we.__hasExternalTextures)E.rebindTextures(R,Z.get(R.texture).__webglTexture,Z.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const De=R.depthTexture;if(we.__boundDepthTexture!==De){if(De!==null&&Z.has(De)&&(R.width!==De.image.width||R.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(R)}}const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ve=!0);const Fe=Z.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Fe[G])?W=Fe[G][K]:W=Fe[G],ce=!0):R.samples>0&&E.useMultisampledRTT(R)===!1?W=Z.get(R).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[K]:W=Fe,D.copy(R.viewport),V.copy(R.scissor),k=R.scissorTest}else D.copy(Se).multiplyScalar(H).floor(),V.copy(Ee).multiplyScalar(H).floor(),k=ze;if(K!==0&&(W=Jg),ee.bindFramebuffer(A.FRAMEBUFFER,W)&&$&&ee.drawBuffers(R,W),ee.viewport(D),ee.scissor(V),ee.setScissorTest(k),ce){const we=Z.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+G,we.__webglTexture,K)}else if(ve){const we=Z.get(R.texture),ke=G;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,we.__webglTexture,K,ke)}else if(R!==null&&K!==0){const we=Z.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,we.__webglTexture,K)}y=-1},this.readRenderTargetPixels=function(R,G,K,$,W,ce,ve){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){ee.bindFramebuffer(A.FRAMEBUFFER,Ae);try{const we=R.texture,ke=we.format,Fe=we.type;if(!Q.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-$&&K>=0&&K<=R.height-W&&A.readPixels(G,K,$,W,He.convert(ke),He.convert(Fe),ce)}finally{const we=w!==null?Z.get(w).__webglFramebuffer:null;ee.bindFramebuffer(A.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(R,G,K,$,W,ce,ve){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae)if(G>=0&&G<=R.width-$&&K>=0&&K<=R.height-W){ee.bindFramebuffer(A.FRAMEBUFFER,Ae);const we=R.texture,ke=we.format,Fe=we.type;if(!Q.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,De),A.bufferData(A.PIXEL_PACK_BUFFER,ce.byteLength,A.STREAM_READ),A.readPixels(G,K,$,W,He.convert(ke),He.convert(Fe),0);const Qe=w!==null?Z.get(w).__webglFramebuffer:null;ee.bindFramebuffer(A.FRAMEBUFFER,Qe);const tt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Dy(A,tt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,De),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ce),A.deleteBuffer(De),A.deleteSync(tt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,K=0){const $=Math.pow(2,-K),W=Math.floor(R.image.width*$),ce=Math.floor(R.image.height*$),ve=G!==null?G.x:0,Ae=G!==null?G.y:0;E.setTexture2D(R,0),A.copyTexSubImage2D(A.TEXTURE_2D,K,0,0,ve,Ae,W,ce),ee.unbindTexture()};const Qg=A.createFramebuffer(),e0=A.createFramebuffer();this.copyTextureToTexture=function(R,G,K=null,$=null,W=0,ce=null){ce===null&&(W!==0?(tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=W,W=0):ce=0);let ve,Ae,we,ke,Fe,De,Qe,tt,At;const St=R.isCompressedTexture?R.mipmaps[ce]:R.image;if(K!==null)ve=K.max.x-K.min.x,Ae=K.max.y-K.min.y,we=K.isBox3?K.max.z-K.min.z:1,ke=K.min.x,Fe=K.min.y,De=K.isBox3?K.min.z:0;else{const In=Math.pow(2,-W);ve=Math.floor(St.width*In),Ae=Math.floor(St.height*In),R.isDataArrayTexture?we=St.depth:R.isData3DTexture?we=Math.floor(St.depth*In):we=1,ke=0,Fe=0,De=0}$!==null?(Qe=$.x,tt=$.y,At=$.z):(Qe=0,tt=0,At=0);const et=He.convert(G.format),Le=He.convert(G.type);let Bt;G.isData3DTexture?(E.setTexture3D(G,0),Bt=A.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(E.setTexture2DArray(G,0),Bt=A.TEXTURE_2D_ARRAY):(E.setTexture2D(G,0),Bt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,G.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,G.unpackAlignment);const nt=A.getParameter(A.UNPACK_ROW_LENGTH),Vn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),es=A.getParameter(A.UNPACK_SKIP_PIXELS),xn=A.getParameter(A.UNPACK_SKIP_ROWS),eo=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,St.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,St.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ke),A.pixelStorei(A.UNPACK_SKIP_ROWS,Fe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,De);const pt=R.isDataArrayTexture||R.isData3DTexture,Ln=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){const In=Z.get(R),Qt=Z.get(G),un=Z.get(In.__renderTarget),Yl=Z.get(Qt.__renderTarget);ee.bindFramebuffer(A.READ_FRAMEBUFFER,un.__webglFramebuffer),ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,Yl.__webglFramebuffer);for(let Tr=0;Tr<we;Tr++)pt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Z.get(R).__webglTexture,W,De+Tr),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Z.get(G).__webglTexture,ce,At+Tr)),A.blitFramebuffer(ke,Fe,ve,Ae,Qe,tt,ve,Ae,A.DEPTH_BUFFER_BIT,A.NEAREST);ee.bindFramebuffer(A.READ_FRAMEBUFFER,null),ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(W!==0||R.isRenderTargetTexture||Z.has(R)){const In=Z.get(R),Qt=Z.get(G);ee.bindFramebuffer(A.READ_FRAMEBUFFER,Qg),ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,e0);for(let un=0;un<we;un++)pt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,In.__webglTexture,W,De+un):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,In.__webglTexture,W),Ln?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Qt.__webglTexture,ce,At+un):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Qt.__webglTexture,ce),W!==0?A.blitFramebuffer(ke,Fe,ve,Ae,Qe,tt,ve,Ae,A.COLOR_BUFFER_BIT,A.NEAREST):Ln?A.copyTexSubImage3D(Bt,ce,Qe,tt,At+un,ke,Fe,ve,Ae):A.copyTexSubImage2D(Bt,ce,Qe,tt,ke,Fe,ve,Ae);ee.bindFramebuffer(A.READ_FRAMEBUFFER,null),ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Ln?R.isDataTexture||R.isData3DTexture?A.texSubImage3D(Bt,ce,Qe,tt,At,ve,Ae,we,et,Le,St.data):G.isCompressedArrayTexture?A.compressedTexSubImage3D(Bt,ce,Qe,tt,At,ve,Ae,we,et,St.data):A.texSubImage3D(Bt,ce,Qe,tt,At,ve,Ae,we,et,Le,St):R.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ce,Qe,tt,ve,Ae,et,Le,St.data):R.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ce,Qe,tt,St.width,St.height,et,St.data):A.texSubImage2D(A.TEXTURE_2D,ce,Qe,tt,ve,Ae,et,Le,St);A.pixelStorei(A.UNPACK_ROW_LENGTH,nt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Vn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,es),A.pixelStorei(A.UNPACK_SKIP_ROWS,xn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,eo),ce===0&&G.generateMipmaps&&A.generateMipmap(Bt),ee.unbindTexture()},this.copyTextureToTexture3D=function(R,G,K=null,$=null,W=0){return tl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,G,K,$,W)},this.initRenderTarget=function(R){Z.get(R).__webglFramebuffer===void 0&&E.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?E.setTextureCube(R,0):R.isData3DTexture?E.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?E.setTexture2DArray(R,0):E.setTexture2D(R,0),ee.unbindTexture()},this.resetState=function(){P=0,C=0,w=null,ee.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const Cp={type:"change"},of={type:"start"},q_={type:"end"},Ga=new sa,Pp=new Yn,qA=Math.cos(70*y_.DEG2RAD),Dt=new I,hn=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hc=1e-6;class jA extends cS{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cs.ROTATE,MIDDLE:Cs.DOLLY,RIGHT:Cs.PAN},this.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Zn,this._lastTargetPosition=new I,this._quat=new Zn().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ip,this._sphericalDelta=new ip,this._scale=1,this._panOffset=new I,this._rotateStart=new xe,this._rotateEnd=new xe,this._rotateDelta=new xe,this._panStart=new xe,this._panEnd=new xe,this._panDelta=new xe,this._dollyStart=new xe,this._dollyEnd=new xe,this._dollyDelta=new xe,this._dollyDirection=new I,this._mouse=new xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$A.bind(this),this._onPointerDown=KA.bind(this),this._onPointerUp=ZA.bind(this),this._onContextMenu=rw.bind(this),this._onMouseWheel=ew.bind(this),this._onKeyDown=tw.bind(this),this._onTouchStart=nw.bind(this),this._onTouchMove=iw.bind(this),this._onMouseDown=JA.bind(this),this._onMouseMove=QA.bind(this),this._interceptControlDown=sw.bind(this),this._interceptControlUp=ow.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cp),this.update(),this.state=ct.NONE}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=hn:n>Math.PI&&(n-=hn),r<-Math.PI?r+=hn:r>Math.PI&&(r-=hn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Dt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ga.origin.copy(this.object.position),Ga.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ga.direction))<qA?this.object.lookAt(this.target):(Pp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ga.intersectPlane(Pp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Hc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hc||this._lastTargetPosition.distanceToSquared(this.target)>Hc?(this.dispatchEvent(Cp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Dt.copy(r).sub(this.target);let s=Dt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function KA(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function $A(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ZA(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(q_),this.state=ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function JA(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ct.DOLLY;break;case Cs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}break;case Cs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(of)}function QA(i){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ew(i){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(i.preventDefault(),this.dispatchEvent(of),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(q_))}function tw(i){this.enabled!==!1&&this._handleKeyDown(i)}function nw(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ct.TOUCH_ROTATE;break;case ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ct.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(of)}function iw(i){switch(this._trackPointer(i),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ct.NONE}}function rw(i){this.enabled!==!1&&i.preventDefault()}function sw(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ow(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Dp(i,e){if(e===iy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===qu||e===g_){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===qu)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class aw extends yr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new fw(t)}),this.register(function(t){return new dw(t)}),this.register(function(t){return new Sw(t)}),this.register(function(t){return new Tw(t)}),this.register(function(t){return new Ew(t)}),this.register(function(t){return new mw(t)}),this.register(function(t){return new _w(t)}),this.register(function(t){return new gw(t)}),this.register(function(t){return new vw(t)}),this.register(function(t){return new hw(t)}),this.register(function(t){return new xw(t)}),this.register(function(t){return new pw(t)}),this.register(function(t){return new Mw(t)}),this.register(function(t){return new yw(t)}),this.register(function(t){return new cw(t)}),this.register(function(t){return new bw(t)}),this.register(function(t){return new Aw(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Co.extractUrlBase(e);o=Co.resolveURL(c,this.path)}else o=Co.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new qo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===j_){try{o[je.KHR_BINARY_GLTF]=new ww(e)}catch(h){r&&r(h);return}s=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new zw(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:o[h]=new uw;break;case je.KHR_DRACO_MESH_COMPRESSION:o[h]=new Rw(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[h]=new Cw;break;case je.KHR_MESH_QUANTIZATION:o[h]=new Pw;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function lw(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class cw{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ie(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Gt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new H_(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zu(u),c.distance=h;break;case"spot":c=new jM(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Li(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class uw{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return zr}extendParams(e,t,n){const r=[];e.color=new Ie(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Gt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,bt))}return Promise.all(r)}}class hw{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class fw{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(a,a)}return Promise.all(s)}}class dw{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class pw{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class mw{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Gt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,bt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class _w{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class gw{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],Gt),Promise.all(s)}}class vw{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class xw{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],Gt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,bt)),Promise.all(s)}}class yw{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Mw{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Sw{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Tw{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ew{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class bw{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}}class Aw{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==On.TRIANGLES&&c.mode!==On.TRIANGLE_STRIP&&c.mode!==On.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new Ne,m=new I,p=new Zn,T=new I(1,1,1),x=new D_(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&T.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,_.compose(m,p,T));for(const v in l)if(v==="_COLOR_0"){const b=l[v];x.instanceColor=new Ku(b.array,b.itemSize,b.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);vt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const j_="glTF",ho=12,Lp={JSON:1313821514,BIN:5130562};class ww{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ho),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==j_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ho,s=new DataView(e,ho);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Lp.JSON){const c=new Uint8Array(e,ho+o,a);this.content=n.decode(c)}else if(l===Lp.BIN){const c=ho+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Rw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Qu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Qu[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Ls[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,Gt,f)})})}}class Cw{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Pw{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class K_ extends aa{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,T=1-m,x=p-f+h;for(let v=0;v!==a;v++){const b=o[_+v+a],P=o[_+v+l]*u,C=o[g+v+a],w=o[g+v]*u;s[v]=T*b+x*P+m*C+p*w}return s}}const Dw=new Zn;class Lw extends K_{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return Dw.fromArray(s).normalize().toArray(s),s}}const On={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ls={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ip={9728:an,9729:Ut,9984:a_,9985:Ka,9986:mo,9987:ui},Np={33071:ci,33648:pl,10497:pr},Vc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Iw={CUBICSPLINE:void 0,LINEAR:Wo,STEP:Go},Gc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Nw(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Yo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ki})),i.DefaultMaterial}function Lr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Li(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Uw(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Ow(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Fw(i){let e;const t=i.extensions&&i.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wc(t.attributes):e=i.indices+":"+Wc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Wc(i.targets[n]);return e}function Wc(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function eh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Bw(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const kw=new Ne;class zw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new Jh(this.options.manager):this.textureLoader=new ZM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Lr(s,a,r),Li(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Co.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Vc[r.type],a=Ls[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Ht(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Vc[r.type],c=Ls[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),T="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let x=t.cache.get(T);x||(_=new c(a,p*d,r.count*d/u),x=new aM(_,d/u),t.cache.add(T,x)),m=new Wh(x,l,f%d/u,g)}else a===null?_=new c(r.count*l):_=new c(a,f,r.count*l),m=new Ht(_,l,g);if(r.sparse!==void 0){const p=Vc.SCALAR,T=Ls[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,b=new T(o[1],x,r.sparse.count*p),P=new c(o[2],v,r.sparse.count*l);a!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,w=b.length;C<w;C++){const y=b[C];if(m.setX(y,P[C*l]),l>=2&&m.setY(y,P[C*l+1]),l>=3&&m.setZ(y,P[C*l+2]),l>=4&&m.setW(y,P[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Ip[f.magFilter]||Ut,u.minFilter=Ip[f.minFilter]||ui,u.wrapS=Np[f.wrapS]||pr,u.wrapT=Np[f.wrapT]||pr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==an&&u.minFilter!==Ut,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ot(_);m.needsUpdate=!0,f(m)}),t.load(Co.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Li(h,o),h.userData.mimeType=o.mimeType||Bw(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new I_,di.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new L_,di.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Yo}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const h=r[je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Gt),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,bt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=oi);const u=s.alphaMode||Gc.OPAQUE;if(u===Gc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Gc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==zr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new xe(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==zr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==zr){const h=s.emissiveFactor;a.emissive=new Ie().setRGB(h[0],h[1],h[2],Gt)}return s.emissiveTexture!==void 0&&o!==zr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,bt)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Li(h,s),t.associations.set(h,{materials:e}),s.extensions&&Lr(r,h,s),h})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Up(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Fw(c),h=r[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Up(new Dn,c,t),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Nw(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const T=c[d];if(m.mode===On.TRIANGLES||m.mode===On.TRIANGLE_STRIP||m.mode===On.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new cM(_,T):new zt(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===On.TRIANGLE_STRIP?p.geometry=Dp(p.geometry,g_):m.mode===On.TRIANGLE_FAN&&(p.geometry=Dp(p.geometry,qu));else if(m.mode===On.LINES)p=new pM(_,T);else if(m.mode===On.LINE_STRIP)p=new jh(_,T);else if(m.mode===On.LINE_LOOP)p=new mM(_,T);else if(m.mode===On.POINTS)p=new _M(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ow(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Li(p,s),m.extensions&&Lr(r,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Lr(r,h[0],s),h[0];const f=new ir;s.extensions&&Lr(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(y_.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new tf(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Li(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ne;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Yh(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){const d=r.channels[h],g=r.samplers[d.sampler],_=d.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,T=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let T=0,x=f.length;T<x;T++){const v=f[T],b=d[T],P=g[T],C=_[T],w=m[T];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const y=n._createAnimationTracks(v,b,P,C,w);if(y)for(let M=0;M<y.length;M++)p.push(y[M])}return new kM(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,kw)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new P_:c.length>1?u=new ir:c.length===1?u=c[0]:u=new vt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Li(u,s),s.extensions&&Lr(n,u,s),s.matrix!==void 0){const h=new Ne;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new ir;n.name&&(s.name=r.createUniqueName(n.name)),Li(s,n),n.extensions&&Lr(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of r.associations)(f instanceof di||f instanceof Ot)&&h.set(f,d);return u.traverse(f=>{const d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ji[s.path]===Ji.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ji[s.path]){case Ji.weights:c=Vs;break;case Ji.rotation:c=Gs;break;case Ji.translation:case Ji.scale:c=Ws;break;default:switch(n.itemSize){case 1:c=Vs;break;case 2:case 3:default:c=Ws;break}break}const u=r.interpolation!==void 0?Iw[r.interpolation]:Wo,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Ji[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=eh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Gs?Lw:K_;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Hw(i,e,t){const n=e.attributes,r=new Xi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=eh(Ls[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=eh(Ls[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new xi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Up(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Qu[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return $e.workingColorSpace!==Gt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),Li(i,e),Hw(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Uw(i,e.targets,t):i})}const Xc=new WeakMap;class Vw extends yr{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,r){const s=new qo(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,r)},n,r)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,bt,n).catch(n)}decodeDracoFile(e,t,n,r,s=Gt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Xc.has(e)){const l=Xc.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(r=l,new Promise((c,u)=>{r._callbacks[s]={resolve:c,reject:u},r.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{r&&s&&this._releaseTask(r,s)}),Xc.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Dn;e.index&&t.setIndex(new Ht(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const r=e.attributes[n],s=r.name,o=r.array,a=r.itemSize,l=new Ht(o,a);s==="color"&&(this._assignVertexColorSpace(l,r.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==bt)return;const n=new Ie;for(let r=0,s=e.count;r<s;r++)n.fromBufferAttribute(e,r),$e.toWorkingColorSpace(n,bt),e.setXYZ(r,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new qo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((r,s)=>{n.load(e,r,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const r=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=Gw.toString(),o=["/* draco decoder */",r,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(s){const o=s.data;switch(o.type){case"decode":r._callbacks[o.id].resolve(o);break;case"error":r._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,s){return r._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Gw(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(i)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),g=d.attributes.map(_=>_.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(g===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const _={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let T,x;if(c.useUniqueIDs)x=u[m],T=a.GetAttributeByUniqueId(f,x);else{if(x=a.GetAttributeId(f,o[u[m]]),x===-1)continue;T=a.GetAttribute(f,x)}const v=r(o,a,f,m,p,T);m==="color"&&(v.vertexColorSpace=c.vertexColorSpace),_.attributes.push(v)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,f)),o.destroy(f),_}function n(o,a,l){const u=l.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function r(o,a,l,c,u,h){const f=h.num_components(),g=l.num_points()*f,_=g*u.BYTES_PER_ELEMENT,m=s(o,u),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,h,m,_,p);const T=new u(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:c,array:T,itemSize:f}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class Ww extends YM{constructor(e){super(e),this.type=Kn}parse(e){const o=function(w,y){switch(w){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(y||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(y||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(y||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(y||""))}},u=`
`,h=function(w,y,M){y=y||1024;let V=w.pos,k=-1,O=0,B="",F=String.fromCharCode.apply(null,new Uint16Array(w.subarray(V,V+128)));for(;0>(k=F.indexOf(u))&&O<y&&V<w.byteLength;)B+=F,O+=F.length,V+=128,F+=String.fromCharCode.apply(null,new Uint16Array(w.subarray(V,V+128)));return-1<k?(w.pos+=O+k+1,B+F.slice(0,k)):!1},f=function(w){const y=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,V=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,O={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let B,F;for((w.pos>=w.byteLength||!(B=h(w)))&&o(1,"no header found"),(F=B.match(y))||o(3,"bad initial token"),O.valid|=1,O.programtype=F[1],O.string+=B+`
`;B=h(w),B!==!1;){if(O.string+=B+`
`,B.charAt(0)==="#"){O.comments+=B+`
`;continue}if((F=B.match(M))&&(O.gamma=parseFloat(F[1])),(F=B.match(D))&&(O.exposure=parseFloat(F[1])),(F=B.match(V))&&(O.valid|=2,O.format=F[1]),(F=B.match(k))&&(O.valid|=4,O.height=parseInt(F[1],10),O.width=parseInt(F[2],10)),O.valid&2&&O.valid&4)break}return O.valid&2||o(3,"missing format specifier"),O.valid&4||o(3,"missing image size specifier"),O},d=function(w,y,M){const D=y;if(D<8||D>32767||w[0]!==2||w[1]!==2||w[2]&128)return new Uint8Array(w);D!==(w[2]<<8|w[3])&&o(3,"wrong scanline width");const V=new Uint8Array(4*y*M);V.length||o(4,"unable to allocate buffer space");let k=0,O=0;const B=4*D,F=new Uint8Array(4),X=new Uint8Array(B);let H=M;for(;H>0&&O<w.byteLength;){O+4>w.byteLength&&o(1),F[0]=w[O++],F[1]=w[O++],F[2]=w[O++],F[3]=w[O++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=D)&&o(3,"bad rgbe scanline format");let le=0,he;for(;le<B&&O<w.byteLength;){he=w[O++];const Ee=he>128;if(Ee&&(he-=128),(he===0||le+he>B)&&o(3,"bad scanline data"),Ee){const ze=w[O++];for(let te=0;te<he;te++)X[le++]=ze}else X.set(w.subarray(O,O+he),le),le+=he,O+=he}const Se=D;for(let Ee=0;Ee<Se;Ee++){let ze=0;V[k]=X[Ee+ze],ze+=D,V[k+1]=X[Ee+ze],ze+=D,V[k+2]=X[Ee+ze],ze+=D,V[k+3]=X[Ee+ze],k+=4}H--}return V},g=function(w,y,M,D){const V=w[y+3],k=Math.pow(2,V-128)/255;M[D+0]=w[y+0]*k,M[D+1]=w[y+1]*k,M[D+2]=w[y+2]*k,M[D+3]=1},_=function(w,y,M,D){const V=w[y+3],k=Math.pow(2,V-128)/255;M[D+0]=Sa.toHalfFloat(Math.min(w[y+0]*k,65504)),M[D+1]=Sa.toHalfFloat(Math.min(w[y+1]*k,65504)),M[D+2]=Sa.toHalfFloat(Math.min(w[y+2]*k,65504)),M[D+3]=Sa.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=f(m),T=p.width,x=p.height,v=d(m.subarray(m.pos),T,x);let b,P,C;switch(this.type){case fn:C=v.length/4;const w=new Float32Array(C*4);for(let M=0;M<C;M++)g(v,M*4,w,M*4);b=w,P=fn;break;case Kn:C=v.length/4;const y=new Uint16Array(C*4);for(let M=0;M<C;M++)_(v,M*4,y,M*4);b=y,P=Kn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:T,height:x,data:b,header:p.string,gamma:p.gamma,exposure:p.exposure,type:P}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){switch(o.type){case fn:case Kn:o.colorSpace=Gt,o.minFilter=Ut,o.magFilter=Ut,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,r)}}class jo extends zt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new kt;const n=this,r=t.color!==void 0?new Ie(t.color):new Ie(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||jo.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Yn,h=new I,f=new I,d=new I,g=new Ne,_=new I(0,0,-1),m=new Ke,p=new I,T=new I,x=new Ke,v=new Ne,b=this.camera,P=new Hi(s,o,{samples:c,type:Kn}),C=new Jn({name:l.name!==void 0?l.name:"unspecified",uniforms:Bl.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});C.uniforms.tDiffuse.value=P.texture,C.uniforms.color.value=r,C.uniforms.textureMatrix.value=v,this.material=C,this.onBeforeRender=function(w,y,M){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(M.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(f,d),p.dot(h)>0===!0&&this.forceUpdate===!1)return;p.reflect(h).negate(),p.add(f),g.extractRotation(M.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(d),T.subVectors(f,_),T.reflect(h).negate(),T.add(f),b.position.copy(p),b.up.set(0,1,0),b.up.applyMatrix4(g),b.up.reflect(h),b.lookAt(T),b.far=M.far,b.updateMatrixWorld(),b.projectionMatrix.copy(M.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(b.projectionMatrix),v.multiply(b.matrixWorldInverse),v.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(b.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const V=b.projectionMatrix;x.x=(Math.sign(m.x)+V.elements[8])/V.elements[0],x.y=(Math.sign(m.y)+V.elements[9])/V.elements[5],x.z=-1,x.w=(1+V.elements[10])/V.elements[14],m.multiplyScalar(2/m.dot(x)),V.elements[2]=m.x,V.elements[6]=m.y,V.elements[10]=m.z+1-a,V.elements[14]=m.w,n.visible=!1;const k=w.getRenderTarget(),O=w.xr.enabled,B=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(P),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(y,b),w.xr.enabled=O,w.shadowMap.autoUpdate=B,w.setRenderTarget(k);const F=M.viewport;F!==void 0&&w.state.viewport(F),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return P},this.dispose=function(){P.dispose(),n.material.dispose()}}}jo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class Ko extends zt{constructor(e,t={}){super(e),this.isRefractor=!0,this.type="Refractor",this.camera=new kt;const n=this,r=t.color!==void 0?new Ie(t.color):new Ie(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||Ko.RefractorShader,c=t.multisample!==void 0?t.multisample:4,u=this.camera;u.matrixAutoUpdate=!1,u.userData.refractor=!0;const h=new Yn,f=new Ne,d=new Hi(s,o,{samples:c,type:Kn});this.material=new Jn({name:l.name!==void 0?l.name:"unspecified",uniforms:Bl.clone(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,transparent:!0}),this.material.uniforms.color.value=r,this.material.uniforms.tDiffuse.value=d.texture,this.material.uniforms.textureMatrix.value=f;const g=function(){const x=new I,v=new I,b=new Ne,P=new I,C=new I;return function(y){return x.setFromMatrixPosition(n.matrixWorld),v.setFromMatrixPosition(y.matrixWorld),P.subVectors(x,v),b.extractRotation(n.matrixWorld),C.set(0,0,1),C.applyMatrix4(b),P.dot(C)<0}}(),_=function(){const x=new I,v=new I,b=new Zn,P=new I;return function(){n.matrixWorld.decompose(v,b,P),x.set(0,0,1).applyQuaternion(b).normalize(),x.negate(),h.setFromNormalAndCoplanarPoint(x,v)}}(),m=function(){const x=new Yn,v=new Ke,b=new Ke;return function(C){u.matrixWorld.copy(C.matrixWorld),u.matrixWorldInverse.copy(u.matrixWorld).invert(),u.projectionMatrix.copy(C.projectionMatrix),u.far=C.far,x.copy(h),x.applyMatrix4(u.matrixWorldInverse),v.set(x.normal.x,x.normal.y,x.normal.z,x.constant);const w=u.projectionMatrix;b.x=(Math.sign(v.x)+w.elements[8])/w.elements[0],b.y=(Math.sign(v.y)+w.elements[9])/w.elements[5],b.z=-1,b.w=(1+w.elements[10])/w.elements[14],v.multiplyScalar(2/v.dot(b)),w.elements[2]=v.x,w.elements[6]=v.y,w.elements[10]=v.z+1-a,w.elements[14]=v.w}}();function p(x){f.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),f.multiply(x.projectionMatrix),f.multiply(x.matrixWorldInverse),f.multiply(n.matrixWorld)}function T(x,v,b){n.visible=!1;const P=x.getRenderTarget(),C=x.xr.enabled,w=x.shadowMap.autoUpdate;x.xr.enabled=!1,x.shadowMap.autoUpdate=!1,x.setRenderTarget(d),x.autoClear===!1&&x.clear(),x.render(v,u),x.xr.enabled=C,x.shadowMap.autoUpdate=w,x.setRenderTarget(P);const y=b.viewport;y!==void 0&&x.state.viewport(y),n.visible=!0}this.onBeforeRender=function(x,v,b){b.userData.refractor!==!0&&g(b)&&(_(),p(b),m(b),T(x,v,b))},this.getRenderTarget=function(){return d},this.dispose=function(){d.dispose(),n.material.dispose()}}}Ko.RefractorShader={name:"RefractorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`

		uniform mat4 textureMatrix;

		varying vec4 vUv;

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec3 color;
		uniform sampler2D tDiffuse;

		varying vec4 vUv;

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class Hl extends zt{constructor(e,t={}){super(e),this.isWater=!0,this.type="Water";const n=this,r=t.color!==void 0?new Ie(t.color):new Ie(16777215),s=t.textureWidth!==void 0?t.textureWidth:512,o=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,l=t.flowDirection!==void 0?t.flowDirection:new xe(1,0),c=t.flowSpeed!==void 0?t.flowSpeed:.03,u=t.reflectivity!==void 0?t.reflectivity:.02,h=t.scale!==void 0?t.scale:1,f=t.shader!==void 0?t.shader:Hl.WaterShader,d=new Jh,g=t.flowMap||void 0,_=t.normalMap0||d.load("textures/water/Water_1_M_Normal.jpg"),m=t.normalMap1||d.load("textures/water/Water_2_M_Normal.jpg"),p=.15,T=p*.5,x=new Ne,v=new QM;if(jo===void 0){console.error("THREE.Water: Required component Reflector not found.");return}if(Ko===void 0){console.error("THREE.Water: Required component Refractor not found.");return}const b=new jo(e,{textureWidth:s,textureHeight:o,clipBias:a}),P=new Ko(e,{textureWidth:s,textureHeight:o,clipBias:a});b.matrixAutoUpdate=!1,P.matrixAutoUpdate=!1,this.material=new Jn({name:f.name,uniforms:Bl.merge([_e.fog,f.uniforms]),vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,transparent:!0,fog:!0}),g!==void 0?(this.material.defines.USE_FLOWMAP="",this.material.uniforms.tFlowMap={type:"t",value:g}):this.material.uniforms.flowDirection={type:"v2",value:l},_.wrapS=_.wrapT=pr,m.wrapS=m.wrapT=pr,this.material.uniforms.tReflectionMap.value=b.getRenderTarget().texture,this.material.uniforms.tRefractionMap.value=P.getRenderTarget().texture,this.material.uniforms.tNormalMap0.value=_,this.material.uniforms.tNormalMap1.value=m,this.material.uniforms.color.value=r,this.material.uniforms.reflectivity.value=u,this.material.uniforms.textureMatrix.value=x,this.material.uniforms.config.value.x=0,this.material.uniforms.config.value.y=T,this.material.uniforms.config.value.z=T,this.material.uniforms.config.value.w=h;function C(y){x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(y.projectionMatrix),x.multiply(y.matrixWorldInverse),x.multiply(n.matrixWorld)}function w(){const y=v.getDelta(),M=n.material.uniforms.config;M.value.x+=c*y,M.value.y=M.value.x+T,M.value.x>=p?(M.value.x=0,M.value.y=T):M.value.y>=p&&(M.value.y=M.value.y-p)}this.onBeforeRender=function(y,M,D){C(D),w(),n.visible=!1,b.matrixWorld.copy(n.matrixWorld),P.matrixWorld.copy(n.matrixWorld),b.onBeforeRender(y,M,D),P.onBeforeRender(y,M,D),n.visible=!0}}}Hl.WaterShader={name:"WaterShader",uniforms:{color:{type:"c",value:null},reflectivity:{type:"f",value:0},tReflectionMap:{type:"t",value:null},tRefractionMap:{type:"t",value:null},tNormalMap0:{type:"t",value:null},tNormalMap1:{type:"t",value:null},textureMatrix:{type:"m4",value:null},config:{type:"v4",value:new Ke}},vertexShader:`

		#include <common>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>

		uniform mat4 textureMatrix;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			vUv = uv;
			vCoord = textureMatrix * vec4( position, 1.0 );

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vToEye = cameraPosition - worldPosition.xyz;

			vec4 mvPosition =  viewMatrix * worldPosition; // used in fog_vertex
			gl_Position = projectionMatrix * mvPosition;

			#include <logdepthbuf_vertex>
			#include <fog_vertex>

		}`,fragmentShader:`

		#include <common>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>

		uniform sampler2D tReflectionMap;
		uniform sampler2D tRefractionMap;
		uniform sampler2D tNormalMap0;
		uniform sampler2D tNormalMap1;

		#ifdef USE_FLOWMAP
			uniform sampler2D tFlowMap;
		#else
			uniform vec2 flowDirection;
		#endif

		uniform vec3 color;
		uniform float reflectivity;
		uniform vec4 config;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			#include <logdepthbuf_fragment>

			float flowMapOffset0 = config.x;
			float flowMapOffset1 = config.y;
			float halfCycle = config.z;
			float scale = config.w;

			vec3 toEye = normalize( vToEye );

			// determine flow direction
			vec2 flow;
			#ifdef USE_FLOWMAP
				flow = texture2D( tFlowMap, vUv ).rg * 2.0 - 1.0;
			#else
				flow = flowDirection;
			#endif
			flow.x *= - 1.0;

			// sample normal maps (distort uvs with flowdata)
			vec4 normalColor0 = texture2D( tNormalMap0, ( vUv * scale ) + flow * flowMapOffset0 );
			vec4 normalColor1 = texture2D( tNormalMap1, ( vUv * scale ) + flow * flowMapOffset1 );

			// linear interpolate to get the final normal color
			float flowLerp = abs( halfCycle - flowMapOffset0 ) / halfCycle;
			vec4 normalColor = mix( normalColor0, normalColor1, flowLerp );

			// calculate normal vector
			vec3 normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );

			// calculate the fresnel term to blend reflection and refraction maps
			float theta = max( dot( toEye, normal ), 0.0 );
			float reflectance = reflectivity + ( 1.0 - reflectivity ) * pow( ( 1.0 - theta ), 5.0 );

			// calculate final uv coords
			vec3 coord = vCoord.xyz / vCoord.w;
			vec2 uv = coord.xy + coord.z * normal.xz * 0.05;

			vec4 reflectColor = texture2D( tReflectionMap, vec2( 1.0 - uv.x, uv.y ) );
			vec4 refractColor = texture2D( tRefractionMap, uv );

			// multiply water color with the mix of both textures
			gl_FragColor = vec4( color, 1.0 ) * mix( refractColor, reflectColor, reflectance );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>

		}`};function Ii(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function $_(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xs={duration:.5,overwrite:!1,delay:0},af,Vt,mt,pi=1e8,$t=1/pi,th=Math.PI*2,Xw=th/4,Yw=0,Z_=Math.sqrt,qw=Math.cos,jw=Math.sin,Ft=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},Vi=function(e){return typeof e=="number"},lf=function(e){return typeof e>"u"},vi=function(e){return typeof e=="object"},pn=function(e){return e!==!1},cf=function(){return typeof window<"u"},Wa=function(e){return Tt(e)||Ft(e)},J_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,nh=/(?:-?\.?\d|\.)+/gi,Q_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,eg=/[+-]=-?[.\d]+/,tg=/[^,'"\[\]\s]+/gi,Kw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_t,ni,ih,uf,Cn={},yl={},ng,ig=function(e){return(yl=Ys(e,Cn))&&vn},hf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},$o=function(e,t){return!t&&console.warn(e)},rg=function(e,t){return e&&(Cn[e]=t)&&yl&&(yl[e]=t)||Cn},Zo=function(){return 0},$w={suppressEvents:!0,isStart:!0,kill:!1},il={suppressEvents:!0,kill:!1},Zw={suppressEvents:!0},ff={},hr=[],rh={},sg,En={},qc={},Op=30,rl=[],df="",pf=function(e){var t=e[0],n,r;if(vi(t)||Tt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=rl.length;r--&&!rl[r].targetTest(t););n=rl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Cg(e[r],n)))||e.splice(r,1);return e},Wr=function(e){return e._gsap||pf(Bn(e))[0]._gsap},og=function(e,t,n){return(n=e[t])&&Tt(n)?e[t]():lf(n)&&e.getAttribute&&e.getAttribute(t)||n},mn=function(e,t){return(e=e.split(",")).forEach(t)||e},Et=function(e){return Math.round(e*1e5)/1e5||0},Ct=function(e){return Math.round(e*1e7)/1e7||0},Is=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Jw=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ml=function(){var e=hr.length,t=hr.slice(0),n,r;for(rh={},hr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ag=function(e,t,n,r){hr.length&&!Vt&&Ml(),e.render(t,n,Vt&&t<0&&(e._initted||e._startAt)),hr.length&&!Vt&&Ml()},lg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(tg).length<2?t:Ft(e)?e.trim():e},cg=function(e){return e},Pn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Qw=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Ys=function(e,t){for(var n in t)e[n]=t[n];return e},Fp=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=vi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Sl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Po=function(e){var t=e.parent||_t,n=e.keyframes?Qw(Jt(e.keyframes)):Pn;if(pn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},e1=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},ug=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Vl=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},mr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Xr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},t1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},sh=function(e,t,n,r){return e._startAt&&(Vt?e._startAt.revert(il):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},n1=function i(e){return!e||e._ts&&i(e.parent)},Bp=function(e){return e._repeat?qs(e._tTime,e=e.duration()+e._rDelay)*e:0},qs=function(e,t){var n=Math.floor(e=Ct(e/t));return e&&n===e?n-1:n},Tl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Gl=function(e){return e._end=Ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||$t)||0))},Wl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Gl(e),n._dirty||Xr(n,e)),e},hg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Tl(e.rawTime(),t),(!t._dur||la(0,t.totalDuration(),n)-t._tTime>$t)&&t.render(n,!0)),Xr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},ai=function(e,t,n,r){return t.parent&&mr(t),t._start=Ct((Vi(n)?n:n||e!==_t?Un(e,n,t):e._time)+t._delay),t._end=Ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ug(e,t,"_first","_last",e._sort?"_start":0),oh(t)||(e._recent=t),r||hg(e,t),e._ts<0&&Wl(e,e._tTime),e},fg=function(e,t){return(Cn.ScrollTrigger||hf("scrollTrigger",t))&&Cn.ScrollTrigger.create(t,e)},dg=function(e,t,n,r,s){if(_f(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&sg!==bn.frame)return hr.push(e),e._lazy=[s,r],1},i1=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},oh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},r1=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&i1(e)&&!(!e._initted&&oh(e))||(e._ts<0||e._dp._ts<0)&&!oh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=la(0,e._tDur,t),u=qs(l,a),e._yoyo&&u&1&&(o=1-o),u!==qs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Vt||r||e._zTime===$t||!t&&e._zTime){if(!e._initted&&dg(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?$t:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&sh(e,t,n,!0),e._onUpdate&&!n&&wn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&wn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&mr(e,1),!n&&!Vt&&(wn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},s1=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},js=function(e,t,n,r){var s=e._repeat,o=Ct(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ct(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Wl(e,e._tTime=e._tDur*a),e.parent&&Gl(e),n||Xr(e.parent,e),e},kp=function(e){return e instanceof on?Xr(e):js(e,e._dur)},o1={_start:0,endTime:Zo,totalDuration:Zo},Un=function i(e,t,n){var r=e.labels,s=e._recent||o1,o=e.duration()>=pi?s.endTime(!1):e._dur,a,l,c;return Ft(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Jt(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Do=function(e,t,n){var r=Vi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=pn(l.vars.inherit)&&l.parent;o.immediateRender=pn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Rt(t[0],o,t[s+1])},Mr=function(e,t){return e||e===0?t(e):t},la=function(e,t,n){return n<e?e:n>t?t:n},Kt=function(e,t){return!Ft(e)||!(t=Kw.exec(e))?"":t[1]},a1=function(e,t,n){return Mr(n,function(r){return la(e,t,r)})},ah=[].slice,pg=function(e,t){return e&&vi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&vi(e[0]))&&!e.nodeType&&e!==ni},l1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Ft(r)&&!t||pg(r,1)?(s=n).push.apply(s,Bn(r)):n.push(r)})||n},Bn=function(e,t,n){return mt&&!t&&mt.selector?mt.selector(e):Ft(e)&&!n&&(ih||!Ks())?ah.call((t||uf).querySelectorAll(e),0):Jt(e)?l1(e,n):pg(e)?ah.call(e,0):e?[e]:[]},lh=function(e){return e=Bn(e)[0]||$o("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Bn(t,n.querySelectorAll?n:n===e?$o("Invalid scope")||uf.createElement("div"):e)}},mg=function(e){return e.sort(function(){return .5-Math.random()})},_g=function(e){if(Tt(e))return e;var t=vi(e)?e:{each:e},n=Yr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return Ft(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,T,x,v,b,P,C,w,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,pi])[1],!y){for(C=-1e8;C<(C=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=l?Math.min(y,_)*u-.5:r%y,T=y===pi?0:l?_*h/y-.5:r/y|0,C=0,w=pi,P=0;P<_;P++)x=P%y-p,v=T-(P/y|0),m[P]=b=c?Math.abs(c==="y"?v:x):Z_(x*x+v*v),b>C&&(C=b),b<w&&(w=b);r==="random"&&mg(m),m.max=C-w,m.min=w,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Kt(t.amount||t.each)||0,n=n&&_<0?Ag(n):n}return _=(m[f]-m.min)/m.max||0,Ct(m.b+(n?n(_):_)*m.v)+m.u}},ch=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Ct(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Vi(n)?0:Kt(n))}},gg=function(e,t){var n=Jt(e),r,s;return!n&&vi(e)&&(r=n=e.radius||pi,e.values?(e=Bn(e.values),(s=!Vi(e[0]))&&(r*=r)):e=ch(e.increment)),Mr(t,n?Tt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=pi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||Vi(o)?u:u+Kt(o)}:ch(e))},vg=function(e,t,n,r){return Mr(Jt(e)?!t:n===!0?!!(n=0):!r,function(){return Jt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},c1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},u1=function(e,t){return function(n){return e(parseFloat(n))+(t||Kt(n))}},h1=function(e,t,n){return yg(e,t,0,1,n)},xg=function(e,t,n){return Mr(n,function(r){return e[~~t(r)]})},f1=function i(e,t,n){var r=t-e;return Jt(e)?xg(e,i(0,e.length),t):Mr(n,function(s){return(r+(s-e)%r)%r+e})},d1=function i(e,t,n){var r=t-e,s=r*2;return Jt(e)?xg(e,i(0,e.length-1),t):Mr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Jo=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?tg:nh),n+=e.substr(t,r-t)+vg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},yg=function(e,t,n,r,s){var o=t-e,a=r-n;return Mr(s,function(l){return n+((l-e)/o*a||0)})},p1=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Ft(e),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else r||(e=Ys(Jt(e)?[]:{},e));if(!u){for(l in t)mf.call(a,e,l,"get",t[l]);s=function(g){return xf(g,a)||(o?e.p:e)}}}return Mr(n,s)},zp=function(e,t,n){var r=e.labels,s=pi,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},wn=function(e,t,n){var r=e.vars,s=r[t],o=mt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&hr.length&&Ml(),a&&(mt=a),u=l?s.apply(c,l):s.call(c),mt=o,u},go=function(e){return mr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Vt),e.progress()<1&&wn(e,"onInterrupt"),e},Ts,Mg=[],Sg=function(e){if(e)if(e=!e.name&&e.default||e,cf()||e.headless){var t=e.name,n=Tt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Zo,render:xf,add:mf,kill:P1,modifier:C1,rawVars:0},o={targetTest:0,get:0,getSetter:vf,aliases:{},register:0};if(Ks(),e!==r){if(En[t])return;Pn(r,Pn(Sl(e,s),o)),Ys(r.prototype,Ys(s,Sl(e,o))),En[r.prop=t]=r,e.targetTest&&(rl.push(r),ff[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rg(t,r),e.register&&e.register(vn,r,_n)}else Mg.push(e)},ut=255,vo={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},jc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ut+.5|0},Tg=function(e,t,n){var r=e?Vi(e)?[e>>16,e>>8&ut,e&ut]:0:vo.black,s,o,a,l,c,u,h,f,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),vo[e])r=vo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ut,r&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(nh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=jc(l+1/3,s,o),r[1]=jc(l,s,o),r[2]=jc(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Q_),n&&r.length<4&&(r[3]=1),r}else r=e.match(nh)||vo.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/ut,o=r[1]/ut,a=r[2]/ut,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Eg=function(e){var t=[],n=[],r=-1;return e.split(fr).forEach(function(s){var o=s.match(Ss)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Hp=function(e,t,n){var r="",s=(e+r).match(fr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Tg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Eg(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(fr,"1").split(Ss),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(fr),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},fr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in vo)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),m1=/hsl[a]?\(/,bg=function(e){var t=e.join(" "),n;if(fr.lastIndex=0,fr.test(t))return n=m1.test(t),e[1]=Hp(e[1],n),e[0]=Hp(e[0],n,Eg(e[1])),!0},Qo,bn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=i()-r,T=m===!0,x,v,b,P;if((p>e||p<0)&&(n+=p-t),r+=p,b=r-n,x=b-o,(x>0||T)&&(P=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,o+=x+(x>=s?4:s-x),v=1),T||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](b,f,P,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){ng&&(!ih&&cf()&&(ni=ih=window,uf=ni.document||{},Cn.gsap=vn,(ni.gsapVersions||(ni.gsapVersions=[])).push(vn.version),ig(yl||ni.GreenSockGlobals||!ni.gsap&&ni||{}),Mg.forEach(Sg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Qo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Qo=0,c=Zo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,T){var x=p?function(v,b,P,C){m(v,b,P,C),h.remove(x)}:m;return h.remove(m),a[T?"unshift":"push"](x),Ks(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),Ks=function(){return!Qo&&bn.wake()},Ze={},_1=/^[\d.\-M][\d.\-,\s]/,g1=/["']/g,v1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(g1,"").trim():+c,r=l.substr(a+1).trim();return t},x1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},y1=function(e){var t=(e+"").split("("),n=Ze[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[v1(t[1])]:x1(e).split(",").map(lg)):Ze._CE&&_1.test(e)?Ze._CE("",e):n},Ag=function(e){return function(t){return 1-e(1-t)}},wg=function i(e,t){for(var n=e._first,r;n;)n instanceof on?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Yr=function(e,t){return e&&(Tt(e)?e:Ze[e]||y1(e))||t},Qr=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return mn(e,function(a){Ze[a]=Cn[a]=s,Ze[o=a.toLowerCase()]=n;for(var l in s)Ze[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ze[a+"."+l]=s[l]}),s},Rg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Kc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/th*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*jw((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Rg(a);return s=th/s,l.config=function(c,u){return i(e,c,u)},l},$c=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Rg(n);return r.config=function(s){return i(e,s)},r};mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Qr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ze.Linear.easeNone=Ze.none=Ze.Linear.easeIn;Qr("Elastic",Kc("in"),Kc("out"),Kc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Qr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Qr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Qr("Circ",function(i){return-(Z_(1-i*i)-1)});Qr("Sine",function(i){return i===1?1:-qw(i*Xw)+1});Qr("Back",$c("in"),$c("out"),$c());Ze.SteppedEase=Ze.steps=Cn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-$t;return function(a){return((r*la(0,o,a)|0)+s)*n}}};Xs.ease=Ze["quad.out"];mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return df+=i+","+i+"Params,"});var Cg=function(e,t){this.id=Yw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:og,this.set=t?t.getSetter:vf},ea=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,js(this,+t.duration,1,1),this.data=t.data,mt&&(this._ctx=mt,mt.data.push(this)),Qo||bn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,js(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Ks(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Wl(this,n),!s._dp||s.parent||hg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===$t||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ag(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Bp(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Bp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?qs(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Tl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(la(-Math.abs(this._delay),this._tDur,s),r!==!1),Gl(this),t1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$t&&(this._tTime-=$t)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ai(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(pn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Tl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Zw);var r=Vt;return Vt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Vt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,kp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,kp(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Un(this,n),pn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,pn(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-$t)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Tt(n)?n:cg,a=function(){var c=r.then;r.then=null,Tt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){go(this)},i}();Pn(ea.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var on=function(i){$_(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=pn(n.sortChildren),_t&&ai(n.parent||_t,Ii(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&fg(Ii(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Do(0,arguments,this),this},t.from=function(r,s,o){return Do(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Do(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Po(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Rt(r,s,Un(this,o),1),this},t.call=function(r,s,o){return ai(this,Rt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Rt(r,o,Un(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Po(o).immediateRender=pn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,Po(a).immediateRender=pn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ct(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,g,_,m,p,T,x,v,b,P,C;if(this!==_t&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,v=this._start,x=this._ts,p=!x,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(P=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Ct(u%m),u===l?(_=this._repeat,f=c):(b=Ct(u/m),_=~~b,_&&_===b&&(f=c,_--),f>c&&(f=c)),b=qs(this._tTime,m),!a&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),P&&_&1&&(f=c-f,C=1),_!==b&&!this._lock){var w=P&&b&1,y=w===(P&&_&1);if(_<b&&(w=!w),a=w?0:u%c?c:u,this._lock=1,this.render(a||(C?0:Ct(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&wn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=w?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;wg(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=s1(this,Ct(a),Ct(f)),T&&(u-=f-(f=T._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!_&&(wn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&T!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){T=0,g&&(u+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var M=r<0?r:f;d;){if(g=d._prev,(d._act||M<=d._end)&&d._ts&&T!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,o||Vt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){T=0,g&&(u+=this._zTime=M?-1e-8:$t);break}}d=g}}if(T&&!s&&(this.pause(),T.render(f>=a?0:-1e-8)._zTime=f>=a?1:-1,this._ts))return this._start=v,Gl(this),this.render(r,s,o);this._onUpdate&&!s&&wn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&mr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(wn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Vi(s)||(s=Un(this,s,r)),!(r instanceof ea)){if(Jt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ft(r))return this.addLabel(r,s);if(Tt(r))r=Rt.delayedCall(0,r);else return this}return this!==r?ai(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Rt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Ft(r)?this.removeLabel(r):Tt(r)?this.killTweensOf(r):(r.parent===this&&Vl(this,r),r===this._recent&&(this._recent=this._last),Xr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(bn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Un(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Rt.delayedCall(0,s||Zo,o);return a.data="isPause",this._hasPause=1,ai(this,a,Un(this,r))},t.removePause=function(r){var s=this._first;for(r=Un(this,r);s;)s._start===r&&s.data==="isPause"&&mr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)sr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Bn(r),l=this._first,c=Vi(s),u;l;)l instanceof Rt?Jw(l._targets,a)&&(c?(!sr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Un(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Rt.to(o,Pn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||$t,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&js(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Pn({startAt:{time:Un(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),zp(this,Un(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),zp(this,Un(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+$t)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Xr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Xr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=pi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ai(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;js(o,o===_t&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(_t._ts&&(ag(_t,Tl(r,_t)),sg=bn.frame),bn.frame>=Op){Op+=Rn.autoSleep||120;var s=_t._first;if((!s||!s._ts)&&Rn.autoSleep&&bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||bn.sleep()}}},e}(ea);Pn(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var M1=function(e,t,n,r,s,o,a){var l=new _n(this._pt,e,t,0,1,Ug,null,s),c=0,u=0,h,f,d,g,_,m,p,T;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Jo(r)),o&&(T=[n,r],o(T,e,t),n=T[0],r=T[1]),f=n.match(Yc)||[];h=Yc.exec(r);)g=h[0],_=r.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Is(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Yc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(eg.test(r)||p)&&(l.e=0),this._pt=l,l},mf=function(e,t,n,r,s,o,a,l,c,u){Tt(r)&&(r=r(s||0,e,o));var h=e[t],f=n!=="get"?n:Tt(h)?c?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Tt(h)?c?A1:Ig:gf,g;if(Ft(r)&&(~r.indexOf("random(")&&(r=Jo(r)),r.charAt(1)==="="&&(g=Is(f,r)+(Kt(f)||0),(g||g===0)&&(r=g))),!u||f!==r||uh)return!isNaN(f*r)&&r!==""?(g=new _n(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?R1:Ng,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&hf(t,r),M1.call(this,e,t,f,r,d,l||Rn.stringFilter,c))},S1=function(e,t,n,r,s){if(Tt(e)&&(e=Lo(e,s,t,n,r)),!vi(e)||e.style&&e.nodeType||Jt(e)||J_(e))return Ft(e)?Lo(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Lo(e[a],s,t,n,r);return o},Pg=function(e,t,n,r,s,o){var a,l,c,u;if(En[e]&&(a=new En[e]).init(s,a.rawVars?t[e]:S1(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new _n(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ts))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},sr,uh,_f=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,T=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!af,v=e.timeline,b,P,C,w,y,M,D,V,k,O,B,F,X;if(v&&(!f||!s)&&(s="none"),e._ease=Yr(s,Xs.ease),e._yEase=h?Ag(Yr(h===!0?s:h,Xs.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!r.runBackwards,!v||f&&!r.stagger){if(V=m[0]?Wr(m[0]).harness:0,F=V&&r[V.prop],b=Sl(r,ff),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?il:$w),_._lazy=0),o){if(mr(e._startAt=Rt.set(m,Pn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&pn(l),startAt:null,delay:0,onUpdate:c&&function(){return wn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt||!a&&!d)&&e._startAt.revert(il),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),C=Pn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&pn(l),immediateRender:a,stagger:0,parent:p},b),F&&(C[V.prop]=F),mr(e._startAt=Rt.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt?e._startAt.revert(il):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,$t,$t);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&pn(l)||l&&!g,P=0;P<m.length;P++){if(y=m[P],D=y._gsap||pf(m)[P]._gsap,e._ptLookup[P]=O={},rh[D.id]&&hr.length&&Ml(),B=T===m?P:T.indexOf(y),V&&(k=new V).init(y,F||b,e,B,T)!==!1&&(e._pt=w=new _n(e._pt,y,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(H){O[H]=w}),k.priority&&(M=1)),!V||F)for(C in b)En[C]&&(k=Pg(C,b,e,B,y,T))?k.priority&&(M=1):O[C]=w=mf.call(e,y,C,"get",b[C],B,T,0,r.stringFilter);e._op&&e._op[P]&&e.kill(y,e._op[P]),x&&e._pt&&(sr=e,_t.killTweensOf(y,O,e.globalTime(t)),X=!e.parent,sr=0),e._pt&&l&&(rh[D.id]=1)}M&&Og(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&v.render(pi,!0,!0)},T1=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return uh=1,e.vars[t]="+=0",_f(e,a),uh=0,l?$o(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Et(n)+Kt(h.e)),h.b&&(h.b=u.s+Kt(h.b))},E1=function(e,t){var n=e[0]?Wr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Ys({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},b1=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Jt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Lo=function(e,t,n,r,s){return Tt(e)?e.call(t,n,r,s):Ft(e)&&~e.indexOf("random(")?Jo(e):e},Dg=df+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Lg={};mn(Dg+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Lg[i]=1});var Rt=function(i){$_(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Po(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,T=r.parent||_t,x=(Jt(n)||J_(n)?Vi(n[0]):"length"in r)?[n]:Bn(n),v,b,P,C,w,y,M,D;if(a._targets=x.length?pf(x):$o("GSAP target "+n+" not found. https://gsap.com",!Rn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Wa(c)||Wa(u)){if(r=a.vars,v=a.timeline=new on({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:x}),v.kill(),v.parent=v._dp=Ii(a),v._start=0,f||Wa(c)||Wa(u)){if(C=x.length,M=f&&_g(f),vi(f))for(w in f)~Dg.indexOf(w)&&(D||(D={}),D[w]=f[w]);for(b=0;b<C;b++)P=Sl(r,Lg),P.stagger=0,p&&(P.yoyoEase=p),D&&Ys(P,D),y=x[b],P.duration=+Lo(c,Ii(a),b,y,x),P.delay=(+Lo(u,Ii(a),b,y,x)||0)-a._delay,!f&&C===1&&P.delay&&(a._delay=u=P.delay,a._start+=u,P.delay=0),v.to(y,P,M?M(b,y,x):0),v._ease=Ze.none;v.duration()?c=u=0:a.timeline=0}else if(g){Po(Pn(v.vars.defaults,{ease:"none"})),v._ease=Yr(g.ease||r.ease||"none");var V=0,k,O,B;if(Jt(g))g.forEach(function(F){return v.to(x,F,">")}),v.duration();else{P={};for(w in g)w==="ease"||w==="easeEach"||b1(w,g[w],P,g.easeEach);for(w in P)for(k=P[w].sort(function(F,X){return F.t-X.t}),V=0,b=0;b<k.length;b++)O=k[b],B={ease:O.e,duration:(O.t-(b?k[b-1].t:0))/100*c},B[w]=O.v,v.to(x,B,V),V+=B.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!af&&(sr=Ii(a),_t.killTweensOf(x),sr=0),ai(T,Ii(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!g&&a._start===Ct(T._time)&&pn(h)&&n1(Ii(a))&&T.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),m&&fg(Ii(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-$t&&!u?l:r<$t?0:r,f,d,g,_,m,p,T,x,v;if(!c)r1(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=Ct(h%_),h===l?(g=this._repeat,f=c):(m=Ct(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,f=c-f),m=qs(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(x&&this._yEase&&wg(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ct(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(dg(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(v||this._ease)(f/c),this._from&&(this.ratio=T=1-T),f&&!a&&!s&&!g&&(wn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(T,d.d),d=d._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&sh(this,r,s,o),wn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&wn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&sh(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&mr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(wn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Qo||bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||_f(this,c),u=this._ease(c/this._dur),T1(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Wl(this,0),this.parent||ug(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?go(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Vt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,sr&&sr.vars.overwrite!==!0)._first||go(this),this.parent&&o!==this.timeline.totalDuration()&&js(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Bn(r):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&e1(a,l))return s==="all"&&(this._pt=0),go(this);for(h=this._op=this._op||[],s!=="all"&&(Ft(s)&&(_={},mn(s,function(T){return _[T]=1}),s=_),s=E1(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Vl(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&go(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Do(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Do(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return _t.killTweensOf(r,s,o)},e}(ea);Pn(Rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mn("staggerTo,staggerFrom,staggerFromTo",function(i){Rt[i]=function(){var e=new on,t=ah.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var gf=function(e,t,n){return e[t]=n},Ig=function(e,t,n){return e[t](n)},A1=function(e,t,n,r){return e[t](r.fp,n)},w1=function(e,t,n){return e.setAttribute(t,n)},vf=function(e,t){return Tt(e[t])?Ig:lf(e[t])&&e.setAttribute?w1:gf},Ng=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},R1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ug=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},xf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},C1=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},P1=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Vl(this,t,"_pt"):t.dep||(n=1),t=r;return!n},D1=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Og=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},_n=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Ng,this.d=l||this,this.set=c||gf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=D1,this.m=n,this.mt=s,this.tween=r},i}();mn(df+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return ff[i]=1});Cn.TweenMax=Cn.TweenLite=Rt;Cn.TimelineLite=Cn.TimelineMax=on;_t=new on({sortChildren:!1,defaults:Xs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Rn.stringFilter=bg;var qr=[],sl={},L1=[],Vp=0,I1=0,Zc=function(e){return(sl[e]||L1).map(function(t){return t()})},hh=function(){var e=Date.now(),t=[];e-Vp>2&&(Zc("matchMediaInit"),qr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=ni.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Zc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Vp=e,Zc("matchMedia"))},Fg=function(){function i(t,n){this.selector=n&&lh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=I1++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Tt(n)&&(s=r,r=n,n=Tt);var o=this,a=function(){var c=mt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=lh(s)),mt=o,h=r.apply(o,arguments),Tt(h)&&o._r.push(h),mt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Tt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=mt;mt=null,n(this),mt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Rt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof on?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Rt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=qr.length;o--;)qr[o].id===this.id&&qr.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),N1=function(){function i(t){this.contexts=[],this.scope=t,mt&&mt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){vi(n)||(n={matches:n});var o=new Fg(0,s||this.scope),a=o.conditions={},l,c,u;mt&&!o.selector&&(o.selector=mt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=ni.matchMedia(n[c]),l&&(qr.indexOf(o)<0&&qr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(hh):l.addEventListener("change",hh)));return u&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),El={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Sg(r)})},timeline:function(e){return new on(e)},getTweensOf:function(e,t){return _t.getTweensOf(e,t)},getProperty:function(e,t,n,r){Ft(e)&&(e=Bn(e)[0]);var s=Wr(e||{}).get,o=n?cg:lg;return n==="native"&&(n=""),e&&(t?o((En[t]&&En[t].get||s)(e,t,n,r)):function(a,l,c){return o((En[a]&&En[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Bn(e),e.length>1){var r=e.map(function(u){return vn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=En[t],a=Wr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Ts._pt=0,h.init(e,n?u+n:u,Ts,0,[e]),h.render(1,h),Ts._pt&&xf(1,Ts)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=vn.to(e,Pn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return _t.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Yr(e.ease,Xs.ease)),Fp(Xs,e||{})},config:function(e){return Fp(Rn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!En[a]&&!Cn[a]&&$o(t+" effect requires "+a+" plugin.")}),qc[t]=function(a,l,c){return n(Bn(a),Pn(l||{},s),c)},o&&(on.prototype[t]=function(a,l,c){return this.add(qc[t](a,vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ze[e]=Yr(t)},parseEase:function(e,t){return arguments.length?Yr(e,t):Ze},getById:function(e){return _t.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new on(e),r,s;for(n.smoothChildTiming=pn(e.smoothChildTiming),_t.remove(n),n._dp=0,n._time=n._tTime=_t._time,r=_t._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Rt&&r.vars.onComplete===r._targets[0]))&&ai(n,r,r._start-r._delay),r=s;return ai(_t,n,0),n},context:function(e,t){return e?new Fg(e,t):mt},matchMedia:function(e){return new N1(e)},matchMediaRefresh:function(){return qr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||hh()},addEventListener:function(e,t){var n=sl[e]||(sl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=sl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:f1,wrapYoyo:d1,distribute:_g,random:vg,snap:gg,normalize:h1,getUnit:Kt,clamp:a1,splitColor:Tg,toArray:Bn,selector:lh,mapRange:yg,pipe:c1,unitize:u1,interpolate:p1,shuffle:mg},install:ig,effects:qc,ticker:bn,updateRoot:on.updateRoot,plugins:En,globalTimeline:_t,core:{PropTween:_n,globals:rg,Tween:Rt,Timeline:on,Animation:ea,getCache:Wr,_removeLinkedListItem:Vl,reverting:function(){return Vt},context:function(e){return e&&mt&&(mt.data.push(e),e._ctx=mt),mt},suppressOverwrites:function(e){return af=e}}};mn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return El[i]=Rt[i]});bn.add(on.updateRoot);Ts=El.to({},{duration:0});var U1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},O1=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=U1(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Jc=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Ft(s)&&(l={},mn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}O1(a,s)}}}},vn=El.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Vt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Jc("roundProps",ch),Jc("modifiers"),Jc("snap",gg))||El;Rt.version=on.version=vn.version="3.12.7";ng=1;cf()&&Ks();Ze.Power0;Ze.Power1;Ze.Power2;Ze.Power3;Ze.Power4;Ze.Linear;Ze.Quad;Ze.Cubic;Ze.Quart;Ze.Quint;Ze.Strong;Ze.Elastic;Ze.Back;Ze.SteppedEase;Ze.Bounce;Ze.Sine;Ze.Expo;Ze.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gp,or,Ns,yf,Hr,Wp,Mf,F1=function(){return typeof window<"u"},Gi={},Fr=180/Math.PI,Us=Math.PI/180,gs=Math.atan2,Xp=1e8,Sf=/([A-Z])/g,B1=/(left|right|width|margin|padding|x)/i,k1=/[\s,\(]\S/,hi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},z1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},H1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},V1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Bg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},kg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},G1=function(e,t,n){return e.style[t]=n},W1=function(e,t,n){return e.style.setProperty(t,n)},X1=function(e,t,n){return e._gsap[t]=n},Y1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},q1=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},j1=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},gt="transform",gn=gt+"Origin",K1=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Gi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=hi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ni(r,a)}):this.tfm[e]=o.x?o[e]:Ni(r,e),e===gn&&(this.tfm.zOrigin=o.zOrigin);else return hi.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(gt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(gn,t,"")),e=gt}(s||t)&&this.props.push(e,t,s[e])},zg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},$1=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Sf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Mf(),(!s||!s.isStart)&&!n[gt]&&(zg(n),r.zOrigin&&n[gn]&&(n[gn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Hg=function(e,t){var n={target:e,props:[],revert:$1,save:K1};return e._gsap||vn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Vg,dh=function(e,t){var n=or.createElementNS?or.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):or.createElement(e);return n&&n.style?n:or.createElement(e)},mi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Sf,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,$s(t)||t,1)||""},Yp="O,Moz,ms,Ms,Webkit".split(","),$s=function(e,t,n){var r=t||Hr,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Yp[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Yp[o]:"")+e},ph=function(){F1()&&window.document&&(Gp=window,or=Gp.document,Ns=or.documentElement,Hr=dh("div")||{style:{}},dh("div"),gt=$s(gt),gn=gt+"Origin",Hr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Vg=!!$s("perspective"),Mf=vn.core.reverting,yf=1)},qp=function(e){var t=e.ownerSVGElement,n=dh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Ns.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Ns.removeChild(n),s},jp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Gg=function(e){var t,n;try{t=e.getBBox()}catch{t=qp(e),n=1}return t&&(t.width||t.height)||n||(t=qp(e)),t&&!t.width&&!t.x&&!t.y?{x:+jp(e,["x","cx","x1"])||0,y:+jp(e,["y","cy","y1"])||0,width:0,height:0}:t},Wg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Gg(e))},$r=function(e,t){if(t){var n=e.style,r;t in Gi&&t!==gn&&(t=gt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Sf,"-$1").toLowerCase())):n.removeAttribute(t)}},ar=function(e,t,n,r,s,o){var a=new _n(e._pt,t,n,0,1,o?kg:Bg);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Kp={deg:1,rad:1,turn:1},Z1={grid:1,flex:1},_r=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Hr.style,l=B1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||Kp[r]||Kp[o])return s;if(o!=="px"&&!f&&(s=i(e,t,n,"px")),p=e.getCTM&&Wg(e),(d||o==="%")&&(Gi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Et(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===or||!_.appendChild)&&(_=or.body),m=_._gsap,m&&d&&m.width&&l&&m.time===bn.time&&!m.uncache)return Et(s/m.width*h);if(d&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=h+r,g=e[u],T?e.style[t]=T:$r(e,t)}else(d||o==="%")&&!Z1[mi(_,"display")]&&(a.position=mi(e,"position")),_===e&&(a.position="static"),_.appendChild(Hr),g=Hr[u],_.removeChild(Hr),a.position="absolute";return l&&d&&(m=Wr(_),m.time=bn.time,m.width=_[u]),Et(f?g*s/h:g&&s?h/g*s:0)},Ni=function(e,t,n,r){var s;return yf||ph(),t in hi&&t!=="transform"&&(t=hi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Gi[t]&&t!=="transform"?(s=na(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Al(mi(e,gn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=bl[t]&&bl[t](e,t,n)||mi(e,t)||og(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?_r(e,t,s,n)+n:s},J1=function(e,t,n,r){if(!n||n==="none"){var s=$s(t,e,1),o=s&&mi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=mi(e,"borderTopColor"))}var a=new _n(this._pt,e.style,t,0,1,Ug),l=0,c=0,u,h,f,d,g,_,m,p,T,x,v,b;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=mi(e,t)||r,_?e.style[t]=_:$r(e,t)),u=[n,r],bg(u),n=u[0],r=u[1],f=n.match(Ss)||[],b=r.match(Ss)||[],b.length){for(;h=Ss.exec(r);)m=h[0],T=r.substring(l,h.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Is(d,m)+v),p=parseFloat(m),x=m.substr((p+"").length),l=Ss.lastIndex-x.length,x||(x=x||Rn.units[t]||v,l===r.length&&(r+=x,a.e+=x)),v!==x&&(d=_r(e,t,_,x)||0),a._pt={_next:a._pt,p:T||c===1?T:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?kg:Bg;return eg.test(r)&&(a.e=0),this._pt=a,a},$p={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Q1=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=$p[n]||n,t[1]=$p[r]||r,t.join(" ")},eR=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Gi[a]&&(l=1,a=a==="transformOrigin"?gn:gt),$r(n,a);l&&($r(n,gt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",na(n,1),o.uncache=1,zg(r)))}},bl={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new _n(e._pt,t,n,0,0,eR);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},ta=[1,0,0,1,0,0],Xg={},Yg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Zp=function(e){var t=mi(e,gt);return Yg(t)?ta:t.substr(7).match(Q_).map(Et)},Tf=function(e,t){var n=e._gsap||Wr(e),r=e.style,s=Zp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ta:s):(s===ta&&!e.offsetParent&&e!==Ns&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ns.appendChild(e)),s=Zp(e),l?r.display=l:$r(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ns.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},mh=function(e,t,n,r,s,o){var a=e._gsap,l=s||Tf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],T=l[5],x=t.split(" "),v=parseFloat(x[0])||0,b=parseFloat(x[1])||0,P,C,w,y;n?l!==ta&&(C=d*m-g*_)&&(w=v*(m/C)+b*(-_/C)+(_*T-m*p)/C,y=v*(-g/C)+b*(d/C)-(d*T-g*p)/C,v=w,b=y):(P=Gg(e),v=P.x+(~x[0].indexOf("%")?v/100*P.width:v),b=P.y+(~(x[1]||x[0]).indexOf("%")?b/100*P.height:b)),r||r!==!1&&a.smooth?(p=v-c,T=b-u,a.xOffset=h+(p*d+T*_)-p,a.yOffset=f+(p*g+T*m)-T):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[gn]="0px 0px",o&&(ar(o,a,"xOrigin",c,v),ar(o,a,"yOrigin",u,b),ar(o,a,"xOffset",h,a.xOffset),ar(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},na=function(e,t){var n=e._gsap||new Cg(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=mi(e,gn)||"0",u,h,f,d,g,_,m,p,T,x,v,b,P,C,w,y,M,D,V,k,O,B,F,X,H,le,he,Se,Ee,ze,te,ue;return u=h=f=_=m=p=T=x=v=0,d=g=1,n.svg=!!(e.getCTM&&Wg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[gt]!=="none"?l[gt]:"")),r.scale=r.rotate=r.translate="none"),C=Tf(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),mh(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,C)),b=n.xOrigin||0,P=n.yOrigin||0,C!==ta&&(D=C[0],V=C[1],k=C[2],O=C[3],u=B=C[4],h=F=C[5],C.length===6?(d=Math.sqrt(D*D+V*V),g=Math.sqrt(O*O+k*k),_=D||V?gs(V,D)*Fr:0,T=k||O?gs(k,O)*Fr+_:0,T&&(g*=Math.abs(Math.cos(T*Us))),n.svg&&(u-=b-(b*D+P*k),h-=P-(b*V+P*O))):(ue=C[6],ze=C[7],he=C[8],Se=C[9],Ee=C[10],te=C[11],u=C[12],h=C[13],f=C[14],w=gs(ue,Ee),m=w*Fr,w&&(y=Math.cos(-w),M=Math.sin(-w),X=B*y+he*M,H=F*y+Se*M,le=ue*y+Ee*M,he=B*-M+he*y,Se=F*-M+Se*y,Ee=ue*-M+Ee*y,te=ze*-M+te*y,B=X,F=H,ue=le),w=gs(-k,Ee),p=w*Fr,w&&(y=Math.cos(-w),M=Math.sin(-w),X=D*y-he*M,H=V*y-Se*M,le=k*y-Ee*M,te=O*M+te*y,D=X,V=H,k=le),w=gs(V,D),_=w*Fr,w&&(y=Math.cos(w),M=Math.sin(w),X=D*y+V*M,H=B*y+F*M,V=V*y-D*M,F=F*y-B*M,D=X,B=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Et(Math.sqrt(D*D+V*V+k*k)),g=Et(Math.sqrt(F*F+ue*ue)),w=gs(B,F),T=Math.abs(w)>2e-4?w*Fr:0,v=te?1/(te<0?-te:te):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Yg(mi(e,gt)),X&&e.setAttribute("transform",X))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(d*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Et(d),n.scaleY=Et(g),n.rotation=Et(_)+a,n.rotationX=Et(m)+a,n.rotationY=Et(p)+a,n.skewX=T+a,n.skewY=x+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[gn]=Al(c)),n.xOffset=n.yOffset=0,n.force3D=Rn.force3D,n.renderTransform=n.svg?nR:Vg?qg:tR,n.uncache=0,n},Al=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qc=function(e,t,n){var r=Kt(t);return Et(parseFloat(t)+parseFloat(_r(e,"x",n+"px",r)))+r},tR=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,qg(e,t)},Ir="0deg",fo="0px",Nr=") ",qg=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,T=n.target,x=n.zOrigin,v="",b=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==Ir||u!==Ir)){var P=parseFloat(u)*Us,C=Math.sin(P),w=Math.cos(P),y;P=parseFloat(h)*Us,y=Math.cos(P),o=Qc(T,o,C*y*-x),a=Qc(T,a,-Math.sin(P)*-x),l=Qc(T,l,w*y*-x+x)}m!==fo&&(v+="perspective("+m+Nr),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(b||o!==fo||a!==fo||l!==fo)&&(v+=l!==fo||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Nr),c!==Ir&&(v+="rotate("+c+Nr),u!==Ir&&(v+="rotateY("+u+Nr),h!==Ir&&(v+="rotateX("+h+Nr),(f!==Ir||d!==Ir)&&(v+="skew("+f+", "+d+Nr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Nr),T.style[gt]=v||"translate(0, 0)"},nR=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,T=n.forceCSS,x=parseFloat(o),v=parseFloat(a),b,P,C,w,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Us,c*=Us,b=Math.cos(l)*h,P=Math.sin(l)*h,C=Math.sin(l-c)*-f,w=Math.cos(l-c)*f,c&&(u*=Us,y=Math.tan(c-u),y=Math.sqrt(1+y*y),C*=y,w*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),b*=y,P*=y)),b=Et(b),P=Et(P),C=Et(C),w=Et(w)):(b=h,w=f,P=C=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=_r(d,"x",o,"px"),v=_r(d,"y",a,"px")),(g||_||m||p)&&(x=Et(x+g-(g*b+_*C)+m),v=Et(v+_-(g*P+_*w)+p)),(r||s)&&(y=d.getBBox(),x=Et(x+r/100*y.width),v=Et(v+s/100*y.height)),y="matrix("+b+","+P+","+C+","+w+","+x+","+v+")",d.setAttribute("transform",y),T&&(d.style[gt]=y)},iR=function(e,t,n,r,s){var o=360,a=Ft(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Fr:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),h==="cw"&&c<0?c=(c+o*Xp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Xp)%o-~~(c/o)*o)),e._pt=f=new _n(e._pt,t,n,r,c,z1),f.e=u,f.u="deg",e._props.push(n),f},Jp=function(e,t){for(var n in t)e[n]=t[n];return e},rR=function(e,t,n){var r=Jp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[gt]=t,a=na(n,1),$r(n,gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[gt],o[gt]=t,a=na(n,1),o[gt]=c);for(l in Gi)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Kt(c),g=Kt(u),h=d!==g?_r(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new _n(e._pt,a,l,h,f-h,fh),e._pt.u=g||0,e._props.push(l));Jp(a,r)};mn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});bl[e>1?"border"+i:i]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Ni(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var jg={name:"css",register:ph,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,T,x,v,b,P,C,w;yf||ph(),this.styles=this.styles||Hg(e),w=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(En[_]&&Pg(_,t,n,r,e,s)))){if(d=typeof u,g=bl[_],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Jo(u)),g)g(this,e,_,u,n)&&(C=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",fr.lastIndex=0,fr.test(c)||(m=Kt(c),p=Kt(u)),p?m!==p&&(c=_r(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),w.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],Ft(c)&&~c.indexOf("random(")&&(c=Jo(c)),Kt(c+"")||c==="auto"||(c+=Rn.units[_]||Kt(Ni(e,_))||""),(c+"").charAt(1)==="="&&(c=Ni(e,_))):c=Ni(e,_),f=parseFloat(c),T=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),h=parseFloat(u),_ in hi&&(_==="autoAlpha"&&(f===1&&Ni(e,"visibility")==="hidden"&&h&&(f=0),w.push("visibility",0,a.visibility),ar(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=hi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Gi,x){if(this.styles.save(_),v||(b=e._gsap,b.renderTransform&&!t.parseTransform||na(e,t.parseTransform),P=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new _n(this._pt,a,gt,0,1,b.renderTransform,b,0,-1),v.dep=1),_==="scale")this._pt=new _n(this._pt,b,"scaleY",b.scaleY,(T?Is(b.scaleY,T+h):h)-b.scaleY||0,fh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){w.push(gn,0,a[gn]),u=Q1(u),b.svg?mh(e,u,0,P,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&ar(this,b,"zOrigin",b.zOrigin,p),ar(this,a,_,Al(c),Al(u)));continue}else if(_==="svgOrigin"){mh(e,u,1,P,0,this);continue}else if(_ in Xg){iR(this,b,_,f,T?Is(f,T+u):u);continue}else if(_==="smoothOrigin"){ar(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){rR(this,u,e);continue}}else _ in a||(_=$s(_)||_);if(x||(h||h===0)&&(f||f===0)&&!k1.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=Kt(u)||(_ in Rn.units?Rn.units[_]:m),m!==p&&(f=_r(e,_,c,p)),this._pt=new _n(this._pt,x?b:a,_,f,(T?Is(f,T+h):h)-f,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?V1:fh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=H1);else if(_ in a)J1.call(this,e,_,c,T?T+u:u);else if(_ in e)this.add(e,_,c||e[_],T?T+u:u,r,s);else if(_!=="parseTransform"){hf(_,u);continue}x||(_ in a?w.push(_,0,a[_]):typeof e[_]=="function"?w.push(_,2,e[_]()):w.push(_,1,c||e[_])),o.push(_)}}C&&Og(this)},render:function(e,t){if(t.tween._time||!Mf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ni,aliases:hi,getSetter:function(e,t,n){var r=hi[t];return r&&r.indexOf(",")<0&&(t=r),t in Gi&&t!==gn&&(e._gsap.x||Ni(e,"x"))?n&&Wp===n?t==="scale"?Y1:X1:(Wp=n||{})&&(t==="scale"?q1:j1):e.style&&!lf(e.style[t])?G1:~t.indexOf("-")?W1:vf(e,t)},core:{_removeProperty:$r,_getMatrix:Tf}};vn.utils.checkPrefix=$s;vn.core.getStyleSaver=Hg;(function(i,e,t,n){var r=mn(i+","+e+","+t,function(s){Gi[s]=1});mn(e,function(s){Rn.units[s]="deg",Xg[s]=1}),hi[r[13]]=i+","+e,mn(n,function(s){var o=s.split(":");hi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Rn.units[i]="px"});vn.registerPlugin(jg);var xs=vn.registerPlugin(jg)||vn;xs.core.Tween;const sR="/christmas-card/static/sky-Byo0PJ6K.hdr",oR="/christmas-card/static/scene-BppKSM4y.glb",aR="/christmas-card/static/Water_1_M_Normal-DV-NIPW-.jpg",lR="/christmas-card/static/Water_2_M_Normal-RY8KFRSX.jpg";function cR(i){return"/christmas-card/"+i.replace(/^\//,"")}const uR={style:{padding:"100px 50px","font-size":"50px",color:"#fff"}},Xa=3,hR={__name:"App",setup(i){const e=new oM,t=new kt(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.set(-3.23,3,4.06),t.updateProjectionMatrix();const n=new YA({antialias:!0});n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(n.domElement),n.toneMapping=s_,n.outputColorSpace=bt,n.toneMappingExposure=.5,n.shadowMap.enabled=!0;const r=new jA(t,n.domElement);r.enableDamping=!0,r.target.set(-8,2,0);const s=new Vw;s.setDecoderPath(cR("/draco/"));const o=new aw;o.setDRACOLoader(s),new Ww().load(sR,O=>{O.mapping=dl,e.background=O,e.environment=O}),o.load(oR,O=>{const B=O.scene;B.traverse(F=>{F.name==="Plane"&&(F.visible=!1),F.isMesh&&(F.castShadow=!0,F.receiveShadow=!0)}),e.add(B)});const l=new Jh,c=new Zh(300,32),u=new Hl(c,{textureWidth:512,textureHeight:512,color:12303359,flowDirection:new xe(1,1),scale:100,normalMap0:l.load(aR),normalMap1:l.load(lR)});u.rotation.x=-Math.PI/2,u.position.y=-.4,e.add(u);const h=new H_(16777215,1);h.position.set(0,50,0),e.add(h);const f=new Zu(16777215,50);f.position.set(.1,2.4,0),f.castShadow=!0,e.add(f);const d=new ir;d.position.set(-8,2.5,-1.5);const g=[];for(let O=0;O<3;O++){const B=new xl(.2,32,32),F=new Yo({color:16777215,emissive:16777215,emissiveIntensity:10}),X=new zt(B,F);g.push(X),X.position.set(Xa*Math.cos(O*2*Math.PI/3),Math.cos(O*2*Math.PI/3),Xa*Math.sin(O*2*Math.PI/3));const H=new Zu(16777215,50);X.add(H),d.add(X)}e.add(d);let _={angle:0};xs.to(_,{angle:Math.PI*2,duration:10,repeat:-1,ease:"linear",onUpdate:()=>{d.rotation.y=_.angle,g.forEach((O,B)=>{O.position.set(Xa*Math.cos(B*2*Math.PI/3),Math.cos(B*2*Math.PI/3+_.angle*5),Xa*Math.sin(B*2*Math.PI/3))})}});function m(){requestAnimationFrame(m),n.render(e,t),r.update()}m();let p=xs.timeline(),T=xs.timeline();function x(O,B){p.to(t.position,{x:O.x,y:O.y,z:O.z,duration:1,ease:"power2.inOut"}),T.to(r.target,{x:B.x,y:B.y,z:B.z,duration:1,ease:"power2.inOut"})}const v=[{text:"圣诞快乐",callback:()=>{x(new I(-3.23,3,4.06),new I(-8,2,0))}},{text:"感谢在这么大的世界遇见你",callback:()=>{x(new I(7,0,23),new I(0,0,0))}},{text:"愿与你探寻世界的每一个角落",callback:()=>{x(new I(10,3,0),new I(5,2,0))}},{text:"愿将天上的星星送给你",callback:()=>{x(new I(7,0,23),new I(0,0,0)),V()}},{text:"愿你健康快乐每一天",callback:()=>{x(new I(-20,1.3,6.6),new I(5,2,0))}}],b=Nf(0),P=Nf(!1);window.addEventListener("wheel",O=>{P.value||(P.value=!0,O.deltaY>0&&(b.value++,b.value>v.length-1&&(b.value=0,k())),v[b.value].callback(),setTimeout(()=>{P.value=!1},1e3))},!1);const C=new D_(new xl(.1,32,32),new Yo({color:16777215,emissive:16777215,emissiveIntensity:10}),100);let w=[],y=[];for(let O=0;O<100;O++){let B=Math.random()*100-50,F=Math.random()*100-50,X=Math.random()*100-50;w.push(new I(B,F,X));let H=new Ne;H.setPosition(B,F,X),C.setMatrixAt(O,H)}e.add(C);let M=new PM;M.moveTo(25,25),M.bezierCurveTo(25,25,20,0,0,0),M.bezierCurveTo(-30,0,-30,35,-30,35),M.bezierCurveTo(-30,55,-10,77,25,95),M.bezierCurveTo(60,70,80,55,80,35),M.bezierCurveTo(80,35,80,0,50,0),M.bezierCurveTo(35,0,25,25,25,25);let D=new I(0,2,10);for(let O=0;O<100;O++){let B=M.getPoint(O/100);y.push(new I(B.x*.1+D.x,B.y*.1+D.y,D.z))}function V(){let O={time:0};xs.to(O,{time:1,duration:1,onUpdate:()=>{for(let B=0;B<100;B++){let F=w[B].x+(y[B].x-w[B].x)*O.time,X=w[B].y+(y[B].y-w[B].y)*O.time,H=w[B].z+(y[B].z-w[B].z)*O.time,le=new Ne;le.setPosition(F,X,H),C.setMatrixAt(B,le)}C.instanceMatrix.needsUpdate=!0}})}function k(){let O={time:0};xs.to(O,{time:1,duration:1,onUpdate:()=>{for(let B=0;B<100;B++){let F=y[B].x+(w[B].x-y[B].x)*O.time,X=y[B].y+(w[B].y-y[B].y)*O.time,H=y[B].z+(w[B].z-y[B].z)*O.time,le=new Ne;le.setPosition(F,X,H),C.setMatrixAt(B,le)}C.instanceMatrix.needsUpdate=!0}})}return function(){const O=document.createElement("a");return document.body.appendChild(O),O.style.display="none",function(F,X){const H=window.URL.createObjectURL(F);O.href=H,O.download=X,O.click()}}(),(O,B)=>(Wf(),Yf("div",{class:"scenes",style:Dl([{position:"fixed",left:"0",top:"0","z-index":"10","pointer-events":"none",transition:"all 1s"},{transform:`translate3d(0, ${-b.value*100}vh, 0)`}])},[(Wf(),Yf(ii,null,cv(v,(F,X)=>hl("div",{key:X,style:{width:"100vw",height:"100vh"}},[hl("h1",uR,am(F.text),1)])),64))],4))}};Tx(hR).mount("#app");
