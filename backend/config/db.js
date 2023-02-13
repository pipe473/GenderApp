import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const connection = await mongoose.connect('mongodb+srv://pipe473:PipeS€cret2023@cluster0.jackw7v.mongodb.net/genre', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB Connected in: ${url}`);
        
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}

export default dbConnect;