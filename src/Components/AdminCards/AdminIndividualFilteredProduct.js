import React from 'react'
import {useNavigate} from 'react-router-dom'
import {fs} from '../Config/Config'

export const AdminIndividualFilteredProduct = ({individualProduct}) => {
    const sheet_link = individualProduct.sheet_link;
    const web_link   = individualProduct.web_link;
    const map_link   = individualProduct.map_link;
    const navigate = useNavigate(); 

    const view_cost=()=>{
          navigate('/Information' );
    }

    const handleCartProductDelete=()=>{        
            
                // fs.collection('Cart ' + user.uid).doc(individualProduct.ID).delete().then(()=>{
                //     console.log('successfully deleted');
                // })            
        
    }

    return (
        <div className='product' style={{backgroundColor:'yellow'}}>
            <div className='product-img'>
                <h1 className='photoCard'><a style={{}} href={individualProduct.map_link}><img src={individualProduct.url} alt="product-img"/>  </a></h1>
                {/* <img src={individualProduct.url} alt="product-img"/> */}
            </div>
            <h1>{}</h1>
            <h1 className='cardTitle'><a style={{textDecoration: 'none'}} href={individualProduct.web_link}>{individualProduct.title}  </a></h1>
            <a href={individualProduct.sheet_link}>{individualProduct.title}  </a>
            <div className='product-text description'>{individualProduct.description}</div>
            {/* <div className='product-text description'>{individualProduct.link}</div> */}
            {/* <div className='product-text price'>$ {individualProduct.price}</div> */}
            <div className='btn btn-danger btn-md cart-btn' onClick={handleCartProductDelete} >DELETE</div> 
            <div className='btn btn-danger btn-md cart-btn' onClick={view_cost}>View cost </div>           
        </div> 
    )
}

export default AdminIndividualFilteredProduct;