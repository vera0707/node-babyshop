# WELCOME. IT IS BABYSHOP

**这是一个小型简短的「node全栈练习项目」**

商城猪项目。
此项目为node中间层项目,实现了商城的主要业务。


**目录说明**
- database 数据库文件地址
- model    主要文件--请求后台数据
- router   路由模块
- views    页面显示相关文件，包含图片、CSS、JS、渲染模板等
- app.js   入口文件
- db.js    数据库配置文件
- package.json

**主要技术**
- express
- redis
- mongoodb
- cookie
- nginx
- art


**项目配置**
 - mongodb启动
	+  指定数据库文件地址
         - mongod --dbpath 你的文件地址/babyShop/website/database
         - *默认端口27017 若有端口冲突，请杀掉其他进程或修改端口(--port 端口号)

    +  设置数据库用户名
          - 1. 新开启命令窗口 输入 mongo 进入数据库
          - 2. 输入 use admin 切换指admin 数据库
          - 3. 输入 db.createUser({ user: 'admin',pwd: '123456',roles:['root'] })
                 +  用户名 admin
                 +  密码 123456
                 +  权限 root

          - 4. 检验用户设置是否成功
                 +  db.auth('admin','123456')
                 +  返回1代表成功
          - 5. 设定数据库仅允许登录后访问
                 +  1.断开数据库
                 +  2.连接数据库时加参数 --ahth
                       即 mongod --dbpath 你的文件地址/babyShop/website/database --auth
 - 项目启动
    + npm run app.js