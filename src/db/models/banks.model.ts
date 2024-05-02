import { Table, Column, DataType, Model, AllowNull } from 'sequelize-typescript';

@Table({ tableName: 't_banks', freezeTableName: true, timestamps: false })
export default class BanksModel extends Model {
  srcDestBanks = [];
  @Column({
    type: DataType.STRING(4),
    primaryKey: true,
    allowNull: false,
  })
  BankId!: string;

  @AllowNull(true)
  @Column(DataType.STRING(200))
  BankName!: string;

  @Column({ type: DataType.STRING(10) })
  Phone1!: string;

  @Column(DataType.STRING(10))
  EmailId1!: string;

  @Column(DataType.STRING(15))
  LicenseNo!: string;

  @Column(DataType.STRING(5))
  CreatedOn!: string;
}
