import { useState } from 'react';


export default function Option({title, children, start_value}){
    let startValue = false;
    if(start_value){
        startValue = start_value;
    }
    const [active, toggleActive] = useState({value: startValue});
    console.log(" active value in checkout-option:" + active.value);
    console.log("checkout-option-props: ", children)
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