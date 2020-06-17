export default function productsection ({products, cart, cartproducts, feUpdate}){

    // const [] = useState()
    console.log("feUpdate", feUpdate)
    //not consistent, still changes.
    console.log("Products: ",products)
    const sortedProducts = products.sort((a,b) => {
        return a.productid > b.productid ? 1 : -1;
    })
    console.log("Sorted products: ",sortedProducts);
    
    const sortedCartProducts = cartproducts.sort((a,b) => {
        return a.productid > b.productid ? 1 : -1;
    }) 
    console.log("sorted cart", sortedCartProducts)

    
 
    

    return (
        <div>
            {sortedProducts.map((product, i) => (
                <div className="flex-column justify-content-center mx-2" key={product.name}> 
                <div className="mx-auto card w-100 p-2 my-2">
                <div className="card-body ">
                    <h5 className="card-title text-center">{product.name}</h5>
                    <div className="d-flex justify-content-between">
                        
                        {/* <p>Size Selected: {product.size}</p> */}
                        {/* <p>Total: {product.price * props.cartproducts[i].qty} USD</p> */}
                        
                    <button className='btn btn-light mx-2' onClick={() => {
                        fetch(`/api/db/editCartProducts`,{
                        method: 'post',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({task: 'ADD', orderid: cart.orderid, productid: product.productid})
                        })
                        .then(res => {console.log("adding: " + product.name + " from cart.", "id: " + product.productid)})
                        .then(res => {feUpdate()})
                        .then(res => {console.log("passed update")})
                    }}
                    >
                    Add
                    </button>
                    <p className="px-2">Price: {product.price} USD EA</p>
                        <p className="px-2">{product.description}</p>
                    <p>Quantity: {sortedCartProducts[i].qty}</p>
                    <button className='btn btn-light mx-2' onClick={() => {
                        fetch(`/api/db/editCartProducts`,{
                        method: 'post',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({task: 'REMOVE', orderid: cart.orderid, productid: product.productid})
                        })
                        .then(res => {console.log("removing: " + product.name + " from cart.", "id: " + product.productid)})
                        .then(res => {feUpdate()})
                        .then(res => {console.log("passed update")})
                    }}>
                    Remove
                    </button>
                    </div>
                </div>
            </div>
            </div>
            ))}
        </div>
    )
}