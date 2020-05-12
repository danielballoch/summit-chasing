import dbClient from '../../../lib/database';

const handler = async (req, res) => {
    const cartCount = await dbClient.query('SELECT COUNT(*) FROM cart')
    console.log("getCart data", cartCount.rows[0].count)
    res.status(200).json(cartCount.rows[0].count);
};
  
export default handler;