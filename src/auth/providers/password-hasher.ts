import { Injectable } from '@nestjs/common';
import { Hasher } from './hasher.js';

@Injectable()
export class PasswordHasher extends Hasher {
  hash(plain: string): string {
    return 'hash';
  }

  compare(plain: string, hash: string): boolean {
    return true;
  }
}
