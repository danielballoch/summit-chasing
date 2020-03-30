import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import { getAllProductsForHome } from '../lib/api'
import { imageBuilder } from '../lib/api'

import Link from 'next/link';

// export async function getStaticProps(){
//     const res = await fetch("https://vlmslcwb.api.sanity.io/v1/data/query/products?query=*[_type == 'product']")
//   const data = await res.json();
//   return {
//     props: {
//         products: data.result.map(entry => entry)
//     }
//   };
// }

export async function getStaticProps({ preview = false }) {
    const allProducts = await getAllProductsForHome(preview)
    return {
      props: { allProducts, preview },
    }
}

function sanity(props) {
    console.log(props)

    return (
    <div>
    {props.allProducts.map(product => (
            <div key={product.title}>
            <h3>{product.title}</h3>
                <img  
                src={imageBuilder 
                .image(product.defaultProductVariant.images[0].asset._ref)
                .width(200)
                .url()} 
                />
            </div>
      ))}

    </div>
    )
}

export default sanity
