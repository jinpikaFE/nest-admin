import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  Req,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { MyValidationPipe } from 'src/pipe/validation.pipe';
import { Request } from 'express';
import { RbacInterceptor } from 'src/interceptor/rbac.interceptor';

@ApiTags('users')
@UseGuards(AuthGuard('jwt'))
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UsePipes(new MyValidationPipe())
  @Post()
  // @UseInterceptors(new RbacInterceptor(['admin']))
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto, @Req() request: Request) {
    return this.usersService.create(createUserDto, request);
  }

  @Get()
  findAll(@Query() query) {
    return this.usersService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @UsePipes(new MyValidationPipe())
  @Patch(':id')
  @UseInterceptors(new RbacInterceptor(['admin']))
  @ApiBody({ type: UpdateUserDto })
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Req() request: Request,
  ) {
    return this.usersService.update(id, updateUserDto, request);
  }

  @Delete(':id/:fileName')
  @UseInterceptors(new RbacInterceptor(['admin']))
  remove(@Param('id') id: string, @Param('fileName') fileName: string) {
    return this.usersService.remove(id, fileName);
  }
}
