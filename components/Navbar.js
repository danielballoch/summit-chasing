import React from 'react';
import Link from 'next/link';
import useSWR from 'swr'
import Cookies from 'js-cookie'
import fetch from 'isomorphic-unfetch'
import { getStaticProps } from '../pages';


let url = 'http://localhost:3000/api/db/getUser'


function Navbar (props) {
    Cookies.set('name', 'value', { expires: 365 })
    const User = Cookies.get('User')
    console.log('all cookies from nav')
    console.log(User)
    
    // const user = fetch('http://localhost:3000/api/db/getUser', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({'User': '2'})
    //     }
    //     )
    //     .then(res =>{return res.json()})

    //works
    const fetcher = (...args) => fetch(url, {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({'User': '2'})
      }).then(res => res.json())
    
    const { data, error} = useSWR(url, fetcher, { suspense: false });



    
    console.log("user: ")
    console.log(data)
    // const {data, error} = useSWR('/api/db/getUser', {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({'User': User})
    // })
    
    // if (error) return <div>failed to load</div>
    if (!data) return (
        <nav className="navbar navbar-light bg-light fixed-top">
            <h3><Link href="/">Summit</Link>Chasing</h3>
            <a href="/cart" className="btn btn-outline-primary my-2 my-sm-0"> Cart</a>
        </nav>
    )
    return (
        <nav className="navbar navbar-light bg-light fixed-top">
            <h3><Link href="/">Summit</Link>Chasing</h3>
            <a href="/cart" className="btn btn-outline-primary my-2 my-sm-0">{data.fname}'s Cart</a>
            
        </nav>
    )

};
export default Navbar;