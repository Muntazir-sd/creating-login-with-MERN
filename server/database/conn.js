import mongoose from "mongoose";

import {MongoMemoryServer} from "mongodb-memory-server";

async function connect() {
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    const db = await mongoose.connect(mongoUri);
    console.log("mongodb connected");
    return db
}

export default connect;