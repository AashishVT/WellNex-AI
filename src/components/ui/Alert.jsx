import React from 'react'

export default function Alert({type='info', children}){
  const colors = {
    info: 'bg-blue-50 text-blue-800',
    success: 'bg-green-50 text-green-800',
    warn: 'bg-orange-50 text-orange-800',
    danger: 'bg-red-50 text-red-800'
  }
  return (
    <div className={`p-3 rounded-lg ${colors[type] || colors.info}`}>{children}</div>
  )
}
