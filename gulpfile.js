var gulp = require("gulp");
var sass = require("gulp-sass");

// watches the scss files and runs sass whenever they are modified
gulp.task("watch", function(){
  gulp.watch("public/scss/**/*.scss", ["sass"]);
  // can add more watch statements
});

// default gulp task
gulp.task("default", function() {
  // place code for your default task here
});

// print hello zell to console
gulp.task("hello", function(){
  console.log("Hello Zell!");
});

// convert sass file to css
gulp.task("sass", function(){
  return gulp.src("public/scss/**/*.scss")
            .pipe(sass())
            .pipe(gulp.dest("public/css"));
});
