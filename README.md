# Grunt setup for WordPress Themes 

### Included: 

* SASS files atomic structure
* JavaScript folders and starter files for Plugins and Actions
* Basic Grunt setup with: **compass**, **imagemin**, **jshint**, **uglify**, **watch**, **rsync**
* CSS source maps
---
### How to install:

1. Copy `assets` folder to your theme
2. Run `npm install` in `assets` folder to get the latest grunt dependencies for this project (you might need to run it with `sudo` depending on your environment)
2. Configure the output by editing ```Gruntfile.js```
3. Run ```grunt watch``` in `assets` folder

---

### Stuff used to make this:

 * [Grunt](http://gruntjs.com) as the main runner
 * [Atomic SASS with Gulp and Jekyll testing](https://github.com/ericwkw/SASS_project_structure_atomic) as inspiration for the atomic structure
