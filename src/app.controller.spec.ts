import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { CalculateService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [CalculateService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return add function and result 10', () => {
      expect(appController.addTwoNumAndReturnRes()).toBe(10);
    });
  });
});
