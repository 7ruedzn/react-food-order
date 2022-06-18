import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CartContext from './context/CartContext'
import './index.module.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartContext.Provider value={[]}>
      <App />
    </CartContext.Provider>
  </React.StrictMode>
)
