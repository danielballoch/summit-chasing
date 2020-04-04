let getProductDetails = () => {
    return { currency: "USD", amount: 9900 };
  };

 export default (req, res) => {
    let data = getProductDetails();
    res.send(data);
  };

