import Head from 'next/head'
import { getAllProductsForHome } from '../lib/api'
import { imageBuilder } from '../lib/api'
import Products from '../components/index-components/products'





//New Method getting products from Sanity CMS
export async function getStaticProps({ preview = false }) {
    const allProducts = await getAllProductsForHome(preview)
    return {
      props: { allProducts, preview },
    }
}

function Home(props) {
    return (
  <div className="container">
    <Head>
      <title>SummitChasing</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        <Products allProducts={props.allProducts}/>
    </main>
  </div>
    )
}

export default Home