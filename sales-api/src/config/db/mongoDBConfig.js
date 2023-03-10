import mongoose from "mongoose";

import { MONGO_DB_URL } from "../constants/secrets.js";

export function connectMongoDB() {
    mongoose.set('strictQuery', false);
    mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true, serverSelectionTimeoutMS: 180000 })
    .then(()=> console.info("The application connected to MongoDB successfully!"))
    .catch((err) => console.error(err));  
};
