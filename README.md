webpack
- 开发环境 npm run start
- 正式发布的使用  npm run build直接打包， npm run dev打包同时监听


#### 开发环境采用本地开发
- 使用webpack-dev-server
- 使用express，启动server
- 使用proxy做一层代理，对接后端api
- 支持hmr

#### 打包环境
- 打包做 common(公共包), app(业务包)拆分
- devtool选择快的，根据需求
- uglify 会减慢速度 看需求



