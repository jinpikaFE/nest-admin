import * as mongoose from 'mongoose';

export const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  path: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    enum: [0, 1],
  },
  isLink: {
    type: Number,
    enum: [0, 1],
  },
  color: {
    type: String,
    required: true,
  },
  authority: {
    type: [String],
    default: ['admin'],
  },
  lastMenu: String,
  registerTime: {
    type: Date,
    default: Date.now,
  },
});
