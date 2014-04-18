module.exports = function ( grunt ) {

    // Configuracion del proyecto
    grunt.initConfig( {
        pkg: grunt.file.readJSON( "package.json" ),

        banner: "/*! Pizcas UX v<%= pkg.version %>, MIT License, <%= pkg.homepage %> */",

        less: {
            desarrollo: {
                options: {
                    paths: [ "css" ]
                },
                files: {
                    "css/pizcas-ux.css": "less/pizcas-ux.less",
                    "css/tema.css": "less/tema.less"
                }
            }
        },

        cssmin: {
            combine: {
                options: {
                    banner: "<%= banner %>",
                    keepSpecialComments: 0
                },
                files: {
                    "css/pizcas-ux.min.css": [ "css/pizcas-ux.css" ],
                    "css/tema.min.css": [ "css/tema.css" ]
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            css: {
                files: [ "less/*.less" ],
                tasks: [ "less", "cssmin" ],
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
  grunt.loadNpmTasks( "grunt-contrib-cssmin" );
  grunt.loadNpmTasks( "grunt-contrib-watch" );
  grunt.loadNpmTasks( "grunt-contrib-connect" );

  // Tareas
  grunt.registerTask( "default", [ "less", "cssmin" ] );
  grunt.registerTask( "desarrollo", [ "connect", "watch" ] );
};
