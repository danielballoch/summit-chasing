import dbClient from '../../../lib/database';

const handler = async (req, res) => {
  // calling query automagically connects to the database
  //get value from req
  let data = null
  if (req.body.User){
      if(req.body.User === "All"){
          console.log("returning all customerids");
          const userCount = await dbClient.query('SELECT COUNT(*) FROM customer')
          console.log("getUser data", userCount.rows[0].count)
          res.status(200).json(userCount.rows[0].count);
      } else {
            console.log("Found customerid: " + req.body.User)
            const query = {
            text: 'SELECT * FROM customer WHERE customerid = $1',
            values: [req.body.User]
            }
            const user = await dbClient.query(query)
            // console.log("server data", data)
            res.status(200).json(user.rows[0]);
      }
    //   if(req.body.User === "All"){
    //     data = user.rows[0];
    //   } else {
    //     data = user.rows;
    //   }
  } else {
      console.log("No user sent")
      res.status(500).json("no user sent")
  }
//if I get a customer id in return I'm golden (customerid is only required field)

    
    // res.status(200).json(data);
//   await dbClient.end();
};
  
export default handler;