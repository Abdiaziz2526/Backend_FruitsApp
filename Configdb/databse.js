import mongoose from "mongoose";

const connectTodb = async()=>{
    try {
        const url = 'mongodb+srv://abdiplayer00000:2526gotocode@cluster0.f7ufyjv.mongodb.net/FruitsApp?retryWrites=true&w=majority'
        const conn = await mongoose.connect(url)
        console.log(`Connected to database ${conn.connection.name}`)



    
    }catch(err){
        console.log(err);

    } 
}

export default connectTodb