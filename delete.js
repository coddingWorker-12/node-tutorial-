const getdata = require('./mongodb');

const deleteData = async ()=>{
    let data = getdata();
    let result = (await data).deleteMany(
        {model:"m3 pro"}
    )
}
deleteData();