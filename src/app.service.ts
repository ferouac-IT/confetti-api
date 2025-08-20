import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * Returns a welcome string. Expand this service to handle business logic.
   */
  getHello(): string {
    return 'Welcome to Confetti API';
  }
}
