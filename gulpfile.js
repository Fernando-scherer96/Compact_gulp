const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin'); // Importação com dynamic import
const uglify = require('gulp-uglify');

// Tarefa para compilar o SASS
gulp.task('sass', function () {
  return gulp.src('./source/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./build/styles'));
});

// Tarefa para comprimir as imagens
gulp.task('imagemin', function () {
    return gulp.src('./source/styles/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
});

// Tarefa para comprimir o código JavaScript
gulp.task('uglify', function () {
  return gulp.src('./source/styles/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/styles'));
});

// Tarefa padrão que executa todas as tarefas

 gulp.task('default', gulp.parallel('sass','imagemin','uglify'));
