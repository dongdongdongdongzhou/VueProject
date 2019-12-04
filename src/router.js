import VueRouter from 'vue-router';

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
import goodscomment from '../src/components/goods/goodsComment.vue'
import goodsinfo from '../src/components/goods/GoodsInfo.vue'

//创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/member', component: member },
        { path: '/cart', component: cart },
        { path: '/search', component: search },
        { path: '/home/newslist', component: newslist },
        { path: '/home/newsinfo/:id', component: newsinfo },
        { path: '/home/photolist', component: photolist },
        { path: '/home/photolist/:id', component: photoinfo },
        { path: '/home/goodslist', component: goodslist },
        { path: '/home/goodslist/goodscomment', component: goodscomment, name: 'goodscomment' },
        { path: '/home/goodslist/goodsdesc/:id', component: goodsinfo, name: 'goodsinfo' }

    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类
})

//暴露路由对象
export default router