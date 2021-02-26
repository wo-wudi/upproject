(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["log"],{"0caaa":function(t,e,i){"use strict";i("1591")},1591:function(t,e,i){},"47f9":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user_log"},[t._m(0),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"text-center col-7 ml-auto mr-auto"},[t._m(1),i("div",{staticClass:"my-5"},[i("div",{staticClass:"tab_login"},[i("div",{staticClass:"login_form"},[i("div",[i("el-input",{staticClass:"mb-4",attrs:{"prefix-icon":"el-icon-s-custom",placeholder:"学号"},model:{value:t.stuNum,callback:function(e){t.stuNum=e},expression:"stuNum"}}),i("el-input",{attrs:{"prefix-icon":"el-icon-view",type:"password",placeholder:"密码"},nativeOn:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.log(e):null}},model:{value:t.upwd,callback:function(e){t.upwd=e},expression:"upwd"}}),i("div",{staticClass:"d-flex justify-content-between"},[i("div",[i("button",{staticClass:"btn btn-light border-1 border mt-3",on:{click:t.log}},[t._v("登录")]),i("button",{staticClass:"btn btn-light border-1 border mt-3 ml-2",on:{click:t.reg}},[t._v("注册")])]),i("div",{staticClass:"mt-4"},[i("span",{on:{click:t.update}},[t._v("忘记密码？")])])])],1)])])])])])]),i("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("span",[t._v("登录失败,学号或密码错误")]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)]),i("el-dialog",{attrs:{title:"修改密码",visible:t.updateVisible,width:"400px"},on:{"update:visible":function(e){t.updateVisible=e}}},[i("el-form",{ref:"updateForm",attrs:{model:t.updateForm,"status-icon":"",rules:t.rules}},[i("el-form-item",{attrs:{prop:"stuNum"}},[i("el-input",{attrs:{placeholder:"请输入学号","prefix-icon":"el-icon-s-custom"},model:{value:t.updateForm.stuNum,callback:function(e){t.$set(t.updateForm,"stuNum",e)},expression:"updateForm.stuNum"}})],1),i("el-form-item",{attrs:{prop:"upwd"}},[i("el-input",{attrs:{type:"password",placeholder:"输入新密码","prefix-icon":"el-icon-view"},model:{value:t.updateForm.upwd,callback:function(e){t.$set(t.updateForm,"upwd",e)},expression:"updateForm.upwd"}})],1),i("el-form-item",{attrs:{prop:"checkUpwd"}},[i("el-input",{attrs:{type:"password",placeholder:"请再次输入密码","prefix-icon":"el-icon-view"},nativeOn:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.updateupwd("updateForm"):null}},model:{value:t.updateForm.checkUpwd,callback:function(e){t.$set(t.updateForm,"checkUpwd",e)},expression:"updateForm.checkUpwd"}})],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.updateVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.updateupwd("updateForm")}}},[t._v("修 改")])],1)],1)],1)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"position-relative mb-5"},[i("img",{staticClass:"w-100",attrs:{src:"img/login/breadcrumb-bg.jpg",alt:""}}),i("div",{staticClass:"h1 position-absolute main_font font_move"},[i("div",[t._v("用户登录界面")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login_reg_head d-flex justify-content-center"},[i("span",{staticClass:"text-dark font-weight-bold h3"},[t._v("用户登录")])])}],a={data:function(){var t=this,e=function(t,e,i){if(!e)return i(new Error("学号不能为空"));setTimeout((function(){9!=e.length?i(new Error("请输入正确的学号")):i()}),100)},i=function(t,e,i){var s=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){8,16}$/;if(!e)return i(new Error("密码不能为空"));setTimeout((function(){s.test(e)?i():i(new Error("8-16位英文字母,数字或者符号(除空格)且字母,数字和标点符号至少包含两种"))}),100)},s=function(e,i,s){if(!i)return s(new Error("输入不能为空"));setTimeout((function(){i!=t.updateForm.upwd?s(new Error("两次输入不一致")):s()}),100)};return{stuNum:"",upwd:"",res:"",dialogVisible:!1,updateVisible:!1,updateForm:{stuNum:"",upwd:"",checkUpwd:""},rules:{upwd:[{validator:i,trigger:"change"}],stuNum:[{validator:e,trigger:"change"}],checkUpwd:[{validator:s,trigger:"change"}]}}},methods:{log:function(){var t=this,e={stuNum:this.stuNum,upwd:this.upwd};this.axios.post(this.host+"/user/u1/login",this.qs.stringify(e)).then((function(e){if(t.res=e.data,0==t.res)t.dialogVisible=!0;else{var i=window.sessionStorage,s=JSON.stringify(e.data[0]);i.setItem("user",s),t.$store.commit("addUser",e.data[0]),t.$router.push("/index")}}))},reg:function(){this.$router.push("/reg")},update:function(){this.updateVisible=!0},updateupwd:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return e.$message({message:"修改失败，请检查输入的内容",type:"warning"}),!1;e.axios.post("/user/u1/updateupwd",e.qs.stringify(e.updateForm)).then((function(t){t.data?e.$confirm("修改成功","提示",{confirmButtonText:"确定"}).then((function(){e.updateVisible=!1})).catch((function(){e.updateVisible=!1})):e.$confirm("修改失败,请检查学号是否输入正确","提示",{confirmButtonText:"确定"}).then((function(){e.updateVisible=!0})).catch((function(){e.updateVisible=!0}))}))}))}}},n=a,r=(i("0caaa"),i("2877")),u=Object(r["a"])(n,s,o,!1,null,"1232ba28",null);e["default"]=u.exports}}]);
//# sourceMappingURL=log.ba697c9e.js.map