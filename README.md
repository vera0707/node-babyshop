# WELCOME. IT IS BABYSHOP

**这是一个小型简短的「node全栈练习项目」**

BABYSHOP是一个node中间层项目，实现了用户登录、商品收藏等功能。该项目仅做全栈练习项目，虽项目较小，但包括了项目构建、数据库连接、项目优化等，为实现真正的全栈打好了初期基础。

**目录介绍**
- redisCache
	+  redis数据缓存
- serverProvider
	+  后台服务
- website
	+  主项目

每层项目下有完整的使用方法和配置说明，此页仅作概述。

**主要技术**
- express框架
- redis缓存
- mongoodb数据存储
- cookie客户端登录
- nginx负载均衡
- art模板渲染
- 数据缓存











简介：该项目主要利用node做中间键，搭建一个婴儿商城项目。



详细介绍：
    website
        node中间键搭建完整展示项目
        文件夹介绍：
            database:   数据库文件地址
             model:     主要文件--请求后台数据
             router:    路由模块
             views:     页面显示相关文件，包含图片、CSS、JS、渲染模板等
             app.js：   入口文件
             db.js：    数据库配置文件
             package.json
        技术介绍：
            node + mongodb + redis + nginx + art渲染模板
        项目优化:
            cookie+session 登录数据保存
            mongodb 本地数据存储
            nginx 负载均衡
            redis 首页数据缓存


    serverProvider
           ① 模拟后台服务，提供后台数据
           ② node+express搭建
           ③ 非项目重点仅作服务提供


