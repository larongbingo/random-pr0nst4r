import { Provider } from "@nestjs/common";
import { Model, Column, DataType, Table, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table
export class Pornstar extends Model<Pornstar> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public id: number;

  @Column(DataType.STRING)
  public name: string;
}

export const PornstarProviderKey: string = "PORNSTAR_MODEL";
export const PornstarProvider: Provider = {
  provide: PornstarProviderKey,
  useValue: Pornstar,
};
