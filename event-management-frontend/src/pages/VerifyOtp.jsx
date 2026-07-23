import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../api/axios'

export default function VerifyOtp() {
  const location = useLocation()
  const navigate = useNavigate()
  const [email, setEmail] = useState(location.state?.email || '')
  const [otp, setOtp] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email)
    }
  }, [location.state?.email])

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMsg('')

    try {
      const res = await api.post('/auth/verify-otp', { email, otp })
      if (res.data?.success) {
        setMsg(res.data.message || 'Account verified successfully!')
        navigate('/login')
        return
      }
      setMsg(res.data?.message || 'Verification failed. Please try again.')
    } catch (err) {
      setMsg(err.response?.data?.message || err.message || 'Verification failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const resendCode = async () => {
    if (!email) {
      setMsg('Please enter your email before requesting a new code.')
      return
    }

    setResendLoading(true)
    setMsg('')

    try {
      const res = await api.post('/auth/resend-otp', { email })
      if (res.data?.success) {
        setMsg(res.data.message || 'A new OTP has been sent to your email.')
      } else {
        setMsg(res.data?.message || 'Could not resend OTP. Please try again.')
      }
    } catch (err) {
      setMsg(err.response?.data?.message || 'Could not resend OTP. Please try again.')
    } finally {
      setResendLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 16px',
        background: '#F8FAFC',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 480,
          padding: '36px 32px',
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 24px 80px rgba(15, 23, 42, 0.08)',
        }}
      >
        <h2 style={{ margin: 0, color: '#0F172A' }}>Verify your account</h2>
        <p style={{ margin: '12px 0 24px', color: '#475569', lineHeight: 1.6 }}>
          Enter the OTP sent to your email to activate your account.
        </p>

        <form onSubmit={submit} style={{ display: 'grid', gap: 14 }}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            style={inputStyle}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: 14,
              background: '#2563EB',
              border: 'none',
              color: '#fff',
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
              opacity: loading ? 0.75 : 1,
            }}
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>

        <button
          type="button"
          onClick={resendCode}
          disabled={resendLoading}
          style={{
            marginTop: 14,
            background: 'transparent',
            border: 'none',
            color: '#2563EB',
            fontWeight: 700,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          {resendLoading ? 'Sending...' : 'Resend OTP'}
        </button>

        {msg && (
          <div
            style={{
              marginTop: 20,
              padding: '14px 16px',
              borderRadius: 14,
              background: '#e0f2fe',
              color: '#0c4a6e',
              lineHeight: 1.6,
            }}
          >
            {msg}
          </div>
        )}
      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: 14,
  border: '1px solid #CBD5E1',
  fontSize: 16,
  outline: 'none',
}
