import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdSchema } from '../dto/products.schema';
import { ProdsController } from './prods.controller';
import { ProdsService } from './prods.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Nest:Nest@cluster0.kvjcvsb.mongodb.net/nestdb',
    ),
    MongooseModule.forFeature([{ name: 'Products', schema: ProdSchema }]),
  ],
  controllers: [ProdsController],
  providers: [ProdsService],
})
export class ProdsModule {}
