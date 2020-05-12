//would recieve color, size and partial productid from client. 
//SELECT * FROM products WHERE color = 'white' AND size = 'M' AND productid LIKE 
//need to search db with something like this and return full productid (varientid)
//hardcode first

//if product exists in products, then check orderproducts for product, if product: quantity += 1 else if !product INSERT product

import dbClient from '../../../lib/database';
import fetch from 'node-fetch';


const handler = async (req, res) => {
  // calling query automagically connects to the database
  //get color, size and base product id (varients have + 3 char at end) from req
  let data = null
  if (req.body){
    let {color, size, productid, orderid} = req.body
    //ideally would check color, size and product id to make sure they fit and there's no attack??
    console.log("Request Body: " , req.body)
    console.log(color, size, productid, orderid, "working dog")

    const query = {
        text: "SELECT * FROM products WHERE color = $1 AND size = $2 AND productid LIKE $3 || '%' ",
        values: [color,size,productid]
    }
    const order = await dbClient.query(query)
    //need to catch here?
    console.log(order.rows)
    data = order.rows[0];
    //if data, fetch editCartProducts -- check is done in this api
    if(data.productid && data.name){
        fetch(`http://localhost:3000/api/db/editCartProducts`,{
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({task: 'ADD', orderid: orderid, productid: data.productid})
        }).then(result => {
            res.status(200).json(result)
        })
        .catch(e => {
           console.error(e.stack);
           res.status(500).json(e.stack)
       })
    }
  } else {
      console.log("No user sent")
      res.status(500).json("invalid user")
  }
//   await dbClient.end();
};
  
export default handler;