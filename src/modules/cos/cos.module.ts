import { Module } from '@nestjs/common';
import { CosService } from './cos.service';

@Module({
  providers: [CosService],
  exports: [CosService],
})
export class CosModule {}
