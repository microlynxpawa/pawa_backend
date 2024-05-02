import { Service } from "typedi";
import { AddNewGLAccountDto } from "../../dtos/accounts/gl.dto";
import { DatabaseConnection } from "../../db";
import { GLErrorCodes } from "../../error/accounts/gl.errorcode";
import { TRService } from "@config/types";
import GLAccountsModel from "../../db/models/gl.model";

const defaultValue: any = null;

@Service()
export class GeneralLedgerService {
    constructor( private db: DatabaseConnection ){}
    public async AddNewGLAccount(dto: AddNewGLAccountDto): Promise<TRService | undefined> {
        try {
            // BANK ID WILL BE FETCHED FROM THE AUTHENTICATED USER TRYING TO ADD THE NEW CLIENT
            const bankId = dto.bankId; 

            // Set default values if properties are null or undefined
            const {
	              ourBranchId,
                  accountId,
                  accountName,
                  accountDescription = defaultValue,
                  accountType = defaultValue,
                  currencyId = defaultValue,
                  openingBalance = defaultValue,
                  currentBalance = defaultValue,
                  unSupervisedCredit = defaultValue,
                  unSupervisedDebit = defaultValue,
                  creditTurnOver = defaultValue,
                  debitTurnOver = defaultValue,
                  doNotAllowCredit = defaultValue,
                  doNotAllowDebit = defaultValue,
                  isReconcilable = defaultValue,
                  operatorId
            } = dto;

        await this.db.instance?.query("CALL prcAddEditGLAccount(:bankId, :ourBranchId, :accountId, :accountName, :accountDescription, :accountType, :currencyId, :openingBalance, :currentBalance, :unSupervisedCredit, :unSupervisedDebit, :creditTurnOver, :debitTurnOver, :doNotAllowCredit, :doNotAllowDebit, :isReconcilable, :operatorId)", 
        { replacements: {
                 bankId,
                 ourBranchId,
                  accountId,
                  accountName,
                  accountDescription,
                  accountType,
                  currencyId,
                  openingBalance,
                  currentBalance,
                  unSupervisedCredit,
                  unSupervisedDebit,
                  creditTurnOver,
                  debitTurnOver,
                  doNotAllowCredit,
                  doNotAllowDebit,
                  isReconcilable,
                  operatorId
        }});

        return {
        code: GLErrorCodes.success.code,
        message: GLErrorCodes.success.message,
      };
        } catch (error) {
            // Handle error appropriately (e.g., logging, rethrowing, etc.)
            console.error("Error occurred while adding new GL Account:", error);
            throw error; // Re-throw the error for the caller to handle
        }
    }

    public async getAllGLAccounts(): Promise<any> {
        try {
            return await GLAccountsModel.findAll({});
        } catch (error) {
             // Handle error appropriately (e.g., logging, rethrowing, etc.)
            console.error("Error occurred while fetching GL Accounts:", error);
            throw error; // Re-throw the error for the caller to handle
        }
    }
}