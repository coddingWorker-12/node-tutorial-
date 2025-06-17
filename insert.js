const getdata = require('./mongodb');

const insertData = async ()=>{
    let data = await getdata();
    let result = await data.insertMany(
        [
        {model:"m2 pro",brand:"poco",price:300,category:"mobile"},
         {model:"m3 pro",brand:"poco",price:400,category:"mobile"},
          {model:"m4 pro",brand:"poco",price:500,category:"mobile"},
   ]
 )
}

insertData();