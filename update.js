const getdata = require('./mongodb');

const deleteData = async ()=>{
    let data = await getdata();
    let result = data.updateMany(
        {model:"poco m2 pro"},
        { $set: {price:500}}
    )

}
deleteData();