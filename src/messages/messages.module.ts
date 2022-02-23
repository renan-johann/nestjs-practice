import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from './message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MessageEntity]), MessagesModule],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
