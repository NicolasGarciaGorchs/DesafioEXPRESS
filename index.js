const express = require('express')

const port = 3001
const app = express()

const products = [
    {
        "id": 1,
        "nombre": "Aceite CASTROL ACTEVO",
        "precio": 3980,
        "category": "Aceite",
        "stock": 150

    },
    {
        "id": 2,
        "nombre": "Aceite MOTUL 5100",
        "precio": 7141,
        "category": "Aceite",
        "stock": 250
        
    },
    {
        "id": 3,
        "nombre": "Aceite MOTUL 300V",
        "precio": 21590,
        "category": "Aceite",
        "stock": 350

    }
] 

app.get('/products', (req, res) => {
    const { limit } = req.query
    if (limit) {
        const products = products.slice(0, limit || 5)
        return res.json({ message: products })
    }
    res.json({ message: products })
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params

    const product = products.find(product => product.id === Number (id))

    res.json({ message: product })
})



app.listen(port, () => {
    console.log(`Server running at port ${port} `)
})