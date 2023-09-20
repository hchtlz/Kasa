import React from 'react'
import ReactDOM from 'react-dom/client'
import Data from './components/Data/Data'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Banner />
  </React.StrictMode>,
)
