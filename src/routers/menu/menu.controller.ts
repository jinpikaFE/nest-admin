import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { MyValidationPipe } from 'src/pipe/validation.pipe';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { RbacInterceptor } from 'src/interceptor/rbac.interceptor';

@ApiTags('menu')
@UseGuards(AuthGuard('jwt'))
@Controller('api/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @UsePipes(new MyValidationPipe())
  @Post()
  // @UseInterceptors(new RbacInterceptor(['admin']))
  @ApiBody({ type: CreateMenuDto })
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @Get()
  findAll() {
    return this.menuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @UsePipes(new MyValidationPipe())
  @Patch(':id')
  @UseInterceptors(new RbacInterceptor(['admin']))
  @ApiBody({ type: CreateMenuDto })
  update(@Param('id') id: string, @Body() updateMenuDto: CreateMenuDto) {
    return this.menuService.update(id, updateMenuDto);
  }

  @Delete(':id')
  @UseInterceptors(new RbacInterceptor(['admin']))
  remove(@Param('id') id: string) {
    return this.menuService.remove(id);
  }

  @UsePipes(new MyValidationPipe())
  @Post('/many')
  // @UseInterceptors(new RbacInterceptor(['admin']))
  @ApiBody({ type: UpdateMenuDto })
  updateMany(@Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.updateMany(updateMenuDto);
  }
}
