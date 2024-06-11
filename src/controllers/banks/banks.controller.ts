import { QueryProductGLSettings } from "../../dtos/products/products.dto";
import { BanksService } from "../../services/banks/banks.service";
import { Get, JsonController, Post, Body } from "routing-controllers";
import { Service } from "typedi";

@Service()
@JsonController("/banks")
export class BanksController {
  constructor(private bankService: BanksService) {}
  @Get("/")
  public async banksList() {
    return await this.bankService.getBanksList();
  }

  @Post("/branches")
  //@Authorized(AuthorizedRoles.CREDIT_OFFICER)
  public async newProduct(
    //@CurrentUser({ required: true }) user: any,
    @Body({ required: true }) dto: QueryProductGLSettings
  ) {
    return await this.bankService.getBranchList(dto);
  }
}
