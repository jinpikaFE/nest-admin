import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import * as path from 'path';
import { RuleResType } from 'src/types/global';
import { base64ToFile, fs_delete } from 'src/utils';
import { encryptPassword, makeSalt } from 'src/utils/cryptogram';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './interface/user';
import { Request } from 'express';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async create(
    createUserDto: CreateUserDto,
    request: Request,
  ): Promise<RuleResType<any>> {
    const { userName, password, email, phone, roleId, avatar } = createUserDto;
    const salt = makeSalt(); // 制作密码盐
    const hashPwd = encryptPassword(password, salt); // 加密密码
    const fileName = `avatar_${new Date().getTime()}`;
    // 头像传过来则上传为文件，切用url储存
    const res = avatar
      ? base64ToFile(
          avatar,
          path.join(__dirname, '../../../', `src/asset/${fileName}.png`),
        )
      : false;
    await this.userModel.create({
      userName,
      password: hashPwd,
      salt,
      email,
      phone,
      roleId,
      avatar: res
        ? [
            {
              uid: fileName,
              name: `${fileName}.png`,
              status: 'done',
              url: `${request.protocol}://${request?.get(
                'host',
              )}/asset/${fileName}.png`,
            },
          ]
        : '',
    });
    return { code: 0, message: '创建成功', data: null };
  }

  async findAll(params): Promise<RuleResType<any>> {
    const {
      current,
      pageSize,
      registerTime,
      userName,
      roleId,
      email,
      phone,
      startTime,
      endTime,
    } = params;
    const findObj: any = {};
    email && (findObj.email = eval(`/${email}/i`));
    phone && (findObj.phone = eval(`/${phone}/i`));
    userName && (findObj.userName = eval(`/${userName}/i`));
    roleId && (findObj.roleId = { $in: roleId });
    startTime &&
      endTime &&
      (findObj.registerTime = {
        $gte: new Date(startTime),
        $lte: new Date(endTime),
      });
    const data = await this.userModel
      .find(findObj, { password: 0, salt: 0 })
      .populate('roleId', ['name'])
      .skip((Number(current) - 1) * Number(pageSize))
      .limit(Number(pageSize))
      .sort({ registerTime: registerTime === 'descend' ? -1 : 1 });
    const total = await this.userModel
      .find(findObj)
      .populate('roleId', ['name'])
      .count();
    return { code: 0, message: '查询成功', data, total };
  }

  // async update(
  //   id: string,
  //   updateUserDto: UpdateUserDto,
  //   request: Request,
  // ): Promise<RuleResType<any>> {
  //   const { userName, email, phone, role, avatar } = updateUserDto;
  //   const resFind = await this.userModel.findById(id);
  //   let upAvatar;
  //   // 头像传过来则上传为文件，切用url储存
  //   if (
  //     resFind &&
  //     resFind.avatar?.[0]?.uid === avatar?.[0]?.uid &&
  //     resFind.avatar
  //   ) {
  //     upAvatar = avatar;
  //   } else {
  //     const fileName = `avatar_${new Date().getTime()}`;
  //     const removeAndUp = () => {
  //       if (resFind.avatar && resFind.avatar?.[0]?.name) {
  //         fs_delete(
  //           path.join(
  //             __dirname,
  //             '../../../',
  //             `src/asset/${resFind.avatar?.[0]?.uid}.png`,
  //           ),
  //         );
  //       }
  //       base64ToFile(
  //         avatar,
  //         path.join(__dirname, '../../../', `src/assets/${fileName}.png`),
  //       );
  //       return true;
  //     };
  //     // 头像传过来则上传为文件，切用url储存
  //     const res = avatar ? removeAndUp() : false;
  //     upAvatar = res
  //       ? [
  //           {
  //             uid: fileName,
  //             name: `${fileName}.png`,
  //             status: 'done',
  //             url: `${request.protocol}://${request?.get(
  //               'host',
  //             )}/asset/${fileName}.png`,
  //           },
  //         ]
  //       : '';
  //   }
  //   const data = await this.userModel.findOneAndUpdate(
  //     { _id: id },
  //     {
  //       userName,
  //       email,
  //       phone,
  //       role,
  //       avatar: upAvatar,
  //     },
  //   );
  //   if (data) {
  //     return { code: 0, message: '更新成功', data };
  //   }
  //   return { code: -1, message: '更新失败', data };
  // }

  async remove(id: string, fileName): Promise<RuleResType<any>> {
    const data = await this.userModel.remove({ _id: id });
    if (data?.deletedCount >= 1) {
      const res = fs_delete(
        path.join(__dirname, '../../../', `src/asset/${fileName}.png`),
      );
      if (res) {
        return { code: 0, message: '删除成功', data: null };
      }
      return { code: -1, message: '删除失败', data };
    }
    return { code: -1, message: '删除失败', data };
  }
}
