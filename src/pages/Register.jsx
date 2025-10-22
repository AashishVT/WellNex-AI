import React from 'react'
import { useForm } from 'react-hook-form'

export default function Register(){
  const { register, handleSubmit } = useForm()
  function onSubmit(data){
    alert('Mock register: ' + JSON.stringify(data))
  }
  return (
    <div className="max-w-md mx-auto mt-12">
      <div className="bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Create account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input {...register('name')} placeholder="Full name" className="w-full border px-3 py-2 rounded-lg" />
          <input {...register('email')} placeholder="Email" className="w-full border px-3 py-2 rounded-lg" />
          <div className="flex gap-2">
            <input {...register('aadhaar')} placeholder="Aadhaar" className="flex-1 border px-3 py-2 rounded-lg" />
            <input {...register('phone')} placeholder="Phone" className="flex-1 border px-3 py-2 rounded-lg" />
          </div>
          <div className="flex justify-end">
            <button className="px-4 py-2 rounded-xl text-white" style={{background:'var(--teal)'}}>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}
