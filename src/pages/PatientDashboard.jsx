import React from 'react'

export default function PatientDashboard(){
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <aside className="md:col-span-1 p-4 border rounded-lg">
        <h3 className="font-semibold">Patient</h3>
        <nav className="mt-4 space-y-2 text-sm text-slate-600">
          <div>Medical Timeline</div>
          <div>My Prescriptions</div>
          <div>Upload Records</div>
          <div>AI Insights</div>
        </nav>
      </aside>
      <section className="md:col-span-3 p-4">
        <h2 className="text-xl font-semibold">Hello, Priya</h2>
        <div className="mt-4">
          <div className="p-4 border rounded-lg">Medical timeline (placeholder)</div>
        </div>
      </section>
    </div>
  )
}
