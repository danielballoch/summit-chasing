export default function footer(){
    return(
        <footer className="footer">
        
        <span className="footer-links row">
        
            <a href="/shop-all">Shop</a><a href="/cart">Cart</a><a href="/products/unite-tee">Raffle</a><a href="#">Support</a>
        </span>
        

        <div className="row bot-foot">
        
            <a className="ml-2 "
                href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                   Powered by <img src="/zeit.svg" height="20px" alt="ZEIT Logo" /> 
            </a>
            <a href="https://stripe.com" className="ml-2">
             secured with <img src="/stripe_logo.png" height="36px" alt="Stripe Logo"/>
            </a>
            <a>©SummitChasing, 2020</a>
            
        </div>

        
        
      
    </footer>
        
    )
}