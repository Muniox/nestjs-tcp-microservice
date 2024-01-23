import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './event/create-user.event';

@Injectable()
export class AppService {
  private readonly analitycs: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - ANALITYCS', data);
    this.analitycs.push({
      email: data.email,
      timestamp: new Date(),
    });
  }

  getAnalytics() {
    return this.analitycs;
  }
}
