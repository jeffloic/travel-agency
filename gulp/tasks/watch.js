 var gulp = require('gulp'),
 watch = require('gulp-watch'),
 browserSync = require('browser-sync').create();


/*********  WATCHING CHANGE ON TASKS   *********/
 gulp.task('watch', (done) => {
 	browserSync.init({
 		notify: false,
 		server: {
      baseDir: "app",
      online: true
  }
 	});

 // Watching the change from the index.html
 watch('./app/index.html', function() {
    browserSync.reload();
  });


 //Watching the change from the css folder
 watch('./app/assets/styles/**/*.css', gulp.series('styles', function() {
 	return gulp.src('./app/assets/styles/styles.css')
 		.pipe(browserSync.stream());
 }));


 //Watching the change from the css folder
 watch('./app/assets/scripts/**/*.js', gulp.series('scripts', function() {
 		return gulp.src('./app/assets/scripts/App.js')
 			.pipe(browserSync.stream());
 }));

 	done();
 });

// var gulp = require('gulp'),
// watch = require('gulp-watch'),
// browserSync = require('browser-sync').create();

// gulp.task('watch', function(done) {

//   browserSync.init({
//     notify: false,
//     server: {
//       baseDir: "app",
//       online: true
//     }
//   });

//   watch('./app/index.html', function() {
//     browserSync.reload();
//   });

//   watch('./app/assets/styles/**/*.css', gulp.series('cssInject'));
// 		// .pipe(browserSync.stream());
//   // });

//   watch('./app/assets/scripts/**/*.js', gulp.series('scriptsRefresh'));
//     // return gulp.series('scriptsRefresh');

//   // })

//   done();
// });

// gulp.task('cssInject', gulp.series('styles', function(done) {
//   return gulp.src('./app/temp/styles/styles.css')
//     .pipe(browserSync.stream());
//     done();
// }));

// gulp.task('scriptsRefresh', function(done) {
//   browserSync.reload();
//   done();
// });
