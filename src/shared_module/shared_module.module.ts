import { Module } from '@nestjs/common';
import { SampleModule } from '../sample/sample.module';
import { SharedModuleService } from './shared_module.service';

@Module({
  imports: [SampleModule]
})
export class SharedModuleModule {}
