import { ProductService } from "../../services/products/products.service";
import {
  AddNewProductDto,
  AddNewProductGLSettingsDto,
  QueryProductDetails,
  QueryProductGLSettings,
} from "../../dtos/products/products.dto";
import {
  Post,
  Get,
  Body,
  JsonController,
  QueryParams,
} from "routing-controllers";
import { Service } from "typedi";

@Service()
@JsonController("/products")
export class ProductController {
  constructor(private ProductService: ProductService) {}
  @Post("/new")
  //@Authorized(AuthorizedRoles.CREDIT_OFFICER)
  public async newProduct(
    //@CurrentUser({ required: true }) user: any,
    @Body({ required: true }) dto: AddNewProductDto
  ) {
    return await this.ProductService.AddNewProduct(dto);
  }

  @Get("/all")
  public async getAllProducts() {
    return await this.ProductService.getAllProducts();
  }

  @Get("/productdetails")
  public async getProductDetails(
    @QueryParams({ required: false }) query: QueryProductDetails
  ) {
    return this.ProductService.GetProductDetails(query);
  }

  @Post("/glsettings/new")
  //@Authorized(AuthorizedRoles.CREDIT_OFFICER)
  public async newProductGL(
    //@CurrentUser({ required: true }) user: any,
    @Body({ required: true }) dto: AddNewProductGLSettingsDto
  ) {
    return await this.ProductService.AddNewProductGLSettings(dto);
  }

  @Post("/glsettings/all")
  public async getAllProductGLSettings(
    @Body({ required: true }) dto: QueryProductGLSettings
  ) {
    return await this.ProductService.getAllProductGLSettings(dto);
  }

  @Post("/bank-products")
  public async getProductGLSettings(
    @Body({ required: true }) dto: QueryProductGLSettings
  ) {
    return await this.ProductService.GetBankProducts(dto);
  }
}
