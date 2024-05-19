import { Table, Column, DataType, Model } from "sequelize-typescript";

@Table({
  tableName: "t_pendingauthentication",
  freezeTableName: true,
  timestamps: false,
})
export default class PendingAuthenticationModel extends Model {
  srcDestBanks = [];
  @Column({
    type: DataType.STRING(50),
    primaryKey: true,
    allowNull: false,
  })
  EmailAddress!: string;

  @Column(DataType.STRING(30))
  FirstName!: string;

  @Column({ type: DataType.STRING(30) })
  MiddleName!: string;

  @Column(DataType.STRING(30))
  LastName!: string;

  @Column(DataType.STRING(15))
  TypeOfID!: string;

  @Column(DataType.STRING(20))
  IDNumber!: string;

  @Column(DataType.STRING(15))
  MobilePhone!: string;

  @Column(DataType.DATE)
  SignupOn!: Date;

  @Column(DataType.STRING(30))
  ValidationCode!: string;

  @Column(DataType.NUMBER)
  NumberOfValidation!: Number;

  @Column(DataType.NUMBER)
  IsValidated!: Number;

  @Column(DataType.DATE)
  ValidatedOn!: Date;

  @Column(DataType.STRING(10))
  ValidationStatus!: string;

  @Column(DataType.DATE)
  CreatedOn!: Date;
}
