// ===========================
// IImpacto Design System
// ===========================

import './design-system/tokens/colors.css'
import './design-system/tokens/spacing.css'
import './design-system/tokens/typography.css'
import './design-system/tokens/radius.css'
import './design-system/tokens/shadows.css'
import './design-system/tokens/animations.css'

// ===========================
// Tema da aplicação
// ===========================

import './styles/variables.css'
import './styles/theme.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/animations.css'

// ===========================
// Bibliotecas
// ===========================

import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// ===========================
// React
// ===========================

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)