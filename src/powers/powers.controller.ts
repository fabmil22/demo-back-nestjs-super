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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('powers')
@Controller('powers')
export class PowersController {
  constructor(private readonly powersService: PowersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new power' })
  create(@Body() createPowerDto: CreatePowerDto) {
    return this.powersService.create(createPowerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all powers' })
  findAll() {
    return this.powersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a power by its id' })
  findOne(@Param('id') id: number) {
    return this.powersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a specific power' })
  update(@Param('id') id: number, @Body() updatePowerDto: UpdatePowerDto) {
    return this.powersService.update(+id, updatePowerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a specific power' })
  remove(@Param('id') id: number) {
    return this.powersService.remove(+id);
  }
}
