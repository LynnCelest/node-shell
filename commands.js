var fs = require('fs');

module.exports = {
  pwd: function() {
    // pwd code
	return process.cwd();//cwd is the current working directory
  },
  date: function() {
  	return new Date();
  },
  ls: function(){
  	var str = '';
  	fs.readdir('.', function(err, files) {
  	if (err) throw err;
  	files.forEach(function(file) {
    str =+ file.toString();
  	});//foreach
  });//readdir
  	return str;
  }//ls
}