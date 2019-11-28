# 这是一个Vue项目实战
## 11.37开始第一天的项目学习
1. 制作header区域，使用的是Mint-ui中的Header组件
2. 制作底部的 Tabbar 区域，使用的是MUI的Tabbar.html
    + 在制作购物车小图标时，操作会相对多一些
    + 先把扩展图标的 css 样式拷贝到项目中
    + 拷贝字体库 tff文件到项目中
    + 为购物车小图标添加如下样式 'mui-icon mui-icon-extra mui-icon-extra-cart'
3. 要在中间区域放置一个 router-view来展示路由匹配到的组件
## 11.28开始第二天的项目学习
1. 改造tabbar 为router-link
2. 设置路由高亮
3. 点击  tabbar 中的路由链接，展示对应的组件
4. 获取首页轮播图数据，如何获取？使用vue-resource
    + 4.1 使用vue-resource 的 this.$http.get 获取数据
    + 4.2 获取到的数据保存到 data 身上
    + 4.3 使用v-for 循环渲染每个 item 项
5. 修改 body 背景颜色
6. 为 tabbar 的切换设置动画
