import * as mongoose from 'mongoose';

export const BillSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: true,
  },
  exRecords: [
    {
      type: { type: String, required: true },
      value: { type: Number, required: true },
    },
  ],
  totalConsume: {
    type: Number,
    required: true,
  },
  registerTime: {
    type: Date,
    default: Date.now,
  },
});
