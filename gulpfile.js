const {src, dest, series} = require('gulp');
const uglify = require ('gulp-uglify');
const rename = require('gulp-rename');
const ts = require('gulp-typescript');
const serveIndex = require('serve-index');

function streamTS() {

    return src('src/**/*.ts')
        .pipe(ts()).js
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(dest('public'));
}

function streamHTML() {

    return src('src/*.html')
        .pipe(dest('public'));
}

exports.html = streamHTML;
exports.default = series( streamTS, streamHTML);