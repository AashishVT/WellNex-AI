import React from 'react'

export default function Avatar({name, size=40}){
  const initials = name ? name.split(' ').map(n=>n[0]).slice(0,2).join('') : 'ME'
  return (
    <div className="rounded-full bg-slate-200 flex items-center justify-center font-semibold text-slate-700" style={{width:size, height:size}}>
      {initials}
    </div>
  )
}
