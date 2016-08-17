"use strict"

// import vue from  "vue";
// import vueRouter from "vue-router";
// import routerMaps from "../routers";
// var vue = new Vue({});
// console.log(vue);
// vue.user(vueRouter);

var app = Vue.extend({});
var router = new VueRouter();

var login = Vue.extend({
    template: "<input v-model='username'/><button v-on:click='sb'>提交</button>",
    data: function() {
        return {
            username: "Hello, vue router!"
        }
    },
    methods: {
    sb: function () {
      Vue.http.post("/login",{"userName":this.username}).then((response) => {
            console.log(response.data);
        }, (response) => {
            console.log("error");
        });
      // var xhr = new XMLHttpRequest();
      // xhr.open("POST","/login");
      // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      // xhr.send({"name":"lisujian"});
      
    }
  }
})


router.map({
    "/login":{				//首页
        component: login
    },
    "/hehe":{				//首页
        name:"hehe",
        component: {
        	template:"<p>hehe</p>"
        }
    }
    // ,
    // /* 404路由 */
    // "*": {
    //     component: function(resolve){
    //         require(["./views/index.vue"],resolve);
    //     }
    // }
    // ,
    // "/index":{               //首页
    //     name:"home",
    //     component: function(resolve){
    //         require(["./views/index.vue"],resolve);
    //     }
    // }
   
});
router.start(app,"#app");