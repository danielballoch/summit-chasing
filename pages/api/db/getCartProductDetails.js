import dbClient from '../../../lib/database';

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

const handler = async (req, res) => {
  // calling query automagically connects to the database
  //get value from req
  let data = null
  if (req.body.productids){

    console.log("Found productids: " + req.body.productids)
    const products = [];
    await asyncForEach(req.body.productids, async (productid) => {
        const query = {
            text: "SELECT * FROM products WHERE productid = $1",
            values: [productid]
          }
        // const query = ("SELECT * FROM products")
          const product = await dbClient.query(query)
          products.push(product.rows[0])
    })
    data = products;
    //   req.body.productids.forEach(async (productid) => {
    //     const query = {
    //         text: "SELECT * FROM products WHERE productid = $1",
    //         values: [productid]
    //       }
    //       const product = await dbClient.query(query)
    //       products.push(product)

    //   });
      

  } else {
      console.log("No user sent")
      data = {"error": "user sent not valid"}
  }
  res.status(200).json(data);
//   await dbClient.end();
};
  
export default handler;