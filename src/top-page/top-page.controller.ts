import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { TopPageModel } from "./top-page.model";
import { FindProductDto } from "../product/dto/find-product.dto";
import { FindTopPageDto } from "./dto/find-top-page.dto";

@Controller("top-page")
export class TopPageController {
  @Post("create")
  async create(@Body() dto: Omit<TopPageModel, "_id">) {
    return "This action adds a new topPage";
  }

  @Get(":id")
  async get(@Param("id") id: string) {
    return `This action returns all topPage`;
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return `This action returns a #${id} topPage`;
  }

  @Patch(":id")
  async patch(@Param("id") id: string, @Body() dto: TopPageModel) {
    return `This action removes a #${id} topPage`;
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {
    return "This action returns all topPage";
  }
}
