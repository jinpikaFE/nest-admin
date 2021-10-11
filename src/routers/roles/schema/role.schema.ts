import * as mongoose from 'mongoose';

export const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  authority: {
    type: [String],
  },
  registerTime: {
    type: Date,
    default: Date.now,
  },
});
