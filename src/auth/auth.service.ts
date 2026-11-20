import { ConflictException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service.js';
import { Hasher } from './providers/hasher.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly hasher: Hasher,
  ) {}

  register(registerInput: any) {
    // find user in database to check if user already exist
    const user = this.userService.findByEmail(registerInput.email);
    if (user) {
      throw new ConflictException('This email is already registered');
    }

    // hash a password
    // const hash = await bcrypt.hash(registerInput.password)
    const hash = this.hasher.hash(registerInput.password);

    // save new user to database
    this.userService.create();

    // sent response by return some value
  }
}
