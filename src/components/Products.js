import React, { useContext } from 'react'
import { ProductsContext } from '../global/ProductsContext'


export const Products = () => {
const { products } = useContext(ProductsContext)
    return (
        <div>
        Products
        </div>
    )
}