import React from 'react'

export default function AlertsBanner({patients=[]}){
  const counts = patients.reduce((acc,p)=>{
    acc[p.alert] = (acc[p.alert]||0)+1
    return acc
  },{})

  const banners = []
  if(counts.red) banners.push({color:'red', text:`${counts.red} critical patient(s)`})
  if(counts.orange) banners.push({color:'orange', text:`${counts.orange} moderate alerts`})
  if(counts.green) banners.push({color:'green', text:`${counts.green} stable`})

  if(banners.length===0) return null
  return (
    <div className="space-y-2">
      {banners.map((b,i)=> (
        <div key={i} className={`p-3 rounded ${b.color==='red'?'bg-red-100 text-red-700':b.color==='orange'?'bg-orange-100 text-orange-700':'bg-green-100 text-green-700'}`}>
          <strong>{b.text}</strong>
        </div>
      ))}
    </div>
  )
}
