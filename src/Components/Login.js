import React,{useState} from 'react'
import {Link, Navigate} from 'react-router-dom'
import {auth} from '../Config/Config'
//import {useHistory} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import AddProducts from './AddProducts'



export const Login = () => {

    //const history = useHistory();
    const navigate = useNavigate();

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

  

    const handleLogin=(e)=>{
        console.log('roni')
        if (email==="admin@gmail.com" && password === "admin@gmail.com") {  //jodi admin hoy            
         setSuccessMsg('Admin Login Successfull. You will now automatically get redirected to Home page');
            setEmail('');   //sob gula text field ke 0 kore ibo
            setPassword('');
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
                console.log('ok fine');
                //history.push('/');
                navigate('/');
            },3000)
        
        } 
        
        else {  // jodi admin na hoy
           e.preventDefault();
            auth.signInWithEmailAndPassword(email,password).then(()=>{
            setSuccessMsg('Login Successfull. You will now automatically get redirected to Home page');
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
        <div className='container1' >
            <br></br>
            <br></br>
            <div style={{backgroundColor: "red", padding: "10px"}}>
            <h1 id="login">Login</h1>
            {successMsg&&<>  
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
            
             <form id="form1" style={{backgroundColor: "yellow"}} className='form-group' autoComplete="off"
            onSubmit={handleLogin}>  
                <div className='email'>
                    <label id="em">Email</label>
                    <input id="em1" type="email" className='form-control' placeholder='e.g.abc@example.com' required
                    onChange={(e)=>setEmail(e.target.value)} value={email}>      
                    </input>
                </div>             
                {/* ---------------------- */}
                <br></br>
               <div className='password'>
               <label id="pass">Password</label>
                <input id="pass1"type="password" className='form-control' placeholder='password' required
                onChange={(e)=>setPassword(e.target.value)} value={password}>
                    
                </input>
                </div> 
               
                
                <br></br>
                <div id="loginbtn1"  className='btn-box'>
                    <button id= "loginbtn" type="submit" className='btn btn-success btn-md'>Log In</button>
                    <br></br>    
                </div>
                <div className='signupLink'>
                    <span>Don't have an account?<Link to="/signup" className='signlink'>Signup</Link></span>
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