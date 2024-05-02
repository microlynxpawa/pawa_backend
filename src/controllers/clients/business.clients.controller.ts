import { BusinessClientsService } from "../../services/clients/business.clients.service";
import { AddNewBusinesslientDto } from "../../dtos/clients/business.client.dto";
import { Post, Get, Body, JsonController, Authorized, CurrentUser } from "routing-controllers";
import { Service } from "typedi";


@Service()
@JsonController("/business/clients")
export class BusinessClientsController {
  constructor(private BusinessClientsService: BusinessClientsService) {}
  @Post("/new")
  //@Authorized(AuthorizedRoles.CREDIT_OFFICER)
  public async newBusinessClient(
    //@CurrentUser({ required: true }) user: any,
    @Body({ required: true }) dto: AddNewBusinesslientDto
  ) {
    return await this.BusinessClientsService.AddNewBusinessClient(dto);
  }

  @Get("/all")
  public async getAllBusinessClient(){
    return await this.BusinessClientsService.getAllBusinessClient();
  }
}