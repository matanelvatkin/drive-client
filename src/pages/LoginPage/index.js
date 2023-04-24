import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../components/Login'
import Register from '../../components/Register'

export default function LoginPage() {
  return (
    <div>
        <Routes>
        <Route path="/*" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}
