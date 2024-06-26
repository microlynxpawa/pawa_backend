import { ClientsService } from "../../services/clients/clients.service";
import {
  AddNewClientDto,
  QueryClientDetails,
} from "../../dtos/clients/client.dto";
import {
  Post,
  Get,
  Body,
  JsonController,
  QueryParams,
} from "routing-controllers";
import { Service } from "typedi";

@Service()
@JsonController("/clients")
export class ClientsController {
  constructor(private ClientsService: ClientsService) {}
  @Post("/new")
  //@Authorized(AuthorizedRoles.CREDIT_OFFICER)
  public async newClient(
    // @CurrentUser({ required: true }) user: any,
    @Body({ required: true }) dto: AddNewClientDto
  ) {
    // console.log("USER ", user);
    return await this.ClientsService.AddNewClient(dto);
  }

  @Get("/all")
  public async getAllClient() {
    return await this.ClientsService.getAllClient();
  }

  @Get("/allclients")
  public async getClients() {
    return await this.ClientsService.getClients();
  }

  @Get("/clientdetails")
  public async getClientDetails(
    @QueryParams({ required: false }) query: QueryClientDetails
  ) {
    return this.ClientsService.getClientDetails(query);
  }
}
