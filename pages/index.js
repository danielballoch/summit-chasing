import Head from 'next/head'
// import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import { getAllProductsForHome } from '../lib/api'
import { imageBuilder } from '../lib/api'
import Link from 'next/link';
import Heading from '../components/index-components/heading'
import Products from '../components/index-components/products'

//New Method getting products from Sanity CMS
export async function getStaticProps({ preview = false }) {
    const allProducts = await getAllProductsForHome(preview)
    return {
      props: { allProducts, preview },
    }
}




//Old Method - getting products from printful
// export async function getStaticProps(){
//     const API_URL = 'https://api.printful.com/store/products'
//     const res = await fetch(API_URL, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": process.env.customKey
//         }
//         })
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.result.length}`);
//   return {
//     props: {
//         products: data.result.map(entry => entry)
//     }
//   };
// }





function Home(props) {
    console.log(props)

    return (
  <div className="container">
    <Head>
      <title>SummitChasing</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        <Heading/>
        <Products allProducts={props.allProducts}/>
        <div className="jumbotron">
        <h1>Summit-Raffel-Drop</h1>
        <p>Every month we release our summit-raffel-drop. A special made shirt, hoodie, print, or accessory, which is only avalible for that month. 
        These drops also act as a raffel, if they sell out before the month is over, you could be 1 of our 5 winners of a <a href="#">SummitChasing gift pack.</a>
        </p>

        <h3>May's Drop:</h3>
        <p>*big pics, qty countdown, time remaining etc * show don't tell, tell in sub-text</p>
        <p>Opt in to mailing list, notification if you win.</p>
        </div>
        
        
    </main>

    <footer>
      <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a>
    </footer>


    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
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

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1200px;
        margin-top: 3rem;
      }

      .grid img {
          width: 100%;
          height: 200px;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        max-width: 300px;
        padding: .1rem;
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
        padding: 4px;
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

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
    )
}

export default Home
