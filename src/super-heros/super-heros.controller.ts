import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { SuperHerosService } from './super-heros.service';
import { CreateSuperHeroDto } from './dto/create-super-hero.dto';
import { UpdateSuperHeroDto } from './dto/update-super-hero.dto';
import { FileUploadService } from './file-upload/file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('superheroes')
export class SuperHerosController {
  constructor(private readonly superHerosService: SuperHerosService,
    private readonly fileUploadService: FileUploadService
  ) { }

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

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (file) {
      console.log('ver', file);
      return { filename: file.filename };
    } else {
      // Manejar el caso donde no se recibió ningún archivo
      return { error: 'No se recibió ningún archivo' };
    }
  }
}
