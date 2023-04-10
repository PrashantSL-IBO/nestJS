import { Module } from '@nestjs/common';
import { AlbumController } from './albums.controller';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController, AlbumController],
})
export class AppModule {}
