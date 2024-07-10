
import './App.css'
import LoginForm from './components/LoginForm/LoginForm';
import Register from './components/reg/Register';
import LandingPage from './Pages/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Librarylist from './Pages/Librarylist';

function App() {
  return (
    <BrowserRouter basename="/LibraryManagement">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/librarylist' element={<Librarylist/>}/>


    </Routes>
  </BrowserRouter>
  )
}

export default App;
