import React, {useEffect, useState} from 'react'
import Table from '../components/ui/Table'
import mockApi from '../lib/mockApi'
import Sidebar from '../components/doctor/Sidebar'
import PatientSearch from '../components/doctor/PatientSearch'
import PatientPreview from '../components/doctor/PatientPreview'
import AlertsBanner from '../components/doctor/AlertsBanner'
import HealthTrend from '../components/doctor/HealthTrend'

export default function DoctorDashboard(){
  const columns = [
    {key: 'name', title: 'Patient Name'},
    {key: 'age', title: 'Age'},
    {key: 'lastCheckup', title: 'Last Checkup'},
    {key: 'alert', title: 'Alert Flag'}
  ]

  const [patients, setPatients] = useState([])
  const [selected, setSelected] = useState(null)
  useEffect(()=>{
    mockApi.fetchPatients().then(res=>{
      if(res.ok) setPatients(res.patients)
    })
  },[])

  return (
    <div className="grid md:grid-cols-4 gap-6">
      <aside className="md:col-span-1">
        <div className="p-4">
          <Sidebar />
        </div>
      </aside>

      <section className="md:col-span-2 p-4">
        <DoctorHeader />
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <PatientQueue patients={patients} onView={p=>setSelected(p)} onStart={p=>alert('Start consult: '+p.name)} />
          </div>
          <div className="md:col-span-2 space-y-4">
            <ControlCenter />
            <HealthSummaryPanel patient={selected || patients[0]} />
            <Timeline events={[{date:'2025-10-01', title:'Consultation', desc:'Routine check-up'},{date:'2025-08-12', title:'Lab', desc:'Blood test: normal'}]} />
          </div>
        </div>
      </section>

      <aside className="md:col-span-1 p-4">
        <AlertsBanner patients={patients} />
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Metrics</h4>
          <div className="p-3 border rounded-lg">
            <div className="text-sm text-slate-600">Total consultations: <strong>24</strong></div>
            <div className="text-sm text-slate-600 mt-2">AI alerts handled: <strong>3</strong></div>
          </div>
        </div>
      </aside>

      <div className="md:col-span-4">
        <div className="p-4">
          <BottomNav />
        </div>
      </div>

      {selected && <PatientPreview patient={selected} onClose={()=>setSelected(null)} />}
    </div>
  )
}
