import React from 'react';
import Link from 'next/link';
import useSWR from 'swr'
import Cookies from 'js-cookie'
import fetch from 'isomorphic-unfetch'
import { getStaticProps } from '../pages';
import {getUser, getCart, getCartProducts} from '../lib/dbcalls'


export async function getServerSideProps(ctx) {
    
    const User = Cookies(ctx).User
    console.log('Navbar async', User)
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


            return { props: { profile, cart, cartproducts} }
        }

}








export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        productsadded: 0,
        productcount: 0,

        };
    }

    async getServerSideProps(ctx){
        const User = Cookies(ctx).User
        console.log('Navbar async', User)
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


            return { props: { profile, cart, cartproducts} }
        }
    }


    render(){
    const props = this.props;
    const cartproducts = this.props.cartproducts;
    // if (props.productAdded !== this.state.productsadded){
    //     this.setState({productcount: this.state.productcount += 1})
    //     this.setState({productadded: this.state.productadded += 1})
    // }

    console.log("navbar props",props)
    if(this.props.cart && !OrderId){
        Cookies.set('orderid', cart.orderid, { expires: 7 });
        console.log('orderid cookie set', cart.orderid)
    }
    const OrderId = Cookies.get('orderid')





    if (cartproducts){
        cartproducts.forEach(item => {
           this.setState({productcount :productcount += item.qty})
        });
    }
    
      

    // if (error) return <div>failed to load</div>
    if (!cartproducts) return (
        <nav className="navbar navbar-light bg-light fixed-top">
            <h3><Link href="/">Summit</Link>Chasing</h3>
            <a href="/cart" className="btn btn-outline-primary my-2 my-sm-0"> Cart</a>
        </nav>
    )
    return (
        <nav className="navbar navbar-light bg-light fixed-top">
            <h3><Link href="/">Summit</Link>Chasing</h3>
            <a href="/cart" className="btn btn-outline-primary my-2 my-sm-0">{user.fname}'s Cart: {productcount}</a>
            
        </nav>
    )
    }
};
