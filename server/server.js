import express from "express";
import cors from "cors";
import morgan from "morgan";

import connect from "./database/conn.js";

const app = express();

// *** middleware *** //
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable('x-powered-by');


const port = 8080

// *** HTTP GET Request *** //

app.get("/", async (req, res) => {
    res.status(201).json("Hello World");
})

// *** Start Server *** //

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`server is running on port ${port}`)
        })
    } catch (error) {
        console.log("cannot connect to server")
    }
}).catch(error=>{
    console.log("cannot connect to database")
})

