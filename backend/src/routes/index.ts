<<<<<<< HEAD
import mongoose from "mongoose";

export const connectToDatabase = async () => {
  await mongoose.connect(
    "mongodb+srv://<ganbayar19>:<G.ganbayar.19>@serap.sylu06t.mongodb.net/"
  );
};
=======
export * from './food.router.js'
export * from './category.router.js'
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9
