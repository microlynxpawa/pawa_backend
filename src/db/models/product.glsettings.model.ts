import { Table, Column, DataType, Model, AllowNull } from 'sequelize-typescript';


@Table({ tableName: 't_ProductGLSettingDetails', freezeTableName: true, timestamps: false })
export default class ProductGLSettingsModel extends Model {
  srcDestBanks = [];
  @Column({
    type: DataType.STRING(4),
    primaryKey: true,
    allowNull: false,
  })
  BankId!: string;

  @AllowNull(false)
  @Column(DataType.STRING(4))
  ourBranchId!: string;

  @AllowNull(false)
  @Column(DataType.STRING(6))
  productId!: string;

  @AllowNull(false)
  @Column(DataType.NUMBER)
  settingId!: Number;

  @Column(DataType.STRING(15))
  gLAccountId!: string;

  @Column({ type: DataType.STRING(100) })
  createdBy!: string;
}
