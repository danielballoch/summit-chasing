export default function raffle({difDays, difHours, difMinutes, difSeconds}){
    return(
        <div className="raffle">
        <div className="raffle-header">
            <h1 className='text-center'>
            {/* <b> */}
            Summit Raffle Drop
            {/* </b> */}
            </h1>
        </div>
    
        <div className="flex">
            <img src="/UniteBlackWhite.PNG" alt="Unite tshirt on model - Sandra" className="w-50 float-right"/>
            <div className="w-50 p-5">
                <div className="mt-5">
                    <h3 className="pt-5">What's the Raffle Drop??</h3>
                    <p>We release a new limited time product every month for the month. These products are limited to 100 units.</p>
                    <p className="indent-paragraph"> 
                    Every drop purchased is customised with it's unique number and gives you an entry into that months raffle. 
                    At the end of the month you could be 1 of 5 winners of a chasing summits goodie bag!
                    <a href='#'> click here to read more.</a></p>
                    <p>There's only 23 custom shirts still available, get yours now!</p>
                </div>
                <div className="mt-5">
                    <h3>May's Drop: Unite Tee</h3>
                    <p>Unite, our take on connection, empathy and seeing others perspective. Available for {difDays} more days.</p>
                    <p><b>Material:</b> 50% Cotton & 50% Polyester.</p>
                    <p><b>Delivery:</b> free shipping new Zealand, prices vary internationally.</p>
                    <p><b>Care:</b> Cold machine wash. Do not tumble dry. Do not iron.</p>
                    <button className="w-100 p-3 btn btn-outline-success product-page-btn">View Product Page</button>
                </div>
            </div>
            
            
        </div>
        
        </div>
    )
}