import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './event/create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - COMMUNICATIONS', data);
    // TODO: Email in the user
  }
}
