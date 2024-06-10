import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";
import messageRoute from "./routes/message.routes.js";
import connectToMongoDB from "./db/connecttoMongodb.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //to parse the incoming requests with JSON playload(from req.body)
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);


app.get("/", (req, res) => {
  //root route http://localhost:8000
  res.send("hello ");
});

app.listen(PORT, () => {
  connectToMongoDB();

  console.log(`Server Running on port ${PORT}`);
});
