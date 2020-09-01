import fetch from 'isomorphic-unfetch'

async function getProductDetails(orderid){
    //fetch amount based on orderid
    console.log("pd function: ", orderid)
    const API_URL = `http://localhost:3000/api/db/getCartProducts`
    const cartProducts = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"orderid":orderid})
    })
    console.log("pdfunction cart products: ", cartProducts.body)
    return { currency: "USD", amount: 9800 };
  };

 export default async (req, res) => {
    const options = req.body;
    console.log("pd options: " , options.orderid)
    console.log("product details data:")
    let data = getProductDetails(options.orderid);
    console.log(data)
    // res.send(data);

    try {
        console.log("resolved product details")
        res.json(data);
      } catch (err) {
        console.log("reject product details")
        res.json(err);
      }
  };

