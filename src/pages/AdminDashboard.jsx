import React from 'react'

export default function AdminDashboard(){
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Admin Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div className="p-4 border rounded-lg">Total Users: 1234</div>
        <div className="p-4 border rounded-lg">Records Uploaded: 5421</div>
        <div className="p-4 border rounded-lg">Alerts Triggered: 42</div>
      </div>
    </div>
  )
}
