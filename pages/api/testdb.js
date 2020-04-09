import dbClient from '../../lib/database';

const handler = async (req, res) => {
  // calling query automagically connects to the database
  const products = await dbClient.query('SELECT * FROM products');
//   await dbClient.transaction([
//     () => dbClient.query(''),
//     () => dbClient.query('')
//   ]);
  res.status(200).json(products.rows)
  await dbClient.end();
};
  
export default handler;