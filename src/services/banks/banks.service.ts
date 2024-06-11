import { Service } from "typedi";
import BanksModel from "../../db/models/banks.model";
import Logger from "../../utils/winston";
import { DatabaseConnection } from "../../db";
import { BanksErrorCodes } from "../../error/banks/banks.errorcode";
import { QueryProductGLSettings } from "../../dtos/products/products.dto";

@Service()
export class BanksService {
  constructor(private db: DatabaseConnection) {}
  public async getBanksList(): Promise<any> {
    try {
      return await BanksModel.findAll({});
    } catch (error) {
      Logger.error(error);
      return BanksErrorCodes.readingBanksError;
    }
  }

  public async getBranchList(dto: QueryProductGLSettings): Promise<any> {
    const { bankId } = dto;
    try {
      const results = await this.db.instance?.query(
        "select distinct ourBranchId from t_ProductGLSettingDetails where bankId = :bankId",
        {
          replacements: {
            bankId,
          },
        }
      );
      if (!results) return [];
      const [rows] = results;
      return rows;
    } catch (error) {
      Logger.error(error);
      return BanksErrorCodes.readingBranchesError;
    }
  }
}
