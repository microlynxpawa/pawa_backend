import { GeneralLedgerService } from "../../services/accounts/gl.service";
import { AddNewGLAccountDto } from "../../dtos/accounts/gl.dto";
import { Post, Body, JsonController } from "routing-controllers";
import { Service } from "typedi";
import { QueryProductGLSettings } from "../../dtos/products/products.dto";

@Service()
@JsonController("/glaccount")
export class GLAccountController {
  constructor(private GLService: GeneralLedgerService) {}
  @Post("/new")
  //@Authorized(AuthorizedRoles.CREDIT_OFFICER)
  public async newProduct(
    //@CurrentUser({ required: true }) user: any,
    @Body({ required: true }) dto: AddNewGLAccountDto
  ) {
    return await this.GLService.AddNewGLAccount(dto);
  }

  @Post("/bank-glaccount")
  public async getAllGLAccounts(
    @Body({ required: true }) dto: QueryProductGLSettings
  ) {
    return await this.GLService.getAllGLAccounts(dto);
  }
}
