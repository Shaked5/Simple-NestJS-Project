import { Controller, Get } from '@nestjs/common';
import { CalculateService } from './app.service';


@Controller('calc')
export class AppController {
  constructor(private calculatedService: CalculateService) {}

  @Get('/add')
  addTwoNumAndReturnRes(): number {
    return this.calculatedService.add();
  }

  @Get('/multiple')
  multiple(): number {
    return this.calculatedService.multiple();
  }
}
