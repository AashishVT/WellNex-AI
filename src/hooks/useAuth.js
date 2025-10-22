import { useState } from 'react'

export default function useAuth(){
  const [user, setUser] = useState(null)
  function loginMock(payload){
    // set a fake token
    sessionStorage.setItem('medai_token','mock-token')
    setUser({name: payload.name || 'Demo User', role: payload.role || 'patient'})
  }
  function logout(){
    sessionStorage.removeItem('medai_token')
    setUser(null)
  }
  return {user, loginMock, logout}
}
