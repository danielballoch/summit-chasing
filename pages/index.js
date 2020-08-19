
import Head from 'next/head'
// import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import { getFeaturedProductsForHome } from '../lib/api'
import { imageBuilder } from '../lib/api'
import Link from 'next/link';
import Heading from '../components/index-components/heading'
import Products from '../components/index-components/products'
import Raffle from '../components/index-components/raffle'
import { useState, useEffect, useRef} from 'react';




//New Method getting products from Sanity CMS
export async function getStaticProps({ preview = false }) {
    const allProducts = await getFeaturedProductsForHome(preview)
    return {
      props: { allProducts, preview },
    }
}

//create timer with hooks for raffel drop 
function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
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
    var moment = require('moment'); // require
    var date = new Date(); 
    let [startDate, setStartDate] = useState(new Date());
    // let [endDate, setEndDate] = useState(new Date(2020, 8, 0))
    let [endDate, setEndDate] = useState(new Date(date.getFullYear(), date.getMonth() + 1, 0))
    

    const start = moment(startDate);
    const end = moment(endDate);
    const diff = end.diff(start);
    const diffDuration = moment.duration(diff);


    useInterval(() => {
    setStartDate(new Date());  
    }, 1000);


    console.log(props)
    console.log("Start Date", startDate)
    console.log("End Date", endDate)
    let difDays = diffDuration.days();
    let difHours = diffDuration.hours();
    let difMinutes = diffDuration.minutes();
    let difSeconds = diffDuration.seconds();

    return (
  <div className="container">
    <Head>
      <title>SummitChasing</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        <Heading/>
        
        <Products allProducts={props.allProducts}/>
        <a href="/shop-all" className="card mb-5">
                <h3>Shop All</h3>
        </a>
        <p>Drop Ends in {difDays} days, {difHours} hours, {difMinutes} Minutes and {difSeconds} seconds. </p>
        <Raffle difDays={difDays} difHours={difHours} difMinutes={difMinutes} difSeconds={difSeconds}/>
        
        
        
    </main>

    


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
