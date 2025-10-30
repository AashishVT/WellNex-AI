import React, { createContext, useContext, useEffect, useState } from 'react'
import * as mock from '../lib/mockApi'
import api from '../lib/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }){
  const [user, setUser] = useState(() => {
    try {
      const raw = sessionStorage.getItem('medai_user')
      return raw ? JSON.parse(raw) : null
    } catch(e){ return null }
  })

  useEffect(()=>{
    if(user) sessionStorage.setItem('medai_user', JSON.stringify(user))
    else sessionStorage.removeItem('medai_user')
  },[user])

  async function sendOtp(phone){
    // prefer real API if configured; fallback to mock
    try{
      if(api.defaults.baseURL && !api.defaults.baseURL.includes('mock')){
        // call real endpoint (example)
        const res = await api.post('/auth/send-otp', { phone })
        return res.data
      }
    }catch(err){ /* ignore and fallback */ }
    return mock.sendOtp(phone)
  }

  async function verifyOtp(otpId, code){
    try{
      if(api.defaults.baseURL && !api.defaults.baseURL.includes('mock')){
        const res = await api.post('/auth/verify', { otpId, code })
        const { token, user } = res.data
        sessionStorage.setItem('medai_token', token)
        setUser(user)
        return { ok: true }
      }
    }catch(err){ /* ignore */ }
    const result = await mock.verifyOtp(otpId, code)
    if(result.ok){
      sessionStorage.setItem('medai_token', result.token)
      setUser(result.user)
    }
    return result
  }

  function logout(){
    sessionStorage.removeItem('medai_token')
    sessionStorage.removeItem('medai_user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, sendOtp, verifyOtp, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext(){
  return useContext(AuthContext)
}
