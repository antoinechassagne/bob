const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

gulp.task('clean', () => {
  return del([
      'css/main.css',
      'css/main.css.min'
  ]);
});

gulp.task('compile', () => {
  return gulp.src('src/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css/'));
});

gulp.task('minify', () => {
  return gulp.src('dist/css/main.css')
      .pipe(cssnano())
      .pipe(rename({
          suffix: '.min'
      }))
      .pipe(gulp.dest('dist/css'))
});

gulp.task('default', gulp.series(['clean', 'compile', 'minify']));