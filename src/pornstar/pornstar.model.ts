import { Provider } from "@nestjs/common";
import { Model, Column, DataType, Table, PrimaryKey, AutoIncrement } from "sequelize-typescript";

import { IPornstar } from "./interfaces/IPornstar";

@Table
export class Pornstar extends Model<Pornstar> implements IPornstar {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public id: number;

  @Column(DataType.TEXT())
  public name: string;

  @Column(DataType.TEXT({length: "long"}))
  public thumbnail: string;

  @Column(DataType.TEXT({length: "long"}))
  public url: string;

  @Column(DataType.TEXT())
  public gender: string;

  @Column(DataType.INTEGER)
  public videoCount: string;

}

export const PornstarProviderKey: string = "PORNSTAR_MODEL";
export const PornstarProvider: Provider = {
  provide: PornstarProviderKey,
  useValue: Pornstar,
};
