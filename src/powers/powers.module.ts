import { Module } from '@nestjs/common';
import { PowersService } from './powers.service';
import { PowersController } from './powers.controller';
import { Power } from './entities/power.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Power])],
  controllers: [PowersController],
  providers: [PowersService],
})
export class PowersModule {}
