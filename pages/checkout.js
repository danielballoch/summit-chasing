//collect shipping info, phone, email and estimate cost
import Header from "../components/product-page-components/heading" 
import CheckoutOption from "../components/checkout-components/checkout-option"
import Shipping from "../components/checkout-components/shipping"
import Billing from "../components/checkout-components/billing"
import Payment from "../components/checkout-components/payment"
import CartDisplay from "../components/checkout-components/display-cart"
import Cookies from 'js-cookie'



 class Checkout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            active: true,
            shippingop: true,
            billingop: false,
            paymentop: false
        };  
    }

    
        render(){
        let User = Cookies.get('User');

        const handleChange= (evt) => {
            this.setState({
                shippingop: !this.state.shippingop
            });
            console.log("state updated: " + this.state.shippingop)
        }
        
        console.log("Checkout Props:",this.props)
        return(
            <div className="d-flex flex-row justify-content-center">
                <div className="card w-50 p-4 mt-5">
                    <CheckoutOption title="1. Shipping" start_value={this.state.shippingop}>
                        <Shipping customerid={User} handleChange={handleChange}/>
                    </CheckoutOption>
                    <CheckoutOption title="2. Billing">
                        <Billing/>
                    </CheckoutOption>
                    <CheckoutOption title="3. Payment">
                        <Payment/>
                    </CheckoutOption>
                </div>
                <div className="h-25 p-4 mt-5 sticky">
                    <CartDisplay/>
                </div>
            </div>
           
        )
     }

}
export default Checkout;