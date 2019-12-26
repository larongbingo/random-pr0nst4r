import { Options } from "sequelize/types";

export const DatabaseConfig: Options = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "pronstar",
};
