
import './App.css'
import Librarylist from './Componants/Librarylist';
import LoginForm from './Componants/LoginForm/LoginForm'
import Register from './components/reg/Register';
import LandingPage from './Pages/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <BrowserRouter basename="/LibraryManagement">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path='/login/register' element={<Register/>}/>
      <Route path='/login/Librarylist' element={<Librarylist/>}/>


    </Routes>
  </BrowserRouter>
  )
}

export default App
