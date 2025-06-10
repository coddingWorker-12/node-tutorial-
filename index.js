const fs = require('fs');
const path = require('path');
let pathname = path.join(__dirname,'files');
console.log(pathname);

// for(i=0;i<5;i++){
//    fs.writeFileSync(pathname+`/hello${i}.txt`,'hello its a trile file');
// }

fs.readdir(pathname,(err,files)=>{
   files.forEach((item)=>{
      console.log('your file is :',item);
   })
})