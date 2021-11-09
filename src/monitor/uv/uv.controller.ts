import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { MyValidationPipe } from 'src/pipe/validation.pipe';
import { EntityManager, Transaction, TransactionManager } from 'typeorm';
import { CreateUvDto } from './dto/create-uv.dto';
import { Uv } from './entities/uv.entity';
import { UvService } from './uv.service';

@ApiTags('uv')
@Controller('api/uv')
export class UvController {
  constructor(private readonly uvService: UvService) {}

  @UsePipes(new MyValidationPipe())
  @ApiBody({ type: CreateUvDto })
  @Post()
  create(@Body() createUvDto: Uv) {
    return this.uvService.create(createUvDto);
  }

  @Get('/all')
  findAll(@Query() query) {
    return this.uvService.findAll(query);
  }

  @Get('/maps/:type')
  findMaps(@Param('type') type: string) {
    return this.uvService.findMaps(type);
  }

  @Get('/statistics')
  @Transaction()
  findAndsSatistics(
    @Query() query,
    @TransactionManager() manager: EntityManager,
  ) {
    return this.uvService.findAndsSatistics(manager, query);
  }
}
