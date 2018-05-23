import React, { Component } from 'react'
import logo from './logo.svg'
import registerServiceWorker from './registerServiceWorker'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button
          onClick={() => {
            registerServiceWorker()
          }}
        >
          Get The Push Notification
        </button>
        <br /><br />
        <button
          onClick={() => {
            fetch('http://localhost:4000/test', { mode: 'cors' })
              .then(res => res.json())
              .then(data =>
                console.log('this is a response from /test api hit', data)
              )
          }}
        >
          Test If Server and Client are Talking to Each Other (Logging Response)
        </button>
      </div>
    )
  }
}

export default App
