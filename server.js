import express from "express";
import mongoose from "mongoose";
import Cors from "cors";

import Cards from "./dbCards.js";

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://pablo_admin:xy34TxCdRUWe3vP@miclusterpas.rqsvs.mongodb.net/datingDB?authSource=admin&replicaSet=atlas-ursb9z-shard-0&readPreference=primary";

//Middleware
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(connection_url).then(() => {
  console.log("Conectado");
});

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Dating Backend"));

app.post("/dating/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/dating/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
