

import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import { hydrateRoot } from 'react-dom/client'
import App from '../src/App'
import '../src/index.css'
import React from 'react'

hydrateRoot(document.getElementById('root') as HTMLElement,  <StrictMode>
<App />
</StrictMode>)



/*
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)*/



