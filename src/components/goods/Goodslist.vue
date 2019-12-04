<template>
    <div class="goods-list">
        <!-- 这是商品列表区域 -->
        <div class="goods-item" v-for="item in goodslist" :key="item.id">
            <div class="goods-img">
                <img :src="item.img_url" @click="getgoodsinfo(item.id)">
                <h3>{{item.title}}</h3>
            </div>
            <div class="price-quantity">
                <p class="price">
                    <span class="sell_price">￥{{item.sell_price}}</span>
                    <span class="old_price"><del>￥{{item.market_price}}</del></span>
                </p>
                <p class="quantity">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>
        <!-- 这是按钮区域 -->
        <mt-button type="primary" size="large" plain @click="getmoregoodslist">加载更多</mt-button>
        <!-- 使用编程式导航处理路由链接 -->
        <mt-button type="danger" size="large" plain @click="getgoodscomment">商品评论</mt-button>
    </div> 
</template>
<script>
import goodscomment from './GoodsComment.vue'
export default {
    data(){
        return{
            pageindex:1,
            goodslist:[]
        }
    },
    created(){
        this.getgoodslist()
    },
    methods:{
        getgoodslist(){
            this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
                if(result.body.status===0){
                    // this.goodslist=result.body.message
                    //考虑到后面点击加载更多按钮要显示第二页的数据，即使用数组拼接的方式
                    this.goodslist=this.goodslist.concat(result.body.message)
                }
            })
        },
        getmoregoodslist(){
            this.pageindex++
            this.getgoodslist()
        },
        //这是使用编程式导航处理路由链接的方法
        getgoodscomment(){
            this.$router.push({name:'goodscomment'})
        },
        getgoodsinfo(id){
            this.$router.push(
                {name:'goodsinfo',params:{id:id}}
            )
        }
    }
}
</script>
<style lang="scss" scoped>
    .goods-list{
        display:flex;
        flex-wrap: wrap;
        padding: 8px;
        justify-content: space-between;
        .goods-item{
            border: solid 1px #ccc;
            width:49%;
            min-height: 295px;
            margin:4px 0;
            padding:2px;
            .price-quantity{
                padding:4px;
                background-color: #ccc;
                margin-top:9px;
            }
            .price{
                margin:0;
                .sell_price{
                    color:red;
                    font-size: 14px;
                    font-weight: bold;
                }
                .old_price{
                    font-size: 10px;
                }
            }
            .quantity{
                margin:0;
                display: flex;
                justify-content: space-between;
            }
            .goods-img{
                img{
                    width: 100%;
                    min-height: 181.91px;
                }
                h3{
                    font-size: 14px;
                    min-height: 48px;
                    padding:0 5px;
                    margin:0;
                }   
            }
        }
        }
        .mint-button{
            margin-top:5px;
    }
</style>