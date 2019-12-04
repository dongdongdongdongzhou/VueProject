# 这是一个Vue项目实战
## 11.27开始第一天的项目学习
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
## 12月1日开始第三天的项目学习
1. 改造home页中间九宫格
2. 新闻资讯页面制作
    + 改造新闻页面路由
    + 绘制页面，使用MUI插件中的media-list.html
    + vue-resource获取新闻数据
## 12月2日开始第四天的项目学习
1. 实现 新闻资讯列表 点击跳转到新闻详情
    + 把列表的每一项改造为路由链接，同时，在跳转时应提供唯一的ID标识符
    + 创建新闻详情的组件页面 NewsInfo.vue
    + 在路由模块中，将新闻详情的路由地址和组件页面对应起来
2. 实现新闻详情的页面布局和数据渲染
3. 单独封装一个 comment.vue 评论子组件
    + 先创建一个单独的 comment.vue 组件模板
    + 在需要使用 comment 组件的页面中，手动导入 comment组件
    + 在父组件中，使用'components'属性，将导入的comment组件注册为自己的子组件
    + 将注册子组件的注册名称以标签形式，在 页面中引用即可
4. 获取所有的评论数据渲染到页面中
5. 实现点击加载更多评论的功能
    + 为加载更多按钮，绑定点击事件，请求下一页的评论数据
    + pageindex加1，再调用一次 getComment()方法
    + 为了防止新数据覆盖老数据的情况，我们再点击加载更多的时候，每当获取到新数据时，应当调用数组的contact 方法，拼接上新数组。
6. 实现提交评论并渲染到页面的功能
    + 对文字框进行双向数据绑定
    + 为发表按钮绑定一个事件 
    + 校验评论内容是否为空，如果为空，则Toast提示用户 评论内筒不能为空
    + 通过 vue-resource 发送一个请求，把评论内容提交给服务器
    + 当发表评论成功后，重新刷新列表，以查看最新的评论
    + 如果调用 getComments 方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
    + 换一种思路:当评论成功之后，在客户端手动拼接出一个最新的评论对象，然后调用数组的unshift方法，把最新的评论追加到 data中 comments 的开头，这样就完美的实现刷新评论列表的需求
7. 改造图片分享按钮为路由链接的形式
    + 绘制图片列表组件页面结构并美化样式
    - 制作顶部滑动条
    - 制作底部的图片列表 
    + 制作顶部滑动条的坑：
    - 需要借助于 MUI的 example中的 tab-top-webview-main.html
    - 需要把 slider 区域的mui-fullscreen类去掉
    - 滑动条无法正常触发滑动，通过检查官方文档，发现这是JS组件，需要先导入JS的包
    


