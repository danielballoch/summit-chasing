import Head from 'next/head'
import fetch from 'node-fetch'

function Product(props){
    console.log(props)
    if (props) {
    return (
        <main>
        <div className="card">
        <div className="grid">
          <img src={props.products[0].files[1].preview_url} alt={props.products[0].name} />
          <img src={props.products[0].files[0].preview_url} alt={props.products[0].name} />
        </div>
        <h2>
        {props.products[0].retail_price} {props.products[0].currency} {props.products[0].name} 
        </h2>
        </div>
  
        <div className="grid">
            <a href="#" className="card">
                <h3>Add To Cart</h3>
            </a>
            <a href="/" className="card">
                <h3>Back</h3>
            </a>
        </div>
        
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

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1200px;
      }
      .grid img {
          width: 400px;
      }

      .img {
          width: 100%;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        max-width: 1200px;
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

export async function getStaticPaths(){
    const API_URL = 'https://api.printful.com/store/products'
    const res = await fetch(API_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": process.env.customKey
        }
    })
    const data = await res.json();

    const paths = data.result.map(product => ({
        params: {id: product.id.toString()}
    }))
    console.log(data);
    return {paths, fallback: false}
}

//tested props in page console and this should all be working.. unless it's a timing issue?? -wasn't using `` :) working now
export async function getStaticProps(props){
    const API_URL = `https://api.printful.com/store/products/${props.params.id}`
    const res = await fetch(API_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": process.env.customKey
        }
    })
        console.log(props)
  const data = await res.json();
  return {
    props: {
        products: data.result.sync_variants
    }
  };
}


  
export default Product;