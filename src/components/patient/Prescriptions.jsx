import React, {useEffect, useState} from 'react'
import mockApi from '../../lib/mockApi'

export default function Prescriptions({patientId}){
  const [list, setList] = useState([])
  useEffect(()=>{
    mockApi.fetchPrescriptions(patientId).then(res=>{
      if(res.ok) setList(res.prescriptions)
    })
  },[patientId])

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-3">My Prescriptions</h3>
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-slate-500 text-xs">
            <tr><th>Medicine</th><th>Dosage</th><th>Duration</th><th>Doctor</th><th>Updated</th></tr>
          </thead>
          <tbody>
            {list.map(r=> (
              <tr key={r.id} className="border-t"><td className="py-2">{r.medicine}</td><td>{r.dosage}</td><td>{r.duration}</td><td>{r.doctor}</td><td>{r.updated}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
