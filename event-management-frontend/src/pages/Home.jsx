import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '60px 24px',
        background: '#F8FAFC',
        color: '#0F172A',
      }}
    >
      <section
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: 40,
          alignItems: 'center',
        }}
      >
        <div>
          <p
            style={{
              display: 'inline-block',
              marginBottom: 16,
              padding: '8px 16px',
              borderRadius: 999,
              background: '#E0E7FF',
              color: '#1D4ED8',
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Welcome to Event Management
          </p>
          <h1
            style={{
              fontSize: '3rem',
              margin: '0 0 24px',
              lineHeight: 1.05,
              color: '#0F172A',
            }}
          >
            Discover live shows, conferences, and unforgettable experiences.
          </h1>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 32, maxWidth: 620 }}>
            Browse the latest events, claim tickets, and manage your bookings from one polished dashboard.
            Register now to unlock exclusive access and verify your account with OTP.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link
              to="/register"
              style={{
                padding: '14px 26px',
                borderRadius: 12,
                background: '#2563EB',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              Register
            </Link>
            <Link
              to="/events"
              style={{
                padding: '14px 26px',
                borderRadius: 12,
                background: '#E2E8F0',
                color: '#1E293B',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              Explore Events
            </Link>
          </div>
        </div>
        <div
          style={{
            borderRadius: 24,
            padding: 32,
            background: '#fff',
            boxShadow: '0 24px 80px rgba(15, 23, 42, 0.08)',
          }}
        >
          <h2 style={{ marginTop: 0, color: '#1E293B' }}>Upcoming Highlights</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 16 }}>
            <li style={{ padding: 18, borderRadius: 18, background: '#F8FAFC' }}>
              <strong>Summer Music Festival</strong>
              <p style={{ margin: '8px 0 0', color: '#475569' }}>Live bands, food trucks, and VIP experiences.</p>
            </li>
            <li style={{ padding: 18, borderRadius: 18, background: '#F8FAFC' }}>
              <strong>Tech Leadership Summit</strong>
              <p style={{ margin: '8px 0 0', color: '#475569' }}>Network with industry leaders and founders.</p>
            </li>
            <li style={{ padding: 18, borderRadius: 18, background: '#F8FAFC' }}>
              <strong>Weekend Wellness Retreat</strong>
              <p style={{ margin: '8px 0 0', color: '#475569' }}>Yoga, meditation, and mindful events.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
