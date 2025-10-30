import React from 'react'

export default function Timeline({events=[]}){
  if(!events.length) return <div className="p-4 border rounded-lg text-sm text-slate-500">No timeline events</div>
  return (
    <div className="p-4 border rounded-lg">
      <div className="space-y-4">
        {events.map((e,i)=> (
          <div key={i} className="flex items-start gap-3">
            <div className="w-10 text-xs text-slate-500">{e.date}</div>
            <div>
              <div className="font-semibold">{e.title}</div>
              <div className="text-sm text-slate-600">{e.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
