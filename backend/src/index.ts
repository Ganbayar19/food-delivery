import express from "express";
import { connectToDatabase } from "./database/index.js";
import { FoodRouter } from "./routes/food.router.js";
import { CategoryRouter } from "./routes/category.router.js";
<<<<<<< HEAD
import { AuthRouter } from "./routes/auth.router.js";
=======
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9

await connectToDatabase();

const app = express();

app.use(express.json());

app.use("/foods", FoodRouter);
app.use("/categories", CategoryRouter);
app.use("/auth", AuthRouter);

app.listen(4000, () => {
  console.log("Server running on port 4000");
app.use('/categories', CategoryRouter);

app.listen(4000, () => {
  console.log(`Example app listening on port 4000`);

});
