import React from 'react'

function StatusPill({status}){
  const cls = status==='Waiting'? 'bg-slate-100 text-slate-700' : status==='Ongoing'? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-700'
  return <span className={`px-2 py-1 text-xs rounded-full ${cls}`}>{status}</span>
}

export default function PatientQueue({patients=[], onView, onStart}){
  return (
    <div className="space-y-3">
      {patients.map(p=> (
        <div key={p.id} className="p-3 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <div className="font-semibold">{p.name} <span className="text-xs text-slate-500">• {p.age}</span></div>
            <div className="text-xs text-slate-500">{p.condition} • {p.appointment}</div>
            <div className="mt-2 text-xs"><span className="inline-block bg-teal-50 text-teal-700 px-2 py-0.5 rounded mr-2">{p.aiChip}</span><StatusPill status={p.status} /></div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={()=>onView && onView(p)} className="px-3 py-2 rounded-lg border">View</button>
            <button onClick={()=>onStart && onStart(p)} className="px-3 py-2 rounded-lg bg-wellnex-DEFAULT text-white">Start</button>
          </div>
        </div>
      ))}
    </div>
  )
}
