import { connect } from "mongoose";

export const connectToDatabase = async () => {
    await connect(
      "mongodb+srv://<ganbayar19>:<GnBYR19.>@serap.sylu06t.mongodb.net/?appName=Serap"
    );
}