import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSuperHeroDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  secretIdentity: string;

  @IsArray()
  @IsNotEmpty()
  superpowers: Array<string>;

  @IsString()
  @IsOptional()
  image: string;

}
