import{s as r}from"./service.541fc1e6.js";import{_ as d,G as l,r as p,o as c,c as m,w as f,a as e,t as s,b as u,F as h,d as o,e as _}from"./index.87401552.js";const w={name:"SpeedtestTracker",mixins:[r],props:{item:Object},components:{Generic:l},data:()=>({speedtest:null}),computed:{download:function(){var t;return this.format((t=this.speedtest)==null?void 0:t.download)},upload:function(){var t;return this.format((t=this.speedtest)==null?void 0:t.upload)},ping:function(){var t;return this.format((t=this.speedtest)==null?void 0:t.ping)}},created(){this.fetchStatus()},methods:{fetchStatus:async function(){this.fetch("/api/speedtest/latest").then(t=>{this.speedtest=t.data}).catch(t=>console.log(t))},format:function(t){return t?parseFloat(t).toFixed(2):"n/a"}}},g={class:"title is-4"},k={class:"subtitle is-6"},x=e("i",{class:"fas fa-arrow-down"},null,-1),b=e("i",{class:"fas fa-arrow-up"},null,-1),S=e("i",{class:"fas fa-stopwatch"},null,-1);function B(t,F,n,G,y,a){const i=p("Generic");return c(),m(i,{item:n.item},{content:f(()=>[e("p",g,s(n.item.name),1),e("p",k,[t.speedtest?(c(),u(h,{key:0},[x,o(" "+s(a.download)+" Mbit/s | ",1),b,o(" "+s(a.upload)+" Mbit/s | ",1),S,o(" "+s(a.ping)+" ms ",1)],64)):_("",!0)])]),_:1},8,["item"])}const T=d(w,[["render",B]]);export{T as default};
