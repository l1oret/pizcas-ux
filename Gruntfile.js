module.exports = function ( grunt ) {

    // Configuracion del proyecto
    grunt.initConfig( {
        pkg: grunt.file.readJSON( "package.json" ),

        banner: "/*! Pizcas UX v<%= pkg.version %>, MIT License, <%= pkg.homepage %> */",

        less: {
            desarrollo: {
                options: {
                    paths: [ "css" ],
                    report: "min",
                    cleancss: true
                },
                files: {
                    "css/pizcas-ux.min.css": "less/pizcas-ux.less",
                    "css/tema.min.css": "less/tema.less"
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
                    base: "./"
                }
            }
        }
    } );

  grunt.loadNpmTasks( "grunt-contrib-less" );
  grunt.loadNpmTasks( "grunt-contrib-watch" );
  grunt.loadNpmTasks( "grunt-contrib-connect" );

  // Tareas
  grunt.registerTask( "default", [ "less" ] );
  grunt.registerTask( "desarrollo", [ "connect", "watch" ] );
};
