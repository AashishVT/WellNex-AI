import React from 'react'
import Table from '../components/ui/Table'
import { PATIENTS } from '../mock/patients'

export default function DoctorDashboard(){
  const columns = [
    {key: 'name', title: 'Patient Name'},
    {key: 'age', title: 'Age'},
    {key: 'lastCheckup', title: 'Last Checkup'},
    {key: 'alert', title: 'Alert Flag'}
  ]

  return (
    <div className="grid md:grid-cols-4 gap-6">
      <aside className="md:col-span-1 p-4 border rounded-lg">
        <h3 className="font-semibold">Doctor</h3>
        <nav className="mt-4 space-y-2 text-sm text-slate-600">
          <div>Home</div>
          <div>Patient Search</div>
          <div>Recent Cases</div>
          <div>AI Alerts</div>
        </nav>
      </aside>
      <section className="md:col-span-3 p-4">
        <h2 className="text-xl font-semibold">Welcome back, Dr. Patel</h2>
        <div className="mt-4">
          <div className="p-4 border rounded-lg mb-4">AI Alert Banner (placeholder)</div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Patient Search</h3>
            <Table columns={columns} data={PATIENTS} />
          </div>
        </div>
      </section>
    </div>
  )
}
