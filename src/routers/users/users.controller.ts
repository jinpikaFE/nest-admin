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
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { MyValidationPipe } from 'src/pipe/validation.pipe';

@ApiTags('users')
@UseGuards(AuthGuard('jwt'))
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UsePipes(new MyValidationPipe())
  @Post()
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query() Query) {
    return this.usersService.findAll(Query);
  }

  @UsePipes(new MyValidationPipe())
  @Patch(':id')
  @ApiBody({ type: UpdateUserDto })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
