import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;
//db connection
import { dbConnect } from "./config/dbConfig.js";
// const dbConnection = await dbConnect();
// console.log(dbConnection);
dbConnect()
  .then(() => {
    console.log("DB connect successfully"); 
  })
  .catch((error) => console.log(error));
// middleware
import cors from "cors";
import morgan from "morgan";
app.use(cors()); // it help to connect the frontend and backend
app.use(morgan("dev")); // it help to see the request and response in the console
app.use(express.json()); // it help to receive all the data send from the frontend as a body in json format

// server status

app.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT} `);
});
