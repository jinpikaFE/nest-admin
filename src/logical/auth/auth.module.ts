import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constats';
import { UsersModule } from 'src/routers/users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { usersProviders } from 'src/routers/users/users.providers';
import { DatabaseModule } from 'src/providers/database/database.module';
import { UsersService } from 'src/routers/users/users.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' }, // token 过期时效
    }),
    UsersModule,
    DatabaseModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    UsersService,
    ...usersProviders,
  ],
  exports: [AuthService],
})
export class AuthModule {}
