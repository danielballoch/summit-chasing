import { imageBuilder } from '../../lib/api'
import Link from 'next/link';
export default function Products({allProducts}){
    return(
        <div className="featured">
            {allProducts.map(product => (
                <Link href={`/products/${product.slug.current}`} key={product.id}>
                    <div  className="index-image">
                    <h3>{product.title}</h3>
                        <img  
                        src={imageBuilder 
                        .image(product.defaultProductVariant.images[0].asset._ref)
                        .width(400)
                        .url()} 
                        />
                    </div>
                </Link>
            ))}
            
        </div>
    )
}