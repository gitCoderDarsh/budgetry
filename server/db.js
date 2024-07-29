import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const connection = await mongoose.connect('mongodb://localhost:27017/budgetry');
        console.log(`MongoDB connected: ${connection.connection.host}`)
    }catch(error){
        console.error('error connecting to DB',error);
        process.exit(1);
    }
}

export default connectDB;
