import { connect } from "mongoose";

export const connectToDatabase = async () => {
    await connect(
<<<<<<< HEAD
      "mongodb+srv://<ganbayar19>:<GnBYR19.>@serap.sylu06t.mongodb.net/?appName=Serap"
=======
      "mongodb+srv://ganbayar19:<G.ganbayar.19>@serap.sylu06t.mongodb.net"
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9
    );
}