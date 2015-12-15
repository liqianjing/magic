# magic
css modules separated 
=====================

css规范：
----------

### 文件规范
        
### 注释规范
        成组的 css 规则间用块状注释和空行分离
        
```
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
- id和class的命名  
    名字的长短要适中，不能太长，使用有意义的类名
- 简写属性的名字  
    简写类的名称需要是大家都默认的，例如btn，nav，bg但是不能用co等简写来命名
- 前缀  
    为了防止冲突我们对于应用特定样式加上前缀，例如login-btn
- hacks  
    增加hack的时候应该加上浏览器的标识符号

### 书写规范
- 属性的声明顺序
    - 1.位置属性(position, top, right, z-index, display, float等)
    - 2.大小(width, height, padding, margin)
    - 3.文字系列(font, line-height, letter-spacing, color- text-align等)
    - 4.背景(background, border等)
    - 5.其他(animation, transition等)

```
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
```
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
  
```
.nav {    
  height: 100rem;   
  width: 100rem;    
}
```

- 分号
        所有声明的语句后面都要以分号结尾，包括最后一行
```
/* 推荐 */
.nav {
  height: 100rem;
  width: 100rem;
}
```
```
/* 不推荐 */
.nav {
  height: 100rem;
  width: 100rem
}
```
- 空格
        统一用两个空格缩进
        在每个声明块的左面花括号之前添加空格
        每条语句的冒号后面插入一个空格
        列表型属性值 书写在单行时，, 后必须跟一个空格
```
/* 推荐 */
.nav {
  height: 100rem;
  width: 100rem;
  font-family: "open sans", arial, sans-serif;
}
```
```
/* 不推荐 */
.nav{
    width:100rem;
    height:100rem;
    font-family:"open sans",arial,sans-serif;
}
```
- 空行
        多个选择以及声明间以行分隔
        多个 css 规则间以空行分隔
```
/* 推荐 */
.header,
.nav {
  background: #f0f;
}

.footer {
  background: #eee;
}
```
```
/* 不推荐 */
.header,.nav {
    background: #f0f;
}
.footer {
  background: #eee;
}
```
- 引号
        尽可能的不用引号，使用的时候统一使用双引号
```
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
- 字体设置
        字体设置统一用英文的，不建议出现“微软雅黑”类似的设置
        mobile上面建议设置无衬字体
对应表格如下：

|字体           |  操作系统    |  Family Name      |
| :------------ | :----------: | :---------------- |
|宋体 (中易宋体)|Windows       | SimSun            |
|黑体 (中易黑体)|Windows       | SimHei            |
|微软雅黑       |Windows       | Microsoft YaHei   |
|微软正黑       |Windows       | Microsoft JhengHei|
|华文黑体       |Mac/iOS       | STHeiti           |
|冬青黑体       |Mac/iOS       | Hiragino Sans GB  |
|文泉驿正黑     |Linux         | WenQuanYi Zen Hei |
|文泉驿微米黑   |Linux         |WenQuanYi Micro Hei|

        
### 测试规范




