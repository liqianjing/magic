magic
----------

### 环境准备

- 安装nodejs后，推荐切换到[淘宝镜像](http://npm.taobao.org/)提高下载的成功率和速度。
- 使用时依赖gulp，用到`gulp-concat`，`gulp-minify-css`，`gulp-rename`三个模块。这些资源已经配置到package.json文件中。
- 在package.json同级目录下面执行`npm install`

### 文件目录结构说明

> magic
>   >dist(打包完成后的文件一般生成在这里)

>   >example(每个模块的示例页面)
>   >   >base.html（示例页面，引用src里面的css模块资源）
>   >   >font.html

>   >src（每个模块的css文件）
>   >   >font/font.css
>   >   >button/button.css

>   >.gitignore
>   >package.json（项目配置文件）
>   >gulpfile.js
>   >README.md

### 开发的流程

- master分支（主分支，`受保护`）

- develop分支，开发分支，分支上面的不能含有测试的代码

- 开发的之前需要在develop下面切一个分支命名为`姓名（可用简写）-xxx`的分支开发，开发完成之后提交`merge request`申请合并