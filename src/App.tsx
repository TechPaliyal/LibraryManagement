import { useState } from 'react'

import './App.css'
import LoginForm from './Componants/LoginForm/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LoginForm/>
    </div>
  )
}

export default App
