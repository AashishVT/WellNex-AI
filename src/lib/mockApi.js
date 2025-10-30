// Lightweight client-side mock API for development when no backend is available.
// Each function simulates network latency and returns predictable mock data.

const wait = (ms = 500) => new Promise(res => setTimeout(res, ms))

export async function sendOtp(phone){
  await wait(700)
  // return an otpId for verification
  return { ok: true, otpId: `otp_${Date.now()}` }
}

export async function verifyOtp(otpId, code){
  await wait(600)
  // accept any 4-6 digit code in mock
  const valid = typeof code === 'string' && code.trim().length >= 4
  if(!valid) return { ok: false, error: 'Invalid code' }
  // return a fake token and user payload
  return {
    ok: true,
    token: 'mock-token-' + otpId,
    user: { id: 'u_' + otpId, name: 'Demo User', role: 'patient' }
  }
}

export async function uploadRecords(files, onProgress){
  // files: FileList or array. Simulate per-file progress.
  const list = Array.from(files || [])
  const results = []
  for(let i=0;i<list.length;i++){
    const f = list[i]
    // simulate upload with incremental progress
    const total = 100
    for(let p=0;p<=total;p+=10){
      await wait(80)
      if(onProgress) onProgress({file:f, loaded:p, total})
    }
    results.push({ fileName: f.name, status: 'uploaded', id: `r_${Date.now()}_${i}` })
  }
  return { ok: true, results }
}

export async function getAiInsights(patientId){
  await wait(500)
  // return a few insight cards
  return {
    ok: true,
    insights: [
      { id: 'ins_1', title: 'Risk of Hypertension', score: 0.72, summary: 'Elevated BP trends over last 3 visits.' },
      { id: 'ins_2', title: 'Medication Adherence', score: 0.89, summary: 'High adherence detected.' },
      { id: 'ins_3', title: 'Potential Diabetic Marker', score: 0.45, summary: 'A1c borderline — recommend follow-up.' },
    ]
  }
}

export async function fetchPatients(){
  await wait(300)
  return {
    ok: true,
    patients: [
      { id: 'p1', name: 'Priya Sharma', age: 29, lastCheckup: '2025-09-12', alert: 'green' },
      { id: 'p2', name: 'Ravi Kumar', age: 52, lastCheckup: '2025-10-01', alert: 'orange' },
      { id: 'p3', name: 'Sunita Rao', age: 43, lastCheckup: '2025-08-05', alert: 'red' }
    ]
  }
}

export default {
  sendOtp,
  verifyOtp,
  uploadRecords,
  getAiInsights,
  fetchPatients
}
