import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findByEmail(email: string): string | undefined {
    return 'test user';
  }

  create() {}
}
