import { Service } from "typedi";
import { AddNewBusinesslientDto } from "../../dtos/clients/business.client.dto";
import { DatabaseConnection } from "../../db";
import { BusinessClientsErrorCodes } from "../../error/clients/business.clients.errorcode";
import { TRService } from "@config/types";
import BusinessClientsModel from "../../db/models/business.clients.model";

const defaultValue: string = "";

@Service()
export class BusinessClientsService {
    constructor( private db: DatabaseConnection ){}
    public async AddNewBusinessClient(dto: AddNewBusinesslientDto): Promise<TRService | undefined> {
        try {
            // BANK ID WILL BE FETCHED FROM THE AUTHENTICATED USER TRYING TO ADD THE NEW CLIENT
            const bankId = dto.bankId; 

            // Set default values if properties are null or undefined
            const {
                clientId = "XXXXXX",
                clientName,
                registeredAddress,
                officeAddress = defaultValue,
                officePhone1,
                officePhone2 = defaultValue,
                emailId1 = defaultValue,
                emailId2 = defaultValue,
                registrationDate,
                registrationNumber = defaultValue,
                tinNumber = defaultValue,
                operatorId = defaultValue,
            } = dto;

        await this.db.instance?.query("CALL prcAddEditBusinessClient(:bankId, :clientId, :clientName, :registeredAddress, :officeAddress, :officePhone1, :officePhone2, :emailId1, :emailId2, :registrationDate, :registrationNumber, :tinNumber, :operatorId)", 
        { replacements: {
                bankId,
                clientId,
                clientName,
                registeredAddress,
                officeAddress,
                officePhone1,
                officePhone2,
                emailId1,
                emailId2,
                registrationDate,
                registrationNumber,
                tinNumber,
                operatorId
        }});

        return {
        code: BusinessClientsErrorCodes.success.code,
        message: BusinessClientsErrorCodes.success.message,
      };
        } catch (error) {
            // Handle error appropriately (e.g., logging, rethrowing, etc.)
            console.error("Error occurred while adding new bunisess client:", error);
            throw error; // Re-throw the error for the caller to handle
        }
    }

    public async getAllBusinessClient(): Promise<any> {
        try {
            return await BusinessClientsModel.findAll({});
        } catch (error) {
             // Handle error appropriately (e.g., logging, rethrowing, etc.)
            console.error("Error occurred while fetching clients:", error);
            throw error; // Re-throw the error for the caller to handle
        }
    }
}