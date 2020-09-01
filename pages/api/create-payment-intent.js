const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// let getProductDetails = (customerid) => {
//     //fetch products, and calculate price -> same as cart.
//     return { currency: "USD", amount: 9900 };
// };
 
 export default async (req, res) => {
    const body = req.body;
    console.log("payment intent props:")
    console.log(body)

    // const productDetails = getProductDetails();
  
    const options = {
      ...body,
       // Verify your integration in this guide by including this parameter
      metadata: {integration_check: 'accept_a_payment'},
    };
  
    try {
      const paymentIntent = await stripe.paymentIntents.create(options);
      res.json(paymentIntent);
    } catch (err) {
      res.json(err);
    }
  };