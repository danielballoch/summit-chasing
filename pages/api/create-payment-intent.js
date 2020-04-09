const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

let getProductDetails = () => {
    return { currency: "USD", amount: 9900 };
};
 
 export default async (req, res) => {
    const body = req.body;
    const productDetails = getProductDetails();
  
    const options = {
      ...body,
      amount: productDetails.amount,
      currency: productDetails.currency,
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