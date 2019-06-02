var gulp = require('gulp'),
webpack = require('webpack');

// gulp.task('scripts', function(callback) {
// 	webpack(require('../../webpack.config.js'), function() {
// 	callback();
// 	});
// });

gulp.task('scripts' , function(callback) {
	(webpack(require('../../webpack.config.js'), function() {
		callback();
	}))
});

// gulp.task('scripts', function(callback) {
// 	return gulp.src('./app/assets/scripts')
// 		.pipe(webpack(require('../../webpack.config.js')));
// 		callback();
// });


// '../../node_modules/babel-preset-env'