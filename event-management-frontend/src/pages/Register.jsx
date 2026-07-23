import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/axios'

export default function Register() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  })
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const res = await api.post('/auth/register', form)
      setMessage(res.data.message || 'Registration successful. Check your email for OTP.')
      navigate('/verify', { state: { email: form.email } })
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
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
          maxWidth: 520,
          padding: '36px 32px',
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 24px 80px rgba(15, 23, 42, 0.08)',
        }}
      >
        <h2 style={{ margin: 0, color: '#0F172A' }}>Create your account</h2>
        <p style={{ margin: '12px 0 26px', color: '#475569' }}>
          Register to book events, verify with OTP, and manage your tickets.
        </p>

        <form onSubmit={submit}>
          <div style={{ display: 'grid', gap: 14, marginBottom: 18 }}>
            <input
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handle}
              style={inputStyle}
            />
            <input
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handle}
              style={inputStyle}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handle}
              style={inputStyle}
            />
            <input
              name="phoneNumber"
              placeholder="Phone number"
              value={form.phoneNumber}
              onChange={handle}
              style={inputStyle}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handle}
              style={inputStyle}
            />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={handle}
              style={inputStyle}
            />
          </div>

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
            {loading ? 'Submitting...' : 'Register'}
          </button>
        </form>

        {message && (
          <div
            style={{
              marginTop: 22,
              padding: '14px 16px',
              borderRadius: 14,
              background: '#e0f2fe',
              color: '#0c4a6e',
              lineHeight: 1.6,
            }}
          >
            {message}
          </div>
        )}

        <p style={{ marginTop: 26, color: '#475569', textAlign: 'center' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#2563EB', fontWeight: 700 }}>
            Login
          </Link>
        </p>
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
