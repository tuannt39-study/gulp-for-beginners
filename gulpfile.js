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

gulp.task('sassall', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

gulp.task('watchsass', function(){
  gulp.watch('app/scss/**/*.scss', ['sassall']);
  // Other watchers
});
