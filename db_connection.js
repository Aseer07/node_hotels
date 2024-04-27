const mongoose = require("mongoose");

(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/hotels");
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
})();

mongoose.connection.on("disconnected", () =>
  console.log("database disconnected")
);

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("mongodb connection closed");
  process.exit(0);
});
