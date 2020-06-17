import { imageBuilder } from '../../lib/api'

export default function carousal ({images}){
    let fillerImage = [];
    for (var i=0; i < 6; i++){
        fillerImage.push("Image " + i)
    }

    if(images.length > 0){
        return(
            <div>
                <div className="grid ">
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
    } else {
        return(
            <div>
                <div className="filler-container">
                    {fillerImage.map(image => (
                        <div className="filler-images w-50 p2">{image}</div>
                    ))}
                </div>
            </div>
            
        )
    }
    
}