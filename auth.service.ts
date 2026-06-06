import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(admin: any) {
    return {
      access_token: this.jwtService.sign({
        id: admin._id,
        email: admin.email,
      }),
    };
  }
}