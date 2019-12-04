<template>
    <div class="app-container">
        <!-- 顶部header区域 -->
        <mt-header fixed title="黑马程序员Vue项目"></mt-header>
        <!-- 中间路由 router-view 区域 -->
        <transition>
            <router-view></router-view>
        </transition>
    
        <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-zyb " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-zyb" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-zyb" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-zyb" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>


        
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                selected:false
            }
        }
    }
</script>
<style lang="scss" scoped>
    .app-container {
        padding-top:40px;
        padding-bottom: 50px;
        overflow-x: hidden;
    };
    .v-enter,
    .v-leave-to{
        opacity: 0;
        transform: translateX(100%);
    };
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    .v-enter-active,
    .v-leave-active{
        transition:all 0.5s ease;
    }
    .mui-bar-tab .mui-tab-item-zyb .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    }
    .mui-bar-tab .mui-tab-item-zyb .mui-active {
    color: #007aff;
    }
    .mui-bar-tab .mui-tab-item-zyb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar .mui-icon {
    font-size: 24px;
    position: relative;
    z-index: 20;
    padding-top: 0;
    padding-bottom: 0;
}

</style>