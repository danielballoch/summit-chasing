// import { checkCookie } from '../lib/session'
import cookie from 'js-cookie'
import Cookies from 'next-cookies'
import fetch from 'isomorphic-unfetch'

export async function getStaticProps(ctx) {
    console.log(cookie.get())
    const User = setCookie(ctx);
    const prop = getUser(User)
    return {
      props: { prop },
    }
}

const setCookie = (ctx) => {
    cookie.set('User', 1, { expires: 7 });
    const User = Cookies(ctx).User
    console.log("Cookie: " + User)
    const allCookies = Cookies(ctx);
    console.log(allCookies)
    return User;
}

const getUser = (User) => {
    if (User){
        console.log(User)
        // let userData = null;
        fetch(`/api/getUser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({'User': User})
        })
        .then(res => {
            if (res.status === 200) {
                console.log(userData)
              return userData = res.json();
            } else {
                console.log("fetch not working")
              return null;
            }
          })
    } else {
        console.log(User)
        console.log('cookie not working')
        return null
        //fetch users and create new with usercount + 1
        //create users should be a transaction (customer, cart, orderproducts + customerphone??)
    }
}


function Testcookies (props){
    console.log(props)
    return (
    <div>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>props</h1>
    </div>
    )
}

export default Testcookies