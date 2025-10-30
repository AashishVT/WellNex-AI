import React, {useEffect, useState} from 'react'
import mockApi from '../lib/mockApi'

export default function AIInsights(){
  const [insights, setInsights] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    mockApi.getAiInsights().then(res=>{
      if(res.ok) setInsights(res.insights)
      setLoading(false)
    })
  },[])

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold">AI Insights</h2>
      <div className="mt-4 grid gap-4">
        {loading && <div className="text-slate-500">Loading insights…</div>}
        {!loading && insights.map(i=> (
          <div key={i.id} className="p-4 border rounded-lg">
            <div className="font-semibold">{i.title} <span className="text-sm text-slate-500">({Math.round(i.score*100)}%)</span></div>
            <div className="text-sm text-slate-600 mt-1">{i.summary}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
