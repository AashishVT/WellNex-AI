import React, {useEffect, useState} from 'react'
import mockApi from '../../lib/mockApi'

export default function MedicalTimeline({patientId}){
  const [events, setEvents] = useState([])
  useEffect(()=>{
    mockApi.getPatientTimeline(patientId).then(res=>{
      if(res.ok) setEvents(res.events)
    })
  },[patientId])

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-3">Medical Timeline</h3>
      <div className="space-y-4">
        {events.map((e,i)=> (
          <div key={i} className="flex items-start gap-3">
            <div className="w-20 text-xs text-slate-500">{e.date}</div>
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
