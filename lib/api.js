import client, { previewClient } from './sanity'
import sanityImage from '@sanity/image-url'

const getUniqueProducts = products => {
    const slugs = new Set()
    return products.filter(product => {
      if (slugs.has(product.slug)) {
        return false
      } else {
        slugs.add(product.slug)
        return true
      }
    })
  }
  
export const imageBuilder = sanityImage(client)

const getClient = preview => (preview ? previewClient : client)

export async function getAllPostsWithSlug() {
    const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
    return data
}

export async function getAllProductsForHome(preview) {
    const results = await getClient(preview)
      .fetch(`*[_type == "product"] | order(date desc, _updatedAt desc)`)
    return getUniqueProducts(results)
  }




  export async function getProductAndMoreProducts(slug, preview) {
    const curClient = getClient(preview)
    const [product, moreProducts] = await Promise.all([
      curClient
        .fetch(
          `*[_type == "product" && slug.current == $slug] | order(_updatedAt desc) {
          ${productFields}
          content,
        }`,
          { slug }
        )
        .then(res => res?.[0]),
      curClient.fetch(
        `*[_type == "product" && slug.current != $slug] | order(date desc, _updatedAt desc){
          ${productFields}
          content,
        }[0...2]`,
        { slug }
      ),
    ])
    return { product, moreProducts: getUniqueProducts(moreProducts) }
  }

  const productFields = `
  title,
  tags,
  'excerpt': blurb.en,
  'body': body.en[0].children[0].text,
  'slug': slug.current,
  'image': defaultProductVariant.images[0].asset->url,
  'images': defaultProductVariant.images,
  'price': defaultProductVariant.price,
`
