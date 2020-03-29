import client, { previewClient } from './sanity'
import sanityImage from '@sanity/image-url'

const getUniqueProducts = products => {
    const slugs = new Set()
    return products.filter(post => {
      if (slugs.has(post.slug)) {
        return false
      } else {
        slugs.add(post.slug)
        return true
      }
    })
  }

export async function getAllProductsForHome(preview) {
    const results = await getClient(preview)
      .fetch(`*[_type == "product"] | order(date desc, _updatedAt desc)`)
    return getUniqueProducts(results)
  }

  const getClient = preview => (preview ? previewClient : client)
  export const imageBuilder = sanityImage(client)