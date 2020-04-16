import dbClient from '../../../lib/database';

const handler = async (req, res) => {
  // calling query automagically connects to the database
  //get value from req
  let data = null
  if (req.body.User){
      console.log("Found customerid: " + req.body.User)
      const query = {
        text: "SELECT * FROM customer WHERE customerid = $1",
        values: [req.body.User]
      }
      const user = await dbClient.query(query)
      //need to catch here?
      console.log(user.rows[0])
      data = user.rows[0];

  } else {
      console.log("No user sent")
      data = {"error": "user sent not valid"}
  }
//if I get a customer id in return I'm golden (customerid is only required field)
  
  
//   await dbClient.transaction([
//     () => dbClient.query(''),
//     () => dbClient.query('')
//   ]);

  res.status(200).json(data);
//   await dbClient.end();
};
  
export default handler;