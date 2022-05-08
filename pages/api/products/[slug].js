import { Product } from '../../../backend/models';
import { connect, disconnect } from '../../../database/db';

export default async function handler(req, res) {

  const { slug } = req.query

  await connect()
  const product = await Product.findOne({ slug }).lean()
  await disconnect()

  if (product) {
    res.status(200).json({
      success: true,
      message: 'Product obtain successfully',
      data: product
    })

  } else {
    res.status(404).json({
      success: false,
      message: 'Product not found',
      data: null
    })
  }

}

