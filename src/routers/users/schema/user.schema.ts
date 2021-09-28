import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registerTime: {
    type: Date,
    default: Date.now,
  },
});
