const gulp = require('gulp'),
postcss = require('gulp-postcss'),
hexrgba = require('postcss-hexrgba'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
browserSync = require('browser-sync').create();


/*********  STYLING TASK   *********/
gulp.task('styles', (done) => {
	return gulp
		.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
		.pipe(gulp.dest('./app/src/styles'))
		.pipe(browserSync.stream());
		done();
});

