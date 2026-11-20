import {
  Body,
  Controller,
  Get,
  Post,
  StandardSchemaValidationPipe,
  UsePipes,
} from '@nestjs/common';
import {
  type CreateUserDto,
  createUserSchema,
} from './dtos/create-user.dto.js';

@Controller('users')
export class UserController {
  @Get()
  getAllUser() {
    return [];
  }

  @UsePipes(StandardSchemaValidationPipe)
  @Post()
  create(
    @Body({ schema: createUserSchema })
    dto: CreateUserDto,
  ) {
    return 'CREATE USER';
  } // Body { email: string, password: string, gender?: 'MALE' | 'FEMALE', dob?: string }
}
