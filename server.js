import app from "./app.js";
import cors from "cors";
import { connectDB } from "./config/database.js";
import Razorpay from "razorpay";
import express from "express";
const appp=express();
appp.use(cors());
connectDB();
// const port = process.env.PORT || 4000;

// app.options("",cors({
//   credentials: true,
//   origin: process.env.FRONTEND_URL,
//   methods: ["GET", "POST", "PUT", "DELETE"],
// }));

// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.FRONTEND_URL,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );

// app.use(cors());
export const  instance = new Razorpay({ 
  key_id: process.env.RAZORPAY_API_KEY, 
  
  key_secret: process.env.RAZORPAY_API_SECRET ,

})


app.get("/", (req, res, next) => {
  res.send("<h1>Working</h1>");
});

app.listen(process.env.PORT, () =>
  console.log(
    `Server is working on PORT: ${process.env.PORT}`
  )
);