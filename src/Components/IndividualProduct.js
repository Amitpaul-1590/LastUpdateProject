import React from 'react'
import {useNavigate} from 'react-router-dom'
import {fs} from '../Config/Config'
import {db} from '../Config/Config'; // https://firebase.google.com/docs/firestore/manage-data/delete-data#web-version-8
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

//https://console.firebase.google.com/u/0/project/project-716fb/firestore/data/~2FProducts~2F0niOg7PevkU3juJF0Gex
export const IndividualProduct = ({individualProduct}) => {
    const sheet_link = individualProduct.sheet_link;
    const web_link   = individualProduct.web_link;
    const map_link   = individualProduct.map_link;
    const navigate = useNavigate(); 

    console.log(sheet_link);
    const url = individualProduct.sheet_link; 
  
    const view_cost=()=>{
          navigate(
            '/Information' ,
            {state :
              {sheet_link : individualProduct.sheet_link }
            }
            
          );
    }

    const handleCartProductDelete=()=>{        
            console.log(individualProduct.ID);
            
              const deleteUser = async (id) => {
              const userDoc = doc(db, "Products", id);
              await deleteDoc(userDoc);
              };         
        
    }

    // useEffect(()=>{
    //   getProducts();
    // },[])
      const deleteUser = async (id) => {
      const userDoc = doc(db, "Products", id);
      await deleteDoc(userDoc);
  };

    return (
        <div className='product' style={{backgroundColor:'yellow'}}>
            <div className='product-img' style={{}}>
                <h1 className='photoCard'><a style={{}} href={individualProduct.map_link}><img src={individualProduct.url} alt="product-img"/>  </a></h1>
                {/* <img src={individualProduct.url} alt="product-img"/> */}
            </div>
            <h1 className='cardTitle'><a style={{textDecoration: 'none'}} href={individualProduct.web_link}>{individualProduct.title}  </a></h1>
            <a href={individualProduct.sheet_link} >Sheet</a>
            <div className='product-text description'>{individualProduct.description}</div>
            <button
              onClick={() => {
                deleteUser(individualProduct.ID);
              }}
            >
              {" "}
              Delete Places
            </button>
            <div className='btn btn-danger btn-md cart-btn' onClick={view_cost}>View cost </div>           
      
        </div> 
    )
}