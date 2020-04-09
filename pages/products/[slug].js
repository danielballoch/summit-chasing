import Head from 'next/head'
import fetch from 'node-fetch'
import Link from 'next/link';
import { getAllPostsWithSlug, getProductAndMoreProducts} from '../../lib/api'
import { imageBuilder } from '../../lib/api'
import { useContext } from 'react';
import CartContext from '../../components/cartContext';



function Product(props){
    const { addToCart, total } = useContext(CartContext);
    console.log(props)
    if (props.product) {
    return (
        <main>
                 <div className="card">
            <h2>
                ${props.product.price} - {props.product.title} 
                {/* {props.products[0].retail_price} {props.products[0].currency} {props.products[0].name}  */}
            </h2>
        </div>

        <div className="card">
        <div className="grid">
          {/* <img src={props.products[0].files[1].preview_url} alt={props.products[0].name} />
          <img src={props.products[0].files[0].preview_url} alt={props.products[0].name} /> */}
            <img  
                src={imageBuilder 
                .image(props.product.images[0].asset._ref)
                .width(600)
                .url()} 
            />
            <img  
                src={imageBuilder 
                .image(props.product.images[1].asset._ref)
                .width(600)
                .url()} 
            />
               
        </div>
        </div>


        <div className="grid" className="card" onClick={() => {addToCart(props.product.slug); total(props.product.price); }}>
            
                <h3>Add To Cart</h3>
        </div>

        <main className="card">
        <h2>
                What is the {props.product.title}?
                {/* {props.products[0].retail_price} {props.products[0].currency} {props.products[0].name}  */}
        </h2>
            <p className="body">{props.product.body}</p>
        </main>
        <Link href="/" className="card">
                <h3>Back</h3>
        </Link>
        
          <style jsx>{`
      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }
      .body {
          max-width: 500px;
          text-align: left;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1200px;
      }
      .grid img {
          max-width: 575px;
      }

      .img {
          width: 100%;
          height: 100%;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        max-width: 1200px;
        width: 100%;
        padding: 1.5rem;
        text-align: center;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
        cursor: pointer;
      }

      .card h3 {
        margin: 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  
      </main>
      
    );
    } else {
        return (<div>Loading...</div>)
    }
    
};


//New paths function getting products from Sanity CMS
export async function getStaticPaths() {
    const allProducts = await getAllPostsWithSlug()
    // const paths = allProducts.map(product => ({
    //     params: {id: product.slug.current.toString()}
    // }))
    // console.log(paths)
    // return {
    //     paths, fallback: false
    // }
    return {
        paths:
          allProducts?.map(product => ({
            params: {
              slug: product.slug,
            },
          })) || [],
        fallback: true,
      }
}

export async function getStaticProps({ params, preview = false }) {
    const data = await getProductAndMoreProducts(params.slug, preview)
    return {
      props: {
        preview,
        product: data.product || null,
        moreProducts: data.moreProducts || null,
      },
    }
  }
//old paths function using printful
// export async function getStaticPaths(){
    
//     const API_URL = 'https://api.printful.com/store/products'
//     const res = await fetch(API_URL, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": process.env.customKey
//         }
//     })
//     const data = await res.json();

//     const paths = data.result.map(product => ({
//         params: {id: product.id.toString()}
//     }))
//     console.log(data);
//     return {paths, fallback: false}
// }


// old getProps function using printful
// export async function getStaticProps(props){
//     const API_URL = `https://api.printful.com/store/products/${props.params.id}`
//     const res = await fetch(API_URL, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": process.env.customKey
//         }
//     })
//         console.log(props)
//   const data = await res.json();
//   return {
//     props: {
//         products: data.result.sync_variants
//     }
//   };
// }


  
export default Product;