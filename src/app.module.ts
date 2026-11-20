import { Module } from '@nestjs/common';
import { AppController, TestService } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { ProductModule } from './product/product.module.js';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [AppController],
  providers: [AppService, TestService],
})
export class AppModule {}

// @ is a decorator
// use with class only
// 1. Class, 2. Class method, 3. Class property, 4. Method Parameter, 5. Getter, Setter Decorator
// @ClassLevel() // apply Class level: class decorator
class Test {
  // @IsString(): property decorator
  name: string;

  // @Post(): method decorator
  sayHello(
    //  @Param(): parameter decorator
    phrase: string,
  ) {}
}

// Decorator is a normal javascript function
// Add more ability to class
