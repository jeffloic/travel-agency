var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


/*********  WATCHING CHANGE ON TASKS   *********/
gulp.task('watch', function(done) {
	
	browserSync.init({
		notify: false,
		server: "app"
	});

	gulp.watch('./app/*.html').on('change', browserSync.reload);

	//Watching the change from the css folder
	gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles'));

	done();
});

// // Watch Sass & Serve
// gulp.task('watch', gulp.series('styles',  function(done) {


//   browserSync.init({
// 		notify: false,
// 		server: "app"
// 	});
  	
//   gulp.watch(['./app/assets/styles/**/*.css'], gulp.series('styles'));
//   gulp.watch("./app/*.html").on('change', browserSync.reload);
//   done();
// }));

// // Default Task
// gulp.task('default', 'watch');




