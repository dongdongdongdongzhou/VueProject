//入口文件
// console.log('ok');

import Vue from 'vue';

//导入 App 组件
import app from './App.vue';

//按需导入 mint-ui 插件
import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
Vue.component(Header.name, Header);
//制作轮播图
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//制作发表评论的按钮
Vue.component(Button.name, Button);
//图片懒加载
Vue.use(Lazyload);


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

//post请求全局设置（必不可少）
Vue.http.options.emulateJSON = true;

//导入自定义的路由router.js
import router from './router.js';

import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
import mui from './lib/mui/js/mui.js'

//导入自定义的子组件
import home from '../src/components/tabbar/Home.vue';
import member from '../src/components/tabbar/Member.vue';
import cart from '../src/components/tabbar/Cart.vue';
import search from '../src/components/tabbar/Search.vue';
import newslist from '../src/components/news/newslist.vue'
import newsinfo from '../src/components/news/NewsInfo.vue'
import photolist from '../src/components/photos/PhotoList.vue'
import photoinfo from '../src/components/photos/Photoinfo.vue'
import goodslist from '../src/components/goods/Goodslist.vue'
import goodsinfo from '../src/components/goods/GoodsInfo.vue'


var vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(app),
    router: router,
})