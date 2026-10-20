import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { ThemeInit } from '../.flowbite-react/init'
import './index.css'
import MealDb from './MealDb.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
    {/* <ThemeInit /> */}
    {/* <MealDb /> */}
  </StrictMode>,
)
