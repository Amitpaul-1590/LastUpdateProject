import {IndividualProduct} from './IndividualProduct'
import React from 'react'

export const Products = ({products}) => { 
    
    return products.map((individualProduct)=>(
        <IndividualProduct 
            key = {individualProduct.ID} 
            individualProduct= {individualProduct}
        />
    ))
}

export default Products;