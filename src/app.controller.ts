import { Controller, Get, Injectable } from '@nestjs/common';
import { AppService } from './app.service.js';

@Injectable()
export class TestService {}

// Controller: Request handler, Sent Response
@Controller()
export class AppController {
  // Dependency Injection
  constructor(
    private readonly appService: AppService,
    private readonly testService: TestService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// @Contoller, @Get
// ENDPOINT: GET /
// execute getHello() and return value is a response
