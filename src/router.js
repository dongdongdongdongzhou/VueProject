import VueRouter from 'vue-router';

//导入自定义的子组件
import home from '../src/components/tabbar/Home.vue';
import member from '../src/components/tabbar/Member.vue';
import cart from '../src/components/tabbar/Cart.vue';
import search from '../src/components/tabbar/Search.vue';

//创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/home', component: home },
        { path: '/member', component: member },
        { path: '/cart', component: cart },
        { path: '/search', component: search }
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类
})

//暴露路由对象
export default router