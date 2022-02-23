import { Injectable } from '@nestjs/common';
import { MessageDto } from './MessageDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessageEntity } from './message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessageEntity)
    private messagesRepo: Repository<MessageEntity>,
  ) {}

  findAll() {
    return this.messagesRepo.find();
  }

  async findById(id: number) {
    const message = this.messagesRepo.findOne(id); // Safe Navigation (?.) Operator
    if (!message) {
      throw Error(`Mensagem com o ID '${id}' não encontrado.`);
    }
    return message;
  }

  create(messageDto: MessageDto) {
    const newMessage = this.messagesRepo.create(messageDto);
    return this.messagesRepo.save(newMessage);
  }

  async update(id: number, messageDto: MessageDto) {
    const message = await this.messagesRepo.findOne(id); // Safe Navigation (?.) Operator

    // if (index < 0) {
    //   throw Error(`Mensagem com o ID '${id}' não encontrado.`);
    // }

    // const message: Message = {
    //   id,
    //   ...messageDto, // Spread operator JavaScript
    // };

    this.messagesRepo.merge(message, messageDto);
    return this.messagesRepo.save(message);
  }

  async delete(id: number) {
    // if (index < 0) {
    //   throw Error(`Mensagem com o ID '${id}' não encontrado.`);
    // }

    await this.messagesRepo.delete(id);
    return true;
  }
}
