// import { checkCookie } from '../lib/session'
import cookiejs from 'js-cookie'
import Cookies from 'next-cookies'
import fetch from 'isomorphic-unfetch'
import {getUser, getCart, getCartProducts, getCartProductDetails} from '../lib/dbcalls'
import Header from '../components/cart-components/header'
import ProductSection from '../components/cart-components/products'
import Summery from '../components/cart-components/summery'




// cookiejs.set('User', 2, { expires: 7 });
export async function getServerSideProps(ctx) {
    
    const User = Cookies(ctx).User
 
        if (User){
            const profile = await getUser(User)
            const cart = await getCart(User)
            const cartproducts = await getCartProducts(cart.orderid)

            var productids = []
            cartproducts.forEach(product => {
                productids.push(product.productid)
            }); 

            // const productdetails = await getCartProductDetails(productids)

            console.log(productdetails,cartproducts,cart,profile)
            return { props: { profile, cart, cartproducts, productids, productdetails} }
        }

}

function handleClick(){
    console.log("click")
}

function Cart (props){
    if (props) {
        console.log(props)
        // foreach to get total price of cart and total items count.
        let itemtotal = 0;
        let costtotal = 0;
        props.productdetails.forEach((product, i) => {
            itemtotal = itemtotal + (props.cartproducts[i].qty);
            costtotal = costtotal + (product.price * props.cartproducts[i].qty)
        })
        
        return (
            <div className="jumbotron jumbotron-fluid mt-5 d-flex flex-column justify-content-center">
                <Header name={props.profile.fname}/>
                <div className="d-flex flex-row justify-content-center">
                    <ProductSection products={props.productdetails} cart={props.cart} cartproducts={props.cartproducts}/>
                    <Summery itemtotal={itemtotal} costtotal={costtotal}/>
                </div>
            </div>
        )
    } else {
        return (<div>loading...</div>)
    }
}

export default Cart