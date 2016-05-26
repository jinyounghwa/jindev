var gulp = require('gulp');
var webserver = require('gulp-webserver');

var util = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    log = util.log;

var sassFiles = './_scss/**/*.scss';

gulp.task('sass', function () {

  var scssExport = "./_scss/main.scss";

  log('Generate CSS files ' + new Date().toString());

  gulp.src(scssExport)
        .pipe(sass({ style: 'expand' }))
        .pipe(autoprefixer('last 3 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gulp.dest('./app/styles'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./app/styles'));

});

gulp.task('watch', function() {
  gulp.watch(sassFiles, ['sass']);
  gulp.watch(['./*.*', './app/*.*']);
});

gulp.task('webserver', function() {
  gulp.src('./app/')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true
    })
  );
});

gulp.task('default', ['watch', 'webserver']);
