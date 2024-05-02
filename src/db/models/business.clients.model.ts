import { Table, Column, DataType, Model, AllowNull } from 'sequelize-typescript';

@Table({ tableName: 't_businessclients', freezeTableName: true, timestamps: false })
export default class BusinessClientsModel extends Model {
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

  @Column(DataType.STRING(100))
  clientName!: string;

  @Column(DataType.STRING(200))
  registeredAddress!: string;

  @Column(DataType.STRING(200))
  officeAddress!: string;

  @Column({ type: DataType.STRING(20) })
  officePhone1!: string;

  @AllowNull(true)
  @Column(DataType.STRING(20))
  officePhone2!: string;

  @Column(DataType.STRING(100))
  EmailId1!: string;

 @Column(DataType.STRING(100))
  EmailId2!: string;

  @Column(DataType.DATE)
  registrationDate!: Date;

  @Column(DataType.STRING(100))
  registrationNumber!: string;

  @Column(DataType.STRING(200))
  tinNumber!: string;

  @Column(DataType.STRING(200))
  operatorId!: string;
}
