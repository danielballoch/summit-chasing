import fetch from 'isomorphic-unfetch'

// const API_URL = ' https://api.printful.com/countries'
// const getProducts = async function () {
//     const res = await fetch(API_URL, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Basic OnZyajhjbXh6LWF4dDMtaG04ejpzaDNhLXpzOHowcnR6azI2Zw=="
//       }
//     })
//     console.log(res)
//     const data = await res.json()
//     console.log(data)
//     return data
  
// }



// export default getProducts
// I can get data in here, just need to get auth working and should be all good. 
//https://jsonplaceholder.typicode.com/users/1

const handler = (req, res) => {
    const API_URL = ' https://api.printful.com/countries'
    const getProducts = async function () {
        const products = await fetch(API_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic OnZyajhjbXh6LWF4dDMtaG04ejpzaDNhLXpzOHowcnR6azI2Zw=="
        }
        })
        const data = await res.json()
        return data
    }
    return res.json(data);
  };
  
export default handler;