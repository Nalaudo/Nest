import * as mongoose from 'mongoose';

export const ProdSchema = new mongoose.Schema({
  title: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
});
