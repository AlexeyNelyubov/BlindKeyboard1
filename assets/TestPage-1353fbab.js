import{u as y,r as o,w as N,o as m,c as v,a as n,t as _,b as T,d as S,e as w,f as O,g as C,h as $,i as P,j as k,F as U,k as M,n as E}from"./index-b9e8570c.js";const F={class:"test-timer"},V=n("span",null,"Время",-1),q={style:{"margin-left":"12px",width:"38px"}},B=n("span",null,":",-1),L={style:{width:"38px"}},j={__name:"Timer",props:{isNewTest:{type:Boolean,required:!0}},emits:{"change-time":s=>typeof s=="number"?!0:(console.warn("Invalid change-time event payload!"),!1)},setup(s,{emit:l}){const t=s,i=y(),e=o(0),a=o("00"),u=o("00");N(()=>t.isNewTest,()=>{t.isNewTest&&(e.value=0,a.value="00",u.value="00")});const r=()=>{i.isFinishTesting||setTimeout(()=>{e.value+=1,e.value<10?u.value="0"+e.value:e.value<60&&(u.value=e.value),e.value/60>=1&&(a.value="0"+Math.trunc(e.value/60),e.value-Math.trunc(e.value/60)*60<10?u.value="0"+(e.value-Math.trunc(e.value/60)*60):u.value=e.value-Math.trunc(e.value/60)*60),l("change-time",e.value),r()},1e3)};return r(),(c,d)=>(m(),v("div",F,[V,n("div",q,_(a.value),1),B,n("div",L,_(u.value),1)]))}};const z={class:"test-testing-params"},A=n("p",{class:"test-testing-params__item"},"Скорость",-1),D={class:"test-testing-params__item-value"},I=n("span",{style:{"font-size":"0.6em"}},"зн./мин",-1),R=n("p",{class:"test-testing-params__item"},"Точность",-1),X={class:"test-testing-params__item-value"},G=n("span",{style:{"font-size":"0.6em"}},"%",-1),H={__name:"TestingParams",props:{testingTime:{type:Number,required:!0},numderOfCheckedSymbols:{type:Number,required:!0},numberOfUnvalidSymbols:{type:Number,required:!0}},emits:["start-new-test"],setup(s,{emit:l}){const t=s,i=y(),e=T(()=>t.testingTime?Math.trunc(t.numderOfCheckedSymbols/t.testingTime*60):0),a=T(()=>t.numderOfCheckedSymbols?t.numberOfUnvalidSymbols?100-Math.trunc(t.numberOfUnvalidSymbols/(t.numberOfUnvalidSymbols+t.numderOfCheckedSymbols)*100):100:0);N([e,a],()=>{i.changeTestingParams(e.value,a.value)});const u=()=>{document.querySelector(".test-new-test-button").blur(),l("start-new-test")};return(r,c)=>(m(),v("div",z,[n("div",null,[A,n("p",D,[S(_(w(e))+" ",1),I]),R,n("p",X,[S(_(w(a))+" ",1),G])]),n("button",{class:"test-new-test-button",onClick:u},"Заново!")]))}},x="Земля — пятая по величине планета Солнечной системы и единственная, имеющая слой газов в атмосфере, гарантирующий условия для существования здесь жизни. Около 70% поверхности планеты покрыто водой в жидком состоянии, необходимым элементом для существования форм жизни.",J=async()=>{try{const s=await fetch("https://fish-text.ru/get?&tipe=sentence&number=1"),l=await s.json();return s.ok?l.text:(console.log(l),x)}catch(s){return console.error(s.message),x}};function K(s,l,t){O(()=>s.addEventListener(l,t)),C(()=>s.removeEventListener(l,t))}const Q={class:"test"},W={class:"test__main"},Y={class:"test__main-random-text"},ee={__name:"TestPage",setup(s){$(h=>({"637a180e":r.value}));const l=y(),t=P(),i=o(""),e=o(0),a=o(!0),u=o(0),r=o("#fff"),c=o(0),d=o(!0),g=async()=>{i.value=await J(),d.value=!0,e.value=0,a.value=!0,u.value=0,r.value="#fff",c.value=0,console.log("1")};return g(),K(document,"keypress",h=>{h.key===i.value[e.value]?(a.value=!0,e.value+=1,r.value="#fff",e.value===i.value.length&&(l.finishTesting(),t.push({name:"home"}))):(a.value=!1,u.value+=1,r.value="#ff0000")}),(h,b)=>(m(),v("div",Q,[k(j,{isNewTest:d.value,onChangeTime:b[0]||(b[0]=p=>{c.value=p,d.value=!1})},null,8,["isNewTest"]),n("main",W,[n("div",Y,[(m(!0),v(U,null,M(i.value,(p,f)=>(m(),v("span",{key:p.id,style:{"white-space":"pre-wrap"},class:E({validSymbol:a.value&&f===e.value,unvalidSymbol:!a.value&&f===e.value,uncheckedSymbol:f>e.value,checkedSymbol:f<e.value})},_(p),3))),128))]),k(H,{class:"test__main-params",testingTime:c.value,numderOfCheckedSymbols:e.value,numberOfUnvalidSymbols:u.value,onStartNewTest:g},null,8,["testingTime","numderOfCheckedSymbols","numberOfUnvalidSymbols"])])]))}};export{ee as default};