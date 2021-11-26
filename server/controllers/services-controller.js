import { con } from "../db_connection.js";
import {
  CREATE_NEW_MEDICAL_SERVICE_QUERY,
  DELETE_MEDICAL_SERVICE_QUERY,
  EDIT_MEDICAL_SERVICE_NAME_QUERY,
  EDIT_MEDICAL_SERVICE_PRICE_QUERY,
  EDIT_MEDICAL_SERVICE_QUERY,
  SELECT_ALL_MEDICAL_SERVICES_QUERY
} from "../sql_queries/services_queries.js";

export const getMedicalServices = async (req, res) => {
  con.query(SELECT_ALL_MEDICAL_SERVICES_QUERY, (err, result) => {
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
  con.query(CREATE_NEW_MEDICAL_SERVICE_QUERY, [service_name, price], (err, result) => {
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

export const deleteMedicalService = async (req, res) => {
  const {
    id
  } = req.body;
  con.query(DELETE_MEDICAL_SERVICE_QUERY, [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      service: {
        status: "deleted"
      }
    });
  });
}

export const editMedicalService = async (req, res) => {
  const editedMedicalService = req.body;
  const id = Object.keys(editedMedicalService)[0]
  const service_name = editedMedicalService[id].service_name;
  const price = editedMedicalService[id].price;
  if (service_name && price) {
    con.query(EDIT_MEDICAL_SERVICE_QUERY, [service_name, price, id], (err, result) => {
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
  } else if (service_name && !price) {
    con.query(EDIT_MEDICAL_SERVICE_NAME_QUERY, [service_name, id], (err, result) => {
        if (err) {
          throw err;
        }
        res.json({
          service: {
            service_name: service_name,
          }
        });
      });
  } else {
    con.query(EDIT_MEDICAL_SERVICE_PRICE_QUERY, [price, id], (err, result) => {
      if (err) {
        throw err;
      }
      res.json({
        service: {
          service_price: price,
        }
      });
    });
  }
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