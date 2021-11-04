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
  UseInterceptors,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { MyValidationPipe } from 'src/pipe/validation.pipe';
import { RbacInterceptor } from 'src/interceptor/rbac.interceptor';

@ApiTags('roles')
@UseGuards(AuthGuard('jwt'))
@Controller('api/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @UsePipes(new MyValidationPipe())
  @ApiBody({ type: CreateRoleDto })
  @Post()
  // @UseInterceptors(new RbacInterceptor(['admin']))
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  filterQuery(@Query() query) {
    return this.rolesService.filterQuery(query);
  }

  @Get('/all')
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(id);
  }

  @UsePipes(new MyValidationPipe())
  @Patch(':id')
  @UseInterceptors(new RbacInterceptor(['admin']))
  @ApiBody({ type: UpdateRoleDto })
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(id, updateRoleDto);
  }

  @Delete(':id/:name')
  @UseInterceptors(new RbacInterceptor(['admin']))
  remove(@Param('id') id: string, @Param('name') name: string) {
    return this.rolesService.remove(id, name);
  }
}
