import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MessageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column({ default: false })
  completed: boolean;
}
