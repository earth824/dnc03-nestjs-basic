import { Module } from '@nestjs/common';
import { ProductController } from './product.controller.js';
import { ProductService } from './product.service.js';
import { UserModule } from '../user/user.module.js';

abstract class HashService {
  abstract hash(plain: string): string;
}

class BcryptService extends HashService {
  hash(plain: string): string {
    return 'test bcrypt';
  }
}

class ArgonService extends HashService {
  hash(plain: string): string {
    return 'test argon';
  }
}

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService],
  // providers: [
  //   {
  //     provide: ProductService, // TOKEN
  //     useClass: ProductService, // create instance from this class
  //   },
  //   {
  //     provide: HashService,
  //     useClass: ArgonService, // create instance of argon
  //   },
  // ],
})
export class ProductModule {}
