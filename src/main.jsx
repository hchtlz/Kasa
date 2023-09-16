import React from 'react'
import ReactDOM from 'react-dom/client'
import Data from './components/Data/Data'
import Header from './components/Header/Header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Data />
  </React.StrictMode>,
)
