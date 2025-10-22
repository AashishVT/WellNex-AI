import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

export default function Landing(){
  return (
    <section className="pt-12">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <div className="p-12 text-white" style={{background: 'linear-gradient(135deg,#0E7490,#14B8A6)'}}>
          <div className="max-w-4xl mx-auto">
            <motion.h1 initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6}} className="text-4xl font-bold leading-tight">Your Health, Reimagined by AI</motion.h1>
            <motion.p initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8}} className="mt-4 text-lg max-w-2xl">A secure AI-powered healthcare system that connects you with your doctor and keeps your medical history intelligently organized.</motion.p>

            <div className="mt-8 flex gap-4">
              <Link to="/login?role=patient"><Button>Login as Patient</Button></Link>
              <Link to="/login?role=doctor"><Button>Login as Doctor</Button></Link>
            </div>
          </div>
        </div>

        <div className="p-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold">AI-Powered Summarization</h3>
              <p className="mt-2 text-sm text-slate-600">Quick health insights from medical records using NLP models.</p>
            </div>
            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold">OTP Login</h3>
              <p className="mt-2 text-sm text-slate-600">Seamless, secure access using Aadhaar & phone verification.</p>
            </div>
            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold">Smart Disease Alerts</h3>
              <p className="mt-2 text-sm text-slate-600">Instant AI warnings for critical conditions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
