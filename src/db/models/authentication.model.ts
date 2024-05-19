import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({ tableName: 't_authentication', freezeTableName: true, timestamps: false })
export default class AuthenticationModel extends Model {
  @Column({
    type: DataType.STRING(4),
    primaryKey: true,
    allowNull: false,
  })
  BankId!: string;

  @Column(DataType.STRING(4))
  OurBranchId!: string;

  @Column({
    type: DataType.STRING(100),
    primaryKey: true,
    allowNull: false,
  })
  AuthenticationId!: string;

  @Column(DataType.STRING(30))
  SecretKey!: string;

  @Column({ type: DataType.NUMBER })
  IsLoggedIn!: Number;

  @Column(DataType.STRING(150))
  AuthenticationKey!: string;

  @Column(DataType.STRING(30))
  SystemID!: string;

  @Column(DataType.DATE)
  LoginDatetime!: Date;

  @Column(DataType.DATE)
  LogoutDatetime!: Date;

  @Column(DataType.DATE)
  LastLoginDate!: Date;

  @Column(DataType.DATE)
  LastLogoutDate!: Date;

  @Column(DataType.NUMBER)
  IsCashier!: Number;

  @Column(DataType.STRING(15))
  CashierGLId!: string;

  @Column(DataType.INTEGER)
  AccessLevel!: Number;

  @Column(DataType.STRING(6))
  ProfileId!: string;

   @Column(DataType.NUMBER)
  IsDisabled!: Number;

   @Column(DataType.NUMBER)
  CanChangeSecretKey!: Number;

   @Column(DataType.NUMBER)
  ChangeKeyAtNextLogOn!: Number;

   @Column(DataType.INTEGER)
  SecretKeyExpiryDays!: Number;

   @Column(DataType.NUMBER)
  CanSwitchBranch!: Number;

     @Column(DataType.DATE)
  LastPasswordChangeDate!: Date;

     @Column(DataType.STRING(50))
  CreatedBy!: string;

     @Column(DataType.DATE)
  CreatedOn!: Date;

     @Column(DataType.NUMBER)
  IsSupervisionRequired!: Number;

       @Column(DataType.STRING(200))
  SupervisionReason!: string;

       @Column(DataType.STRING(50))
  SupervisedBy!: string;

         @Column(DataType.DATE)
  SupervisedOn!: Date;

         @Column(DataType.STRING(50))
  ModifiedBy!: string;

         @Column(DataType.DATE)
  ModifiedOn!: Date;
}
