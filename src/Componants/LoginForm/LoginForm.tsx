import './LoginForm.css'
import { FaUser ,FaLock } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { useState,useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



interface InputState {
    email: string;
    password: string;
  }
  
function LoginForm() {
    const [Quote , setQuote] = useState("");
    const [Author, setAuthor] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    
    const navigate = useNavigate();
    const [input, setInput] = useState<InputState>({
        "email" : "" ,
        "password" : ""
    });
      
    useEffect(() => {
        const rememberedEmail = localStorage.getItem('email');
        const rememberedPassword = localStorage.getItem('password');
        const rememberedRememberMe = localStorage.getItem('rememberMe') === 'true';

        if (rememberedEmail && rememberedPassword && rememberedRememberMe) {
            setInput({ email: rememberedEmail, password: rememberedPassword });
            setRememberMe(true);
        }
    }, []);
    const handleLogin = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userJson =localStorage.getItem("user")
        const loggedUser = userJson ? JSON.parse(userJson) : null ;
        if (input.email === loggedUser?.email && input.password === loggedUser?.password) {
            if (rememberMe) {
                localStorage.setItem('email', input.email);
                localStorage.setItem('password', input.password);
                localStorage.setItem('rememberMe', 'true');
            } else {
                localStorage.removeItem('email');
                localStorage.removeItem('password');
                localStorage.removeItem('rememberMe');
            }
            navigate('/login/Librarylist');
        } else {
            alert("Please enter a valid email or password");
        }
    };
    const handleRegister = () => {
        navigate('/login/register');
      }

    
    const api_url:string = "https://api.quotable.io/random";
    useEffect(()=>{
    async function getQuote(url:string){
    const response = await fetch(url);
    var data = await response.json();
    setQuote(data.content)
    setAuthor(data.author)

    localStorage.setItem('quote' ,data.content );
    localStorage.setItem('author',data.author);
    localStorage.setItem('timeStamp',new Date().toString() )
    }
    const storedQuote = localStorage.getItem('quote');
    const storedAuthor = localStorage.getItem('author');
    const storedTimesStamp = localStorage.getItem('timeStamp');


   if(storedQuote && storedAuthor && storedTimesStamp){
    const currentTime = new Date();
    const quoteTime = new Date(storedTimesStamp);
    const timeDifference = Math.abs(currentTime.getTime() - quoteTime.getTime())/ 36e5
   
    if(timeDifference < 24){
        setQuote(storedQuote);
        setAuthor(storedAuthor);
        return;
    }
}
   

    getQuote(api_url)
    }, []);

    
  return (

    <div className='page'>
        <div className='wallpaper'>
        <h1 id='line1'>Quote of the day</h1>
        <h1 id='line2'>{`"${Quote}"`}</h1>
        <p id='line3'>{`author- "${Author}"`}</p>
        </div>
    <div className='wrapper'>
         <form onSubmit={handleLogin} className='form'>
         <h1 id='logintext'>LogIn</h1>
                <div className='input-cover'>
            <div className='inputbox'>
            <Input 
            name= "email"
            value={input.email}
            onChange={ (e) => setInput({...input,[e.target.name]:e.target.value})}type="email" placeholder="Email" />
                <FaUser className='icon'/>
            </div>
            <div className='inputbox'>
                <input 
                name= "password"
                value={input.password}
                onChange={ (e) => setInput({...input,[e.target.name]:e.target.value})}
                type="password" placeholder='Password' className='pwd' />
                <FaLock className='icon' />
            </div>
                </div>
            <div className='remember-forget'>
                <label >  <input 
                           checked={rememberMe}
                           onChange={(e) => setRememberMe(e.target.checked)}
                           type="checkbox"/> Remember Me</label>
                <a href="#" id='blue'>Forgot password?</a>
            </div>
        
                <Button type='submit' className='login-btn'>Login</Button>
            
            <p className='Or-text'> Or Login with</p>
            <div className='Google-login'>
                <Button variant="outline" className='google-btn'><img className = 'icon-image' src="images/Google.jpg" alt="" />Google</Button>
            </div>
            <div className='register'>
                want to register? <Link to='/login/register' id='blue'>Register</Link>
            </div>
         </form>

    </div>
    </div>
  )
}

export default LoginForm