var gulp = require("gulp"),
modernizr = require("gulp-modernizr");

gulp.task("modernizr", function(callback) {
	return gulp.src(["./app/assets/styles/**/*.css", "./app/assets/scripts/**/*.js"])
		.pipe(modernizr({
			"options": [
				"setClasses"
			]
		}))
		.pipe(gulp.dest("./app/src/scripts/"));
		calback();
});