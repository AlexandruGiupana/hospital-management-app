import express from "express";
import exampleRoutes from "./routes/example-route.js";
import userRoutes from "./routes/user-routes.js"
import authRoutes from "./routes/auth.js"
import cors from "cors";
import { con } from "./db_connection.js";
import config from "config";

const PORT = config.get("server.port")
const app = express();

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database");
});

app.use(express.json())
app.use("/message", exampleRoutes);
app.use("/users", userRoutes)
app.use("/auth", authRoutes)
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
