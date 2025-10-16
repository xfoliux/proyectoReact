import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterApp } from './app/router/index.router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp/>
  </StrictMode>,
)
