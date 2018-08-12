//require('color');
var fs = require('fs')
	,stdin = process.stdin
	,stdout = process.stdout;

fs.readdir(process.cwd(), function (err, files) {
  console.log('');
  if (!files.length) {
    return console.log('    \033[31m No files to show!\033[39m\n');
	}
  	console.log(' Select which file or directory you want to see\n');
  	//var stats = [];
  	function file(i) {
    	var filename = files[i];

 	fs.stat(__dirname + '/' + filename, function (err, stat) {
		//stats[i] = stat;
      	if (stat.isDirectory()) {
		console.log('     '+i+ ' \033[36m' + filename + '/\033[39m ');
      	} else {
        	qconsole.log('     '+i+ '\033[90m' + filename + '\033[39m');
    	}
      	//i++;
      	/*
      	// version 1
      	if (i == files.length) {
      	//check if program has reach all the files
      	// and now we can do the rest of the prorams
        console.log('');
        process.stdout.write('\033[33mEnter your choice: \033[39m');
         process.stdin.resume();
         //process.stdin.setEncoding('utf8');

         // model to read user input 
         process.stdin.on('data',function (num){
         process.stdout.write('\n'+num);
         //process.stdout.write('\n'+filename[data]);       
         fs.readFile(num,'utf8',function(err,content){
         	if(!err) console.log(content)
         });  
     	//return num;
         })
      	} else {
        file(i);
		}
	});
	}
	file(0);
	// this is used to show all the files and the point is moving from times to time
	//file(1);
});
*/
if(++i == files.length){
	read();
	}else{
	file(i);
	}
	});
		
function read(){
 	console.log('');
 	stdout.write( 'Enter your choice');

 	stdin.resume();
 	stdin.setEncoding('utf8');

 	stdin.on('data',option);
}
 function option(data){
	var filename = files[number(data)];

 	if (!filesname) {
 	stdout.write(' enter your choice:');

 	}else{
 		stdin.pause();
 		fs.readFile(__dirname + '/' + filename, 'utf8', fucntion(err, data){
 			
 			console.log('');
 			console.log('\033[90m'+ data.replace(/(.*)/g,'  $1') + '\033[39m');
		});
 	}
	}







