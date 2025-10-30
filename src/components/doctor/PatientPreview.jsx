import React, {useEffect, useState} from 'react'
import mockApi from '../../lib/mockApi'

export default function PatientPreview({patient, onClose}){
  const [insights, setInsights] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    if(!patient) return
    setLoading(true)
    mockApi.getAiInsights(patient.id).then(res=>{
      if(res.ok) setInsights(res.insights || [])
      setLoading(false)
    })
  },[patient])

  if(!patient) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{patient.name}</h3>
            <div className="text-sm text-slate-500">Age: {patient.age || '—'} • Last check: {patient.lastCheckup || '—'}</div>
          </div>
          <div className="text-sm">Alert: <span className={`font-semibold ${patient.alert==='red'?'text-red-600':patient.alert==='orange'?'text-orange-500':'text-green-600'}`}>{patient.alert}</span></div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">AI Summary</h4>
          {loading && <div className="text-slate-500">Loading summary…</div>}
          {!loading && insights.map(i=> (
            <div key={i.id} className="p-3 border rounded mt-2">
              <div className="font-semibold">{i.title} <span className="text-xs text-slate-500">({Math.round(i.score*100)}%)</span></div>
              <div className="text-sm text-slate-600">{i.summary}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-2 justify-end">
          <button onClick={()=>alert('Annotate placeholder')} className="px-3 py-2 rounded border">Annotate</button>
          <button onClick={()=>alert('Start voice recording (placeholder)')} className="px-3 py-2 rounded border">Voice record</button>
          <button onClick={onClose} className="px-3 py-2 rounded bg-wellnex-DEFAULT text-white">Close</button>
        </div>
      </div>
    </div>
  )
}
