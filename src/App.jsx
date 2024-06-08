import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { getUser } from './Api'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)
  useEffect(() => {
    const loadData = async () => {

      const [userResponse] = await Promise.all([getUser('pedrolaikem')])
      setUser(userResponse.data)
      console.log(userResponse.data)
    }
    loadData()
  }, [])

  return (
    <div class>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App
