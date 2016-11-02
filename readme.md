![](example.gif)
dbar
====

A progress bar inspired by playing too much Destiny.


[![npm version](https://badge.fury.io/js/dbar.svg)](https://badge.fury.io/js/dbar)


[![NPM](https://nodei.co/npm/dbar.png)](https://nodei.co/npm/dbar/)

You can see the demo and examples [here](http://dbar.256.codes) at [http://dbar.256.codes](http://dbar.256.codes)


Example Usage


* Initiaate the progress bar
```javascript
dbar.i()
```
* Set the progress bar to 25%
```javascript
dbar.perc(0.25)
```
* Complete and remove the progress bar
```javascript
dbar.d()
```


Installation
------------

If you are using npm, you can

```bash
$ npm install dbar
```

Add/merge the following files to your project
* [dbar.js](dist/dbar.js)
* [dbar.css](dist/dbar.css)
* [dbar.html](dist/dbar.html)

Example (gulp)

```javascript
gulp.task('vendor', function() {

  gulp.src(['node_modules/dbar/dist/dbar.js'])
  .pipe(concat('vendor.js')).pipe(gulp.dest('public/js/'));

  gulp.src(['node_modules/dbar/dbar.css'])
  .pipe(concat('vendor.css')).pipe(gulp.dest('public/css/'));

  gulp.src(['node_modules/dbar/dbar.html'])
  .pipe(concat('vendor.html')).pipe(gulp.dest('public/html/'));

});

```
