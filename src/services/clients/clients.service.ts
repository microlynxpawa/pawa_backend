import { Service } from "typedi";
import { AddNewClientDto, QueryClientDetails } from "../../dtos/clients/client.dto";
import { DatabaseConnection } from "../../db";
import { ClientsErrorCodes } from "../../error/clients/clients.errorcode";
import { TRService } from "@config/types";
import ClientsModel from "../../db/models/clients.model";

const defaultValue: string = "";

@Service()
export class ClientsService {
    constructor( private db: DatabaseConnection ){}
    public async AddNewClient(dto: AddNewClientDto): Promise<TRService | undefined> {
        try {
            // BANK ID WILL BE FETCHED FROM THE AUTHENTICATED USER TRYING TO ADD THE NEW CLIENT
            const bankId = dto.bankId; 

            // Set default values if properties are null or undefined
            const {
                clientId = "XXXXXX",
                title,
                clientName,
                gender,
                homeAddress,
                mobileNumber,
                dateOfBirth,
                nationality,
                typeOfId,
                idNumber,
                operatorId,
                emailId = defaultValue,
                tinNumber = defaultValue,
                officePhone = defaultValue,
                businessAddress = defaultValue
            } = dto;

        await this.db.instance?.query("CALL prcAddEditClient(:bankId, :clientId, :title, :clientName, :gender, :homeAddress, :businessAddress, :mobileNumber, :officePhone, :emailId, :dateOfBirth, :nationality, :typeOfId, :idNumber, :tinNumber, :operatorId)", 
        { replacements: {
                bankId,
                clientId,
                title,
                clientName,
                gender,
                homeAddress,
                businessAddress,
                mobileNumber,
                officePhone,
                emailId,
                dateOfBirth,
                nationality,
                typeOfId,
                idNumber,
                tinNumber,
                operatorId
        }});

        return {
        code: ClientsErrorCodes.success.code,
        message: ClientsErrorCodes.success.message,
      };
        } catch (error) {
            // Handle error appropriately (e.g., logging, rethrowing, etc.)
            console.error("Error occurred while adding new client:", error);
            throw error; // Re-throw the error for the caller to handle
        }
    }

    public async getAllClient(): Promise<any> {
        try {
            return await ClientsModel.findAll({});
        } catch (error) {
             // Handle error appropriately (e.g., logging, rethrowing, etc.)
            console.error("Error occurred while fetching clients:", error);
            throw error; // Re-throw the error for the caller to handle
        }
    }

        public async getClientDetails(query: QueryClientDetails): Promise<any> {
        const {bankId, clientId, clientType} = query;
        try {
             return await this.db.instance?.query("CALL prcGetClientDetails(:bankId, :clientId, :clientType)", 
        { replacements: {
            bankId,
            clientId,
            clientType
        }});
        //return true;
        } catch (error) {
             // Handle error appropriately (e.g., logging, rethrowing, etc.)
            console.error("Error occurred while fetching client details:", error);
            throw error; // Re-throw the error for the caller to handle
        }
    }
}