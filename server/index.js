import express from "express";
import userRoutes from "./routes/user-routes/user-routes.js";
import appointmentsRoutes from "./routes/user-routes/appointments-routes.js";
import hospitalRoomsRoutes from "./routes/room-routes/hospital-rooms-routes.js";
import servicesRoutes from "./routes/service-routes/services-routes.js";
import doctorRoutes from "./routes/user-routes/doctor-routes.js";
import repartitionRoutes from "./routes/service-routes/repartition-routes.js";
import newsRoutes from "./routes/news-routes.js";
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
  optionsSuccessStatus: 200,
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
app.use("/news", newsRoutes);
app.use("/appointments", appointmentsRoutes);
app.use("/rooms", hospitalRoomsRoutes);
app.use("/services", servicesRoutes);
app.use("/doctors", doctorRoutes);
app.use("/repartition", repartitionRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
