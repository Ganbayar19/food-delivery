import mongoose from "mongoose";

export const connectToDatabase = async () => {
  await mongoose.connect(
    "mongodb+srv://<ganbayar19>:<G.ganbayar.19>@serap.sylu06t.mongodb.net/"
  );
};
