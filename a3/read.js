var fs =require('fs');
fs.readFile(__dirname + '/' + filename, 'utf8', fucntion(err, data){
 			//stats[i] = stat;
 			console.log('');
 			console.log('\033[90m'+ data.replace(/ ( .*)/g,'  $1')+'\033[39m');
		});