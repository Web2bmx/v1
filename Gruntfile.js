/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
                outputStyle: "expanded",
                includePaths: ["node_modules"]
            },
            dist: {
                files: {
                    'crea/css/styles.css': 'crea/scss/styles.scss',
                    'landing/css/styles.css': 'landing/scss/styles.scss',
                    'tour/css/tour.css': 'tour/scss/tour.scss',
                    'crea/Templates/Template-001/css/styles.css': 'crea/Templates/Template-001/scss/styles.scss',
                    'crea/Templates/Template-002/css/styles.css': 'crea/Templates/Template-002/scss/styles.scss',
                    'crea/Templates/Template-003/css/styles.css': 'crea/Templates/Template-003/scss/styles.scss',
                    'crea/Templates/Template-004/css/styles.css': 'crea/Templates/Template-004/scss/styles.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ["**/scss/**.scss", "!**/node_modules/**","!**/font-awesome/**"],
                tasks: ["sass"]
            },
            options: {
                interval: 1000
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
};
