import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function WelcomeMessage() {
  return <p>Welcome!</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      </header>
    </div>
  )
}

export default App