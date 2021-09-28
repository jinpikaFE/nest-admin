import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ uniqueItems: true })
  userName: string;
  @ApiProperty()
  password: string;
}
