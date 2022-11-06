import mongoose from "mongoose";

export default async function connectMongo(){
    mongoose.connect(process.env.URI)
        .then(()=>{
            console.log(`database connected by this uri ${process.env.URI}`)
        })
        .catch((error)=>{
            console.log(error)
        })
}