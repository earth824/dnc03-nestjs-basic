import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { UserModule } from '../user/user.module.js';
import { PasswordHasher } from './providers/password-hasher.js';
import { Hasher } from './providers/hasher.js';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: Hasher,
      useClass: PasswordHasher,
    },
  ],
})
export class AuthModule {}
