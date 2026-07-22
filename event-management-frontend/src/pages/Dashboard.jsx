export default function Dashboard() {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 120px)',
        padding: '40px 24px',
        background: '#F8FAFC',
        color: '#0F172A',
      }}
    >
      <section
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          background: '#fff',
          borderRadius: 24,
          padding: 32,
          boxShadow: '0 24px 80px rgba(15, 23, 42, 0.08)',
        }}
      >
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Welcome to your Dashboard</h1>
          <p style={{ marginTop: 12, color: '#475569', maxWidth: 680 }}>
            Manage your events, tickets, and profile from one place. Your event summary and booking details are right here.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
          }}
        >
          <div
            style={cardStyle}
          >
            <h3 style={cardTitle}>Upcoming Events</h3>
            <p style={cardText}>View events you are interested in or have booked.</p>
          </div>

          <div
            style={cardStyle}
          >
            <h3 style={cardTitle}>My Tickets</h3>
            <p style={cardText}>Check your purchased tickets and booking details.</p>
          </div>

          <div
            style={cardStyle}
          >
            <h3 style={cardTitle}>Profile</h3>
            <p style={cardText}>Update your personal information and notification settings.</p>
          </div>
        </div>

        <div style={{ marginTop: 32, textAlign: 'right' }}>
          <button
            style={{
              padding: '14px 26px',
              borderRadius: 14,
              border: 'none',
              background: '#2563EB',
              color: '#fff',
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </div>
      </section>
    </div>
  )
}

const cardStyle = {
  padding: 24,
  borderRadius: 20,
  border: '1px solid #E2E8F0',
  background: '#F8FAFC',
  minHeight: 180,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

const cardTitle = {
  margin: 0,
  color: '#0F172A',
}

const cardText = {
  margin: '16px 0 0',
  color: '#475569',
  lineHeight: 1.7,
}
