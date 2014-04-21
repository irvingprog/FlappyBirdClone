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
  });


  grunt.loadNpmTasks('grunt-typescript');
  grunt.registerTask('default', ['typescript']);
}