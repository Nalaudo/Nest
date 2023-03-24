import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdsModule } from './prods/prods.module';

@Module({
  imports: [ProdsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
