//console.log(process.stdin);
var commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
	var cmd = data.toString().trim();
	cmd = commands[cmd]();
	
	process.stdout.write('You type: ' + cmd);
	process.stdout.write('\nprompt > ');
});


	/*} else if(cmd === 'argv'){
		cmd = process.argv[0];
	}*/