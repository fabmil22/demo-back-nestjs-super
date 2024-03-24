import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PowersService } from './powers.service';
import { CreatePowerDto } from './dto/create-power.dto';
import { UpdatePowerDto } from './dto/update-power.dto';

@Controller('powers')
export class PowersController {
  constructor(private readonly powersService: PowersService) {}

  @Post()
  create(@Body() createPowerDto: CreatePowerDto) {
    return this.powersService.create(createPowerDto);
  }

  @Get()
  findAll() {
    return this.powersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.powersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePowerDto: UpdatePowerDto) {
    return this.powersService.update(+id, updatePowerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.powersService.remove(+id);
  }
}
