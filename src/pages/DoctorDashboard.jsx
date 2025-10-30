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
      <aside className="md:col-span-1 p-2">
        <div className="p-4 border rounded-lg">
          <Sidebar />
        </div>
      </aside>

      <section className="md:col-span-3 p-4">
        <h2 className="text-xl font-semibold">Welcome back, Dr. Patel</h2>

        <div className="mt-4">
          <AlertsBanner patients={patients} />

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">Quick Metrics</h4>
              <div className="mt-2 text-sm text-slate-600">Total patients: <strong>{patients.length}</strong></div>
              <div className="mt-2 text-sm text-slate-600">Active alerts: <strong>{patients.filter(p=>p.alert!=='green').length}</strong></div>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">Action Suggestions</h4>
              <div className="mt-2 text-sm text-slate-600">AI suggests periodic reviews for flagged patients.</div>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">Performance</h4>
              <div className="mt-2"><HealthTrend data={[60,62,61,64,63,66]} /></div>
            </div>
          </div>

          <div className="p-4 border rounded-lg mt-4">
            <h3 className="font-semibold mb-2">Patient Search</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <PatientSearch patients={patients} onSelect={p=>setSelected(p)} />
              </div>
              <div className="md:col-span-2">
                <h4 className="font-semibold mb-2">Patient List</h4>
                <Table columns={columns} data={patients} />
              </div>
            </div>
          </div>
        </div>

        {selected && <PatientPreview patient={selected} onClose={()=>setSelected(null)} />}
      </section>
    </div>
  )
}
