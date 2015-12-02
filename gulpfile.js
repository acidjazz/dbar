
var gulp = require('gulp');

var sync = require('browser-sync').create();

var gutil = require('gulp-util');
var notify = require('gulp-notify');

var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var stylus = require('gulp-stylus');
var jade = require('gulp-jade');

var sourcemaps = require('gulp-sourcemaps');

var slurp = require('./gulp-slurp/index.js');

var data = slurp('dat');

gulp.task('vendors', function() {

  gulp.src([
      'bower_components/jquery/dist/jquery.js'
  ])
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(concat('vendor.min.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('pub/jst/lib'))

});

gulp.task('coffee', function() {
  gulp.src('cof/**/*.coffee')
    .pipe(sourcemaps.init())
    .pipe(coffee({bare: true})
      .on('error', notify.onError(function(error) {
        return "Coffee error: " + error.message;
      }))
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('pub/jst'))
    .pipe(sync.stream());
});

gulp.task('stylus', function() {
  gulp.src('sty/main.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus()
      .on('error', notify.onError(function(error) {
        return "Stylus error: " + error.message;
      }))
      .on('error', function(error) {
        console.log(error);
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('pub/css'))
    .pipe(sync.stream());
});

gulp.task('jade', function() {
  gulp.src('tpl/**/*.jade')
    .pipe(jade({pretty: true, data: data})
      .on('error', notify.onError(function(error) {
        return "JADE error: " + error.message;
      }))
      .on('error', function(error) {
        console.log(error);
      })
    )
    .pipe(gulp.dest('pub'))
    .pipe(sync.stream());
});

gulp.task('sync', function() {
  sync.init({
    server: {
      baseDir: 'pub/'
      }
    });

  gulp.watch('cof/**/*.coffee', ['coffee']);
  gulp.watch('sty/**/*.styl', ['stylus']);
  gulp.watch('tpl/**/*.jade', ['jade']);

});

gulp.task('watch', function() {
  gulp.watch('cof/**/*.coffee', ['coffee']);
  gulp.watch('sty/**/*.styl', ['stylus']);
  gulp.watch('tpl/**/*.jade', ['jade']);
});

gulp.task('default', ['slurp', 'coffee', 'stylus', 'jade', 'vendors']);


