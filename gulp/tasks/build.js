var gulp = require("gulp"),
imagemin = require("gulp-imagemin"),
del = require("del"),
usemin = require("gulp-usemin"),
rev = require("gulp-rev"),
cssnano = require("gulp-cssnano"),
uglify = require("gulp-uglify"),
browserSync = require("browser-sync").create();


gulp.task("previewDist", function(done){
	browserSync.init({
 		notify: false,
 		server: {
      baseDir: "docs"
  }
 	});

 	done();

});

gulp.task("deleteDistFolder", function() {
	return del("./docs")
});

gulp.task("copyGeneralFiles", function() {
  var pathsToCopy = [
    "./app/**/*",
    "!./app/index.html",
    "!./app/assets/images/**",
    "!./app/assets/styles/**",
    "!./app/assets/scripts/**",
    "!./app/src",
    "!./app/src/**"
  ]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));
});

gulp.task("optimizeImages", function(callback) {
	return gulp.src(["./app/assets/images/**/*", "!./app/assets/images/icons", "!./app/assets/images/icons/**/*"])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest("./docs/assets/images"));
		callback();
});

gulp.task("usemin", function(callback) {
	return gulp.src("./app/index.html")
		.pipe(usemin({
			css: [function() {return rev()}, function() {return cssnano()}],
			js: [function() {return rev()}, function() {return uglify()}]
		}))
		.pipe(gulp.dest("./docs"));
		callback();
});

gulp.task("build", gulp.series("deleteDistFolder", "copyGeneralFiles", "optimizeImages", "usemin"));

