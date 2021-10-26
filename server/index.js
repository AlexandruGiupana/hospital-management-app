import express from "express";
import exampleRoutes from "./routes/example-route.js";
import cors from "cors";

const PORT = process.env.PORT || 8080;

const app = express();

app.use("/message", exampleRoutes);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
