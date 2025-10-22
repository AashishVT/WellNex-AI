import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import OTPModal from '../components/ui/OTPModal'

export default function Login(){
  const { register, handleSubmit } = useForm()
  const [sending, setSending] = useState(false)
  const [otpOpen, setOtpOpen] = useState(false)
  const [searchParams] = useSearchParams()
  const role = searchParams.get('role') || 'patient'

  function onSubmit(data){
    setSending(true)
    // mock send OTP
    setTimeout(()=>{
      setSending(false)
      setOtpOpen(true)
    }, 700)
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
        <OTPModal open={otpOpen} onClose={()=>setOtpOpen(false)} phone={''} />
      </div>
    </div>
  )
}
