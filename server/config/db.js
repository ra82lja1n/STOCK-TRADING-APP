const mongoose = require("mongoose");
const {config} = require("dotenv");
config();
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.dbURL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error in db connection:", error);
  }
};

module.exports = connectToDB;

// mongodb://rahulJain:rahulJain@ac-mgmbjel-shard-00-00.lp5zm8b.mongodb.net:27017,ac-mgmbjel-shard-00-01.lp5zm8b.mongodb.net:27017,ac-mgmbjel-shard-00-02.lp5zm8b.mongodb.net:27017/practice?ssl=true&replicaSet=atlas-h56zdk-shard-0&authSource=admin&retryWrites=true&w=majority
