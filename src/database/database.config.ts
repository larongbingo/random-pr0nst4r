import { Options, Dialect } from "sequelize/types";

export const DatabaseConfig: Options = {
  dialect: process.env.DB_DIALECT as Dialect || "mysql",
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "root",
  database: "randompornstar"
};
