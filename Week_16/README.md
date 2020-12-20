## 第16周学习笔记

### 3. 初始化与构建 | 初始化工具 Yeoman (三)

#### 在执行webpack时，始终出现

TypeError: The 'compilation' argument must be an instance of Compilation

将vue-loader升级到16.1.2，问题依旧，

#### 将webpack降级到4.44.2，则出现

Error: Compiling RuleSet failed: Unexpected property test in condition (at ruleSet[1].rules[1].resource.test: resource => {

​    currentResource = resource

​    return true

})

#### 解决方法

卸载掉全局安装的webpack和webpack-cli

然后手动调用./node_modules/.bin/webpack 

问题解决



### 4. 初始化与构建 | Webpack基础知识

##### Webpack是一个Node.js的打包工具，它的能力是把一个Node的代码打包成浏览器可用的代码，所以Webpack是一个针对JS的打包工具，Webpack可以做多文件合并

##### Webpack下有两个重要的包

* webpack-cli
* webpack自身

##### 替代方案使用npx

npx webpack

#### Webpack的config文件

* Entry
* Output
* Loaders
* Plugins
* Mode
* Browser Compatibility
* Environment

