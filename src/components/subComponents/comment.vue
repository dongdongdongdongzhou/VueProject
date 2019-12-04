<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容" v-model="cmtComment"></textarea>
        <mt-button type="primary" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key=item.add_time>
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dataFormat}}
                </div>
                <div class="cmt-content">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" plain @click=getMoreComments>加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            pageindex:1,
            comments:[],
            cmtComment:''
        }
    },
    created(){
        this.getComments();
    },
    props:["newsid"],
    methods:{
        getComments(){
            this.$http.get('api/getcomments/'+this.newsid+'?pageindex='+this.pageindex).then(result=>{
                if(result.body.status===0){
                    // this.comments=result.body.message
                    //为保证在加载更多评论时，不会将原来请求的数据覆盖，使用数组拼接的方式
                    this.comments=this.comments.concat(result.body.message)
                }else{
                    Toast('抱歉，获取评论失败')
                }
            })
        },
        getMoreComments(){
            this.pageindex++
            this.getComments()
        },
        postComment(){
            if(this.cmtComment.trim()===''){
                Toast('抱歉，评论不能为空')
            }else{
                this.$http.post('api/postcomment/'+this.$route.params.id,{content:this.cmtComment.trim()}).then(result=>{
                if(result.body.status===0){
                    //将添加的评论渲染到页面显示
                    this.comments.unshift({
                        user_name:"匿名用户",
                        add_time:Date.now(),
                        content:this.cmtComment.trim()
                    })
                    this.cmtComment=''
                }else{
                    Toast('添加评论失败')
                }
            })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    h3{
        font-size: 18px;
    }
    textarea{
        margin-bottom:0;
        font-size: 14px;
    }
    .mint-button{
        width: 100%;
        margin-bottom: 5px;
    }
    .cmt-list{
        .cmt-item{
            .cmt-title{
                font-size: 12px;
                background-color: #ccc;
            }
            .cmt-content{
                font-size: 12px;
                text-indent: 2em;
            }
        }
    }
</style>