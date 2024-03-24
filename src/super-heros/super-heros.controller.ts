import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SuperHerosService } from './super-heros.service';
import { CreateSuperHeroDto } from './dto/create-super-hero.dto';
import { UpdateSuperHeroDto } from './dto/update-super-hero.dto';

@Controller('superheroes')
export class SuperHerosController {
  constructor(private readonly superHerosService: SuperHerosService) {}

  @Post()
  create(@Body() createSuperHeroDto: CreateSuperHeroDto) {
    return this.superHerosService.create(createSuperHeroDto);
  }

  @Get()
  findAll() {
    return this.superHerosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.superHerosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateSuperHeroDto: UpdateSuperHeroDto,
  ) {
    return this.superHerosService.update(+id, updateSuperHeroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.superHerosService.remove(+id);
  }
}
