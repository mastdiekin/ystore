var gulp         = require('gulp');
var config       = require('./config.js');
var cache        = require('gulp-cache');

gulp.task('copy:fonts', function() {
	return gulp
		.src(config.source.fonts + '/**/*.{ttf,eot,woff,woff2}')
		.pipe(gulp.dest(config.dist.fonts));
});

gulp.task('copy:libs', function() {
	return gulp
		.src(config.source.libs + '/**/**.*')
		.pipe(gulp.dest(config.dist.libs));
});

gulp.task('copy:css', function() {
	return gulp
		.src(config.source.root + '/css/**/**.*')
		.pipe(gulp.dest(config.dist.root +'/css'));
});

gulp.task('copy:sftp', function() {
	return gulp
		.src('sftp-config.json')
		.pipe(gulp.dest(config.dist.root));
});

gulp.task('copy:jslibs', function() {
	return gulp
		.src(config.source.js + '/lib/**/*.*')
		.pipe(gulp.dest(config.dist.js + '/lib'));
});

gulp.task('gh-pages', function() {
	return gulp
		.src([
			config.dist.root +'/**/**.*',
			config.dist.root +'/images/svg/dest/**.*',
			// '!' + config.dist.root +'/libs/**/**.*',
			'!' + config.dist.root +'/images/svg/**.*',
			'!' + config.dist.root +'/layout/**/**.*',
			'!' + config.dist.root +'/js/report.html',
			'!' + config.dist.root +'/js/lib/hello.js'
		])
		.pipe(gulp.dest(config.docs.root));
});

gulp.task('copy', [
	'images',
	'svg-sprites',
	'copy:fonts',
	'copy:libs',
	'copy:css',
	'copy:jslibs',
	'copy:sftp'
]);