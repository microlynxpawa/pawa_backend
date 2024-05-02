import { Table, Column, DataType, Model, AllowNull } from 'sequelize-typescript';


@Table({ tableName: 't_products', freezeTableName: true, timestamps: false })
export default class ProductsModel extends Model {
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
  @Column(DataType.STRING(150))
  productName!: string;

  @AllowNull(false)
  @Column(DataType.STRING(3))
  productTypeId!: string;

  @AllowNull(false)
  @Column(DataType.STRING(3))
  accountIdPrefix!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING(5) })
  currencyId!: string;

  @Column(DataType.NUMBER)
  creditInterestRate!: Number;

  @Column(DataType.NUMBER)
  debitInterestRate!: Number;

  @Column(DataType.STRING(10))
  creditInterestProcedure!: string;

  @Column(DataType.STRING(10))
  debitInterestProcedure!: string;

  @Column(DataType.NUMBER)
  debitInterestDays!: Number;

  @Column(DataType.NUMBER)
  creditInterestDays!: Number;

  @Column(DataType.NUMBER)
  creditInterestStart!: Number;

  @Column(DataType.NUMBER)
  debitInterestStart!: Number;

  @Column(DataType.STRING(10))
  creditInterestFrequency!: string;

  @Column(DataType.STRING(10))
  debitInterestFrequency!: string;

  @Column(DataType.NUMBER)
  minimumBalance!: Number;

  @Column(DataType.NUMBER)
  accountPerCustomer!: Number;

  @Column(DataType.NUMBER)
  isChequeBookAllowed!: Number;

  @Column(DataType.NUMBER)
  doNotAllowCredit!: Number;

  @Column(DataType.NUMBER)
  doNotAllowDebit!: Number;

  @Column(DataType.NUMBER)
  canGoInCredit!: Number;

  @Column(DataType.NUMBER)
  canGoInDebit!: Number;

  @Column(DataType.NUMBER)
  enforceBioAuthentication!: Number;

  @Column(DataType.STRING(6))
  dormantProductId!: string;

  @Column(DataType.NUMBER)
  dormantDays!: Number;

  @Column(DataType.NUMBER)
  isBlocked!: Number;

  @Column(DataType.STRING(10))
  operatorId!: string;

    @Column(DataType.DATE)
  createdOn!: Date;

    @Column(DataType.NUMBER)
  isSupervisionRequired!: Number;

    @Column(DataType.STRING(200))
  supervisionReason!: string;

      @Column(DataType.STRING(200))
  supervisedBy!: string;

      @Column(DataType.DATE)
  supervisedOn!: Date;

        @Column(DataType.STRING(200))
  modifiedBy!: string;

      @Column(DataType.DATE)
  modifiedOn!: Date;

}
