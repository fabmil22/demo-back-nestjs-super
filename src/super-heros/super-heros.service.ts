import { Injectable } from '@nestjs/common';
import { CreateSuperHeroDto } from './dto/create-super-hero.dto';
import { UpdateSuperHeroDto } from './dto/update-super-hero.dto';
import { SuperHero } from './entities/super-hero.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SuperHerosService {
  constructor(
    @InjectRepository(SuperHero)
    private superHeroRepository: Repository<SuperHero>,
  ) {}

  async create(_createSuperHeroDto: CreateSuperHeroDto) {
    const hero = this.superHeroRepository.create(_createSuperHeroDto);
    return await this.superHeroRepository.save(hero);
  }

  async findAll() {
    return await this.superHeroRepository.find();
  }

  async findOne(id: number) {
    return await this.superHeroRepository.findOneBy({ id });
  }

  async update(id: number, _updateSuperHeroDto: UpdateSuperHeroDto) {
    return await this.superHeroRepository.update({ id }, _updateSuperHeroDto);
  }

  async remove(id: number) {
    return await this.superHeroRepository.softDelete({ id });
  }
}
