import { Injectable } from '@nestjs/common';
import { SampleService } from '../sample/sample.service';
import { sharedInterface } from './shared_module.interface';
@Injectable()
export class SharedModuleService {
  constructor(private sampleService: SampleService) {}
  getList() {
    console.log('shared service get list');
    return this.sampleService.findAll();
  }

  postList(data: sharedInterface) {
    console.log('shared service post list');
    return this.sampleService.create(data);
  }
}
