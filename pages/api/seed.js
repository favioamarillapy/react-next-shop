import { Product } from '../../backend/models';
import { connect, disconnect } from '../../database/db';
import { initialData } from '../../database/products';

export default async function handler(req, res) {

  const { products } = initialData

  await connect()
  await Product.insertMany(products)
  await disconnect()

  res.status(200).json(products)
}