
import React from 'react'
import {useNavigate} from 'react-router-dom'

export const IndividualFilteredProduct = ({individualFilteredProduct}) => {
    const sheet_link = individualFilteredProduct.sheet_link;
    const web_link   = individualFilteredProduct.web_link;
    const map_link   = individualFilteredProduct.map_link;
    const navigate = useNavigate(); 

    const view_cost=()=>{
          navigate('/Information' );
    }

    return (
        <div className='product' style={{backgroundColor:'yellow'}}>
            <div className='product-img'>
                <h1 className='photoCard'><a style={{}} href={individualFilteredProduct.map_link}><img src={individualFilteredProduct.url} alt="product-img"/>  </a></h1>
                {/* <img src={individualProduct.url} alt="product-img"/> */}
            </div>
            <h1>{}</h1>
            <h1 className='cardTitle'><a style={{textDecoration: 'none'}} href={individualFilteredProduct.web_link}>{individualFilteredProduct.title}  </a></h1>
            <a href={individualFilteredProduct.sheet_link}>{individualFilteredProduct.title}  </a>
            <div className='product-text description'>{individualFilteredProduct.description}</div>
            {/* <div className='product-text description'>{individualProduct.link}</div> */}
            {/* <div className='product-text price'>$ {individualProduct.price}</div> */}
            <div className='btn btn-danger btn-md cart-btn' onClick={view_cost}>View cost </div>           
        </div> 
    )
}
