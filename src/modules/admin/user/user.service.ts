import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { BadRequestException } from '@nestjs/common/exceptions';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ){}
  public async create(createUserDto: CreateUserDto) {
    try {
      let entity = await this.userRepository.create(createUserDto);
      entity = await this.userRepository.save(entity);
      return entity;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  public async findAll() {
    try {
      const entities = await this.userRepository.find();
      return entities;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
