import { LoginUserService } from "../../services/auth/login.service";
import { LoginUserDto } from "../../dtos/auth/login.dto";
import { Post, Body, JsonController, Res } from "routing-controllers";
import { Response } from "express";
import { Service } from "typedi";

@Service()
@JsonController("/auth")
export class LoginController {
  constructor(private LoginUser: LoginUserService) {}
  @Post("/login")
  public async loginUser(
    @Body({ required: true }) dto: LoginUserDto,
    @Res() resp: Response
  ) {
    return await this.LoginUser.loginAuthUser(dto, resp);
  }
}
