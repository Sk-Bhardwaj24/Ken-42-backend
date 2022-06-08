const http = require("http");
const app = require("./main.route");

const connectToDB = require("./DBConnection/mongoDB");
const PORT = process.env.PORT || 9008;
http.createServer(app).listen(PORT, () => {
  new connectToDB();
  console.log(`Dashboard server is running on port no ${PORT}`);
});
