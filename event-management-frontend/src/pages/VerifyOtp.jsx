import React, {useState} from 'react'
import api from '../api/axios'

export default function VerifyOtp(){
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [msg, setMsg] = useState('')

  const submit = async e => {
    e.preventDefault()
    try{
      const res = await api.post('/auth/verify-otp', {email, otp})
      setMsg(JSON.stringify(res.data))
    }catch(err){
      setMsg(err.response?.data || err.message)
    }
  }

  return (
    <div style={{maxWidth:480, margin:'40px auto'}}>
      <h2>Verify OTP</h2>
      <form onSubmit={submit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="OTP" value={otp} onChange={e=>setOtp(e.target.value)} />
        <button type="submit">Verify</button>
      </form>
      <pre>{msg}</pre>
    </div>
  )
}
