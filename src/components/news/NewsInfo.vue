<template>
    <div class="newsinfo-container">
        <!-- 标题区域 -->
        <h2 class="title">{{newsinfo.title}}</h2>
        <!-- 子标题区域 -->
        <p class="subtitle">
            <span>发表时间：{{newsinfo.add_time|dataFormat}}</span>
            <span>点击：{{newsinfo.click}}次</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.content">
           
        </div>
        <!-- 评论区域 -->
        <comment :newsid="id">
            
        </comment>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'

//导入评论子组件
import comment from '../subComponents/comment.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            newsinfo:{}
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(result=>{
                if(result.body.status===0){
                    this.newsinfo=result.body.message[0]
                }else{
                    Toast('抱歉，新闻详情获取失败！')
                }
            })
        }
    },
    components:{ //用来注册自组件的节点
        comment
    }
}
</script>
<style lang="scss" scoped>
    .newsinfo-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin:15px 0;
            color:red;
        }
        .subtitle{
            font-size: 13px;
            color:#22afff;
            display: flex;
            justify-content: space-between;
        }
        
    }
</style>