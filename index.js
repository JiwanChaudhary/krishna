const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./db/connect");
const UserRouter = require("./routes/userRoute");

// object
const app = express();

// configuring dotenv
dotenv.config();

// middlewares
app.use(express.json()); // frontend bata aako data lai json format ma convert garne

// routes
app.use("/api/v1", UserRouter);

// app.use("/", (req, res) => {
//   res.send("Hello World!");
// });

// port
const PORT = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server is listening on PORT: ${PORT}...`)
    );
  } catch (error) {
    console.log("Error", error);
  }
};

start();
