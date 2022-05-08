import mongoose, { Schema, model, Model } from 'mongoose'

const schema = new Schema({
  description: { type: String, required: true },
  images: [{ type: String, required: true }],
  inStock: { type: Number, required: true },
  price: { type: String, required: true },
  sizes: [{ type: String, required: true }],
  slug: { type: String, required: true, unique: true },
  tags: [{ type: String, required: true }],
  title: { type: String, required: true },
  type: { type: String, required: true },
  gender: { type: String, required: true },
}, {
  timestamps: true
})

const Product = mongoose.models.Product || model('Product', schema)

export default Product