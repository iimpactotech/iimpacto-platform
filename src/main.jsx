import './styles/variables.css'
import './styles/theme.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/animations.css'

import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)