import { Test, TestingModule } from '@nestjs/testing';
import { SharedModuleController } from './shared_module.controller';

describe('SharedModuleController', () => {
  let controller: SharedModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SharedModuleController],
    }).compile();

    controller = module.get<SharedModuleController>(SharedModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
