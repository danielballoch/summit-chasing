import Shipping from "./shipping"
import { useState } from 'react';

import Cookies from 'js-cookie'
import useSWR, { mutate } from 'swr'
import fetch from 'isomorphic-unfetch'

export default function billing({customerid, handleChange}){
    const [active, toggleActive] = useState({value: false});
    const [Name, setName] = useState("Name");
    const [Address, setAddress] = useState("Address");
    const [Contact, setContact] = useState("+000000000");


    const handleClick = (evt) => {
        handleChange();
        console.log("toggle state")
    }

    let url = 'http://localhost:3000/api/db/getShipping'
    let User = Cookies.get('User')

    const fetcher = (...args) => fetch(args[0], {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({[args[2]]:args[1]})
    }).then(res => res.json())
    
    if(User && active){
        const { data: shipping, error, mutate} = useSWR(() => [url, User, 'User'], fetcher, { suspense: false});
        console.log("Shipping Info: ", shipping)

        if(shipping && Address === "Address" || shipping && Name !==  (shipping.fname + " " + shipping.lname) && shipping.fname !== null){
            setName(shipping.fname + " " + shipping.lname);
            setAddress(shipping.address + ", " + shipping.city + ", " + shipping. country);
            console.log("name and address set")
            
        }

        if (Name && Address){
            mutate()
            console.log("returning form")
            console.log(Name)
    return(<div>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" defaultChecked={true} 
            onClick={() => toggleActive(prevState => ({value: !prevState.value}))}
        />
        <label class="form-check-label" for="defaultCheck1">
            My billing adress is the same as my shipping address:
        </label>
        </div>


        <div className={active.value? "d-none" : "mt-5"}>
            {/* //this needs to come from prev page - state or db?? */}
            <p>{Name}</p>
            <p>{Address}</p>
            <p>Billing Phone: +64220780868</p>
        </div>


        <div className={active.value?  "null" : "d-none" }>
            <Shipping billing={true} customerid={customerid} handleChange={handleChange} />
        </div>
        <button 
        type="submit" 
        className={active.value? "d-none" : "btn btn-primary w-100 mt-5"}
        onClick={() => {
                        console.log("continue to payment button");
                        handleClick();
                        fetch(`/api/db/updateShipping`,{
                        method: 'post',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({billing: true, customerid: customerid, fName: shipping.fname, lName: shipping.lname, address: shipping.address, address2: shipping.address2, city: shipping.city, state: shipping.state, zip:shipping.zip, country:shipping.country, phone:shipping.phone, email:shipping.email})
                        }).then(res => {console.log("Uploading data to customer table")})
                    }}
        >
        Continue to Payment
        </button>
    </div>
    )
        }
    } else {
        return(
            <div>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" defaultChecked={true} 
            onClick={() => toggleActive(prevState => ({value: !prevState.value}))}
        />
        <label class="form-check-label" for="defaultCheck1">
            My billing adress is the same as my shipping address:
        </label>
        
        </div>


        <div className={active.value? "d-none" : "mt-5"}>
            {/* //this needs to come from prev page - state or db?? */}
            <p>Billing Name</p>
            <p>000 Street, Suburb</p>
            <p>0000 City</p>
            <p>Country</p>
            <p>Billing Phone: +00000000000</p>
        </div>
        

        <div className={active.value?  "null" : "d-none" }>
            <Shipping billing={true} customerid={customerid} handleChange={handleChange} />
        </div>
        <button 
        type="submit" 
        className={active.value? "d-none" : "btn btn-primary w-100"}
        onClick={() => {
                        console.log("continue to payment button, toggle state");
                        // handleClick();
                        // fetch(`/api/db/updateShipping`,{
                        // method: 'post',
                        // headers: {
                        //     "Content-Type": "application/json"
                        // },
                        // body: JSON.stringify({billing: billing, customerid: customerid, fName: shipping.fName, lName: shipping.lName, address: shipping.address, address2: shipping.address2, city: shipping.city, state: shipping.state, zip:shipping.zip, country:shipping.country, phone:shipping.phone, email:shipping.email})
                        // }).then(res => {console.log("Uploading data to customer table")})
                    }}
        >
        Continue to Payment
        </button>
        
    </div>
        )
    }
}