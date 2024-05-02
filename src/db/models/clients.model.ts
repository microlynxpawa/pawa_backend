import { Table, Column, DataType, Model, AllowNull } from 'sequelize-typescript';

@Table({ tableName: 't_clients', freezeTableName: true, timestamps: false })
export default class ClientsModel extends Model {
  srcDestBanks = [];
  @Column({
    type: DataType.STRING(4),
    primaryKey: true,
    allowNull: false,
  })
  BankId!: string;

  @AllowNull(false)
  @Column(DataType.STRING(6))
  clientId!: string;

  @Column(DataType.STRING(10))
  title!: string;

  @Column(DataType.STRING(100))
  clientName!: string;

  @Column(DataType.STRING(10))
  gender!: string;

  @Column(DataType.STRING(200))
  homeAddress!: string;

  @AllowNull(true)
  @Column(DataType.STRING(200))
  businessAddress!: string;

  @Column({ type: DataType.STRING(20) })
  mobileNumber!: string;

  @AllowNull(true)
  @Column(DataType.STRING(20))
  officePhone!: string;

  @Column(DataType.STRING(100))
  EmailId!: string;

  @Column(DataType.DATE)
  dateOfBirth!: Date;

  @Column(DataType.STRING(100))
  nationality!: string;

  @Column(DataType.STRING(200))
  typeOfId!: string;

  @Column(DataType.STRING(200))
  idNumber!: string;

  @Column(DataType.STRING(200))
  tinNumber!: string;

  @Column(DataType.STRING(200))
  operatorId!: string;
}
