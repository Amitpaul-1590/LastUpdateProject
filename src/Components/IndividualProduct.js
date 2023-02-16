import React from 'react'
import {useNavigate} from 'react-router-dom'
import {fs} from '../Config/Config'
import {db} from '../Config/Config'; // https://firebase.google.com/docs/firestore/manage-data/delete-data#web-version-8
import { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditForm from './EditForm';
import About from './About'

//https://console.firebase.google.com/u/0/project/project-716fb/firestore/data/~2FProducts~2F0niOg7PevkU3juJF0Gex
export const IndividualProduct = ({individualProduct}) => {
//modal

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//modal


    const sheet_link = individualProduct.sheet_link;
    const web_link   = individualProduct.web_link;
    const map_link   = individualProduct.map_link;
    const navigate = useNavigate(); 

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
              const userDoc = doc(db, "Places", id);
              await deleteDoc(userDoc);
              };         
        
    }
    const deletePlace = async (id) => {
      const userDoc = doc(db, "Places", id);
      await deleteDoc(userDoc);
    };

    const updatePlaces = async (id) => {
      // const userDoc = doc(db, "Places", id);
      // await deleteDoc(userDoc);
    };

    

    return (
        <div className='product' style={{backgroundColor:'skyblue',  width:"250px",height:"400px"}} >
            <div className='product-img' style={{}}>
                <h1 className='photoCard'><a style={{}} href={individualProduct.map_link}><img  style={{borderRadius:"10px",boxShadow:"5px",margin:"0px"}}  src={individualProduct.url} alt="product-img"/>  </a></h1>
            </div>
            <h1 className='cardTitle'><a style={{textDecoration: 'none'}} href={individualProduct.web_link}>{individualProduct.title}  </a></h1>
            <a href={individualProduct.information1}>Sheet</a>
            <div className='product-text description'>{individualProduct.description}</div>
            <p className='cardTitle'><a style={{textDecoration: 'none'}} href={individualProduct.information1}>Json sheet</a></p>
            <div>
            
            </div>
            <div className='btn btn-danger btn-md cart-btn' onClick={view_cost}>View cost </div>   
            <div>
              <Button 
                onClick={() => {
                  deletePlace(individualProduct.ID);
                }}
              >{" "}
                Delt
              </Button>

              <Button variant="primary" onClick={handleShow}>
                edit
              </Button>
              <Modal show={show} onHide={handleClose}>
                <EditForm closeEvent={handleClose}/>
              </Modal>  
            </div>                    
        </div> 
    )
   }           