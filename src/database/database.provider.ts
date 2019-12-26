import { Provider } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";

import { Pornstar } from "../pornstar/pornstar.model";

import { DatabaseConfig } from "./database.config";

export const DatabaseProviderKey: string = "DATABASE_PROVIDER_SEQUELIZE";

export const DatabaseProvider: Provider = {
  provide: DatabaseProviderKey,
  useFactory: async () => {
    const sequelize = new Sequelize(DatabaseConfig);
    sequelize.addModels([Pornstar]);
    return sequelize;
  },
};
