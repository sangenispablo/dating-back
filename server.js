import express from "express";
import mongoose from "mongoose";

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://pablo_admin:xy34TxCdRUWe3vP@miclusterpas.rqsvs.mongodb.net/datingDB?authSource=admin&replicaSet=atlas-ursb9z-shard-0&readPreference=primary";

//Middleware

//DB Config
mongoose.connect(connection_url).then(() => {
  console.log("Conectado");
});

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Dating Backend"));
//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
