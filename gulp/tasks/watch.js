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
	gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles', function() {
		return gulp.src('./app/assets/styles/styles.css')
			.pipe(browserSync.stream());
	}));
	gulp.watch('./app/assets/scripts/**/*.js', gulp.series('scripts', function() {
		return gulp.src('./app/assets/scripts/App.js')
			.pipe(browserSync.stream());
	}));

	done();
});
