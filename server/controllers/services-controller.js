import { con } from "../db_connection.js";

export const getMedicalServices = async (req, res) => {
  con.query("SELECT * FROM services", (err, result) => {
    if (err) {
      throw err;
    }
    let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    res.json(resultArray);
  });
};

export const createMedicalService = async (req, res) => {
  const {
    service_name, price
  } = req.body;
  let sql = "INSERT INTO services (service_name, price) VALUES (?, ?)";
  con.query(sql, [service_name, price], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      service: {
        service_name: service_name,
        price: price
      }
    });
  });
}

export const assignMedicalServiceToDoctor = async (req, res) => {
  const {
    provided_health_service_id, doctor_id
  } = req.body;
  let sql = "INSERT INTO health_services_repartition VALUES (?, ?)";
  con.query(sql, [provided_health_service_id, doctor_id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      service: {
        provided_health_service_id: provided_health_service_id,
        doctor_id: doctor_id
      }
    });
  });

}