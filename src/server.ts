import mongoose from "mongoose";
import app from ".";
import dotenv from "dotenv"

dotenv.config();


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`${process.env.DATABASE_URL}`);

  app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}