import { Service } from "typedi";
import BanksModel from "../../db/models/banks.model";


@Service()
export class BanksService {
    public async getBanksList(): Promise<any> {
        try {
            return await BanksModel.findAll({});
        } catch (error) {
            console.error(error);
        }
    }
}