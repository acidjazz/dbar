
var gulp = require('gulp');

var sync = require('browser-sync').create();

var notify = require('gulp-notify');

var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var stylus = require('gulp-stylus');
var jade = require('gulp-jade');

var sourcemaps = require('gulp-sourcemaps');

var objectus = require('objectus');

objectus('dat/', function(error, result) {
  if (error) {
    notify(error);
  }
  data = result
});

gulp.task('slurp', function() {
  objectus('dat/', function(error, result) {
    if (error) {
      notify(error);
    }
    data = result
  });
});

gulp.task('vendors', function() {

  gulp.src(['bower_components/jquery/dist/jquery.js'])
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
        return {title: "Coffee error", message: error.message + "\r\n" + error.filename + ':' + error.location.first_line, sound: 'Pop'};
      }))
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('pub/jst'))
    .pipe(sync.stream());
});

gulp.task('stylus', function() {
  gulp.src('sty/main.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({ rawDefine: { data: data } })
    .on('error', notify.onError(function(error) {
      return {title: "Stylus error: " + error.name, message: error.message, sound: 'Pop' };
    }))
    .on('error', function(error) {
      console.log(error);
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('pub/css'))
    .pipe(sync.stream());

  gulp.src('sty/dbar.styl')
    .pipe(stylus())
    .pipe(gulp.dest('src/'))

});

gulp.task('jade', function() {
  gulp.src('tpl/**/*.jade')
    .pipe(jade({pretty: true, locals: {data: data}})
      .on('error', notify.onError(function(error) {
        return {title: "Jade error: " + error.name, message: error.message, sound: 'Pop' };
      }))
      .on('error', function(error) {
        console.log(error);
      })
    )
    .pipe(gulp.dest('pub'))
    .pipe(sync.stream());

  gulp.src('tpl/dbar.jade')
    .pipe(jade({pretty: true}))

});

gulp.task('sync', function() {
  sync.init({
    notify: false,
    open: false,
    server: {
      baseDir: 'pub/',
      }
    });

  gulp.watch('dat/**/*', ['slurp', 'coffee','stylus','jade']);
  gulp.watch('cof/**/*.coffee', ['coffee']);
  gulp.watch('sty/**/*.styl', ['stylus']);
  gulp.watch('tpl/**/*.jade', ['jade']);

});

gulp.task('watch', function() {
  gulp.watch('dat/**/*', ['slurp', 'coffee','stylus','jade']);
  gulp.watch('cof/**/*.coffee', ['coffee']);
  gulp.watch('sty/**/*.styl', ['stylus']);
  gulp.watch('tpl/**/*.jade', ['jade']);
});

gulp.task('default', ['slurp', 'coffee', 'stylus', 'jade', 'vendors']);


