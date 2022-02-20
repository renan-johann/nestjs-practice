import {
  Body,
  Controller,
  Param,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
} from '@nestjs/common';
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

  @Put(':id')
  update(@Param() params, @Body() message: Message) {
    return this.messagesService.update(+params.id, message);
  }

  @HttpCode(204)
  @Delete(':id')
  delete(@Param() params) {
    return this.messagesService.delete(+params.id);
  }
}
