import dbClient from '../../../lib/database';

const handler = async (req, res) => {
  // calling query automagically connects to the database
  //get value from req
  if (req.body.User){
      console.log("Found customerid: " + req.body.User)
      const query = {
        text: "SELECT * FROM cart WHERE customerid = $1",
        values: [req.body.User]
      }
      const user = await dbClient.query(query)
      //need to catch here?
      console.log(user.rows[0])
      res.status(200).json(user.rows[0]);

  } else {
      console.log("No user sent")
      res.status(500).json("user sent not valid")
  }

//   await dbClient.end();
};
  
export default handler;