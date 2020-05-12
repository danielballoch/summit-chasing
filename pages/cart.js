// import { checkCookie } from '../lib/session'
import Cookies from 'js-cookie'
// import Cookies from 'next-cookies'
import useSWR, { mutate } from 'swr'
import fetch from 'isomorphic-unfetch'
import {getUser, getCart, getCartProducts, getCartProductDetails} from '../lib/dbcalls'
import Header from '../components/cart-components/header'
import ProductSection from '../components/cart-components/products'
import Summery from '../components/cart-components/summery'
import { useCallback } from 'react'




// cookiejs.set('User', 2, { expires: 7 });
// export async function getServerSideProps(ctx) {
    
//     const User = Cookies(ctx).User
 
//         if (User){
//             const profile = await getUser(User)
//             const cart = await getCart(User)
//             const cartproducts = await getCartProducts(cart.orderid)

//             var productids = []
//             cartproducts.forEach(product => {
//                 productids.push(product.productid)
//             }); 

//             const productdetails = await getCartProductDetails(productids)

//             console.log(productdetails,cartproducts,cart,profile)
//             return { props: { profile, cart, cartproducts, productids, productdetails} }
//         }

// }

let url1 = 'http://localhost:3000/api/db/getUser'
let url2 = 'http://localhost:3000/api/db/getCart'
let url3 = 'http://localhost:3000/api/db/getCartProducts'
let url4 = 'http://localhost:3000/api/db/getCartProductDetails'



function Cart (props){


    const fetcher = (...args) => fetch(args[0], {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({[args[2]]:args[1]})
      }).then(res => res.json())

      let User = Cookies.get('User')
    //   let cartproducts;
    //   let productdetails = []

    async function feUpdate(){
        console.log("mutate called");
        console.log("isValidated: ", isValidating)
        mutate();
        console.log(cartitems);
        console.log("isValidated: ", isValidating)
    }

      
        const { data: user, error} = useSWR(() => [url1, User, "User"], fetcher, {suspense: false });
        console.log("User returned: ", user)
        const { data: cart, error2} = useSWR(() => [url2, user.customerid, 'User'], fetcher, { suspense: false });
        console.log("Cart returned: ", cart)
        // const OrderId = Cookies.get('orderid')
        const { data: cartitems, error3, mutate, isValidating} = useSWR(() => [url3, cart.orderid, 'orderid'], fetcher, { suspense: false });
        console.log("Cart items: ", cartitems)
        // let productids = []
        // if(cartitems){
        //     cartitems.forEach(product => {
        //         productids.push(product.productid)
        //     });    
        // }
        // console.log("product ids", productids);
        console.log("before productdetails call")
        const { data: productdetails, error4} = useSWR(() => [url4, cartitems, 'productids'], fetcher, { suspense: false });
        console.log("productdetails: ", productdetails)
        
        
        let itemtotal = 0;
        let costtotal = 0;
        if(productdetails && cartitems){
            productdetails.forEach((product, i) => {
                itemtotal = itemtotal + (cartitems[i].qty);
                costtotal = costtotal + (product.price * cartitems[i].qty)
            })
            console.log("totals: ", itemtotal, costtotal)
        }
        
        
        
        // productdetails = products;

        // cartproducts = cartitems;
        
      
      
    
    
      
    // feUpdate = feUpdate.bind(this);
  

    





    if (productdetails) {
        console.log(props)
        // foreach to get total price of cart and total items count.
        return (
            <div className="jumbotron jumbotron-fluid mt-5 d-flex flex-column justify-content-center">
                <Header name={user.fname}/>
                <div className={!isValidating? "card text-center" : "text-center"}>isValidating??</div>
                <div className="d-flex flex-row justify-content-center">
                <button onClick={() => feUpdate()}>Big Update Button</button>
                    <ProductSection products={productdetails} cart={cart} cartproducts={cartitems} feUpdate={feUpdate}/>
                    <Summery itemtotal={itemtotal} costtotal={costtotal}/>
                </div>
            </div>
        )
    } else {
        console.log("props", props)
        return (
            <div className="jumbotron jumbotron-fluid mt-5 d-flex flex-column justify-content-center">
            <Header name={"Loading..."}/>
            <div className={!isValidating? "card text-center" : "text-center"}>isValidating??</div>
                <div className="d-flex flex-row justify-content-center">
                <button onClick={() => feUpdate()}>Big Update Button</button>
                    <ProductSection products={[]} cart={cart} cartproducts={cartitems} feUpdate={feUpdate}/>
                    <Summery itemtotal={itemtotal} costtotal={costtotal} />
                </div>
            </div>
    )
    }
}

export default Cart