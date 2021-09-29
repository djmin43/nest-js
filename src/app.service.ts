import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    const testObject = {
      test: 'my name is test',
    };
    return testObject;
  }
}
