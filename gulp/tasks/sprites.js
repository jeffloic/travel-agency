var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');


var config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/template/sprite.css'
				}
			}
		}
	}
}

gulp.task('beginClean', (done => {
	return del(['./app/src/sprite', './app/assets/images/sprites']);
}))

gulp.task('createSprite', (done) => {
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/src/sprite'));
		done();
});

gulp.task('copySpriteGraphic', (done) => {
	return gulp.src('./app/src/sprite/css/**/*.svg')
		.pipe(gulp.dest('./app/assets/images/sprites'))
});

gulp.task('copySpriteCSS', (done) => {
	return gulp.src('./app/src/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/assets/styles/components'));
		done();
});

gulp.task('endClean', (done) => {
	return gulp.src('./app/src/sprite');
});


gulp.task('icons', gulp.series('beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean'));