const gulp = require("gulp");
const eslint = require("gulp-eslint")
const fs = require("fs");
let mocha = require('gulp-mocha');
let shell = require('gulp-shell');

gulp.task('lint', () => {
    return gulp.src(['src/**.js', 'src/**/**.js', '!test/**', '!node_modules/**']) //fetch the files
        .pipe(eslint()) //runs eslint on files fetched from gulp.src
        .pipe(eslint.format()) //provide error report in terminal
        .pipe(eslint.format('html', fs.createWriteStream('lintReports/lint_report.html')))
        .pipe(eslint.format('checkstyle', fs.createWriteStream('lintReports/checkstyle.xml')))
        .pipe(eslint.failAfterError())

})
gulp.task('test', () => {
    return gulp.src(['test/*.js'])// fetching all test case files
        .pipe(mocha(
            {
                reporter: 'mocha-junit-reporter', //npm package to generate report
                reporterOptions: {
                    mochaFile: './testReport/JUnit/file.xml'
                }
            }
        )) //running mocha
        .on('error', console.error)
});

gulp.task('coverage', shell.task([
    'nyc --reporter=lcov --reporter=text mocha'
]));

