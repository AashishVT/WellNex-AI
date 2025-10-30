import React from 'react'

function Ring({color='green', label, value}){
  const bg = color==='red'?'bg-red-100 text-red-700':color==='orange'?'bg-orange-100 text-orange-700':'bg-green-100 text-green-700'
  return (
    <div className="flex flex-col items-center">
      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${bg} font-semibold`}>{value}</div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  )
}

export default function HealthSummaryPanel({patient}){
  if(!patient) return (
    <div className="p-4 border rounded-lg">Select a patient to view health summary.</div>
  )
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{patient.name}</div>
          <div className="text-sm text-slate-500">Last visit: {patient.lastCheckup}</div>
        </div>
        <div className="flex gap-4">
          <Ring color="green" label="HR" value="72" />
          <Ring color="green" label="SpO₂" value="98" />
          <Ring color="orange" label="Temp" value="37.2°C" />
        </div>
      </div>
      <div className="mt-4 text-sm text-slate-600">AI Brief: {patient.aiChip || 'No immediate alerts'}</div>
      <div className="mt-3 flex gap-2 justify-end">
        <button className="px-3 py-2 rounded-md bg-slate-50">Expand</button>
        <button className="px-3 py-2 rounded-md bg-wellnex-DEFAULT text-white">Full Report</button>
      </div>
    </div>
  )
}
