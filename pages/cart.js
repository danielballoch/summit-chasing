// import { checkCookie } from '../lib/session'
import cookiejs from 'js-cookie'
import Cookies from 'next-cookies'
import fetch from 'isomorphic-unfetch'
import {getUser, getCart, getCartProducts, getCartProductDetails} from '../lib/dbcalls'




cookiejs.set('User', 2, { expires: 7 });
export async function getServerSideProps(ctx) {
    
    const User = Cookies(ctx).User
 
        if (User){
            console.log("Cookie: " + User)
            const profile = await getUser(User)
            console.log(profile);
            const cart = await getCart(User)
            console.log(cart)
            const cartproducts = await getCartProducts(cart.orderid)
            console.log(cartproducts)

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
    console.log(props)
    return (
    <div>
        <h1>Hello</h1>
        <h1>Hey {props.profile.fname}, here's your cart so far!</h1>
        <div className="card">
            <div className="card-body">
            </div>
        </div>
    </div>
    )
}

export default Testcookies2