import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SuccessResponse } from 'src/helpers/success.response';
import { DeleteTopPageDto } from './dto/delete-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { FindTopPageResponse } from './dto/find-top-page.response';
import { SaveTopPageModelDto } from './dto/save-top-page.dto';
import { TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {
  @Get('get/:alias')
  async get(@Param('alias') alias: string): Promise<TopPageModel> {
    return new Promise(resolve => {})
  }

  @Post('find')
  async getByCategory(@Body() dto: FindTopPageDto): Promise<FindTopPageResponse[]> {
    return new Promise(resolve => {})
  }

  @Post('save')
  async save(@Body() dto: SaveTopPageModelDto): Promise<TopPageModel> {
    return new Promise(resolve => {})
  }

  @Delete('delete')
  async delete(@Body() dto: DeleteTopPageDto): Promise<SuccessResponse> {
    return new Promise(resolve => {})
  }
}
