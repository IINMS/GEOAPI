const fs = require('fs');
 


ReadDir=function(_dirName) 
{
	 var data={}
	return   fs.readdirSync(_dirName, (err, files) => { 
  if (err) 
    console.log(err); 
   
      
 
}) 
	
}

ReadJsonFile=function(filePath){
  filePath=__dirname+"\\"+filePath;
 var data =fs.readFileSync(filePath, 'utf-8');
 return JSON.parse(data);
 

}
 
//var resFile=ReadFile("Rules/Comm.json");
//console.log(  resFile);


module.exports = { ReadJsonFile };