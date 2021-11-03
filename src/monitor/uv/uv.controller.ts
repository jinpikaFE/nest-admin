import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
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
  findAll() {
    return this.uvService.findAll();
  }

  @Get('/maps')
  findMaps() {
    return this.uvService.findMaps();
  }

  @Get('/statistics')
  @Transaction()
  findAndsSatistics(@TransactionManager() manager: EntityManager) {
    return this.uvService.findAndsSatistics(manager);
  }
}
