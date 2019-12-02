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
//导入时间格式化的插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dataFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

//导入 vue-resource 
import VueResource from 'vue-resource';
Vue.use(VueResource);
//全局配置ajax请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'

//导入自定义的路由router.js
import router from './router.js';

import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

//导入自定义的子组件
import home from '../src/components/tabbar/Home.vue';
import member from '../src/components/tabbar/Member.vue';
import cart from '../src/components/tabbar/Cart.vue';
import search from '../src/components/tabbar/Search.vue';
import newslist from '../src/components/news/newslist.vue'
import newsinfo from '../src/components/news/NewsInfo.vue'


var vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(app),
    router: router,
})