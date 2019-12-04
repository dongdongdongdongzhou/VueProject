<template>
    <div class="image-info">
        <h3>{{imageinfo.title}}</h3>
        <div class="image-subtitle">
            <p>
                <span>发表时间：{{imageinfo.add_time|dataFormat}}</span>
                <span>点击{{imageinfo.click}}次</span>
            </p>
            <hr>
            <div v-html="imageinfo.content" class="image-content">

            </div>
        </div>
        <!-- 这是评论区域 -->
        <comment></comment>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import comment from '../subComponents/comment.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            imageinfo:{}
        }
    },
    components:{
        'comment':comment
    },
    created(){
        this.getimageinfo()
    },
    methods:{
        getimageinfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(result=>{
                if(result.body.status===0){
                    this.imageinfo=result.body.message[0]
                }else{
                    Toast('抱歉，获取图片详情失败')
                }
            })
        }
    }
}
</script>
<style lang="">
    
</style>
    
