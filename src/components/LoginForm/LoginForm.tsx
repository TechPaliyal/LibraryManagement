import './LoginForm.css'
import { FaUser ,FaLock } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Button} from "@/components/ui/button"
import { Link } from 'react-router-dom';
import Quote from '@/mycomponents/Quote';

function LoginForm() {

return (

<div className='page'>
<div className='wallpaper'>
<div className='overlay'>
<Quote/>
</div>
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
<label > <input type="checkbox"/> Remember Me</label>
<Link to='/'>Forgot password?</Link>
</div>

<button className='login-btn'>Login</button>

<p className='Or-text'> Or Login with</p>
<div className='Google-login'>
<Button variant="outline" className='google-btn'><img className = 'icon-image' src="./src/Componants/assets/images/white.webp" alt="" />Google</Button>
</div>
<div className='register'>
want to register? <Link id='blue' to='/register'>Register </Link>
</div>

</form>

</div>

</div>
)
}

export default LoginForm