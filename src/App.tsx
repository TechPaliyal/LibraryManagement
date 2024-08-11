1 import './App.css'
2 import LoginForm from './Pages/LoginForm/LoginForm';
3 import Register from './Pages/register/Register';
4 import LandingPage from './Pages/LandingPage'
5 import { BrowserRouter, Routes, Route } from 'react-router-dom';
6 import Librarylist from './Pages/Librarylist';
7 import Users from './Pages/Users';
8 
9 function App() {
10   return (
11     <BrowserRouter basename={process.env.PUBLIC_URL}>
12     <Routes>
13       <Route path="/" element={<LandingPage />} />
14       <Route path="/library/login" element={<LoginForm up='library'/>} />
15       <Route path="/user/login" element={<LoginForm up='user'/>} />
16       <Route path='/register' element={<Register/>}/>
17       <Route path='/librarylist' element={<Librarylist/>}/>
18       <Route path='/users' element={<Users/>}/>
19       <Route path='/pr-deploy/:prNumber' element={<LandingPage />} />
20     </Routes>
21   </BrowserRouter>
22   )
23 }
24 
25 export default App;
