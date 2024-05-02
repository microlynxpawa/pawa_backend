import { BanksService } from "../../services/banks/banks.service";
import { Get, JsonController } from "routing-controllers";
import { Service } from "typedi";


@Service()
@JsonController("/banks")
export class BanksController {
  constructor(private bankService: BanksService) {}
  @Get("/")
  public async banksList() {
    return await this.bankService.getBanksList();
  }
}