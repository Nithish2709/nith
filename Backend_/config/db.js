const mongoose=require("mongoose")



const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://nithishk2024aids_db_user:1VWFsDgAqbb7K2Zs@cluster0.qepzzeq.mongodb.net/?appName=Cluster0");
            console.log("MongoDB connected");
        }
        catch(error){
        console.error(`Error:${error.message}`);
        process.exit(1);
    }
}
module.exports=connectDB;