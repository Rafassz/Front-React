import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserCreate from './pages/userCreate.tsx'
import App from './App.tsx'
import UserList from './pages/userList.tsx'
import UserEdit from './pages/userEdit.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="usuarios/:id/editar" element={<UserEdit />} />
        <Route path="/usuarios/List" element={<UserList/>}/>
        <Route path="/usuarios" element={<UserCreate/>}/>
        <Route path="/" element={<App />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
