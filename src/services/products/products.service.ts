import { Service } from "typedi";
import { AddNewProductDto, QueryProductDetails, AddNewProductGLSettingsDto, QueryProductGLSettings } from "../../dtos/products/products.dto";
import { DatabaseConnection } from "../../db";
import { ProductsErrorCodes, ProductGLSettingsErrorCodes } from "../../error/products/products.errorcode";
import { TRService } from "@config/types";
import ProductsModel from "../../db/models/products.model";
import ProductGLSettingsModel from "../../db/models/product.glsettings.model"

const defaultValue: any = null;

@Service()
export class ProductService {
    constructor( private db: DatabaseConnection ){}
    public async AddNewProduct(dto: AddNewProductDto): Promise<TRService | undefined> {
        try {
            // BANK ID WILL BE FETCHED FROM THE AUTHENTICATED USER TRYING TO ADD THE NEW CLIENT
            const bankId = dto.bankId; 

            // Set default values if properties are null or undefined
            const {
	            productId,
	            productName,
	            productTypeId,
	            accountIdPrefix,
	            currencyId,
	            creditInterestRate = defaultValue,
	            debitInterestRate = defaultValue,
	            creditInterestProcedure = defaultValue,
	            debitInterestProcedure = defaultValue,
            	debitInterestDays = defaultValue,
	            creditInterestDays = defaultValue,
	            creditInterestStart = defaultValue,
	            debitInterestStart = defaultValue,
	            creditInterestFrequency = defaultValue,
	            debitInterestFrequency = defaultValue,
	            minimumBalance = defaultValue,
	            accountPerCustomer = defaultValue,
	            isChequeBookAllowed = defaultValue,
	            doNotAllowCredit = defaultValue,
	            doNotAllowDebit = defaultValue,
	            canGoInCredit = defaultValue,
	            canGoInDebit = defaultValue,
	            enforceBioAuthentication = defaultValue,
	            dormantProductId = defaultValue,
	            dormantDays =defaultValue,
                isBlocked = defaultValue,
	            operatorId
            } = dto;

        await this.db.instance?.query("CALL prcAddEditProduct(:bankId, :productId, :productName, :productTypeId, :accountIdPrefix, :currencyId, :creditInterestRate, :debitInterestRate, :creditInterestProcedure, :debitInterestProcedure, :debitInterestDays, :creditInterestDays, :creditInterestStart, :debitInterestStart, :creditInterestFrequency, :debitInterestFrequency, :minimumBalance, :accountPerCustomer, :isChequeBookAllowed, :doNotAllowCredit, :doNotAllowDebit, :canGoInCredit, :canGoInDebit, :enforceBioAuthentication, :dormantProductId, :dormantDays, :isBlocked, :operatorId)", 
        { replacements: {
                bankId,
                productId,
	            productName,
	            productTypeId,
	            accountIdPrefix,
	            currencyId,
	            creditInterestRate,
	            debitInterestRate,
	            creditInterestProcedure,
	            debitInterestProcedure,
            	debitInterestDays,
	            creditInterestDays,
	            creditInterestStart,
	            debitInterestStart,
	            creditInterestFrequency,
	            debitInterestFrequency,
	            minimumBalance,
	            accountPerCustomer,
	            isChequeBookAllowed,
	            doNotAllowCredit,
	            doNotAllowDebit,
	            canGoInCredit,
	            canGoInDebit,
	            enforceBioAuthentication,
	            dormantProductId,
	            dormantDays,
                isBlocked,
	            operatorId
        }});

        return {
        code: ProductsErrorCodes.success.code,
        message: ProductsErrorCodes.success.message,
      };
        } catch (error) {
            // Handle error appropriately (e.g., logging, rethrowing, etc.)
            console.error("Error occurred while adding new product:", error);
            throw error; // Re-throw the error for the caller to handle
        }
    }

    public async getAllProducts(): Promise<any> {
        try {
            return await ProductsModel.findAll({});
        } catch (error) {
             // Handle error appropriately (e.g., logging, rethrowing, etc.)
            console.error("Error occurred while fetching products:", error);
            throw error; // Re-throw the error for the caller to handle
        }
    }

    public async GetProductDetails(query: QueryProductDetails): Promise<any> {
        const {bankId, productId} = query;
        try {
             return await this.db.instance?.query("CALL prcGetProductDetails(:bankId, :productId)", 
        { replacements: {
            bankId,
            productId
        }});
        } catch (error) {
             // Handle error appropriately (e.g., logging, rethrowing, etc.)
            console.error("Error occurred while fetching products:", error);
            throw error; // Re-throw the error for the caller to handle
        }
    }

    public async AddNewProductGLSettings(dto: AddNewProductGLSettingsDto): Promise<TRService | undefined> {
        try {
            // BANK ID WILL BE FETCHED FROM THE AUTHENTICATED USER TRYING TO ADD THE NEW CLIENT
            const bankId = dto.bankId; 

            // Set default values if properties are null or undefined
            const {
	            productId,
	            ourBranchId,
	            settingId,
	            gLAccountId,
	            createdBy,
           
            } = dto;

        await this.db.instance?.query("CALL prcAddEditProductGLSettingDetail(:bankId, :ourBranchId, :productId, :settingId, :gLAccountId, :createdBy)", 
        { replacements: {
                bankId,
                 productId,
	            ourBranchId,
	            settingId,
	            gLAccountId,
	            createdBy,
        }});

        return {
        code: ProductGLSettingsErrorCodes.success.code,
        message: ProductGLSettingsErrorCodes.success.message,
      };
        } catch (error) {
            // Handle error appropriately (e.g., logging, rethrowing, etc.)
            console.error("Error occurred while adding new product GL Settings:", error);
            throw error; // Re-throw the error for the caller to handle
        }
    }

        public async getAllProductGLSettings(): Promise<any> {
        try {
            return await ProductGLSettingsModel.findAll({});
        } catch (error) {
             // Handle error appropriately (e.g., logging, rethrowing, etc.)
            console.error("Error occurred while fetching product GL Settings:", error);
            throw error; // Re-throw the error for the caller to handle
        }
    }

    public async GetBankProductId(query: QueryProductGLSettings): Promise<any> {
        const {bankId} = query;
        try {
           return await this.db.instance?.query("select distinct productId from t_products where bankId = :bankId",
            { replacements: {
                bankId
            }});
        } catch (error) {
             // Handle error appropriately (e.g., logging, rethrowing, etc.)
            console.error("Error occurred while fetching bank product IDs:", error);
            throw error; // Re-throw the error for the caller to handle
        }
    }
}