import { Module } from '@nestjs/common';
import { SuperHerosModule } from './super-heros/super-heros.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PowersModule } from './powers/powers.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_gestor',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SuperHerosModule,
    PowersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
