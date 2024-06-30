import './LoginForm.css'
import { FaUser ,FaLock } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { Input } from "@/components/ui/input"





function LoginForm() {

    const { loginWithRedirect } = useAuth0();


    
  return (

    <div className='page'>
        <div className='wallpaper'>
            huiu
        </div>
    <div className='wrapper'>
         <form className='form'>
         <h1 id='logintext'>LogIn</h1>
                <div className='input-cover'>
            <div className='inputbox'>
            <Input type="email" placeholder="Email" />
                <FaUser className='icon'/>
            </div>
            <div className='inputbox'>
                <input type="password" placeholder='Password' className='pwd' />
                <FaLock className='icon' />
            </div>
                </div>
            <div className='remember-forget'>
                <label >  <input type="checkbox"/>Remember Me</label>
                <a href="#">Forgot password?</a>
            </div>
        
                <button onClick={() => loginWithRedirect()} className='login-btn'>Login</button>
            
            <p className='Or-text'> Or Login with</p>
            <div className='Google-login'>
                <button className='google-btn'><img className = 'icon-image' src="images/Google.jpg" alt="" />Google</button>
            </div>
            <div className='register'>
                want to register? <a href="#">Register</a>
            </div>
         </form>

    </div>
    </div>
  )
}

export default LoginForm