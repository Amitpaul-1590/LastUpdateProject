import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

const EditForm = ({closeEvent, fid}) => {
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
  const handleProductImg=(e)=>{
        let selectedFile = e.target.files[0];
        const types =['image/jpg','image/jpeg','image/png','image/PNG'];
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
    console.log(typeof(fid.web_link));
    console.log(fid.web_link);
        useEffect(()=>{
            setTitle(fid.title);
            setDescription(fid.description);
            setCategory(fid.category);
            setWeb_link(web_link);
            setSheet_link(sheet_link);
            setMap_link(map_link);
            setInformation1(information1);
        },[]);
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Edit Place Informations</Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <form autoComplete="off" className='form-group' > 
          {/* onSubmit={handleAddProducts} */}
                <label>Visiting place</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setTitle(e.target.value)} value={title}></input>
                <br></br>
                <label>Place Description</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setDescription(e.target.value)} value={description}></input>
                <br></br>
                
                <label>Spot Category</label>
                <select className='form-control' required
                value={category} onChange={(e)=>setCategory(e.target.value)}>                                    
                    <option value="">Select spot Category</option>                   
                    <option>Lake</option>
                    <option>Zoo</option>                    
                    <option>Sea beach</option>
                    <option>Old place</option>
                    <option>Forest</option>
                    <option>Park</option>   
               
                </select>
                <br></br>
                <label>Upload Place Image</label>
                <input type="file" id="file" className='form-control' required
                onChange={handleProductImg}></input>

                
                <br></br>

                <label>Website Link</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setWeb_link(e.target.value)} value={web_link}></input>
                <br></br>

                <label>Sheet Link</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setSheet_link(e.target.value)} value={sheet_link}></input>
                <br></br>

                <label>Map Link Link</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setMap_link(e.target.value)} value={map_link}></input>
                <br></br>

                <label>Sheet link json formate</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setInformation1(e.target.value)} value={information1}></input>
                <br></br>

                <label>information2</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setInformation2(e.target.value)} value={information2}></input>
                <br></br>
                
                {imageError&&<>
                    <br></br>
                    <div className='error-msg'>{imageError}</div>
                   
                </>}
                <br></br>           
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <button type="submit" className='btn btn-success btn-md'>
                        SUBMIT
                    </button>
                </div>

                
            </form>      
        </Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={closeEvent}>
        Close
      </Button>
      <Button variant="primary" onClick={closeEvent}>
        Save Changes
      </Button>
      </Modal.Footer>
    </div>
  )
}

export default EditForm