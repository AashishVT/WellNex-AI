import React from 'react'
import PatientSidebar from '../components/patient/PatientSidebar'
import PatientHeader from '../components/patient/PatientHeader'
import MedicalTimeline from '../components/patient/MedicalTimeline'
import Prescriptions from '../components/patient/Prescriptions'
import UploadRecords from './UploadRecords'
import AIInsights from './AIInsights'
import BottomNav from '../components/doctor/BottomNav'

export default function PatientDashboard(){
  const patientId = 'p1'
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <aside className="md:col-span-1 p-4">
        <div className="p-2">
          <PatientSidebar />
        </div>
      </aside>

      <section className="md:col-span-2 p-4">
        <PatientHeader user={{name:'Aashish', status:'stable'}} />
        <div className="mt-4 space-y-4">
          <MedicalTimeline patientId={patientId} />
          <Prescriptions patientId={patientId} />
        </div>
      </section>

      <aside className="md:col-span-1 p-4">
        <div className="space-y-4">
          <UploadRecords />
          <AIInsights />
        </div>
      </aside>

      <div className="md:col-span-4">
        <BottomNav />
      </div>
    </div>
  )
}
