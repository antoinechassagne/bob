const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

gulp.task('clean', () => {
  return del([
      'dist/css/bob.css',
      'dist/css/bob.min.css'
  ]);
});

gulp.task('compile', () => {
  return gulp.src('src/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css/'));
});

gulp.task('minify', () => {
  return gulp.src('dist/css/bob.css')
      .pipe(cssnano())
      .pipe(rename({
          suffix: '.min'
      }))
      .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', () => {
  gulp.watch(['src/scss/**/*.scss'], gulp.series(['clean', 'compile', 'minify']));
});

gulp.task('docs', () => {
  return gulp.src('dist/css/bob.min.css')
      .pipe(gulp.dest('docs/'))
});

gulp.task('build', gulp.series(['clean', 'compile', 'minify']));
gulp.task('docs', gulp.series(['docs']));