var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer'); //automatically adds webkit
 
gulp.task('sass', function () {
    gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
                browsers: ['last 5 versions'],
                cascade: false
            }))
        .pipe(minify())
        .pipe(concat('gulpstyles.css'))
        .pipe(gulp.dest('css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
	gulp.watch(['scss/*.scss'], ['sass'] );
});

// The default task (called when you run `gulp`)
gulp.task('default', ['watch', 'sass']);
