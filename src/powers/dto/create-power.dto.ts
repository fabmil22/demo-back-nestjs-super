import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePowerDto {

  @IsString()
  @IsNotEmpty()
  skill: string;

}
