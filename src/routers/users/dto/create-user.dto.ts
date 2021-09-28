import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({ uniqueItems: true })
  readonly userName: string;
  @ApiProperty()
  readonly password: string;
}
