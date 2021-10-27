import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  avatar: mongoose.Schema.Types.Mixed,
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  registerTime: {
    type: Date,
    default: Date.now,
  },
});
