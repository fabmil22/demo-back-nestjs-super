import { Injectable } from '@nestjs/common';
import { CreatePowerDto } from './dto/create-power.dto';
import { UpdatePowerDto } from './dto/update-power.dto';
import { Power } from './entities/power.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PowersService {

  constructor(
    @InjectRepository(Power)
    private powerRepository: Repository<Power>
  ) {}

  async create(_createPowerDto: CreatePowerDto) {
    const powerskill = this.powerRepository.create(_createPowerDto);
    return await this.powerRepository.save(powerskill);
  }

  async findAll() {
    return await this.powerRepository.find();
  }

  async findOne(id: number) {
    return await this.powerRepository.findOneBy({ id });
  }

  async update(id: number, updatePowerDto: UpdatePowerDto) {
    return await this.powerRepository.update({ id }, updatePowerDto);
  }

  async remove(id: number) {
    return await this.powerRepository.softDelete({ id });
  }
}
