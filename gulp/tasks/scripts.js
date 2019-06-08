var gulp = require("gulp"),
webpack = require("webpack"),
modernizr = require("gulp-modernizr");


gulp.task("modernizr", function() {
	return gulp.src(["./app/assets/styles/**/*.css", "./app/assets/scripts/**/*.js"])
		.pipe(modernizr({
			"options": [
				"setClasses"
			]
		}))
		.pipe(gulp.dest("./app/src/scripts/"));
});

gulp.task("scripts" , gulp.series(["modernizr"], function(callback) {
	(webpack(require("../../webpack.config.js"), function() {
	}))
	callback();
}));


