import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RuleResType } from 'src/types/global';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { IMenu } from './interface/menu';

@Injectable()
export class MenuService {
  constructor(
    @Inject('MenuModelToken')
    private readonly menuModel: Model<IMenu>,
  ) {}

  async create(createMenuDto: CreateMenuDto): Promise<RuleResType<any>> {
    const { name, path, lastMenu, icon, status, isLink, color } = createMenuDto;
    const data = await this.menuModel.create({
      name,
      path,
      lastMenu,
      icon,
      status,
      isLink,
      color,
    });
    return { code: 0, message: '创建成功', data };
  }

  async findAll(): Promise<RuleResType<any>> {
    const data = await this.menuModel.find();
    return { code: 0, message: '查询成功', data };
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  async update(
    id: string,
    updateMenuDto: CreateMenuDto,
  ): Promise<RuleResType<any>> {
    const data = await this.menuModel.findOneAndUpdate(
      { _id: id },
      updateMenuDto,
    );
    if (data) {
      return { code: 0, message: '更新成功', data };
    }
    return { code: -1, message: '更新失败', data };
  }

  async remove(id: string): Promise<RuleResType<any>> {
    const data = await this.menuModel.remove({ _id: id });
    if (data?.deletedCount >= 1) {
      return { code: 0, message: '删除成功', data };
    }
    return { code: -1, message: '删除失败', data };
  }

  async updateMany(updateMenuDto: UpdateMenuDto): Promise<RuleResType<any>> {
    const { name, authority } = updateMenuDto;
    let data = null;
    if (authority) {
      await this.menuModel.updateMany(
        { authority: name },
        { $pull: { authority: name } },
      );
      data = await this.menuModel.updateMany(
        { _id: { $in: authority } },
        { $push: { authority: name } },
      );
    } else {
      data = await this.menuModel.updateMany(
        { authority: name },
        { $pull: { authority: name } },
      );
    }
    if (data) {
      return { code: 0, message: '更新成功', data };
    }
    return { code: -1, message: '更新失败', data };
  }
}
