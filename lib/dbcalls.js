import fetch from 'isomorphic-unfetch'

export const getUser = User => {
    return fetch(`http://localhost:3000/api/db/getUser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({'User': User})
    })
    .then(res => {return res.json()})
}

export const getCart = User => {
    return fetch(`http://localhost:3000/api/db/getCart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({'User': User})
    })
    .then(res => {return res.json()})
}

export const getCartProducts = orderid => {
    return fetch(`http://localhost:3000/api/db/getCartProducts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({'orderid': orderid})
    })
    .then(res => {return res.json()})
}

export const getCartProductDetails = productids => {
    return fetch(`http://localhost:3000/api/db/getCartProductDetails`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({'productids': productids})
    })
    .then(res => {return res.json()})
}