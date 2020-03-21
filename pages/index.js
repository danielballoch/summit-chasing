import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'




// const API_URL = 'http://localhost:3000/api'
// async function fetcher(path) {
//   const res = await fetch(API_URL + path)
//   const json = await res.json()
//   console.log(json)
//   return json
// }

Home.getInitialProps = async function(){
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const API_URL = 'https://api.printful.com/countries'
    const res = await fetch(API_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": process.env.customKey
        }
        })
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.result.length}`);

  return {
    countries: data.result.map(entry => entry.name)
  };
}


function Home(props) {
    // const { data, error } = useSWR('/getProducts', fetcher)

    // if (error){console.log(error); return <div>failed to load</div>}
    // if (!data) return <div>loading...</div>
    console.log(props)

    return (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
      <a href="https://nextjs.org">Summit</a>Chasing
      </h1>

      <p className="description">
        Clothing and prints for philosophers, business people or anyone striving for success.
      </p>

      <div className="grid">
        <a href="https://nextjs.org/docs" className="card">
          <h3>Atlas Dreamer</h3>
          <img src='/Atlas_Mock_Front.jpg' alt='atlas tshirt' />
          <p>Our first design! Blending greek mythology and wise words from an old irish poet.</p>
        </a>

        <a href="https://nextjs.org/learn" className="card">
          <h3>Shop All &rarr;</h3>
        </a>

      </div>
      <div>
          <p>{props.countries}</p>
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

    <style jsx>{`
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

        max-width: 800px;
        margin-top: 3rem;
      }

      .grid img {
          height: 70vh;
          max-width: 90vw;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
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
      }

      .card h3 {
        margin: 0 0 1rem 0;
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
  </div>
    )
}

export default Home
