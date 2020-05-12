import dbClient from '../../../lib/database';

const handler = async (req, res) => {
  // calling query automagically connects to the database
  if (req.body.orderid && req.body.customerid){
        let {customerid, orderid} = req.body
        let fname = "Guest" + customerid;
        console.log("sent values: ", customerid, orderid)
        const query1 = {
            text: 'INSERT INTO customer(customerid, fname) VALUES($1, $2)',
            values: [customerid,fname]
        }
        let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const query2 = {
        text: 'INSERT INTO cart(orderid, customerid, date, comments) VALUES($1, $2, $3, $4)',
        values: [orderid,customerid, date, 'Guest Cart']
        }
        const insertUser = await dbClient.transaction([
            () => dbClient.query(query1),
            () => dbClient.query(query2)
            ]);
            const checkUser = await dbClient.query({
            text: 'SELECT customerid FROM customer WHERE customerid =$1',
            values: [customerid]
            })
            console.log("check user row: ",checkUser.rows[0].customerid)
            res.status(200).json(checkUser.rows[0].customerid)
        } else {
            res.status(500).json("invalid user")
        }
        // await dbClient.end();
  }

  
export default handler;