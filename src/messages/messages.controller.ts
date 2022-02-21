import {
  Body,
  Controller,
  Param,
  Get,
  Post,
  Put,
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { MessageDto } from './MessageDto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id) {
    // https://docs.nestjs.com/pipes
    return this.messagesService.findById(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  create(@Body() messageDto: MessageDto) {
    return this.messagesService.create(messageDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id, @Body() messageDto: MessageDto) {
    return this.messagesService.update(id, messageDto).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id) {
    return this.messagesService.delete(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
