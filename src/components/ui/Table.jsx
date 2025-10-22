import React from 'react'

export default function Table({columns, data}){
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="text-left text-slate-600">
          <tr>
            {columns.map(col => <th key={col.key} className="p-2">{col.title}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-t">
              {columns.map(col => <td key={col.key} className="p-2">{row[col.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
