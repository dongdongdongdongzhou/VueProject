//入口文件
// console.log('ok');

import Vue from 'vue';

//导入 App 组件
import app from './App.vue';

//按需导入 mint-ui 插件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import './lib/mui/css/mui.min.css';


var vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(app)
})