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
    const { name, path, lastMenu, icon, status } = createMenuDto;
    const data = await this.menuModel.create({
      name,
      path,
      lastMenu,
      icon,
      status,
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

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
