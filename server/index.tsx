import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import { hydrateRoot } from 'react-dom/client'
import App from '../src/App'
import '../src/index.css'
import '../src/App.css'
import React from 'react'

/*
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)*/

hydrateRoot(document.getElementById('root') as HTMLElement,  <StrictMode>
<App />
</StrictMode>)