var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


/*********  WATCHING CHANGE ON TASKS   *********/
gulp.task('watch', (done) => {
	
	browserSync.init({
		notify: false,
		server: "app"
	});

	gulp.watch('./app/*.html').on('change', browserSync.reload);

	//Watching the change from the css folder
	gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles'));

	done();
});
