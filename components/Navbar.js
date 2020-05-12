import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import useSWR from 'swr'
import Cookies from 'js-cookie'
import fetch from 'isomorphic-unfetch'
import { getStaticProps } from '../pages';


let url1 = 'http://localhost:3000/api/db/getUser'
let url2 = 'http://localhost:3000/api/db/getCart'
let url3 = 'http://localhost:3000/api/db/getCartProducts'
let url4 = 'http://localhost:3000/api/db/getCartCount'
let url5 = 'http://localhost:3000/api/db/createUser'

function Navbar (props) {
    const [count, setCount] = useState(0);

    // let cartitems = null;
    if (props.productAdded !== count){
        console.log('product added not equal to state');
        setCount(count + 1);
    }


    console.log('Navbar',props)

    let User = Cookies.get('User')
    console.log("Cookies", Cookies.get())
    //works
    //don't actually need first call here, unless I'm creating user and all that in the nav. (User === user.customerid)

    //set fetcher for post using SWR
    const fetcher = (...args) => fetch(args[0], {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({[args[2]]:args[1]})
      }).then(res => res.json())

      const fetcher2 = (...args) => fetch(args[0], {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({customerid:args[1], orderid:args[2]})
      }).then(res => res.json())

      
      console.log("Users", User)
      if(!User){
        console.log('no user call')
        const {data: userData, error4} = useSWR([url1, 'All', 'User'], fetcher, {suspense: false})
        console.log("UsersCount: ", userData)
        const {data: cartData, error5} = useSWR([url4, 'All', 'User'], fetcher, {suspense: false})
        //user count returned, now I need to add a new cookie which is count + 1 and also insert this user into the database.
        console.log("cartCount: ", cartData)
        //need to make post to createUser, test with postman first
        
        //should be working, new user returning everywhere but the client :(
        // const {data: newUser, error6} = useSWR(() => fetch(url5, {
        //     method: 'post',
        //     headers: {
        //             "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({customerid:(userData+1), orderid:(cartData+1)})
        // }))

        const {data: newUser, error6} = useSWR(() => [url5, userData + 1, cartData +1], fetcher2, {suspense: false})
        console.log('NEW USER FETCH BEING CALLED')
        console.log("new user", newUser)
        console.log(error6)
        if (newUser){
            console.log("new user created", newUser)
            Cookies.set('User', newUser, { expires: 7 });
            User = newUser;
        }
            
        console.log("User: ", User)
        

      }
    //   if (User){
    //       console.log('user call')
    //     //user call
        const { data: user, error} = useSWR(() => [url1, User, "User"], fetcher, {suspense: false });
        console.log("User returned: ", user)
        //add other calls the same as above based on returned data
        //()=> function so SWR knows that if fetch doesn't work call requires dependencys & will redo
        const { data: cart, error2} = useSWR(() => [url2, user.customerid, 'User'], fetcher, { suspense: false });
        //set orderid as cookie so I don't have to fetch twice and can use in productpage.
        const OrderId = Cookies.get('orderid')
        if(cart && !OrderId){
            Cookies.set('orderid', cart.orderid, { expires: 7 });
            console.log('orderid cookie set', cart.orderid)
        }
        
        const { data: cartitems, error3} = useSWR(() => [url3, cart.orderid, 'orderid'], fetcher, { suspense: false });

        let productcount = 0;
        if (cartitems){
            cartitems.forEach(item => {
                productcount += item.qty
            });
        }
        
    // }

    // if (error) return <div>failed to load</div>
    if (!cartitems) return (
        <nav className="navbar navbar-light bg-light fixed-top">
            <h3><Link href="/">Summit</Link>Chasing</h3>
            <a href="/cart" className="btn btn-outline-primary my-2 my-sm-0"> Cart</a>
        </nav>
    )
    return (
        <nav className="navbar navbar-light bg-light fixed-top">
            <h3><Link href="/">Summit</Link>Chasing</h3>
            <a href="/cart" className="btn btn-outline-primary my-2 my-sm-0">{user.fname}'s Cart: {productcount + count}</a>
            
        </nav>
    )

};
export default Navbar;