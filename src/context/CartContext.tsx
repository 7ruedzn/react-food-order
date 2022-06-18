import React,{createContext} from "react"

const cartContext = React.createContext([
    {
        id: 0,
        name: 'Sushi',
        price: 48.34,
        description: 'A japanese food'
    },
    {
        id: 1,
        name: 'Sushi',
        price: 48.34,
        description: 'A japanese food'
    },
    {
        id: 2,
        name: 'Sushi',
        price: 48.34,
        description: 'A japanese food'
    },
    {
        id: 3,
        name: 'Sushi',
        price: 48.34,
        description: 'A japanese food'
    }
])

export default cartContext;