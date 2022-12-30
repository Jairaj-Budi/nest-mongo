import { Body, Controller, Get, Post } from '@nestjs/common';
import { SharedModuleService } from './shared_module.service';
import { sharedDto } from './shared_module.dto';
@Controller('shared')
export class SharedModuleController {
  constructor(private sharedModuleService: SharedModuleService) {}
  @Get()
  getDetails(): string {
    return 'this is shared module';
  }

  @Post()
  postDetails(@Body() details: sharedDto) {
    this.sharedModuleService.postList(details);
    return this.sharedModuleService.getList();
  }
}
