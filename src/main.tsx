import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { ToDoApp } from './components/toDoApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoApp />
  </StrictMode>,
)
