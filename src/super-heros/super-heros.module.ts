import { Module } from '@nestjs/common';
import { SuperHerosService } from './super-heros.service';
import { SuperHerosController } from './super-heros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuperHero } from './entities/super-hero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SuperHero])],
  controllers: [SuperHerosController],
  providers: [SuperHerosService],
})
export class SuperHerosModule {}
