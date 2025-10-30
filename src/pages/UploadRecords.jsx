import React, {useState, useRef} from 'react'
import mockApi from '../lib/mockApi'

export default function UploadRecords(){
  const [files, setFiles] = useState([])
  const [progress, setProgress] = useState({})
  const inputRef = useRef(null)

  function onDrop(e){
    e.preventDefault()
    const dropped = Array.from(e.dataTransfer.files)
    setFiles(prev=>[...prev, ...dropped])
  }

  function onSelect(e){
    const sel = Array.from(e.target.files || [])
    setFiles(prev=>[...prev, ...sel])
  }

  async function startUpload(){
    if(files.length === 0) return alert('No files queued')
    setProgress({})
    const res = await mockApi.uploadRecords(files, ({file, loaded, total})=>{
      setProgress(prev => ({ ...prev, [file.name]: Math.round((loaded/total)*100) }))
    })
    if(res.ok){
      alert('Upload complete: '+res.results.length+' files')
      setFiles([])
      setProgress({})
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div onDrop={onDrop} onDragOver={(e)=>e.preventDefault()} className="border-dashed border-2 border-slate-300 rounded-2xl p-8 text-center">
        <p className="mb-4">Drag and drop medical records (PDF, JPG, PNG) here</p>
        <input ref={inputRef} type="file" multiple onChange={onSelect} className="hidden" />
        <div className="flex items-center justify-center gap-4 mt-4">
          <button onClick={()=>inputRef.current && inputRef.current.click()} className="px-4 py-2 rounded-lg" style={{background:'var(--teal)', color:'#fff'}}>Select files</button>
          <button onClick={startUpload} className="px-4 py-2 rounded-lg bg-slate-100">Upload</button>
        </div>
        <div className="mt-4 text-sm text-slate-500">Files queued: {files.length}</div>
        <div className="mt-4 space-y-2">
          {files.map(f=> (
            <div key={f.name} className="flex items-center justify-between border p-2 rounded">
              <div className="truncate">{f.name}</div>
              <div className="ml-4 w-40">
                <div className="bg-slate-200 h-2 rounded overflow-hidden">
                  <div style={{width: (progress[f.name]||0)+'%'}} className="bg-teal-500 h-2"></div>
                </div>
                <div className="text-xs text-slate-500">{progress[f.name] || 0}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
