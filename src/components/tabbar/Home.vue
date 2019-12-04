<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="0">
        <mt-swipe-item v-for="item in lunbotuList" :key=item.id><img :src="item.img" alt=""></mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格到六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/photolist">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/goodslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
                </ul> 
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { log } from 'util'
export default {
    data(){
        return {
            lunbotuList:[] //这是保存轮播图的数组
        }
    },
    created(){
        this.getLunbo();
    },
    methods:{
        getLunbo(){
            this.$http.get("api/getlunbo").then(result=>{
                // 获取成功
                if(result.body.status===0){
                    console.log(result.body.message);
                    this.lunbotuList=result.body.message;
                    Toast('轮播图获取成功');
                }else{
                    //获取失败
                    Toast('不好意思~ 轮播图获取失败');
                }
                
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
        .mint-swipe-item img{
        height: 100%;
        width: 100%;
    }
    };
    .mui-grid-view.mui-grid-9 {
            background-color: white!important;
        }

</style>