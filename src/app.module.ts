import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BTCRateModule } from './btcrate/btcrate.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, BTCRateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}