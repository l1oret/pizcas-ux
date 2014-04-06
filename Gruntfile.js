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
                    "css/pizcas-ux.css": "less/pizcas-ux.less"
                }
            }
        },

        cssmin: {
            combine: {
                options: {
                    banner: "<%= banner %>"
                },
                files: {
                    "css/pizcas-ux.min.css": [ "css/pizcas-ux.css" ]
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
  grunt.loadNpmTasks( "grunt-contrib-cssmin" );
  grunt.loadNpmTasks( "grunt-contrib-watch" );
  grunt.loadNpmTasks( "grunt-contrib-connect" );

  // Tareas
  grunt.registerTask( "default", [ "less", "cssmin" ] );
  grunt.registerTask( "desarrollo", [ "connect", "watch" ] );
};
