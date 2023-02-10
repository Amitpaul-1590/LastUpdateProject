import React,{useState} from 'react'
import {auth,fs} from '../Config/Config'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();
    const [fullName, setFullname]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

    const handleSignup=(e)=>{
        e.preventDefault();
         console.log(fullName, email, password);
        auth.createUserWithEmailAndPassword(email,password).then((credentials)=>{  //video 3 er 8 min
            console.log(credentials);
            fs.collection('users').doc(credentials.user.uid).set({    //video 3 er 10 min
                FullName: fullName,
                Email: email,
                Password: password
            }).then(()=>{
                setSuccessMsg('Signup Successfull. You will now automatically get redirected to Login');
                setFullname('');
                setEmail('');
                setPassword('');
                setErrorMsg('');
                setTimeout(()=>{
                    setSuccessMsg('');
                    navigate('/');
                },3000)
            }).catch(error=>setErrorMsg(error.message));
        }).catch((error)=>{
            setErrorMsg(error.message)
        })
    }

    return (
        <div className='container'>
            <br></br>
            <br></br>
            <div className='body2' >
            <h1 id="signup">Sign Up</h1>
            
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
            <form id="form2" className='signupBody' autoComplete="off" onSubmit={handleSignup}>
                {/* className='form-group' style={{backgroundColor:'yellow'}} */} 
                <label id="fullName">Full Name</label> 
                <input id="fNBox" type="text" className='form-control' placeholder='e.g.abc' required
                 onChange={(e)=>setFullname(e.target.value)} value={fullName}></input>
                <br></br>

                <label id="emText">Email</label>
                <input id="emBox" type="email" className='form-control' placeholder= 'e.g.abc@example.com' required
                 onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <br></br>
                <label id="passText">Password</label>
                <input id="passBox" type="password" className='form-control' placeholder='password' required
                 onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <br></br>
                <div className='btn-box'>
                    <button id="subbtn" type="submit" className='btn btn-success btn-md'>Sign Up</button>
                    <br></br>
                </div>
                <div className='loginLink'>
                    <span>Already have an account? <Link to="/login" className='loglink'>login</Link></span>
                </div>     
            </form>
            </div>
            
            {errorMsg&&<>
                <br></br>
                <div className='error-msg'>{errorMsg}</div>                
            </>}
        </div>
    )
}

export default Signup;