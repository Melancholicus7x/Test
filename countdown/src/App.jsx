import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import CountdownTimer from './CountdownTimer'

function App() {

  useEffect(() =>{
    console.log('hello')
  }, [])

  return (
  <>
  <CountdownTimer/>
  </>

  )
}

export default App