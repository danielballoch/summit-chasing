import { imageBuilder } from '../../lib/api'

export default function carousal ({images}){
    return(
        <div>
            <div className="grid ">
            {/* <img src={props.products[0].files[1].preview_url} alt={props.products[0].name} />
            <img src={props.products[0].files[0].preview_url} alt={props.products[0].name} /> */}
                {/* <img className="w-50 p-2"  
                    src={imageBuilder 
                    .image(images[0].asset._ref)
                    .width(600)
                    .url()} 
                />
                <img  className="w-50 p-2"  
                    src={imageBuilder 
                    .image(images[1].asset._ref)
                    .width(600)
                    .url()} 
                /> */}
                {images.map((image,i) => (
                    <img className="w-50 p-2"
                    src={imageBuilder 
                    .image(images[i].asset._ref)
                    .width(600)
                    .url()}
                    />
                ))}
                
            </div>
        </div>
    )
}