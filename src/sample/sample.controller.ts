import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Redirect, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { sampleDto } from './sampledto.dto'

@Controller('sample')
export class SampleController {
    @Get('/get')
    getList(@Req() request: Request): string {
        return 'sample get codes'
    }

    @Post('/post')
    @HttpCode(204)
    postList(): string {
        return 'sample post code'
    }

    @Get('/redirect')
    @Redirect()
    getRedirect() {
        return {url: 'https://nestjs.com', statusCode: 202} ;
    }

    @Get('/get/:id')
    getParams(@Param() params): string {
        return `sample get code ${params.id}`
    }

    @Post()
    bodyValidation(@Body() sampleDto: sampleDto): any {
        return sampleDto
    }

    @Get()
    findAll(@Res({ passthrough: true }) res: Response) {
        res.status(HttpStatus.OK);
        return [];
    }
}
