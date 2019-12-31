
import { Provider } from "@nestjs/common";
import { Model, Column, DataType, Table, PrimaryKey, AutoIncrement } from "sequelize-typescript";
import { IPornstar } from "random/interfaces";

// tslint:disable:variable-name
@Table
export class Pornstar extends Model<Pornstar> implements IPornstar {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public id: number;

  @Column(DataType.TEXT())
  public star_name: string;

  @Column(DataType.TEXT({length: "long"}))
  public star_thumb: string;

  @Column(DataType.TEXT({length: "long"}))
  public star_url: string;

  @Column(DataType.TEXT())
  public gender: string;

  @Column(DataType.INTEGER)
  public videos_count_all: string;

}

export const PornstarProviderKey: string = "PORNSTAR_MODEL";
export const PornstarProvider: Provider = {
  provide: PornstarProviderKey,
  useValue: Pornstar,
};
