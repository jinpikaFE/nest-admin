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
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { MyValidationPipe } from 'src/pipe/validation.pipe';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { RbacGuard } from 'src/guards/token.guard';

@ApiTags('menu')
@UseGuards(AuthGuard('jwt'))
@UseGuards(RbacGuard)
@Controller('api/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @UsePipes(new MyValidationPipe())
  @Post()
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
  @ApiBody({ type: CreateMenuDto })
  update(@Param('id') id: string, @Body() updateMenuDto: CreateMenuDto) {
    return this.menuService.update(id, updateMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(id);
  }

  // @UsePipes(new MyValidationPipe())
  // @Post('/many')
  // @ApiBody({ type: UpdateMenuDto })
  // updateMany(@Body() updateMenuDto: UpdateMenuDto) {
  //   return this.menuService.updateMany(updateMenuDto);
  // }
}
