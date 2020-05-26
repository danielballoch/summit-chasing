import dbClient from '../../../lib/database';

//check user
//security?? 
//post shipping to db 

const handler = async (req, res) => {
    // calling query automagically connects to the database
    //get value from req

    //check data
    const {customerid, fName, lName, address, address2, city, state, zip, phone, email,country} = req.body
    console.log("Req.body: ", req.body)
    if (customerid){
        console.log("Found all fields for: " + req.body.customerid)
       
        //check whether shipping or billing
        const query = {
        text: 'INSERT INTO customer(fname, lname, address, address2, city, state, zip, country) VALUES($2, $3, $4, $5, $6, $7, $8,$9) WHERE customerid=$1',
        values: [customerid, fName, lName, address, address2, city, state, zip, country]
        }
        const user = await dbClient.query(query)
        // console.log("server data", data)
        res.status(200).json(user.rows[0]);
    } else {
      console.log("No user sent")
      res.status(500).json("no user sent")
    }
//   await dbClient.end();
};
  
export default handler;