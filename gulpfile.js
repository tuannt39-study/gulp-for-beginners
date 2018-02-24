'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('hello', function() {
  console.log('Xin chào Tuân');
});

gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});
