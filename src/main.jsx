import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthProvider'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
  </React.StrictMode>
)
// Register service worker in production
if('serviceWorker' in navigator && window.location.protocol !== 'file:'){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('/src/service-worker.js').then(()=>{
      console.log('Service worker registered')
    }).catch(()=>{})
  })
}
