import { Injectable } from '@nestjs/common';
import { cat } from './interface/sample.interface';

@Injectable()
export class SampleService {
  private readonly cats: cat[] = [];

  create(cat: cat) {
    this.cats.push(cat);
    console.log(this.cats, 'sample service create');
  }

  findAll(): cat[] {
    console.log('sample service findall');
    return this.cats;
  }
}
