import { Product } from '../../../backend/models';
import { connect, disconnect } from '../../../database/db';

export default async function handler(req, res) {

  const { method } = req


  switch (method) {
    case 'GET':
      return getProducts(req, res)


    default:
      return res.status(404)
  }
}



const getProducts = async (req, res) => {

  const { gender } = req.query

  let condition = {}
  if (gender) condition.gender = gender

  await connect()
  const products = await Product.find(condition).lean()
  await disconnect()

  res.status(200).json({
    success: true,
    message: 'Products listing obtain successfully',
    data: products
  })
}