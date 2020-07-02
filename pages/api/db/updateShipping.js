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
    console.log("vars: ", customerid, fName, lName, address, address2, city, state, zip, phone, email,country)
    if (customerid){
        console.log("Found all fields for: " + req.body.customerid)
       console.log(req.body.fName)
        //check whether shipping or billing
        const query = {
        text: 'UPDATE customer SET fname=$2, lname=$3, address=$4, address2=$5, city=$6, state=$7, zip=$8, country=$9 WHERE customerid=$1',
        values: [customerid, fName, lName, address, address2, city, state, zip, country]
        }
        const user = await dbClient.query(query)
        res.status(200).json("working");
    } else {
      console.log("No user sent")
      res.status(500).json("no user sent")
    }
//   await dbClient.end();
};
  
export default handler;