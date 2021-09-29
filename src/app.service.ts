import { Injectable } from '@nestjs/common';

interface Test {
  test: string;
}

@Injectable()
export class AppService {
  testObject: {
    test: 'my name is test';
  };
  getHello(): Test {
    return this.testObject;
  }
}
