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
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { RbacInterceptor } from 'src/interceptor/rbac.interceptor';
import { MyValidationPipe } from 'src/pipe/validation.pipe';
import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@ApiTags('users')
@UseGuards(AuthGuard('jwt'))
@Controller('api/bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @UsePipes(new MyValidationPipe())
  @Post()
  @UseInterceptors(new RbacInterceptor(['admin']))
  @ApiBody({ type: CreateBillDto })
  create(@Body() createBillDto: CreateBillDto) {
    return this.billService.create(createBillDto);
  }

  @Get()
  findAll(@Query() query) {
    return this.billService.filterQuery(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billService.findOne(+id);
  }

  @UsePipes(new MyValidationPipe())
  @Patch(':id')
  @UseInterceptors(new RbacInterceptor(['admin']))
  @ApiBody({ type: UpdateBillDto })
  update(@Param('id') id: string, @Body() updateBillDto: UpdateBillDto) {
    return this.billService.update(id, updateBillDto);
  }

  @Delete(':id')
  @UseInterceptors(new RbacInterceptor(['admin']))
  remove(@Param('id') id: string) {
    return this.billService.remove(id);
  }
}
