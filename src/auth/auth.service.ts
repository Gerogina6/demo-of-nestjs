import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'I am have signed up' };
  }
  signin() {
    return { msg: 'I am have signed in' };
  }
}
