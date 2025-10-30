import React, {useState} from 'react'

export default function OTPModal({open, onClose, phone, otpId, onVerify}){
  const [otp, setOtp] = useState('')
  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm">
        <h3 className="font-semibold mb-2">Enter OTP</h3>
        <p className="text-sm text-slate-600 mb-4">We sent an OTP to {phone}</p>
        <input value={otp} onChange={(e)=>setOtp(e.target.value)} className="w-full border px-3 py-2 rounded-lg mb-4" placeholder="123456" />
        <div className="flex justify-end">
          <button onClick={onClose} className="px-3 py-2 text-sm rounded-lg">Cancel</button>
          <button onClick={async ()=>{
            if(onVerify){
              await onVerify(otp)
            } else {
              alert('Mock verify: '+otp)
            }
          }} className="px-3 py-2 ml-2 rounded-lg text-white" style={{background:'var(--teal)'}}>Verify</button>
        </div>
      </div>
    </div>
  )
}
