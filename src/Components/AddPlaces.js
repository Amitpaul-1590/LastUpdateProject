//copy....................................................................

import React,{useState, useEffect} from 'react'
import { Navbar } from './Navbar'
import { Products } from './Admin/Places'
import { IndividualFilteredProduct } from './Admin/IndividualFilteredPlaces'
import {db} from '../Config/Config';
import {storage,fs} from '../Config/Config'
import './addplace.css';
// import { collection } from "@firebase/firestore";
//  import { useCollectionData } from "react-firebase-hooks/firestore";
//  import {useCollectionData} from 'react-firebase-hooks/firestore';
export const AddPlaces = () => {

    // const query = collection(db, "oses");
    //  const [docs, loading, error] = useCollectionData(query);
    // console.log(db);

    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [sheet_link, setSheet_link]=useState('');
    const [map_link, setMap_link] = useState('');
    const [category, setCategory]=useState('');
    const [image, setImage]=useState(null);
    const [web_link, setWeb_link]=useState('');      //link ke declear kora hoilo
    const [information1, setInformation1]=useState('');
    const [information2, setInformation2]=useState('');
    const [imageError, setImageError]=useState('');
    
    const [successMsg, setSuccessMsg]=useState('');
    const [uploadError, setUploadError]=useState('');

    const types =['image/jpg','image/jpeg','image/png','image/PNG'];
    const handleProductImg=(e)=>{
        let selectedFile = e.target.files[0];
        if(selectedFile){
            if(selectedFile&&types.includes(selectedFile.type)){
                setImage(selectedFile);
                setImageError('');
            }
            else{
                setImage(null);
                setImageError('please select a valid image file type (png or jpg)')
            }
        }
        else{
            console.log('please select your file');
        }
    }

    const handleAddProducts=(e)=>{
        e.preventDefault();
        // console.log(title, description, price);
        // console.log(image);
        const uploadTask=storage.ref(`product-images/${image.name}`).put(image);
        uploadTask.on('state_changed',snapshot=>{
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
            console.log(progress);
        },error=>setUploadError(error.message),()=>{
            storage.ref('product-images').child(image.name).getDownloadURL().then(url=>{
                fs.collection('Places').add({  // eikhane collection er icha moto id set korte hobe
                    title,
                    description,
                    category,
                    //price: Number(price),
                    url,
                    web_link,    //link collection e thakar variable decleared
                    sheet_link,
                    map_link,
                    information1,
                    information2,
                }).then(()=>{ // ekhane collection er id ta nite hobe
                    setSuccessMsg('Place added successfully');
                    setTitle('');
                    setDescription('');
                    setCategory('');
                    setWeb_link('')
                    setSheet_link('');
                    setMap_link('');
                    setInformation1('');
                    setInformation2('');
                    document.getElementById('file').value='';
                    setImageError('');
                    setUploadError('');
                    setTimeout(()=>{
                        setSuccessMsg('');
                    },3000)
                    //const a = Products.uid;
                }).catch(error=>setUploadError(error.message));
            })
        })
    }

    // Add Products

    // state of products
    const [products, setProducts]=useState([]);

    // getting products function
    const getProducts = async ()=>{
        const products = await fs.collection('Places').get();
        const productsArray = [];
        for (var snap of products.docs){
            var data = snap.data();
            data.ID = snap.id;
            productsArray.push({
                ...data
            })
            if(productsArray.length === products.docs.length){
                setProducts(productsArray);
            }
        }
    }

    useEffect(()=>{
        getProducts();
    },[])
    // globl variable
    let Product;

     // categories list rendering using span tag
     const [spans]=useState([
        {id: 'lake', text: 'Lake'},
        {id: 'zoo', text: 'Zoo'},
        {id: 'sea_beach', text: 'Sea beach'},
        {id: 'old_places', text: 'Old place'},
        {id: 'forest', text: 'Forest'},
        {id: 'Park', text: 'Park'},
        {id: 'otherplace1', text: ``},
        {id: 'otherplace2', text: ``},
        {id: 'otherplace3', text: ''},             
    ])

    // active class state
    const [active, setActive]=useState('');

    // category state
    //const [category, setCategory]=useState('');

    // handle change ... it will set category and active states
    const handleChange=(individualSpan)=>{
        setActive(individualSpan.id);
        setCategory(individualSpan.text);
        filterFunction(individualSpan.text);
    }

    // filtered products state
    const [filteredProducts, setFilteredProducts]=useState([]);

    // filter function
    const filterFunction = (text)=>{
        if(products.length>1){
            const filter=products.filter((product)=>product.category===text);
            setFilteredProducts(filter);
        }
        else{
            console.log('no products to filter')
        } 
    }

    // return to all products
    const returntoAllProducts=()=>{
        setActive('');
        setCategory('');
        setFilteredProducts([]);
    }

    return (
        <div className='addplaceContainer'>
            {/* <Navbar /> */}
            <br></br>
            <br></br>
            <h1 className='Addplace'>Add Place</h1>
            <hr></hr>        
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>} 
            <form className="addplaceform" autoComplete="off"  onSubmit={handleAddProducts}>
                <label className='visitingPlaceLabel'>Visiting place</label>
                <input className='visitingPlaceInput' type="text" required
                onChange={(e)=>setTitle(e.target.value)} value={title}></input>
                <br></br>
                <label className='label2'>Place Description</label>
                <input className='input2' type="text"  required
                onChange={(e)=>setDescription(e.target.value)} value={description}></input>
                <br></br>
                
                <label className='label3'>Spot Category</label>
                <select className='selectplace' required
                value={category} onChange={(e)=>setCategory(e.target.value)}>                                    
                    <option className='option' value="">Select spot Category</option>                   
                    <option className='option'>Lake</option>
                    <option className='option'>Zoo</option>                    
                    <option className='option'>Sea beach</option>
                    <option className='option'>Old place</option>
                    <option className='option'>Forest</option>
                    <option className='option'>Park</option>   
               
                </select>
                <br></br>
                <label className='label4'>Upload Place Image</label>
                <input className='imginput' type="file" id="file"  required
                onChange={handleProductImg}></input>

                
                <br></br>

                <label className='label5'>Website Link</label>
                <input className='weblink' type="text"  required
                onChange={(e)=>setWeb_link(e.target.value)} value={web_link}></input>
                <br></br>

                <label className='label6'>Sheet link json formate</label>
               
                <input className='input6' type="text"  required
                onChange={(e)=>setSheet_link(e.target.value)} value={sheet_link}></input>
                <br></br>

                <label className='label7'>Map Link Link</label>
                <input className='maplink' type="text"  required
                onChange={(e)=>setMap_link(e.target.value)} value={map_link}></input>
                <br></br>

                <label className='label8'>Sheet Link</label>
                <input className='input8' type="text" required
                onChange={(e)=>setInformation1(e.target.value)} value={information1}></input>
                <br></br>

                <label className='label9'>information2</label>
                <input className='input9' type="text"  required
                onChange={(e)=>setInformation2(e.target.value)} value={information2}></input>
                <br></br>
                
                {imageError&&<>
                    <br></br>
                    <div className='error-msg'>{imageError}</div>
                   
                </>}
                <br></br>           
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <button className='informationSubmit' type="submit" >
                        SUBMIT
                    </button>
                </div>

                
            </form>
            {uploadError&&<>
                    <br></br>
                    <div className='error-msg'>{uploadError}</div>                    
            </>}


            {/* All Products */}
            <br></br>
            <div className='container-fluid filter-products-main-box'>  
                <div className='filter-box'>
                    {/* <h6>Place category</h6><br/> */}
                        {spans.map((individualSpan,index)=>(
                            <span className='filterPlace' key={index} id={individualSpan.id}
                            onClick={()=>handleChange(individualSpan)}
                            >{individualSpan.text}
                            </span>
                        ))}
                    
                </div>
                {filteredProducts.length > 0&&(
                  <div className='my-products'>
                      <h1 className='text-center'>{category}</h1>
                      
                      <a  onClick={returntoAllProducts}>Return to All Place</a>
                      <div className='products-box'>
                          {filteredProducts.map(individualFilteredProduct=>(
                              <IndividualFilteredProduct 
                                key={individualFilteredProduct.ID}
                                individualFilteredProduct={individualFilteredProduct}                   
                            />
                          ))}
                      </div>
                  </div>  
                )}
                {filteredProducts.length < 1&&(
                    <>
                        {products.length > 0&&(
                            <div className='my-products'>
                                <h1 className='text-center'>All Places</h1>
                                <div className='products-box'>
                                    <Products products={products} />
                                </div>
                            </div>
                        )}
                        {products.length < 1&&(
                            <div className='my-products please-wait'>Please wait...</div>
                        )}
                    </>
                )}
            </div>

        </div>
    )
}

export default AddPlaces;