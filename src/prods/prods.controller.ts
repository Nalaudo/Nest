import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Prod } from '../interfaces/prod/prod.interface';
import { ProdsService } from './prods.service';

@Controller('prods')
export class ProdsController {
  constructor(private readonly prodsService: ProdsService) {}

  @Get()
  async findAll(): Promise<Prod[]> {
    return this.prodsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Prod> {
    return this.prodsService.findOne(id);
  }

  @Post()
  async create(@Body() product: Prod): Promise<Prod> {
    return this.prodsService.create(product);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() product: Prod): Promise<Prod> {
    return this.prodsService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.prodsService.delete(id);
  }
}
