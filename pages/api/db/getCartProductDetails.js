import dbClient from '../../../lib/database';

async function asyncForEach(array, callback) {
    console.log("async foreach called")
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
}

const handler = async (req, res) => {
  // calling query automagically connects to the database
  //get value from req
  if(req.body.productids){
    console.log("getCartProducts called", req.body)
    if (req.body.productids.length > 0){
      let ids = []
      req.body.productids.forEach(product => {
          ids.push(product.productid)
      });    
          console.log("Found productids: " + ids)
          let products = [];
          await asyncForEach(ids, async (productid) => {
              const query = {
                  text: "SELECT * FROM products WHERE productid = $1",
                  values: [productid]
              }
              // const query = ("SELECT * FROM products")
              const product = await dbClient.query(query)
              products.push(product.rows[0])
          })
          res.status(200).json(products);
    } else {
          console.log("No user sent")
          res.status(500).json("user sent not valid");
    }
  } else {
    console.log("No user sent2")
    console.log(req.body)
    res.status(500).json("user sent not valid2");
}
  
  await dbClient.end();
};
  
export default handler;