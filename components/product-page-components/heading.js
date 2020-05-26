export default function Heading ({price, title}){
    return(
        <div className="pl-5">
                <h2>
                    ${price}<b> {title}</b><br/>
                    {/* {props.products[0].retail_price} {props.products[0].currency} {props.products[0].name}  */}
                </h2>
        </div>
    )
}