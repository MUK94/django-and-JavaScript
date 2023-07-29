// GET Call
fetch('http://127.0.0.1:8000/api/menu-items')
    .then(response => response.json())
    .then(data=>{
    console.log(data)
})

// POST change the method for PUT and DELETE
const payload =  {
    "title": "Ambrosia Ice cream",
    "price": 5.00,
    "inventory": 100
}

const endpoint = "http://127.0.0.1:8000/api/menu-items"

fetch(endpoint, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
}).then(Response => Response.json()).then(data => {
    console.log(data)
})

// Authenticated call with tokens
const token = "Some Token"
fetch(endpoint, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authentication': 'Bearer ' + token
    },
    body: JSON.stringify(payload)
}).then(Response => Response.json()).then(data => {
    console.log(data)
})