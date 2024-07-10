
import './App.css'
import LoginForm from './Pages/LoginForm/LoginForm';
import Register from './components/reg/Register';
import LandingPage from './Pages/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Librarylist from './Pages/Librarylist';
import Users from './Pages/Users';

function App() {
  return (
    <BrowserRouter basename="/LibraryManagement">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/library/login" element={<LoginForm up='library'/>} />
      <Route path="/user/login" element={<LoginForm up='user'/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/librarylist' element={<Librarylist/>}/>
      <Route path='/users' element={<Users/>}/>



    </Routes>
  </BrowserRouter>
  )
}

export default App;
