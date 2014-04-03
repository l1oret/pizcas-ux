module.exports = function(grunt) {

  // Configuracion del proyecto
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


      less: {
        desarrollo: {
          options: {
            paths: [ "css" ]
          },
          files: {
            "css/pizcas-bootstrap.css": "less/pizcas-bootstrap.less"
          }
        }
      },

      watch: {
        options: {
          livereload: true
        },
        css: {
          files: [ "less/*.less" ],
          tasks: [ "less" ],
          options: {
            spawn: false,
          },
        },
      },

      connect: {
        server: {
          options: {
            port: 8000,
            base: './'
          }
        }
      }

  });


  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Tareas
  grunt.registerTask('default', ['less']);
  grunt.registerTask('desarrollo', ['connect', 'watch']);
};
