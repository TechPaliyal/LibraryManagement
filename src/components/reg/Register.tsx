import './Register.css'
import { FaUser ,FaLock } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { useState,useEffect ,FormEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface InputState {
    email: string;
    password: string;
    confirmpassword : string;
  }

function Register() {
  
    const navigate = useNavigate();

    const [input, setInput] = useState<InputState>({
        "email" : "" ,
        "password" : "",
        "confirmpassword" : ""
    });
    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(input.password !== input.confirmpassword){
            alert("password and confirm password does not match")
          }else{
            localStorage.setItem("user" , JSON.stringify(input));
            navigate("/login")
          }
    }
      
    const handleRegister = () => {
        navigate('/login/register');
      }
    
    const [Quote , setQuote] = useState("");
    const [Author, setAuthor] = useState("");
    
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
         <form className='form' onSubmit={handleSubmit}>
         <h1 id='logintext'>Register</h1>
                <div className='input-cover'>
            <div className='inputbox'>
            <Input 
            name= "email"
            value={input.email}
            onChange={ (e) => setInput({...input,[e.target.name]:e.target.value})} 
            type="email" placeholder="Email" />
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
            <div className='inputbox'>
                <input
                name= "confirmpassword"
                value={input.confirmpassword}
                onChange={ (e) => setInput({...input,[e.target.name]:e.target.value})}
                 type="password" placeholder='Confirm Password' className='pwd' />
                <FaLock className='icon' />
            </div>
                </div>
                <Button type='submit' className='register-btn'>Register</Button>
            
            <p className='Or-text'> Or Register with</p>
            <div className='Google-login'>
                <Button variant="outline" className='google-btn'><img className = 'icon-image' src="./images/Google.jpg" alt="" />Google</Button>
            </div>
            <div className='bottom'>
                Already have an account? <Link to='/login' id='blue'>Login</Link>
            </div>
         </form>

    </div>
    </div>
  )
}

export default Register