import{r as l,w as g,o as k,a as v,c as _,b as r,t as f,u as N,F as O,d as C,n as $,e as U,f as T,g as w,h as S,i as q,j as b}from"./index-026bc076.js";const I={class:"test-timer"},F=r("span",null,"Время",-1),M={style:{"margin-left":"1rem",width:"3rem"}},V=r("span",null,":",-1),P={style:{width:"3rem"}},j={__name:"Timer",props:{isNewTest:{type:Boolean,required:!0}},emits:{"change-time":s=>typeof s=="number"?!0:(console.warn("Invalid change-time event payload!"),!1)},setup(s,{emit:a}){const t=s,e=l(0),n=l("00"),u=l("00");g(()=>t.isNewTest,()=>{t.isNewTest&&(e.value=0,n.value="00",u.value="00")});const o=setInterval(()=>{e.value+=1,e.value<10?u.value="0"+e.value:e.value<60&&(u.value=e.value),e.value/60>=1&&(n.value="0"+Math.trunc(e.value/60),e.value-Math.trunc(e.value/60)*60<10?u.value="0"+(e.value-Math.trunc(e.value/60)*60):u.value=e.value-Math.trunc(e.value/60)*60),a("change-time",e.value)},1e3);return k(()=>clearInterval(o)),(i,y)=>(v(),_("div",I,[F,r("div",M,f(n.value),1),V,r("div",P,f(u.value),1)]))}};const B={class:"test-main-random-text"},E={__name:"Test",props:{randomText:{type:String,required:!0}},emits:{"check-one-symbol":(s,a)=>typeof s=="number"&&typeof a=="number"?!0:(console.warn("Invalid change-time event payload!"),!1),"finish-test":null},setup(s,{emit:a}){const t=s;U(i=>({ba988150:o.value}));const e=l(0),n=l(!0),u=l(0),o=l("#fff");return g(()=>t.randomText,()=>{e.value=0,n.value=!0,u.value=0,o.value="#fff"}),N(document,"keypress",i=>{i.key===t.randomText[e.value]?(n.value=!0,e.value+=1,o.value="#fff",e.value===t.randomText.length&&a("finish-test")):(n.value=!1,u.value+=1,o.value="#ff0000"),a("check-one-symbol",e.value,u.value)}),(i,y)=>(v(),_("div",B,[(v(!0),_(O,null,C(t.randomText,(d,c)=>(v(),_("span",{key:d.id,style:{"white-space":"pre-wrap"},class:$({validSymbol:n.value&&c===e.value,unvalidSymbol:!n.value&&c===e.value,uncheckedSymbol:c>e.value,checkedSymbol:c<e.value})},f(d),3))),128))]))}};const z={class:"test-main-testing-params"},L=r("p",{class:"test-main-testing-params__item"},"Скорость",-1),A={class:"test-main-testing-params__item-value"},D=r("span",{style:{"font-size":"0.6em"}},"зн./мин",-1),R=r("p",{class:"test-main-testing-params__item"},"Точность",-1),X={class:"test-main-testing-params__item-value"},G=r("span",{style:{"font-size":"0.6em"}},"%",-1),H={__name:"TestingParams",props:{testingTime:{type:Number,required:!0},numderOfCheckedSymbols:{type:Number,required:!0},numberOfUnvalidSymbols:{type:Number,required:!0}},emits:{"start-new-test":null,"change-testing-params":(s,a)=>typeof s=="number"&&typeof a=="number"?!0:(console.warn("Invalid change-time event payload!"),!1)},setup(s,{emit:a}){const t=s,e=T(()=>t.testingTime?Math.trunc(t.numderOfCheckedSymbols/t.testingTime*60):0),n=T(()=>t.numderOfCheckedSymbols?t.numberOfUnvalidSymbols?100-Math.trunc(t.numberOfUnvalidSymbols/(t.numberOfUnvalidSymbols+t.numderOfCheckedSymbols)*100):100:0);g([e,n],()=>{a("change-testing-params",e.value,n.value)});const u=()=>{document.querySelector(".test-main-new-test-button").blur(),a("start-new-test")};return(o,i)=>(v(),_("div",z,[r("div",null,[L,r("p",A,[w(f(S(e))+" ",1),D]),R,r("p",X,[w(f(S(n))+" ",1),G])]),r("button",{class:"test-main-new-test-button",onClick:u}," Заново! ")]))}},x="Земля - пятая по величине планета Солнечной системы и единственная, имеющая слой газов в атмосфере, гарантирующий условия для существования здесь жизни. Около 70% поверхности планеты покрыто водой в жидком состоянии, необходимым элементом для существования форм жизни.",J=async()=>{try{const s=await fetch("https://fish-text.ru/get?&tipe=sentence&number=1"),a=await s.json();return s.ok?a.text:(console.log(a),x)}catch(s){return console.error(s.message),x}};const K={class:"test"},Q={class:"test__main"},Z={__name:"TestPage",setup(s){const a=q(),t=l(""),e=l(0),n=l(0),u=l(!0),o=l(0),i=l(0),y=l(0),d=async()=>{t.value=await J(),u.value=!0,o.value=0,e.value=0,n.value=0};d();const c=()=>{a.push({name:"result",query:{speed:`${i.value}`,accuracy:`${y.value}`}})};return(W,m)=>(v(),_("div",K,[b(j,{isNewTest:u.value,onChangeTime:m[0]||(m[0]=p=>{o.value=p,u.value=!1})},null,8,["isNewTest"]),r("main",Q,[b(E,{randomText:t.value,onCheckOneSymbol:m[1]||(m[1]=(p,h)=>{e.value=p,n.value=h}),onFinishTest:c},null,8,["randomText"]),b(H,{testingTime:o.value,numderOfCheckedSymbols:e.value,numberOfUnvalidSymbols:n.value,onStartNewTest:d,onChangeTestingParams:m[2]||(m[2]=(p,h)=>{i.value=p,y.value=h})},null,8,["testingTime","numderOfCheckedSymbols","numberOfUnvalidSymbols"])])]))}};export{Z as default};