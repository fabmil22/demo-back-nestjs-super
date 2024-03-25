import { Module } from '@nestjs/common';
import { SuperHerosService } from './super-heros.service';
import { SuperHerosController } from './super-heros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuperHero } from './entities/super-hero.entity';
import { MulterModule } from '@nestjs/platform-express';
import { FileUploadService } from './file-upload/file-upload.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SuperHero]),
    MulterModule.registerAsync({
      useClass: FileUploadService,
    }),
  ],
  controllers: [SuperHerosController],
  providers: [SuperHerosService, FileUploadService],
})
export class SuperHerosModule {}
