magic
----------

### 文件目录
> magic
>   >dist(完整的示例)
>   >   >build.min.css

>   >example(每个模块的示例页面)
>   >   >base.html
>   >   >font.html

>   >src（每个模块的css文件）
>   >   >font/font.css
>   >   >button/button.css

>   >.gitignore
>   >package.json
>   >gulpfile.js
>   >README.md

### 注释规范
- 首先需要有本区块的注释，建议增加使用场景
``` css
/* 
 * 完成4列等分的布局
 * 一般奖品展示的部分会用到
 * 注：这个class需要和下面子元素的class配合使用
 */
```
- 然后修改或增加原有的文件时，增加标注
``` css 
/* updata by xxx 2015/12/15 */
/* 修改清除浮动的实现 */
```
- 成组的 css 规则间用块状注释和空行分离
``` css 
/* Header */

#login-header {}

#login-header-below {}

/* Footer */

#login-footer {}

#login-footer-below {}
```
### 命名规范
- 一般的命名  
    使用小写字母+数字+中划线来命名，避免驼峰式和下划线的命名
- id的命名  
    因为这个是作为基础的样式文件提供，所以`禁止`使用id
- 简写属性的名字  
    简写类的名称需要是大家都默认的，例如btn，nav，bg但是不能用co等简写来命名
- 前缀  
    为了防止冲突我们对于应用特定样式加上前缀，例如login-btn

### 书写规范
- 属性的声明顺序
    - 1.位置属性(position, top, right, z-index, display, float等)
    - 2.大小(width, height, padding, margin)
    - 3.文字系列(font, line-height, letter-spacing, color- text-align等)
    - 4.背景(background, border等)
    - 5.其他(animation, transition等)

``` css 
/* 推荐 */
.nav-item {
  display: inline-block;
  width: 10rem;
  height: 3rem;
  margin-right: .5rem;
  font-size: 1.2rem;
  border-radius: .5rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
```
``` css 
/* 不推荐 */
.nav-item {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 1.2rem;
  border-radius: .5rem;
  width: 10rem;
  display: inline-block;
  height: 3rem;
  margin-right: .5rem;
}
```
- 缩进  
    块的内容需要被缩进，统一应用两个空格，例如
  
``` css 
.nav {    
  height: 100rem;   
  width: 100rem;    
}
```

- 分号
        所有声明的语句后面都要以分号结尾，包括最后一行
``` css 
/* 推荐 */
.nav {
  height: 100rem;
  width: 100rem;
}
```
``` css 
/* 不推荐 */
.nav {
  height: 100rem;
  width: 100rem
}
```
- 空格
    + 统一用两个空格缩进
    + 在每个声明块的左面花括号之前添加空格
    + 每条语句的冒号后面插入一个空格
    + 列表型属性值 书写在单行时，, 后必须跟一个空格
``` css 
/* 推荐 */
.nav {
  height: 100rem;
  width: 100rem;
  font-family: "open sans", arial, sans-serif;
}
```
``` css 
/* 不推荐 */
.nav{
    width:100rem;
    height:100rem;
    font-family:"open sans",arial,sans-serif;
}
```
- 空行
    + 多个选择以及声明间以行分隔
    + 多个 css 规则间以空行分隔
``` css 
/* 推荐 */
.header,
.nav {
  background: #f0f;
}

.footer {
  background: #eee;
}
```
``` css 
/* 不推荐 */
.header,.nav {
    background: #f0f;
}
.footer {
  background: #eee;
}
```
- 引号
        尽可能的`不用`引号，使用的时候统一使用`双引号`
``` css 
/* 推荐 */
body {
  font-family: "open sans", arial, sans-serif;
  background: url(http://xxx/xxxx/xxx.png);
}
```
``` css 
/* 不推荐 */
body {
  font-family: 'open sans', arial, sans-serif;
  background: url('http://xxx/xxxx/xxx.png');
}
```
- 含有0的情况
    + 省略值为0时的单位
    + 省略值为小于1时前面的0
示例：
``` css
.nav {
  padding: 0;
  margin: 0;
  font-size: .8rem;
}
```

- hack
        针对浏览器统一使用低版本hack，ie6统一用下划线`_`，ie7使用统一用`*`

- @media
        建议把需要适配的元素和属性抽离出来放置到页面的最底端
```
/* 推荐 */
.nav {
  width: 100%;
  display: -moz-box;
  display: -webkit-box;
  display: box;
  flex-direction: column;
}

.nav .nav-item {
  -moz-box-flex: 1.0;
  -webkit-box-flex: 1.0;
  box-flex: 1.0;
}

.main {
  width: 100%;
  background: #0f0;
}

/* 从这里开始下面的部分是需要适配的 */
.nav {
  font-size: 1.2rem;
}

@media screen and (min-width:480px){
  .nav {
    font-size: 1.4rem;
  }
}

@media screen and (min-width:640px){
  .nav {
    font-size: 1.6rem;
  }
}
```