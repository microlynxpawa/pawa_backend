import { Table, Column, DataType, Model, AllowNull } from 'sequelize-typescript';


@Table({ tableName: 't_productcharges', freezeTableName: true, timestamps: false })
export default class ProductChargesModel extends Model {
  srcDestBanks = [];
  @Column({
    type: DataType.STRING(4),
    primaryKey: true,
    allowNull: false,
  })
  BankId!: string;

  @AllowNull(false)
  @Column(DataType.STRING(6))
  productId!: string;

  @AllowNull(false)
  @Column(DataType.STRING(4))
  chargeID!: string;

  @Column(DataType.CHAR)
  chargeCondition!: string;

  @Column(DataType.NUMBER)
  freeTransactions!: Number;

  @Column({ type: DataType.CHAR })
  freeTransactionPeriod!: string;

  @Column(DataType.CHAR)
  chargeFrequency!: string;

  @Column(DataType.CHAR)
  chargeBasis1!: string;

  @Column(DataType.NUMBER)
  transactionAmount1!: Number;

  @Column(DataType.NUMBER)
  amountOrPercentage1!: Number;

  @Column(DataType.CHAR)
  chargeBasis2!: string;

  @Column(DataType.NUMBER)
  transactionAmount2!: Number;

  @Column(DataType.NUMBER)
  amountOrPercentage2!: Number;

  @Column(DataType.CHAR)
  chargeBasis3!: string;

  @Column(DataType.NUMBER)
  transactionAmount3!: Number;

  @Column(DataType.NUMBER)
  amountOrPercentage3!: Number;

  @Column(DataType.CHAR)
  chargeBasis4!: string;

  @Column(DataType.NUMBER)
  transactionAmount4!: Number;

  @Column(DataType.NUMBER)
  amountOrPercentage4!: Number;

  @Column(DataType.CHAR)
  chargeBasis5!: string;

  @Column(DataType.NUMBER)
  transactionAmount5!: Number;

  @Column(DataType.NUMBER)
  amountOrPercentage5!: Number;

  @Column(DataType.NUMBER)
  MinimumCharge1!: Number;

    @Column(DataType.NUMBER)
  MinimumCharge2!: Number;

    @Column(DataType.NUMBER)
  MinimumCharge3!: Number;

    @Column(DataType.NUMBER)
  MinimumCharge4!: Number;

    @Column(DataType.NUMBER)
  MinimumCharge5!: Number;

@Column(DataType.NUMBER)
  MaximumCharge1!: Number;

  @Column(DataType.NUMBER)
  MaximumCharge2!: Number;

  @Column(DataType.NUMBER)
  MaximumCharge3!: Number;

  @Column(DataType.NUMBER)
  MaximumCharge4!: Number;

  @Column(DataType.NUMBER)
  MaximumCharge5!: Number;

  @Column(DataType.STRING(10))
  operatorId!: string;

  @Column(DataType.DATE)
  createdOn!: Date;

  @Column(DataType.STRING(200))
  modifiedBy!: string;

  @Column(DataType.DATE)
  modifiedOn!: Date;
}
