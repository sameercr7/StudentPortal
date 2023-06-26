const mongoose=require('mongoose')

const url=
"mongodb://sakshee278:sak27db@ac-1fv9oie-shard-00-00.mlykikk.mongodb.net:27017,ac-1fv9oie-shard-00-01.mlykikk.mongodb.net:27017,ac-1fv9oie-shard-00-02.mlykikk.mongodb.net:27017/?ssl=true&replicaSet=atlas-aq7207-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect=()=>{
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('MongoDB connected successfully')
    }).catch((error)=> console.log("Error: ",error))
}