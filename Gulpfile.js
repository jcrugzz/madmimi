var gulp  = require('gulp')
,   mocha = require('gulp-mocha');

gulp.task('test', function () {
  gulp.src('test/*.test.js')
    .pipe(mocha());
});

gulp.task('default', function () {
  gulp.watch('lib/**/**', ['test']);
});
