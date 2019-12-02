<template>
    <div>
        
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="news in newsList" :key="news.id">
					<router-link :to="'/home/newsinfo/'+news.id">
						<img class="mui-media-object mui-pull-left" :src=news.img_url>
						<div class="mui-media-body">
							<h1 v-text="news.title"></h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{news.add_time|dataFormat}}</span>  <span>点击{{news.click}}次</span>
                                </p>
						</div>
					</router-link>
				</li>
				<!-- <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../../images/fj01.jpeg">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019-12-01 12:12:12</span>  <span>点击0次</span>
                                </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../../images/fj01.jpeg">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019-12-01 12:12:12</span>  <span>点击0次</span>
                                </p>
						</div>
					</a>
				</li> -->

			</ul>
    </div>
</template>
<script>
import { get } from 'http'
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            newsList:[] //新闻列表
        }
    },
    created(){
        this.getNews()
    },
    methods: {
        getNews(){
            this.$http.get('api/getnewslist').then(result=>{
                if(result.body.status===0){
                    //如果没有失败，则把拿到的数据保存在 data身上
                    this.newsList = result.body.message
                }else{
                    Toast('抱歉，新闻资讯获取失败！')
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{font-size:14px;}
            .mui-ellipsis{
                font-size:12px;
                color:#22afff;
                display:flex;
                justify-content: space-between;
            }
        }
    }
</style>