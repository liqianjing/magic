var gulp = require('gulp');
var concat = require('gulp-concat');                            // 多个文件合并为一个；
var minifyCss = require('gulp-minify-css');                     // 压缩CSS为一行；
var rename = require('gulp-rename');                            // 文件名替换

var baseUrl = './src/';
gulp.task('default', function() {                               // 创建一个task
  return gulp.src([baseUrl+'base/base.css',
    baseUrl+'default/default.css',
    baseUrl+'layout/layout.css',
    baseUrl+'font/font-m.css',
    baseUrl+'button/button.css',
    baseUrl+'icon/icon.css'])
    .pipe(concat('build.css'))                                 // 合并后的文件名
    .pipe(gulp.dest('./dist'))                                 // 输出合并后的文件
    .pipe(rename({suffix: '.min'}))                            // 加.min的后缀
    .pipe(minifyCss())                                         // 压缩处理成一行
    .pipe(gulp.dest('./dist'))                                 // 输出压缩后的文件
});

