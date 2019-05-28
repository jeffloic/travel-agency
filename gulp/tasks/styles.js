const gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
browserSync = require('browser-sync').create();


// gulp.task('styles',gulp.series('styles', function(done) {
//   return gulp
//     .src("./app/assets/styles/styles.css")
//     .pipe(postcss([cssImport(), mixins(), cssvars(), nested(), autoprefixer()]))
//     .pipe(gulp.dest('./app/src/styles'))
//     .pipe(gulp.dest("./_site/assets/css/"))
//     .pipe(browsersync.stream());
//     done();
// }));


/*********  STYLING TASK   *********/
gulp.task('styles', function(done) {
	return gulp
		.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
		// .on('error', function(errorInfo) {
		// 	console.log(errorInfo.toString());
		// 	this.emit('end');
		// })
 
		.pipe(gulp.dest('./app/src/styles'))
		.pipe(browserSync.stream());
		done();
});

// .on('error', function(err) {
  //           console.error(err.message);
  //           browserSync.notify(err.message, 3000); // Display error in the browser
  //           this.emit('end'); // Prevent gulp from catching the error and exiting the watch process
  //         })
		






// // Static Server + watching scss/html files
// gulp.task('serve', ['styles'], function(done) {

//     browserSync.init({
//         server: "app"
//     });

//     gulp.watch("./app/*.html").on('change', browserSync.reload);

// 	//Watching the change from the css folder
// 	gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles'));
// 	done();
// });

// // Compile sass into CSS & auto-inject into browsers
// gulp.task('styles', function() {
//     return gulp.src('./app/assets/styles/styles.css')
// 		.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
// 		.on('error', function (err) {
//             console.error('Error!', err.message);
//         })
// 		.pipe(gulp.dest('./app/src/styles'))
// 		.pipe(browserSync.stream());
// });

// gulp.task('default', ['serve']);



