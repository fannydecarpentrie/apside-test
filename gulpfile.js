var gulp = require('gulp');
var sass = require('gulp-sass');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');

gulp.task('sass', function(){
    return gulp.src('css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('default', function(){
    gulp.watch('css/style.scss', ['sass']);
});

gulp.task('css', function(){
   gulp.src('css/style.css')
   .pipe(concat('styles.css'))
   .pipe(minify())
   .pipe(gulp.dest('build/styles/'));
});

gulp.task('default',['css'],function(){
});