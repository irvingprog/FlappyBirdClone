module.exports = function(grunt) {

  grunt.initConfig({	
    typescript: {
      base: {
        src: ['src/**/*.ts'],
        dest: 'flappybird.js',
        options: {
          module: 'commonjs',
          target: 'es5',
          basePath: 'src',
            comments: true,
          }
        }
      },

    watch : {
      scripts : {
        files: ['src/**'],
        tasks : ['typescript']
      }
    }
  });


  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['typescript']);
}