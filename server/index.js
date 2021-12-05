import express from "express";
import userRoutes from "./routes/user-routes/user-routes.js";
import appointmentsRoutes from "./routes/appointments-routes.js";
import hospitalRoomsRoutes from "./routes/hospital-rooms-routes.js";
import servicesRoutes from "./routes/services-routes.js";
import doctorRoutes from "./routes/user-routes/doctor-routes.js";
import repartitionRoutes from "./routes/repartition-routes.js";
import cors from "cors";
import { con } from "./db_connection.js";
import config from "config";
import cookieParser from "cookie-parser";

const PORT = config.get("server.port");
const app = express();

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database");
});

let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/users", userRoutes);
app.use("/appointments", appointmentsRoutes);
app.use("/rooms", hospitalRoomsRoutes);
app.use("/services", servicesRoutes);
app.use("/doctors", doctorRoutes);
app.use("/repartition", repartitionRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
