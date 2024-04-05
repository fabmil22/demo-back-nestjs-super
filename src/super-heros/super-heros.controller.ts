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
  Res,
} from '@nestjs/common';
import { SuperHerosService } from './super-heros.service';
import { CreateSuperHeroDto } from './dto/create-super-hero.dto';
import { UpdateSuperHeroDto } from './dto/update-super-hero.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { Response } from 'express';
import { Observable, of } from 'rxjs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('superheroes')
@Controller('superheroes')
export class SuperHerosController {
  constructor(private readonly superHerosService: SuperHerosService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Super Hero' })
  create(@Body() createSuperHeroDto: CreateSuperHeroDto) {
    return this.superHerosService.create(createSuperHeroDto);
  }

  @Get()
  @ApiOperation({ summary:'find all super' })
  findAll() {
    return this.superHerosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one by id' })
  findOne(@Param('id') id: number) {
    return this.superHerosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update the hero' })
  async update(
    @Param('id') id: number,
    @Body() updateSuperHeroDto: UpdateSuperHeroDto,
  ) {
    return this.superHerosService.update(+id, updateSuperHeroDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete the hero' })
  remove(@Param('id') id: number) {
    return this.superHerosService.remove(+id);
  }

  @Post('upload')
  @ApiOperation({ summary: 'Upload an image' })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (file) {
      return { filename: file.filename };
    } else {
      return { error: 'No se recibió ningún archivo' };
    }
  }

 
  @Get('/img/:imageName')
  @ApiOperation({ summary: 'Show an image' })
  getImage(
    @Param('imageName') imageName: string,
    @Res() res: Response,
  ): Observable<any> {
    return of(res.sendFile(join(process.cwd(), 'uploads/' + imageName)));
  }
}

