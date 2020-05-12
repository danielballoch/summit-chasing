export default function Heading ({price, title}){
    return(
        <div className="card">
                <h2>
                    ${price} - {title} 
                    {/* {props.products[0].retail_price} {props.products[0].currency} {props.products[0].name}  */}
                </h2>
        </div>
    )
}