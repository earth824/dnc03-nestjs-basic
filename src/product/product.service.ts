import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service.js';

@Injectable()
export class ProductService {
  constructor(private readonly userService: UserService) {}
}
