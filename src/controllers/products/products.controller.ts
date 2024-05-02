import { ProductService } from "../../services/products/products.service";
import { AddNewProductDto, AddNewProductGLSettingsDto, QueryProductDetails, QueryProductGLSettings } from "../../dtos/products/products.dto";
import { Post, Get, Body, JsonController, QueryParams, Authorized, CurrentUser } from "routing-controllers";
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
  public async getAllProducts(){
    return await this.ProductService.getAllProducts();
  }

  @Get('/productdetails')
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

    @Get("/glsettings/all")
  public async getAllProductGLSettings(){
    return await this.ProductService.getAllProductGLSettings();
  }

    @Get('/productgl')
  public async getProductGLSettings(
    @QueryParams({ required: false }) query: QueryProductGLSettings
  ) {
    return this.ProductService.GetBankProductId(query);
  }
}