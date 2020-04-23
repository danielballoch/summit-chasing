// import { checkCookie } from '../lib/session'
import cookiejs from 'js-cookie'
import Cookies from 'next-cookies'
import fetch from 'isomorphic-unfetch'
import {getUser, getCart, getCartProducts, getCartProductDetails} from '../lib/dbcalls'




// cookiejs.set('User', 2, { expires: 7 });
export async function getServerSideProps(ctx) {
    
    const User = Cookies(ctx).User
 
        if (User){
            //get profile - needs to be transfered to app so can be used with cart and nav page
            console.log("Cookie: " + User)
            const profile = await getUser(User)
            console.log(profile);
            //this could be transfered also since it's used in nav and this page
            const cart = await getCart(User)
            console.log(cart)


            //this could also be transfered
            const cartproducts = await getCartProducts(cart.orderid)
            console.log(cartproducts)

            //specific to this page, leave here
            var productids = []
            cartproducts.forEach(product => {
                productids.push(product.productid)
            }); 

            const productdetails = await getCartProductDetails(productids)
            console.log(productdetails)
            return { props: { profile, cart, cartproducts, productids, productdetails} }
        }

}


    
       




function Testcookies2 (props){
    if (props) {
    console.log(props)
    //foreach to get total price of cart and total items count.
    let itemtotal = 0;
    let costtotal = 0;
    props.productdetails.forEach((product, i) => {
        itemtotal = itemtotal + (props.cartproducts[i].qty);
        costtotal = costtotal + (product.price * props.cartproducts[i].qty)
    })

    return (
    <div>
        <h1>Hello</h1>
        <h1>Hey {props.profile.fname}, here's your cart so far!</h1>
        <div>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Summery:</h5>
                <p>Items Quantity: {itemtotal}</p>
                <p>Total Cost:  {costtotal} USD</p>  
            </div>
        </div>
        <h2>products:</h2>
        {props.productdetails.map((product, i) => (
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p>{product.description}</p>
                <p>Size Selected: {product.size}</p>
                <p>Price: {product.price} USD EA</p>
                <p>Total: {product.price * props.cartproducts[i].qty} USD</p>
                <p>Quantity: {props.cartproducts[i].qty}</p>
            </div>
        </div>
        ))}
        
        </div>
    </div>
    )
    } else {
        return (<div>loading...</div>)
    }
}

export default Testcookies2