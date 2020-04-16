import dbClient from '../../../lib/database';

const handler = async (req, res) => {
  // calling query automagically connects to the database

  const query = {
      text: 'INSERT INTO customer(customerid, fname, lname) VALUES($1, $2, $3)',
      values: [3,"James","Bloonfield"]
  }
  const products = await dbClient.query(query)
//   await dbClient.transaction([
//     () => dbClient.query(''),
//     () => dbClient.query('')
//   ]);
  res.status(200).json(products)
  await dbClient.end();
};
  
export default handler;