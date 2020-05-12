import Shipping from "./shipping"
import { useState } from 'react';

export default function billing(){
    const [active, toggleActive] = useState({value: false});
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
            <p>Daniel Balloch</p>
            <p>111 Silverdale rd, Silverdale</p>
            <p>3216 Hamilton</p>
            <p>New Zealand</p>
            <p>Billing Phone: +64220780868</p>
        </div>


        <div className={active.value?  "null" : "d-none" }>
            <Shipping/>
        </div>
        

        
    </div>
    )
}