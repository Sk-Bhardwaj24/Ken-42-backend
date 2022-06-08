const mongoose = require("mongoose");
require("dotenv").config();
class Mongo {
  constructor() {
    this.createMongoConnection();
  }

  createMongoConnection() {
    mongoose.connect(
      "mongodb+srv://saurabh24:0vIgrRY33DtOX3ok@cluster0.3nbnv.mongodb.net/?retryWrites=true&w=majority"
    );

    mongoose.connection.once("open", () => {
      console.log("MongoDB is connected");
    });
    mongoose.connection.on("error", () => {
      console.log("Error occured in mongoDB connection");
    });
  }
}

module.exports = Mongo;
