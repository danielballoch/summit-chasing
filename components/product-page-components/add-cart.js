export default function AddCart ({activeColor, activeSize, productid, orderid, productAdded, handleClick}){
    return(
        <div className="grid" className="card hov" onClick={() => {
            fetch(`/api/db/postProductVarient`,{
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({color: activeColor, size: activeSize, productid: productid, orderid: orderid})

            }).then(res => {console.log("getting to then...."); productAdded(); handleClick()})
        }}>
            <h3>Add To Cart</h3>
        </div>
    )
}