import { Response } from "express";
import { Service } from "typedi";
import { PendingSignupService } from "../../services/auth/pending.signup.service";
import {
  AddPendingSignupDto,
  ConfirmPendingSignedupUserDto,
  ResendValidationCodeDto,
} from "../../dtos/auth/pending.signup.dto";
import { Post, Body, JsonController, Res } from "routing-controllers";

@Service()
@JsonController("/auth")
export class PendingSignupController {
  constructor(private PendingSignup: PendingSignupService) {}
  @Post("/pendingsignup")
  public async newSignedUpUser(
    @Body({ required: true }) dto: AddPendingSignupDto
  ) {
    return await this.PendingSignup.SignupPendingUser(dto);
  }

  @Post("/verifycode")
  public async codeVerification(
    @Body({ required: true }) dto: ConfirmPendingSignedupUserDto,
    @Res() resp: Response
  ) {
    return await this.PendingSignup.confrimPendingAuthUser(dto, resp);
  }

  @Post("/code/resend")
  public async resendVerificationCode(
    @Body({ required: true }) dto: ResendValidationCodeDto,
    @Res() resp: Response
  ) {
    return await this.PendingSignup.resendPendingUserCode(dto, resp);
  }
}
