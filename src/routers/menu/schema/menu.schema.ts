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
  lastMenu: String,
  registerTime: {
    type: Date,
    default: Date.now,
  },
});
