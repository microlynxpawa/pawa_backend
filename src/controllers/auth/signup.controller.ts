import { JsonController, Get } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
@JsonController("/users")
export class SignupController {
  @Get("/")
  getAll() {
    return 'This action returns all users.';
  }
}
