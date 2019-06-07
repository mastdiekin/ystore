var gulp               = require('gulp');
var config             = require('../package.json');
var config             = require('./config');
var sass               = require('./sass');
var server             = require('./server');
var runSequence        = require('run-sequence');

gulp.task('watch', ['setWatch', 'webpack:watch', 'sass', 'nunjucks', 'images', 'copy:fonts', 'copy:libs', 'copy:css', 'copy:jslibs'], function () {
	gulp.watch(config.source.sass + '/**/*.{sass,scss}', ['setWatch', 'sass']);

	gulp.watch(config.source.pages + '/**/*.html', ['nunjucks']);

	gulp.watch(config.source.images + '/svg/*.*', ['svg-sprites']);

	gulp.watch(config.source.images + '/**/*.*', ['images']);

	gulp.watch(config.source.fonts + '/*.*', ['copy:fonts']);

	gulp.watch(config.source.libs + '/**/*.*', ['copy:libs']);

	gulp.watch(config.source.root + '/css/**/*.*', ['copy:css']);

	gulp.watch(config.source.js + '/lib/**/*.*', ['copy:jslibs']);
});

gulp.task('default', function(cb) {
	runSequence(
		'build:dev',
		'watch',
		'server',
		cb
	);
});