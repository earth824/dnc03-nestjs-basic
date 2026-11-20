import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  StandardSchemaValidationPipe,
  UsePipes,
} from '@nestjs/common';
import {
  type CreateUserDto,
  createUserSchema,
} from './dtos/create-user.dto.js';
import z from 'zod';

// @UsePipes(StandardSchemaValidationPipe)
@Controller('users')
export class UserController {
  @Get()
  getAllUser() {
    return [];
  }

  // @UsePipes(StandardSchemaValidationPipe)
  @Post()
  create(
    @Body({ schema: createUserSchema })
    dto: CreateUserDto,
  ) {
    return 'CREATE USER';
  } // Body { email: string, password: string, gender?: 'MALE' | 'FEMALE', dob?: string }

  @Patch(':id')
  update(
    @Param('id', { schema: z.coerce.number().int().positive() }) id: number,
  ) {}
}
