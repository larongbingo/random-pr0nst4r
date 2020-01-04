import { Options } from "sequelize/types";

export const DatabaseConfig: Options = {
  // @ts-ignore
  dialect: process.env.DATABASE_DIALECT || "sqlite",
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME || "randompornstar",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  dialectOptions: {
    dialectOptions: {
      options: {
        encrypt: true,
      },
    },
  },
};
