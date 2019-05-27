# WELCOME. IT IS BABYSHOP

**这是一个小型简短的「node全栈练习项目」**


此项目配置redis数据存读。
将商城首页请求数据放至redis,将大大优化首屏加载速度。同时因开启独立服务,首页数据一旦发生变化会自动更新。

**项目使用说明**

- 本地开启redis服务
	+ redis-server --port 2333
- 本地登录redis
	+  redis-cli -p 2333  [ -a 123456  --密码验证 ]
- 新建babyindex哈希数据表
	+  hset babyindex id 123
- 查看babyindex哈希表下的字段
	+  hkeys babyindex
- 启动服务
    +  npm run server.js



