import mysql from "mysql";
import config from "config";

export const con = mysql.createConnection({
  host: config.get("dbConfig.databaseHost"),
  user: config.get("dbConfig.databaseUser"),
  password: config.get("dbConfig.databasePassword"),
  database: config.get("dbConfig.databaseName"),
});
