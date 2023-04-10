import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/users-class.dto';

let USERS = [];
@Controller('/users')
export class UsersController {
  @Post()
  addUser(@Body() CreateUserDto: CreateUserDto) {
    return USERS.push(CreateUserDto);
  }

  @Get()
  getUsers() {
    return USERS;
  }

  @Get(':id')
  getUser(@Param(':id') param) {
    return USERS.find((user) => +user.id === +param);
  }

  @Put(':id')
  editUser(@Param(':id') param, @Body() CreateUserDto: CreateUserDto) {
    const userIndex = USERS.findIndex((user) => +user.id === +param);
    console.log('b4', USERS);
    USERS[userIndex] = CreateUserDto;
    console.log('after', USERS);
    return USERS;
  }

  @Delete(':id')
  deleteUser(@Param(':id') param) {
    return USERS.filter((user) => +user.id !== +param);
  }
}
