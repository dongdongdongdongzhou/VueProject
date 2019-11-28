//入口文件
// console.log('ok');

import Vue from 'vue';

//导入 App 组件
import app from './App.vue';

//按需导入 mint-ui 插件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//制作轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//导入路由模块
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//导入 vue-resource 
import VueResource from 'vue-resource';
Vue.use(VueResource);

//导入自定义的路由router.js
import router from './router.js';

import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

//导入自定义的子组件
import home from '../src/components/tabbar/Home.vue';
import member from '../src/components/tabbar/Member.vue';
import cart from '../src/components/tabbar/Cart.vue';
import search from '../src/components/tabbar/Search.vue';



var vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(app),
    router: router,
})