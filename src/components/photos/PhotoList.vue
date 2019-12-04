<template>
    <div class="photo-slider"> 
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item"  data-wid="tab-top-subpage-1.html" v-for="item in cates" :key=item.id @tap="getimagelist(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>
			</div>
		<!-- 图片列表区域 -->
		<ul class="photolist">
			<router-link :to="'/home/photolist/'+item.id" v-for="item in list" :key="item.img_url" tag="li" class="image-box">
				<img v-lazy="item.img_url" >
				<div class="image-title">
					<h3 class="title">{{item.title}}</h3>
					<div class="abstract">{{item.zhaiyao}}</div>
				</div>
			</router-link>
		</ul>
    </div>
</template>
<script>
import mui from'../../lib/mui/js/mui.js'
import {Toast} from 'mint-ui'
import { log } from 'util'
export default {
	data(){
		return{
			cates:[], //所有图片分类 
			list:[] //图片列表
		}
	},
	created(){
		this.getimgcategory()
	},
    mounted() {
		mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
})},
	methods:{
		getimgcategory(){
			this.$http.get('api/getimgcategory').then(result=>{
				if(result.body.status===0){
					result.body.message.unshift({
						title:'全部',
						id:0
					})
					this.cates=result.body.message
					console.log(this.cates)
				}
			})
		},
		getimagelist(cateid){
			this.$http.get('api/getimages/'+cateid).then(result=>{
				if(result.body.status===0){
					this.list=result.body.message
					Toast('获取图片成功')
				}else{
					Toast('获取图片失败')
				}
			})
		}

	}
}
</script>
<style lang="scss" scoped>
	*{
		touch-action: pan-y;
	}
	.photolist{
		list-style-type: none;
		margin: 0;
		padding:10px;
		.image-box{
			position: relative;
			color: white;
			text-align: center;
			background-color: #ccc;
			box-shadow: 0 0 9px #999;
			img{
				width: 100%;
				margin-top:5px;
				vertical-align: middle;
			}
			img[lazy=loading] {
				width: 50px;
				height: 300px;
				margin: auto;
			}
			.image-title{
				position: absolute;
				bottom:0;
				text-align: left;
				background-color: rgba(0,0,0,0.3);
				max-height: 86px;
				width: 100%;
				.title{
					font-size: 14px;
					
				}
				.abstract{
					font-size: 13px;
					
				}
			}
		
		}
	}
</style>