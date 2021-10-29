import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { MyValidationPipe } from 'src/pipe/validation.pipe';
import { CreateUvDto } from './dto/create-uv.dto';
import { Uv } from './entities/uv.entity';
import { UvService } from './uv.service';

@ApiTags('uv')
@UseGuards(AuthGuard('jwt'))
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
}
