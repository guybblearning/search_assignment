const fs = require('fs');
const path = require('path');
const dirPath = path.resolve(__dirname);
let filesArray;

if (process.argv.length < 3) {
 console.log('USAGE: node ' + ' search' + ' [EXT]' + ' [TEXT]');
 process.exit(1);
}

fs.readdir(dirPath, (err, files) => {
  filesArray = files.filter( (e) => {
  return path.extname(e).toLowerCase() === ('.' + process.argv[2])
  });

  filesArray.map(fileName => {
    fs.readFile(fileName, (err, cont) => {
      if (err)
        throw err;
      if(cont.indexOf(process.argv[3]) > -1){
        console.log(__dirname+'\\' + fileName);
      } else{
        console.log('No file was found');
      }
    });
  })

});