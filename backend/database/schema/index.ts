import { connect } from "mongoose";

export const connectToDatabase = async () => {
  await connect(
    "mongodb+srv://<ganbayargantuya9_db_user>:<mftniPkbTilej4ZL>@serap.sylu06t.mongodb.net/?appName=Serap"
  );
};
