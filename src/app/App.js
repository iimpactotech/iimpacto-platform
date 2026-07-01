import { createIcons } from 'lucide'
import { renderLayout } from '../layouts/MainLayout.js'
import { renderHome } from '../pages/Home.js'

export function startApp() {
  const app = document.querySelector('#app')

  app.innerHTML = renderLayout()
  document.querySelector('#page-content').innerHTML = renderHome()

  createIcons()
}