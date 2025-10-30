import React from 'react'
import { Video, MessageCircle, Mic, Sparkles } from 'lucide-react'

export default function ControlCenter(){
  return (
    <div className="p-3 border rounded-lg flex items-center justify-between">
      <div className="text-sm text-slate-600">Consultation Controls</div>
      <div className="flex items-center gap-3">
        <button className="px-3 py-2 rounded-lg bg-white shadow"> <Video size={16} /> <span className="ml-2 text-sm">Start Video</span></button>
        <button className="px-3 py-2 rounded-lg bg-white shadow"> <MessageCircle size={16} /> <span className="ml-2 text-sm">Chat</span></button>
        <button className="px-3 py-2 rounded-lg bg-white shadow"> <Mic size={16} /> <span className="ml-2 text-sm">Voice Notes</span></button>
        <button className="px-3 py-2 rounded-lg bg-wellnex-DEFAULT text-white"> <Sparkles size={16} /> <span className="ml-2 text-sm">AI Summary Mode</span></button>
      </div>
    </div>
  )
}
