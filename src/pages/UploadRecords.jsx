import React, {useState} from 'react'

export default function UploadRecords(){
  const [files, setFiles] = useState([])
  function onDrop(e){
    e.preventDefault()
    const dropped = Array.from(e.dataTransfer.files)
    setFiles(prev=>[...prev, ...dropped])
  }
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div onDrop={onDrop} onDragOver={(e)=>e.preventDefault()} className="border-dashed border-2 border-slate-300 rounded-2xl p-8 text-center">
        <p className="mb-4">Drag and drop medical records (PDF, JPG, PNG) here</p>
        <input type="file" multiple className="hidden" />
        <div className="mt-4 text-sm text-slate-500">Files queued: {files.length}</div>
      </div>
    </div>
  )
}
