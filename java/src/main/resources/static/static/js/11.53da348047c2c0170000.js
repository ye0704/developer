webpackJsonp([11],{SCYZ:function(e,t){},VU8K:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("0Njg"),i=n("R2SV"),a={name:"packageList",data:function(){var e=this;return{filter:{id:null,name:null,userName:null,mark:null},dataUrl:r._4,countUrl:r._3,params:{},columns:[{field:"id",header:"编号",sort:"id",width:80},{field:"userName",header:"创建人",sort:"user_name",width:200},{field:"name",header:"名称",sort:"name",width:300},{field:"mark",header:"备注",sort:"mark",width:500},{field:"createTime",header:"创建时间",sort:"create_time",width:200,formatter:function(e,t,n){return Object(i.c)(n)}},{field:"action",header:"操作",width:180,html:!0,actions:[{text:"查看",handler:function(t){return e.$router.push("/package/view/"+t.id)}},{text:"删除",handler:function(t){return e.delete(t.id)}},{text:"绑定",handler:function(t){return e.bind(t.id)}}]}]}},mounted:function(){window.that=this},methods:{bind:function(e){this.$router.push({path:"/flow/testCase/edit?packageId="+e})},delete:function(e){var t=this;this.$confirm("删除将无法恢复，确认删除吗？","提示",{type:"warning"}).then(function(){Object(r.q)(e).then(function(){t.$success("删除成功！"),t.search()})})},search:function(){this.params=Object(i.h)(this.filter)},clear:function(){this.params={},this.filter={}}},components:{"v-datagrid":function(){return n.e(29).then(n.bind(null,"mW4C"))},"v-selector":function(){return n.e(30).then(n.bind(null,"qNHp"))},"v-dialog":function(){return n.e(31).then(n.bind(null,"j9Pd"))}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h4",{staticClass:"title"},[e._v("筛选条件")]),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"filters"},[n("el-form",{attrs:{inline:!0,model:e.filter,"label-width":"6em"}},[n("el-form-item",{attrs:{label:"编号"}},[n("el-input",{attrs:{placeholder:"请输入编号"},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.filter.id,callback:function(t){e.$set(e.filter,"id",t)},expression:"filter.id"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{attrs:{placeholder:"请输入名称"},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.filter.name,callback:function(t){e.$set(e.filter,"name",t)},expression:"filter.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"备注"}},[n("el-input",{attrs:{placeholder:"请输入备注"},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.filter.mark,callback:function(t){e.$set(e.filter,"mark",t)},expression:"filter.mark"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"创建人"}},[n("el-input",{attrs:{placeholder:"请输入账号"},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.filter.userName,callback:function(t){e.$set(e.filter,"userName",t)},expression:"filter.userName"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),n("el-button",{attrs:{type:"info",icon:"el-icon-delete"},on:{click:e.clear}},[e._v("清空")])],1)],1)],1),e._v(" "),n("h4",{staticClass:"title"},[e._v("接口打包列表")]),e._v(" "),n("hr"),e._v(" "),n("v-datagrid",{attrs:{columns:e.columns,"data-url":e.dataUrl,"count-url":e.countUrl,params:e.params}})],1)},staticRenderFns:[]};var s=n("C7Lr")(a,l,!1,function(e){n("SCYZ")},"data-v-7bb65896",null);t.default=s.exports}});
//# sourceMappingURL=11.53da348047c2c0170000.js.map