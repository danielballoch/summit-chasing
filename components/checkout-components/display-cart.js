import Cookies from 'js-cookie'
import useSWR, { mutate } from 'swr'
import fetch from 'isomorphic-unfetch'
// import {getUser, getCart, getCartProducts, getCartProductDetails} from '../lib/dbcalls'
// import Header from '../components/cart-components/header'
// import ProductSection from '../components/cart-components/products'
// import Summery from '../components/cart-components/summery'
import Summery from '../cart-components/summery'



let url3 = 'http://localhost:3000/api/db/getCartProducts'
let url4 = 'http://localhost:3000/api/db/getCartProductDetails'
export default function cart(){
    const fetcher = (...args) => fetch(args[0], {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({[args[2]]:args[1]})
    }).then(res => res.json())

    let orderid = Cookies.get('orderid')
    if(orderid){
        const { data: cartitems, error} = useSWR(() => [url3, orderid, 'orderid'], fetcher, { suspense: false });
        console.log("Cart items: ", cartitems)
        // let productids = []
        // if(cartitems){
        //     cartitems.forEach(product => {
        //         productids.push(product.productid)
        //     });    
        // }
        // console.log("product ids", productids);
        console.log("before productdetails call")
        const { data: productdetails, error1} = useSWR(() => [url4, cartitems, 'productids'], fetcher, { suspense: false });
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
        let sortedProducts = [];
        if(productdetails){
            sortedProducts = productdetails.sort((a,b) => a.name.length > b.name.length ? 1:-1)
        }
        return(
            <div >
                <div className="card w-100">
                    <div className="p-3">
                        <span className="float-left px-3">subtotal:</span>
                        <span className="float-right px-3"> ${costtotal}</span>
                        <br></br>
                        <span className="float-left px-3">shipping & handling:</span>
                        <span className="float-right px-3"> $15</span>
                        <h4>
                        <span className="float-left px-3">Total:</span>
                        <span className="float-right px-3">${costtotal + 15}</span>
                        </h4>
    
                    </div>
                    
                </div>
                <div className="card w-100">
                    <h2>In your cart({itemtotal})</h2>
                    {sortedProducts.map((product, i) => (
                        <div className="p-3">
                            <h5 >{cartitems[i].qty} x {product.name}</h5>
                            <span className="float-left px-3">size:</span>
                            <span className="float-right px-3">{product.size}</span>
                            <br/>  
                            <span className="float-left px-3">color:</span>
                            <span className="float-right px-3">{product.color}</span>
                    
                        </div>
                    ))}
                </div>
            </div>
        )
    } else if (!orderid){
        return(
            <div>Products: loading... - $0 orderid: loading...</div>
        )  
    } else {
        return(
            <div>loading...</div>
        )
        
    }

    
}