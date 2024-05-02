import { ClientsService } from "../../services/clients/clients.service";
import { AddNewClientDto, QueryClientDetails } from "../../dtos/clients/client.dto";
import { Post, Get, Body, JsonController, QueryParams, Authorized, CurrentUser } from "routing-controllers";
import { Service } from "typedi";


@Service()
@JsonController("/clients")
export class ClientsController {
  constructor(private ClientsService: ClientsService) {}
  @Post("/new")
  //@Authorized(AuthorizedRoles.CREDIT_OFFICER)
  public async newClient(
    //@CurrentUser({ required: true }) user: any,
    @Body({ required: true }) dto: AddNewClientDto
  ) {
    return await this.ClientsService.AddNewClient(dto);
  }

  @Get("/all")
  public async getAllClient(){
    return await this.ClientsService.getAllClient();
  }

    @Get('/clientdetails')
  public async getClientDetails(
    @QueryParams({ required: false }) query: QueryClientDetails
  ) {
    return this.ClientsService.getClientDetails(query);
  }
}