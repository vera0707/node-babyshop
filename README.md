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





    项目启动
        服务端启动  node serverProvider/server.js
        客户端启动  node website/app.js
        mongodb启动
            ① mongodb安装 -- 略
            ② 指定数据库文件地址
                mongod --dbpath 你的文件地址/babyShop/website/database

               * 默认端口27017 若有端口冲突，请杀掉其他进程或修改端口(--port 端口号)

            ③ 设置数据库用户名
                1. 新开启命令窗口 输入 mongo 进入数据库
                2. 输入 use admin 切换指admin 数据库
                3. 输入 db.createUser({ user: 'admin',pwd: '123456',roles:['root'] })
                    用户名 admin
                    密码 123456
                    权限 root

                4. 检验用户设置是否成功
                    db.auth('admin','123456')
                    返回1代表成功
                5. 设定数据库仅允许登录后访问
                    1.断开数据库
                    2.连接数据库时加参数 --ahth
                      即 mongod --dbpath 你的文件地址/babyShop/website/database --auth


