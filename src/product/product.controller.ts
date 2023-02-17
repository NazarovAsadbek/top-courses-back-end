import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { ProductModel } from "./product.model";
import { FindProductDto } from "./dto/find-product.dto";

@Controller("product")
export class ProductController {

  @Post("create")
  async create(@Body() dto: Omit<ProductModel, "_id">) {
    return "create";
  }

  @Get(":id")
  async get(@Param("id") id: string) {
    return "get";
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return "delete";
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: ProductModel) {
    return "update";
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) {
    return "find";
  }
}
