import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import DoctorDashboard from './pages/DoctorDashboard'
import PatientDashboard from './pages/PatientDashboard'
import AdminDashboard from './pages/AdminDashboard'
import UploadRecords from './pages/UploadRecords'
import AIInsights from './pages/AIInsights'
import NotFound from './pages/NotFound'
import ErrorBoundary from './components/ErrorBoundary'

export default function App(){
  return (
    <div className="min-h-screen">
      <header className="p-4 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">WellNex</Link>
          <nav className="space-x-4">
            <Link to="/login" className="text-slate-600">Login</Link>
            <Link to="/doctor" className="text-slate-600">Doctor</Link>
            <Link to="/patient" className="text-slate-600">Patient</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/doctor" element={<DoctorDashboard/>} />
          <Route path="/patient" element={<PatientDashboard/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/upload" element={<UploadRecords/>} />
          <Route path="/ai" element={<AIInsights/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        </ErrorBoundary>
      </main>

      <footer className="mt-12 border-t p-6 text-center text-sm text-slate-500">
        © 2025 WellNex — All Rights Reserved.
      </footer>
    </div>
  )
}
