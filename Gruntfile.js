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
                    "css/pizcas-ux-fuentes.min.css": "less/fuentes.less",
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

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: [
                    "js/jquery-1.11.1.min.js",
                    "js/imagelightbox.js"
                ],
                dest: "js/pizcas-ux.js",
            },
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    "js/pizcas-ux.min.js": [ "js/pizcas-ux.js" ]
                }
            }
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
  grunt.loadNpmTasks( "grunt-contrib-concat" );
  grunt.loadNpmTasks( "grunt-contrib-uglify" );

  // Tareas
  grunt.registerTask( "default", [ "less", "concat", "uglify" ] );
  grunt.registerTask( "desarrollo", [ "connect", "watch" ] );
};
