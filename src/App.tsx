

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import NotFound from './NotFound'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path='LibraryManagement' element={<LandingPage/>}/>
      <Route path='LibraryManagement/management/login' element={<LandingPage/>}/>
      <Route path='LibraryManagement/user/login' element={<LandingPage/>}/>
     
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
