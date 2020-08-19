import { useState } from 'react';


export default function Option({title, children, startvalue}){
    let start = false;
    if(startvalue){
        start = startvalue;
    }
    const [active, toggleActive] = useState({value: start});
    if (active.value !== start){toggleActive({value: start})}
    console.log(" active value in checkout-option:" + active.value);
    console.log("checkout-option-props: ", startvalue)
    return(
        <div>
            <div onClick={() => toggleActive(prevState => ({value: !prevState.value}))}>
            <h1>{title}</h1><hr/>
            </div>
            
            <div className={active.value? "pb-5" : "d-none"}>
                {children}
            </div>
        </div>
    )
}