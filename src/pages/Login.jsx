import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams, useNavigate } from 'react-router-dom'
import OTPModal from '../components/ui/OTPModal'
import { useAuthContext } from '../context/AuthProvider'

export default function Login(){
  const { register, handleSubmit } = useForm()
  const [sending, setSending] = useState(false)
  const [otpOpen, setOtpOpen] = useState(false)
  const [otpId, setOtpId] = useState(null)
  const [searchParams] = useSearchParams()
  const role = searchParams.get('role') || 'patient'
  const auth = useAuthContext()
  const navigate = useNavigate()

  function onSubmit(data){
    setSending(true)
    auth.sendOtp(data.phone || data.aadhaar).then(res=>{
      setSending(false)
      if(res && res.otpId){
        setOtpId(res.otpId)
      }
      setOtpOpen(true)
    }).catch(()=>{
      setSending(false)
      setOtpOpen(true)
    })
  }

  return (
    <div className="max-w-md mx-auto mt-12">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Login as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-600">Aadhaar ID</label>
            <input {...register('aadhaar')} className="mt-1 w-full border px-3 py-2 rounded-lg" placeholder="1234-5678-9012" />
          </div>
          <div>
            <label className="block text-sm text-slate-600">Phone</label>
            <input {...register('phone')} className="mt-1 w-full border px-3 py-2 rounded-lg" placeholder="+91 98765 43210" />
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" disabled={sending} className="px-4 py-2 rounded-xl text-white" style={{background:'var(--teal)'}}>{sending ? 'Sending...' : 'Send OTP'}</button>
            <a href="#" className="text-sm text-slate-500">Need help?</a>
          </div>
        </form>
        <OTPModal open={otpOpen} onClose={()=>setOtpOpen(false)} phone={''} otpId={otpId} onVerify={async (code)=>{
          if(!otpId) return
          const result = await auth.verifyOtp(otpId, code)
          if(result && result.ok){
            setOtpOpen(false)
            navigate(role === 'doctor' ? '/doctor' : '/patient')
          } else {
            alert(result.error || 'Verification failed')
          }
        }} />
      </div>
    </div>
  )
}
