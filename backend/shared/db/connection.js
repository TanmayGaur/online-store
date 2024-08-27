import mongoose from "mongoose";
export const createConnection = async ()=>{
    try{
        const conInfo = await mongoose.connect(process.env.DB_URL);
        console.log('DB Connection Created... ');
        return conInfo;
    }
    catch(err){
        console.log('DB connection Fails... ', err);
        throw err;
    }
}