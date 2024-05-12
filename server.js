import app from "./app.js";
import cors from "cors";
import { connectDB } from "./config/database.js";
import Razorpay from "razorpay";
connectDB();
app.options("",cors({
  credentials: true,
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
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