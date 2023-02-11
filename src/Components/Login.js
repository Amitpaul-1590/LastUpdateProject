import React,{useState} from 'react'
import {Link, Navigate} from 'react-router-dom'
import {auth} from '../Config/Config'
//import {useHistory} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import AddProducts from './AddProducts'
import './login.css';



export const Login = () => {

    //const history = useHistory();
    const navigate = useNavigate();

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

  

    const handleLogin=(e)=>{
        if (email==="admin@gmail.com" && password === "admin@gmail.com") {  //jodi admin hoy      
            e.preventDefault();      
         setSuccessMsg('Admin Login Successfull. You will now automatically get redirected to Home page');
            setEmail('');   //sob gula text field ke 0 kore ibo
            setPassword('');
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
                console.log('ok fine');
                //history.push('/');
                navigate('/add-products');
            },3000)
        
        } 
        
        else {  // jodi admin na hoy
           e.preventDefault();
            auth.signInWithEmailAndPassword(email,password).then(()=>{
            setSuccessMsg('Login Successfull');
            setEmail('');   //sob gula text field ke 0 kore ibo
            setPassword('');
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
                //history.push('/');
                navigate('/');
            },3000)   //3 sec por success message dibo abong redirect hobe
        })
        
        .catch(error=>setErrorMsg(error.message));
        }
    }

    return (
        <div className="logincontainer1">
        <br></br>
        <div style={{ padding: "10px"}}>
        <h1 className='heading1'>Login</h1>
        
        
        {successMsg&&<>  
            <div >{successMsg}</div>
            <br></br>
        </>}
        
         <form className='mainform' autoComplete="off"
        onSubmit={handleLogin}>  
            <div >
                <label className='emailLabel'>Email</label>
                <input className='emailInput'  type="email"  placeholder='e.g.abc@example.com' required
                onChange={(e)=>setEmail(e.target.value)} value={email}>      
                </input>
            </div>             
            {/* ---------------------- */}
            <br></br>
           <div >
           <label className='passLabel' >Password</label>
            <input className='passInput' type="password"  placeholder='password' required
            onChange={(e)=>setPassword(e.target.value)} value={password}>
                
            </input>
            </div> 
           
           
            
            <br></br>
            <div >
                <button className='loginbutton' type="submit">Log In</button>
                <br></br>    
            </div>
            <br></br>
            <br></br>
            <div>
                <p >Don't have an account?<Link className='downsignup' to="/signup" >Signup</Link></p>
            </div>
                             
        </form>
        </div>
       
        {errorMsg&&
        <>   
            <br></br>
            <div className='error-msg'>{errorMsg}</div>                
        </>}
    </div>
    )
}

export default Login;