import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service.js';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Delete(':id')
  remove(@Param() param: { id: string }) {
    // MUST VALIDATE: using PIPE
    console.log(param);
  }

  @Patch(':id')
  updatePrice(@Param('id') id: string, @Body() body: unknown) {
    console.log(id);
  }

  // @Get()
  // getAll(@Query() query: { page: string }) {
  //   console.log(query);
  // }

  @Get('beverage')
  getAllBeverage() {
    return 'GET ALL BEVERAGE';
  }

  @Get(':id')
  getAll(
    @Query('page') page: string,
    @Query('q') q: string,
    @Param('id') id: string,
  ) {
    console.log(q, page, id);
    return 'GET BY ID';
  }
}
