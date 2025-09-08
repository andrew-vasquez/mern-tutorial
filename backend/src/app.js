import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

connectDB();

app.use(express.json()) //this middleware is used to parse the request body

//this middleware is used to log the request method and path
// app.use((req, res, next) =>{
//     console.log(`${req.method} is the method and ${req.url} is the path`);
//     next();
// })
app.use("/api/notes", notesRoutes)




app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});


