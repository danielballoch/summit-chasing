//collect shipping info, phone, email and estimate cost
import Header from "../components/product-page-components/heading" 
import CheckoutOption from "../components/checkout-components/checkout-option"
import Shipping from "../components/checkout-components/shipping"
import Billing from "../components/checkout-components/billing"
import Payment from "../components/checkout-components/payment"



 class Checkout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {active: true};  
    }
        render(){
        console.log("Checkout Props:",this.props)
        return(
            <div className="card w-50 p-4 mt-5">
                <CheckoutOption title="1. Shipping">
                    <Shipping/>
                </CheckoutOption>
                <CheckoutOption title="2. Billing">
                    <Billing/>
                </CheckoutOption>
                <CheckoutOption title="3. Payment">
                    <Payment/>
                </CheckoutOption>
            </div>
        )
     }

}
export default Checkout;