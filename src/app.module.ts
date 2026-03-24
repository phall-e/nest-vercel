import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ModulesModule } from './modules/modules.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule, 
    ModulesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
