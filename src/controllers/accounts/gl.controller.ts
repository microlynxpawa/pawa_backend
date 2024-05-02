import { GeneralLedgerService } from "../../services/accounts/gl.service";
import { AddNewGLAccountDto } from "../../dtos/accounts/gl.dto";
import { Post, Get, Body, JsonController, QueryParams, Authorized, CurrentUser } from "routing-controllers";
import { Service } from "typedi";


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

  @Get("/all")
  public async getAllGLAccounts(){
    return await this.GLService.getAllGLAccounts();
  }
}