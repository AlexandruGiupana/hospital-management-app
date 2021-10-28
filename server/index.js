import express from "express";
import exampleRoutes from "./routes/example-route.js";
import cors from "cors";
import { con } from "./db_connection.js";
const PORT = process.env.PORT || 8080;

const app = express();

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database");
});

app.use("/message", exampleRoutes);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
