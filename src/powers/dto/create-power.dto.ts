import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePowerDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  skill: string;

}
