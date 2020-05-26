import Link from 'next/link';
export default function summery ({itemtotal, costtotal}){
    return(
        <div>
                <div className="card my-2">
                    <div className="card-body d-flex ">
                        <div className="d-flex w-100 px-4">
                            
                            <div>
                            <h5 className="card-title">Summery:</h5>
                            <p>Items Quantity: {itemtotal}</p>
                            <p>Total Cost:  {costtotal} USD</p> 
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
                <Link href="/checkout">
                <button  className="w-100 btn btn-success checkout-button" >Checkout</button>
                </Link>
            </div>
    )
}