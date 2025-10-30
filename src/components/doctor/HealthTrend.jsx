import React from 'react'

function sparklinePath(values, w=200, h=40){
  if(!values || values.length===0) return ''
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  const step = w / (values.length-1)
  return values.map((v,i)=>{
    const x = i*step
    const y = h - ((v - min) / range) * h
    return `${i===0?'M':'L'} ${x.toFixed(2)} ${y.toFixed(2)}`
  }).join(' ')
}

export default function HealthTrend({data=[60,62,61,64,63,66,65]}){
  const path = sparklinePath(data)
  return (
    <svg width="200" height="48" viewBox="0 0 200 48" className="block">
      <path d={path} fill="none" stroke="#0E7490" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}
