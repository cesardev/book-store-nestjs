import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';

@Controller('auth')
export class AuthController {

   constructor(
      private readonly _authService: AuthService
   ) {  }

   @Post( '/signup' )
   @UsePipes( ValidationPipe )
   public async signup( @Body() signupDto: SignUpDto ): Promise<void> {
      return this._authService.signup( signupDto );
   }

   @Post( '/signin' )
   @UsePipes( ValidationPipe )
   public async signin( @Body() signinDto: SignInDto ): Promise<{ token: string }> {
      return this._authService.signin( signinDto );
   }

}
