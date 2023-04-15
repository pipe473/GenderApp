import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        console.log(process.env.MONGO_URI)
        mongoose.set('strictQuery', false);
        const connection = await mongoose.connect(process.env.MONGO_URI);
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB Connected in: ${url}`);        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default dbConnect;