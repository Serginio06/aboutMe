/**
 * Created by sergiiivanchenko on 22/09/2017.
 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require ('gulp-sass');
var concat = require('gulp-concat');
var Path = require('path');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('process-scss',function () {
    gutil.log('Processing scss...');
    return gulp.src('src/**/*.scss')
               .pipe(sourcemaps.init({ loadMaps: true }))  // Process the original sources
               .pipe(concat('all.scss'))
               // .pipe(gulp.dest('src'))
               .pipe(sass ().on ('error', sass.logError))
               .pipe(sourcemaps.write('./'))// Add the map to modified source.
               .pipe(gulp.dest('src'));
});

gulp.task ('watch', function () {
    gulp.watch ('src/**/*.scss', [ 'process-scss']);
});

gulp.task('default', [ 'process-scss','watch']);