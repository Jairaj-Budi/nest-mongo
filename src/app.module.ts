import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleController } from './sample/sample.controller';
import { SampleModule } from './sample/sample.module';
import { SampleService } from './sample/sample.service';
import { SharedModuleController } from './shared_module/shared_module.controller';
import { SharedModuleModule } from './shared_module/shared_module.module';
import { SharedModuleService } from './shared_module/shared_module.service';

@Module({
  imports: [SampleModule, SharedModuleModule],
  controllers: [AppController, SampleController, SharedModuleController],
  providers: [AppService, SampleService, SharedModuleService],
})
export class AppModule {}