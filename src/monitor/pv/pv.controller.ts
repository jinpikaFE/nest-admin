import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { MyValidationPipe } from 'src/pipe/validation.pipe';
import { EntityManager, Transaction, TransactionManager } from 'typeorm';
import { CreatePvDto } from './dto/create-pv.dto';
import { Pv } from './entities/pv.entity';
import { PvService } from './pv.service';

@ApiTags('pv')
@Controller('api/pv')
export class PvController {
  constructor(private readonly pvService: PvService) {}

  @UsePipes(new MyValidationPipe())
  @ApiBody({ type: CreatePvDto })
  @Post()
  create(@Body() createPvDto: Pv) {
    return this.pvService.create(createPvDto);
  }

  @Get('/all')
  findAll() {
    return this.pvService.findAll();
  }

  @Get('/statistics')
  @Transaction()
  findAndsSatistics(@TransactionManager() manager: EntityManager) {
    return this.pvService.findAndsSatistics(manager);
  }
}
