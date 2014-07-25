module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      dev: {
        files: ["./memory/index.html"]
      }
    }
  });

  //使うプラグインの読み込み
  grunt.loadNpmTasks('grunt-contrib-watch');

};
