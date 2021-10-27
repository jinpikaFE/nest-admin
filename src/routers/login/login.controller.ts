import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { MyValidationPipe } from 'src/pipe/validation.pipe';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@ApiTags('login')
@Controller('api/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @UsePipes(new MyValidationPipe())
  @Post()
  @ApiBody({ type: LoginDto })
  create(@Body() loginDto: LoginDto) {
    return this.loginService.login(loginDto);
  }
}
