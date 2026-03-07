const express = require("express");
const bodyParser = require("body-parser");
const connectToDB  = require("./config/db.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoute.js");
const transactionRoutes = require("./routes/transactionRoute.js");
const orderRoutes = require("./routes/orderRoute.js");
const stockRoutes = require("./routes/stockRoute.js");

const app = express();
connectToDB()
app.use(cookieParser())

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (origin.startsWith('http://localhost:')) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));

app.use([userRoutes, transactionRoutes, orderRoutes, stockRoutes])

const PORT = 6001;

app.listen(PORT, () => {
  console.log(`Running @ ${PORT}`);
});