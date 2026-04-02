// Importing StrictMode to help identify potential issues during development
import { StrictMode } from 'react'

// Importing createRoot to render the React app into the DOM
import { createRoot } from 'react-dom/client'

// Importing global CSS styles
import './index.css'

// Importing the main App component
import App from './App.jsx'

// Selecting the root element from index.html and rendering the React app into it
createRoot(document.getElementById('root')).render(

  // StrictMode is used only in development to highlight problems and improve code quality
  <StrictMode>
    {/* App is the main component that contains the entire application */}
    <App />
  </StrictMode>,
)