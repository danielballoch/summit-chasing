import { imageBuilder } from '../../lib/api'

export default function carousal ({images}){
    return(
        <div className="card">
            <div className="grid">
            {/* <img src={props.products[0].files[1].preview_url} alt={props.products[0].name} />
            <img src={props.products[0].files[0].preview_url} alt={props.products[0].name} /> */}
                <img  
                    src={imageBuilder 
                    .image(images[0].asset._ref)
                    .width(600)
                    .url()} 
                />
                <img  
                    src={imageBuilder 
                    .image(images[1].asset._ref)
                    .width(600)
                    .url()} 
                />
                
            </div>
        </div>
    )
}