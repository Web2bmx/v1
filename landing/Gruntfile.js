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
				'css/styles.css': 'scss/styles.scss'
			}
		}
	},
        
        watch: {
            sass:{
                files: ["scss/*"],
                tasks: ["sass"]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
};
