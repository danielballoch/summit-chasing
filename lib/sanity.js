const sanityClient = require('@sanity/client')

const options = {
    // Find your project ID and dataset in `sanity.json` in your studio project
    dataset: 'products',
    projectId: "vlmslcwb",
    useCdn: process.env.NODE_ENV === 'products',
    // useCdn == true gives fast, cheap responses using a globally distributed cache.
    // Set this to false if your application require the freshest possible
    // data always (potentially slightly slower and a bit more expensive).
  }

// const client = sanityClient({
//   projectId: 'vlmslcwb',
//   dataset: 'products',
//   token: '', // or leave blank to be anonymous user
//   useCdn: true // `false` if you want to ensure fresh data
// })

export default sanityClient(options)
export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.NEXT_EXAMPLE_CMS_SANITY_API_TOKEN,
})

