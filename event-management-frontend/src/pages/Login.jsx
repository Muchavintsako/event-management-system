import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.data);
      navigate("/dashboard");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
          maxWidth: 440,
          padding: '36px 32px',
          borderRadius: 24,
          background: '#fff',
          boxShadow: '0 24px 80px rgba(15, 23, 42, 0.08)',
        }}
      >
        <h2 style={{ margin: 0, color: '#0F172A' }}>Welcome back</h2>
        <p style={{ margin: '12px 0 24px', color: '#475569' }}>
          Log in to access your dashboard and manage your event bookings.
        </p>

        <form onSubmit={login}>
          <label style={{ display: 'block', marginBottom: 12, color: '#334155' }}>
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: 14,
              border: '1px solid #CBD5E1',
              marginBottom: 18,
              fontSize: 16,
            }}
          />

          <label style={{ display: 'block', marginBottom: 12, color: '#334155' }}>
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: 14,
              border: '1px solid #CBD5E1',
              marginBottom: 22,
              fontSize: 16,
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: 14,
              background: '#2563EB',
              color: '#fff',
              border: 'none',
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>

        {message && (
          <div
            style={{
              marginTop: 18,
              padding: '14px 16px',
              borderRadius: 14,
              background: '#fee2e2',
              color: '#991b1b',
            }}
          >
            {message}
          </div>
        )}

        <p style={{ marginTop: 26, color: '#475569', textAlign: 'center' }}>
          New here?{' '}
          <Link to="/register" style={{ color: '#2563EB', fontWeight: 700 }}>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
