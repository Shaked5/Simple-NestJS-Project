import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculateService {
  add(): number {
    return 5 + 5;
  }
  multiple(): number {
    return 5 * 5
  }
}
