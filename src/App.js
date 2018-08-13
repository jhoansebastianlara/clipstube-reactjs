import React, { Component } from 'react'

import './styles/App.css'
import ErrorBoundary from './components/common/ErrorBoundary'
import Header from './components/common/Header'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <Header />
          <div className="App-container">
            <Routes />
          </div>
        </div>
      </ErrorBoundary>
    )
  }
}

export default App
