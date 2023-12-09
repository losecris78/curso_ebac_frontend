const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');



function compilar_sass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle:'compressed'
    }))
    .pipe(gulp.dest('./build/styles'));
}
function compressor(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}
function image_compressor(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));

}

/*
function default_function (){

};



exports.default = gulp.series(default_function, minimize);*/
exports.sass = compilar_sass;
exports.watch = function(){
    gulp.watch('./source/styles/*.scss',gulp.series(compilar_sass,compressor,image_compressor));
};
exports.javascript = compressor;
exports.images= image_compressor;