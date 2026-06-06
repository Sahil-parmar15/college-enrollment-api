import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './schemas/admin.schema';

@Injectable()
export class AdminsService {
  constructor(@InjectModel(Admin.name) private model: Model<Admin>) {}

  create(data: any) {
    return this.model.create(data);
  }

  findAll() {
    return this.model.find();
  }

  findByEmail(email: string) {
    return this.model.findOne({ email });
  }
}