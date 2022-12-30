import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { sampleDto } from './dto/sampleDto.dto';
import { Request, Response } from 'express';
import { SampleService } from './sample.service';

@Controller('sample')
export class SampleController {
  constructor(private sampleService: SampleService) {}

  @Post('/post')
  @HttpCode(204)
  postList(): string {
    return 'sample post code';
  }

  @Get('/redirect')
  @Redirect()
  getRedirect() {
    return { url: 'https://nestjs.com', statusCode: 202 };
  }

  @Get('/get/:id')
  getParams(@Param() params: {id: number}): string {
    return `sample get code ${params.id}`;
  }

  @Get()
  findAll(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return [];
  }

  @Post()
  async create(@Body() createCatDto: sampleDto) {
    this.sampleService.create(createCatDto);
    return this.sampleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Get()
  service(@Req() req: Request) {
    return this.sampleService.create({ name: 'jairaj', age: 24 });
  }
}