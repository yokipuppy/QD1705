/*
	配置gulp
 */
var gulp = require("gulp");

//html
gulp.task("copy-html", () => {
	return gulp.src("html/*.html")//路径都是字符串 别忘加引号
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());

})

//images
gulp.task("images", () =>{
	return gulp.src("images/**/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());

})

//将scss文件转成css文件
//生成两个文件 min.css  .css
//用到的插件
//gulp-sass-china  gulp-minify-css gulp-rename
const scss = require("gulp-sass-china");
const minify = require("gulp-minify-css");
const rename = require("gulp-rename");

//每个css文件都要创建一个任务
//index.scss的
gulp.task("scss-index", () =>{
	return gulp.src("scss/index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))//第一份 没压缩的
	.pipe(minify())   //压缩一下
	.pipe(rename("index.min.css")) //重新设置下名字
	.pipe(gulp.dest("dist/css"))   //保存第二份
	.pipe(connect.reload());
})
//login.scss
gulp.task("scss-login", () => {
	return gulp.src("scss/login.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))//第一份 没压缩的
	.pipe(minify())   //压缩一下
	.pipe(rename("login.min.css")) //重新设置下名字
	.pipe(gulp.dest("dist/css"))   //保存第二份
	.pipe(connect.reload());
})

//register.scss
gulp.task("scss-register", () => {
	return gulp.src("scss/register.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))//第一份 没压缩的
	.pipe(minify())   //压缩一下
	.pipe(rename("register.min.css")) //重新设置下名字
	.pipe(gulp.dest("dist/css"))   //保存第二份
	.pipe(connect.reload());
})

//拷贝js文件
gulp.task("scripts", () => {
	return gulp.src("js/*.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload())
})
//拷贝data文件 整理数据源
gulp.task("data", () =>{
	return gulp.src("data/*.json").pipe(gulp.dest("dist/data")).pipe(connect.reload());

})

//上述操作都是整理文件，作为整体，建立项目的整体，让他们一起执行。
gulp.task("build", ["copy-html","images","scss-index","scss-login","scss-register","scripts","data"], () =>{
	console.log("编译成功");
})

//设置监听
gulp.task("watch", () => {
	/*
		两个参数
		第一个参数我们要监听的文件路径
		第二个参数我们监听到变化以后，要去执行的任务
	 */
	gulp.watch("html/*html", ["copy-html"]);
	gulp.watch("images/**/*", ["images"]);
	gulp.watch("js/*.js", ["scripts"]);
	gulp.watch("data/*.json",["data"]);
	gulp.watch("scss/index.scss", ["scss-index"])
	gulp.watch("scss/login.scss", ["scss-login"])
	gulp.watch("scss/register.scss", ["scss-register"])

})

//启动服务器
var connect = require("gulp-connect");

gulp.task("server", () =>{
	connect.server({
		root:"dist",
		port:8888,
		livereload:true
	})
})

gulp.task("default",["watch", "server"]);