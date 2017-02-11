/*eslint-env node */

// establishes gulp dependencies
var gulp = require('gulp');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var gutil = require('gulp-util');
var WebpackCluster = require('webpack-cluster');

//publishes content, calls tasks that copy content over
gulp.task('public', [
	'copy-html',
	'copy-html-components',
	'copy-images',
	'copy-sw',
	'copy-jsSW',
	'copy-json'
]
);

// copy js files over to public folder, into a single file
// this can be re-used for CSS compilation
gulp.task('scripts', function() {
  gulp.src('./components/js/*.js')
    .pipe(babel({
            presets: ['es2015']
    }))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/components/js/'));
});


// copies over js SW files
gulp.task('copy-jsSW', function() {
	gulp.src('./components/js/sw/*.js')
		.pipe(gulp.dest('./public/components/js/sw'));
});

// copies over json files
gulp.task('copy-json', function() {
	gulp.src('./components/json/*.json')
		.pipe(gulp.dest('./public/components/json'));
});


/* copies over json files
gulp.task('copy-bower', function() {
	gulp.src('./components/bower_components/**')
		.pipe(gulp.dest('./public/components/bower_components'));
});
*/

// copies ALL html over from root to the public folder. This can be used for json / template files
// USE THIS to setup these two tasks in the future when json files are in the right place
gulp.task('copy-html', function() {
	gulp.src('index.html')
		.pipe(minifyInline())
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./public'));
});

// copies SW over from root to the public folder. 
gulp.task('copy-sw', function() {
	gulp.src('service-worker.js')
		.pipe(gulp.dest('./public'));
});

// copies ALL html over from components to the public folder. This can be used for json / template files
gulp.task('copy-html-components', function() {
	gulp.src('components/*.html')
		.pipe(vulcanize({
	      stripComments: true,
	      inlineScripts: true,
	      inlineCss: true
	    }))
		.pipe(minifyInline())
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./public/components'));
});


// copies images over to the public folder
gulp.task('copy-images', function() {
	gulp.src('img/*.jpg')
		.pipe(gulp.dest('public/components/img'));
});

// copies css over to the public folder, after converting from scss
gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('public/css'))
		.pipe(browserSync.stream());
});
 
var webpackCluster = new WebpackCluster({
    dryRun: false,
    concurrency: 10,
    failures: {
        sysErrors: true,
        errors: true,
        warnings: true
    }
});
 
gulp.task('create-bundle', [], callback => {
    webpackCluster.run([
        './webpack.config.js'
    ]);
});
 