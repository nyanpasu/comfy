module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		swig: {
			dist: {
				init: {
					root: "pages/",
					allowErrors: false,
					autoescape: true
				},
				//banners: grunt.file.readJSON('pages/banners.json'),
				max_upload_size: 512,
				dest: "dist/",
				cwd: "pages/",
				generateSitemap: false,
				generateRobotstxt: false,
				src: [
					'index.swig',
					'about.swig',
					'tools.swig',
					'removed.swig'
				],
				siteUrl: 'http://comfy.moe/',
				production: false,
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: false,
					collapseWhitespace: false,
					conservativeCollapse: false,
					removeEmptyAttributes: false
				},
				files: [{
					expand: true,
					cwd: 'dist/',
					src: '**/*.html',
					dest: 'dist/'
				}]
			}
		},
		uglify: {
			dist: {
				files: {
					'dist/pomf.min.js': [
						'js/zepto.js',
						'js/cheesesteak.js',
						'js/cabinet.js',
						'js/pomf.js'
					]
				}
			}
		},
		cssmin: {
			dist: {
				files: {
					'dist/pomf.min.css': [
						'css/pomf.css'
					]
				}
			}
		},
		mkdir: {
			options: {
				mode: 0700,
				create: ['dist/img']
			}
		},
		//imagemin: {
		//	dist: {
		//		files: [{
		//			expand: true,
		//			cwd: 'img/',
		//			src: '**/*.{png,jpg,gif}',
		//			dest: 'dist/img/'
		//		}]
		//	}
		//},
		copy: {
			dist: {
				files: [{
					expand: true,
					cwd: 'static/',
					src: '**',
					dest: 'dist/'
				},{
					expand: true,
					cwd: 'img/',
					src: '**/*.{png,jpg,gif}',
					dest: 'dist/img/'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-swig');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-copy');

	//grunt.registerTask('default', ['mkdir', 'swig', 'htmlmin', 'cssmin', 'uglify', 'imagemin', 'copy']);
	grunt.registerTask('default', ['mkdir', 'swig', 'htmlmin', 'cssmin', 'uglify', 'copy']);
};
