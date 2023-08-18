import{a as s,J as x,d as y,c6 as w,D as k,c7 as L,i as S,c as P,k as V,aA as j,l as r,c8 as z,y as p,n as B,q as d,c9 as F,p as I,B as N}from"./index-4b809c19.js";import{F as q,_ as A}from"./index-e9441ad8.js";import{I as H,j as M}from"./index-2eaeb946.js";import"./useFlexGapSupport-86488050.js";var U={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};const C=U;function f(a){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},e=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(n).filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable}))),e.forEach(function(c){D(a,c,n[c])})}return a}function D(a,t,n){return t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}var m=function(t,n){var e=f({},t,n.attrs);return s(x,f({},e,{icon:C}),null)};m.displayName="LockOutlined";m.inheritAttrs=!1;const E=m,R={class:"h-100vh flex justify-center items-center bg-#001529"},T={class:"w-300px h-200px p-20px rounded-10px bg-#fff"},W=y({__name:"Login",setup(a){const t=w(),n=k();L();const e=S({username:"",password:""}),c=async u=>{console.log("Success:",u);const o=await z(u);console.log(o),o.meta.status===200?(p.success(o.meta.msg),localStorage.setItem("token",o.data.token),localStorage.setItem("username",o.data.username),t.commit("setToken",o.data.token),n.push({name:"home"})):p.error(o.meta.msg)},_=u=>{console.log("Failed:",u)},g=P(()=>!(e.username&&e.password));return(u,o)=>{const v=H,l=A,h=M,b=N,O=q;return B(),V("div",R,[j("div",T,[s(O,{class:"text-center mt-20px mx",model:e,name:"horizontal_login",layout:"horizontal",autocomplete:"off",onFinish:c,onFinishFailed:_},{default:r(()=>[s(l,{name:"username",rules:[{required:!0,message:"Please input your username!"}]},{default:r(()=>[s(v,{value:e.username,"onUpdate:value":o[0]||(o[0]=i=>e.username=i)},{prefix:r(()=>[s(d(F),{class:"site-form-item-icon"})]),_:1},8,["value"])]),_:1}),s(l,{name:"password",rules:[{required:!0,message:"Please input your password!"}]},{default:r(()=>[s(h,{value:e.password,"onUpdate:value":o[1]||(o[1]=i=>e.password=i)},{prefix:r(()=>[s(d(E),{class:"site-form-item-icon"})]),_:1},8,["value"])]),_:1}),s(l,null,{default:r(()=>[s(b,{disabled:g.value,type:"primary","html-type":"submit"},{default:r(()=>[I("Log in")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["model"])])])}}});export{W as default};
