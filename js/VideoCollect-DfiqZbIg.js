import{t as d,v as i,P as u,_ as r}from"./common-Bl2-1zsm.js";import"./vendor-CvG_Gu8L.js";const p=o=>(Vue.pushScopeId("data-v-db3635a6"),o=o(),Vue.popScopeId(),o),V={class:"VideoCollect"},_=p(()=>Vue.createElementVNode("span",{class:"f16"},"视频收藏",-1)),f={class:"content"},m=Vue.defineComponent({name:"VideoCollect"}),g=Vue.defineComponent({...m,setup(o){const e=Vue.reactive({loading:!1,total:0,pageNo:0,pageSize:15,videos:[]});Vue.onMounted(()=>{a(!0)});async function a(n=!1){if(e.loading)return;if(!n){if(e.total<=e.videos.length)return;e.pageNo++}e.loading=!0;let t=await d({pageNo:e.pageNo,pageSize:e.pageSize});e.loading=!1,t.success&&(e.videos=e.videos.concat(t.data.list),e.total=t.data.total)}return(n,t)=>{const s=Vue.resolveComponent("BaseHeader"),c=Vue.resolveComponent("Loading"),l=Vue.resolveComponent("NoMore");return Vue.openBlock(),Vue.createElementBlock("div",V,[Vue.createVNode(s,null,{center:Vue.withCtx(()=>[_]),_:1}),Vue.createElementVNode("div",f,[Vue.createVNode(i,{class:"Scroll",onPulldown:a},{default:Vue.withCtx(()=>[Vue.createVNode(u,{mode:"music",list:e.videos},null,8,["list"]),e.loading?(Vue.openBlock(),Vue.createBlock(c,{key:0,"is-full-screen":!1})):(Vue.openBlock(),Vue.createBlock(l,{key:1}))]),_:1})])])}}}),C=r(g,[["__scopeId","data-v-db3635a6"]]);export{C as default};