import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constats';
import { UsersModule } from 'src/routers/users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/routers/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/routers/users/entities/user.entity';
import { Role } from 'src/routers/roles/entities/role.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' }, // token 过期时效
    }),
    UsersModule,
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Role]),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, UsersService],
  exports: [AuthService],
})
export class AuthModule {}
