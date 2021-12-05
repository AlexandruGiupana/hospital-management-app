import { con } from "../db_connection.js";
import {
  CREATE_NEW_MEDICAL_SERVICE_QUERY,
  DELETE_MEDICAL_SERVICE_QUERY,
  EDIT_MEDICAL_SERVICE_NAME_QUERY,
  EDIT_MEDICAL_SERVICE_PRICE_QUERY,
  EDIT_MEDICAL_SERVICE_QUERY,
  SELECT_ALL_MEDICAL_SERVICES_OF_DOCTOR_QUERY,
  SELECT_ALL_MEDICAL_SERVICES_QUERY,
  SELECT_DOCTORS_THAT_OFFER_SERVICE_QUERY,
  SELECT_SERVICE_BY_ID_QUERY,
} from "../sql_queries/services_queries.js";
import { validateServiceName } from "../validation/medical-service-validation.js";
import { validateNumberField } from "../validation/general-validation.js";

export const getMedicalServices = async (req, res) => {
  con.query(SELECT_ALL_MEDICAL_SERVICES_QUERY, (err, result) => {
    if (err) {
      throw err;
    }
    let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    res.json(resultArray);
  });
};

export const getMedicalServicesOfDoctor = async (req, res) => {
  const doctor_id = req.params.id;
  con.query(
    SELECT_ALL_MEDICAL_SERVICES_OF_DOCTOR_QUERY,
    [doctor_id],
    (err, result) => {
      if (err) {
        throw err;
      }
      let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
      res.json(resultArray);
    }
  );
};

export const createMedicalService = async (req, res) => {
  const { service_name, price } = req.body;
  if (!validateServiceName(service_name)) {
    return res.status(400).json({ msg: "Invalid value for service name" });
  }
  if (!validateNumberField(price)) {
    return res.status(400).json({ msg: "Invalid value for price" });
  }
  con.query(
    CREATE_NEW_MEDICAL_SERVICE_QUERY,
    [service_name.trim(), price],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.json({
        service: {
          service_name: service_name,
          price: price,
        },
      });
    }
  );
};

export const deleteMedicalService = async (req, res) => {
  const id = req.params.id;
  if (!validateNumberField(id)) {
    return res.status(400).json({ msg: "Invalid value for id" });
  }
  con.query(SELECT_DOCTORS_THAT_OFFER_SERVICE_QUERY, [id], (err, result) => {
    if (result.length > 0) {
      return res
        .status(406)
        .json({ msg: "Doctors are still assigned to the service" });
    } else {
      con.query(SELECT_SERVICE_BY_ID_QUERY, [id], (err, result) => {
        if (result.length === 0) {
          return res.status(404).json({ msg: "Service does not exist" });
        } else {
          con.query(DELETE_MEDICAL_SERVICE_QUERY, [id], (err, result) => {
            if (err) {
              throw err;
            }
            res.json({
              service: {
                status: "deleted",
              },
            });
          });
        }
      });
    }
  });
};

export const editMedicalService = async (req, res) => {
  const id = Object.keys(req.body)[0];
  const service_name = req.body[id]["service_name"];
  const price = req.body[id]["price"];
  if (!validateNumberField(id)) {
    return res.status(400).json({ msg: "Invalid value for id" });
  }

  con.query(SELECT_SERVICE_BY_ID_QUERY, [id], (err, result) => {
    if (result.length === 0) {
      return res.status(404).json({ msg: "Service does not exist" });
    } else {
      if (service_name && price) {
        if (!validateNumberField(price)) {
          return res.status(400).json({ msg: "Invalid value for price" });
        }
        if (!validateServiceName(service_name)) {
          return res
            .status(400)
            .json({ msg: "Invalid value for service name" });
        }
        con.query(
          EDIT_MEDICAL_SERVICE_QUERY,
          [service_name, price, id],
          (err, result) => {
            if (err) {
              throw err;
            }
            res.json({
              service: {
                service_name: service_name,
                price: price,
              },
            });
          }
        );
      } else if (service_name && !price) {
        if (!validateServiceName(service_name)) {
          return res
            .status(400)
            .json({ msg: "Invalid value for service name" });
        }
        con.query(
          EDIT_MEDICAL_SERVICE_NAME_QUERY,
          [service_name, id],
          (err, result) => {
            if (err) {
              throw err;
            }
            res.json({
              service: {
                service_name: service_name,
              },
            });
          }
        );
      } else {
        if (!validateNumberField(price)) {
          return res.status(400).json({ msg: "Invalid value for price" });
        }
        con.query(
          EDIT_MEDICAL_SERVICE_PRICE_QUERY,
          [price, id],
          (err, result) => {
            if (err) {
              throw err;
            }
            res.json({
              service: {
                service_price: price,
              },
            });
          }
        );
      }
    }
  });
};
