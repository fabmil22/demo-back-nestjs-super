import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSuperHeroDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  secretIdentity: string;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  superpowers: Array<string>;
  
  @ApiProperty()
  @IsString()
  @IsOptional()
  image: string;

}
