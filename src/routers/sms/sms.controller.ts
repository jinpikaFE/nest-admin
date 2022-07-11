import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { MyValidationPipe } from 'src/pipe/validation.pipe';
import { CreateSmsDto } from './dto/create-sms.dto';
import { SmsService } from './sms.service';

@ApiTags('sms')
@Controller('/api/sms')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @UsePipes(new MyValidationPipe())
  @ApiBody({ type: CreateSmsDto })
  @Post()
  sendSms(@Body() createSmsDto: CreateSmsDto) {
    return this.smsService.sendSms(createSmsDto);
  }
}
