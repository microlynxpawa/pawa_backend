import { Table, Column, DataType, Model, AllowNull } from 'sequelize-typescript';


@Table({ tableName: 't_glaccounts', freezeTableName: true, timestamps: false })
export default class GLAccountsModel extends Model {
  srcDestBanks = [];
  @Column({
    type: DataType.STRING(4),
    primaryKey: true,
    allowNull: false,
  })
  BankId!: string;

    @AllowNull(false)
  @Column(DataType.STRING(4))
  OurBranchId!: string;

  @AllowNull(false)
  @Column(DataType.STRING(15))
  AccountId!: string;

  @AllowNull(false)
  @Column(DataType.STRING(50))
  AccountName!: string;

  @Column(DataType.STRING(50))
  AccountDescription!: string;

  @Column({ type: DataType.CHAR })
  AccountType!: string;

  @Column(DataType.STRING(5))
  CurrencyId!: string;

  @Column(DataType.NUMBER)
  OpeningBalance!: Number;

  @Column(DataType.STRING(10))
  CurrentBalance!: string;

  @Column(DataType.STRING(10))
  UnSupervisedCredit!: string;

  @Column(DataType.NUMBER)
  UnSupervisedDebit!: Number;

  @Column(DataType.NUMBER)
  CreditTurnOver!: Number;

  @Column(DataType.NUMBER)
  DebitTurnOver!: Number;

  @Column(DataType.NUMBER)
  DoNotAllowCredit!: Number;

  @Column(DataType.NUMBER)
  DoNotAllowDebit!: Number;

  @Column(DataType.NUMBER)
  IsReconcilable!: Number;

  @Column(DataType.STRING(50))
  operatorId!: string;

    @Column(DataType.DATE)
  createdOn!: Date;

    @Column(DataType.NUMBER)
  isSupervisionRequired!: Number;

    @Column(DataType.STRING(200))
  supervisionReason!: string;

      @Column(DataType.DATE)
  supervisedOn!: Date;

        @Column(DataType.STRING(200))
  modifiedBy!: string;  

          @Column(DataType.STRING(50))
  SupervisorId!: string;

      @Column(DataType.DATE)
  modifiedOn!: Date;

}
