import React, {useState, useMemo} from 'react'

// Simple fuzzy-ish search: substring match across name and id
export default function PatientSearch({patients=[], onSelect}){
  const [q, setQ] = useState('')
  const results = useMemo(()=>{
    const term = q.trim().toLowerCase()
    if(!term) return patients
    return patients.filter(p => {
      return (p.name && p.name.toLowerCase().includes(term)) || (p.id && p.id.toLowerCase().includes(term))
    })
  },[q, patients])

  return (
    <div>
      <div className="flex gap-2">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by Aadhaar, name or QR" className="w-full px-3 py-2 rounded border" />
        <button className="px-3 py-2 rounded bg-slate-100">Scan QR</button>
      </div>

      <div className="mt-3 space-y-2 max-h-64 overflow-auto">
        {results.map(p=> (
          <div key={p.id} className="p-3 border rounded flex items-center justify-between">
            <div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-xs text-slate-500">Last: {p.lastCheckup || '—'}</div>
            </div>
            <div>
              <button onClick={()=>onSelect && onSelect(p)} className="px-3 py-1 rounded bg-wellnex-DEFAULT text-white">Preview</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
