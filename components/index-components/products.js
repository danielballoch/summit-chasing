import { imageBuilder } from '../../lib/api'
import Link from 'next/link';
export default function Products({allProducts}){
    return(
        <div className="grid">
            {allProducts.map(product => (
                <Link href={`/products/${product.slug.current}`} key={product.id}>
                    <div  className="card">
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
            <a href="https://nextjs.org/learn" className="card">
                <h3>Shop All &rarr;</h3>
            </a>
        </div>
    )
}