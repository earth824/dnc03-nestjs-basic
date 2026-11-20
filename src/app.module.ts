import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// @ is a decorator
// use with class only
// 1. Class, 2. Class method, 3. Class property, 4. Method Parameter
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
