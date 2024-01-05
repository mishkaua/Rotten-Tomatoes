import mongoose, { Model } from "mongoose"

const { DATABASE_URL } = process.env

 const connect = async () => {
    const conn = await mongoose
      .connect(DATABASE_URL as string)
      .catch(err => console.log(err))
    console.log("Mongoose Connection Established")
} 

export default connect;