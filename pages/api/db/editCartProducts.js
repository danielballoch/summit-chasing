import dbClient from '../../../lib/database';
// calling query automagically connects to the database

   //plan
   //*get props (productid, orderid and task) from client
   //-check for matching product
   //if there's a match(rowCount > 0):
        //check 'task' prop
        //if task is "ADD"
            //set update value to 1
        //if task is "REMOVE"
            //set update value to -1
        //then add update value to query and send

    //if row === 0
        //if task === "ADD"
            //INSERT product matching props
        //else error code/message
    


//props would actually come from client fetch
let getProps = () => {
    return { task: 'ADD', orderid:321, productid: '#5e7a85543245b7'};
}

//need to check if product already exists
const handler = async (req, res) => {
    const props = getProps();
    const checkProducts = {
        text: 'SELECT * FROM orderproducts WHERE orderid=$1 AND productid=$2',
        values: [props.orderid,props.productid]
    };

    //check incoming props, one client promise for adding products one for deleting? or check in the promise itself?
    //do I call db again or just .query?
    dbClient
        .query(checkProducts.text, checkProducts.values)
        .then(products => {
            console.log(products.rowCount)
            if (products.rowCount === 0){
                //no matching products
                console.log("no match, inserting product")
                if(props.task === 'ADD'){
                    const query = {
                        text: 'INSERT INTO orderproducts(orderid, productid, qty) VALUES($1, $2, $3)',
                        values: [props.orderid, props.productid, 1]
                    }
                    console.log('add', props.orderid, props.productid)
                    dbClient
                        .query(query)
                        .then(allProducts => {
                            console.log("product " + props.task + " success")
                            res.status(200).json(allProducts)
                        })
                        .catch(e => {
                            console.error(e.stack);
                            res.status(500).json(e.stack)
                        })
                } else {
                    console.log('remove' + query)
                    console.log("no product to delete aka shouldn't be an option")
                    res.status(500).json('no product to delete')
                }  
            } else {
                 //matching products
                 console.log("match, update product")
                 let toAdd=0;
                 if(props.task === 'ADD'){
                    toAdd += 1;
                 } else if (props.task === 'REMOVE'){
                    toAdd -= 1;
                 }
                 const query = {
                    text: 'UPDATE orderproducts SET qty=qty+$3 WHERE orderid=$1 AND productid=$2',
                    values: [props.orderid, props.productid, toAdd]
                }
                 dbClient
                         .query(query)
                         .then(allProducts => {
                             console.log("product " + props.task + " success")
                             res.status(200).json(allProducts)
                         })
                         .catch(e => {
                            console.error(e.stack);
                            res.status(500).json(e.stack)
                        })
            }
        })
        .catch(e => {
            console.error(e.stack);
            res.status(500).json(e.stack)
        })
  await dbClient.end();
};
  
export default handler;