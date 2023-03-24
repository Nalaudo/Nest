import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Prod } from '../interfaces/prod/prod.interface';

@Injectable()
export class ProdsService {
  constructor(
    @InjectModel('Products') private readonly prodModel: Model<Prod>,
  ) {}

  async findAll(): Promise<Prod[]> {
    return this.prodModel.find().exec();
  }

  async findOne(id: string): Promise<Prod> {
    return this.prodModel.findById(id).exec();
  }

  async create(prod: Prod): Promise<Prod> {
    const newProd = new this.prodModel(prod);
    return newProd.save();
  }

  async update(id: string, prod: Prod): Promise<Prod> {
    return this.prodModel.findByIdAndUpdate(id, prod, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.prodModel.findByIdAndRemove(id).exec();
  }
}
