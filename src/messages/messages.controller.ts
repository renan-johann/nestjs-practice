import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Message } from './Message';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.messagesService.findById(+params.id);
  }

  @Post()
  create(@Body() message: Message) {
    return this.messagesService.create(message);
  }
}
