import { useState } from 'react'

export default function shipping({customerid, billing, handleChange}){
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    console.log(fName)

    const handleSubmit = (evt) => {
        handleChange();
        console.log("submit button, toggle state")
    }

    let btnText = "Continue to Billing";
    if (billing){btnText="Continue to Payment"}
    return(
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputFName">First Name</label>
                    <input type="text" class="form-control" id="inputFName" 
                    value={fName.fName} onChange={e => setFName({fName: e.target.value})}
                    />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputLName">Last Name</label>
                    <input type="text" class="form-control" id="inputLName"
                        value={lName.lName} onChange={e => setLName({lName: e.target.value})}
                    />
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"
                    value={address.address} onChange={e => setAddress({address: e.target.value})}
                />
            </div>
            <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
                    value={address2.address2} onChange={e => setAddress2({address2: e.target.value})}
                />
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputCity">City/Town</label>
                <input type="text" class="form-control" id="inputCity"
                    value={city.city} onChange={e => setCity({city: e.target.value})}
                />
                </div>
                <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <input type="text" class="form-control" id="inputState"
                    value={state.state} onChange={e => setState({state: e.target.value})}
                />
                </div>
                <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip"
                    value={zip.zip} onChange={e => setZip({zip: e.target.value})}
                />
                </div>
                <div class="form-group col-md-6">
                <label for="inputCountry">Country/Region</label>
                <input type="text" class="form-control" id="inputCountry"
                    value={country.country} onChange={e => setCountry({country: e.target.value})}
                />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputPhone">Shipping Phone</label>
                    <input type="inputPhone" class="form-control" id="inputPhone"
                        value={phone.phone} onChange={e => setPhone({phone: e.target.value})}
                    />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4"
                        value={email.email} onChange={e => setEmail({email: e.target.value})}
                    />
                </div>
            </div>
            <button  class="btn btn-primary w-100"
            type="button"
            onClick={() => {
                        handleSubmit();
                        fetch(`/api/db/updateShipping`,{
                        method: 'post',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({customerid: customerid, fName: fName.fName, lName: lName.lName, address: address.address, address2: address2.address2, city: city.city, state: state.state, zip:zip.zip, country:country.country, phone:phone.phone, email:email.email})
                        }).then(res => {console.log("Uploading data to customer table")})
                    }}
            >
                {btnText}
            </button>
        </form>
    )
}