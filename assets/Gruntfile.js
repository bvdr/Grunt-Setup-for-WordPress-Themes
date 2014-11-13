'use strict';
module.exports = function (grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        // watch for changes and trigger compass, jshint, uglify and livereload
        watch: {
            options: {
                livereload: true,
            },
            compass: {
                files: ['sass/**/*.{scss,sass}'],
                tasks: ['compass']
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['uglify']
            },
            livereload: {
                files: ['*.html', '*.php', '../img/**/*.{png,jpg,jpeg,gif,webp,svg}']
            }
        },

        // compass and scss
        compass: {
            dist: {
                options: {
                    sassDir: 'sass/',
                    cssDir: '../css',
                    imagesDir: '../img',
                    images: '../img',
                    javascriptsDir: '../js',
                    fontsDir: '../fonts',
                    environment: 'production',
                    outputStyle: 'compressed',
                    relativeAssets: true,
                    noLineComments: true,
                    force: true,
                    sourcemap: true
                }
            }
        },

        // javascript linting with jshint
        jshint: {
            options: {
                jshintrc: 'node_modules/grunt-contrib-jshint/.jshintrc',
                "bitwise": true,
                "browser": true,
                "curly": true,
                "eqeqeq": true,
                "eqnull": true,
                "es5": true,
                "esnext": true,
                "immed": true,
                "jquery": true,
                "latedef": true,
                "newcap": true,
                "noarg": true,
                "node": true,
                "strict": false,
                "trailing": true,
                "undef": true,
                "globals": {
                    "jQuery": true,
                    "alert": true
                }
            },
            all: [
                'Gruntfile.js',
                'js/*.js'
            ]
        },

        // uglify to concat, minify, and make source maps
        uglify: {
            dist: {
                options: {
                    mangle: {
                        except: ['jQuery', 'Backbone']
                    },
                    sourceMap: false //'js/map/source-map.js'
                },
                files: {
                    '../js/plugins.js': [
                        'js/vendor/**/*.js',
                        '!js/vendor/modernizr*.js'
                    ],
                    '../js/actions.js': [
                        'js/actions.js'
                    ]
                }
            }
        },

        // image optimization
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: '../img/',
                    src: '**/*',
                    dest: '../img/'
                }]
            }
        },

        // deploy via rsync
        //deploy: {
        //    staging: {
        //        src: "./",
        //        dest: "~/path/to/theme",
        //        host: "user@host.com",
        //        recursive: true,
        //        syncDest: true,
        //        exclude: ['.git*', 'node_modules', '.sass-cache', 'Gruntfile.js', 'package.json', '.DS_Store', 'README.md', 'config.rb', '.jshintrc']
        //    },
        //    production: {
        //        src: "./",
        //        dest: "~/path/to/theme",
        //        host: "user@host.com",
        //        recursive: true,
        //        syncDest: true,
        //        exclude: '<%= rsync.staging.exclude %>'
        //    }
        //}

    });

    // rename tasks
    grunt.renameTask('rsync', 'deploy');

    // register task
    grunt.registerTask('default', ['watch']);

};