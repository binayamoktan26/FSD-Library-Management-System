import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;
//db connection
import { dbConnect } from "./src/config/dbConfig.js";
// const dbConnection = await dbConnect();
// console.log(dbConnection);

// middleware
import cors from "cors";
import morgan from "morgan";
app.use(cors()); // it help to connect the frontend and backend
app.use(morgan("dev")); // it help to see the request and response in the console
app.use(express.json()); // it help to receive all the data send from the frontend as a body in json format

//api endpoints
import authRoutes from "./src/routes/authRoute.js";
import { errorHandler } from "./src/middleware/errorHandler.js";
import { responseClient } from "./src/middleware/responseClient.js";

app.use("/api/v1/auth", authRoutes);
//error handler
app.use(errorHandler);
// server status

app.get("/", (req, res) => {
  const message = "Server is running";
  responseClient({ req, res, message });
});

dbConnect()
  .then(() => {
    console.log("DB connect successfully");
  })
  .catch((error) => console.log(error));

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT} `);
});
