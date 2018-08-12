console.log(' from module b');


module.exports = add ;

function add (x,y){
return x+y;
}

add.prototype.kill = function (){
return 0;
}
