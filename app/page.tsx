export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        Danno Software
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#666', textAlign: 'center' }}>
        Welcome to our homepage
      </p>
      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About Us</h2>
        <p style={{ maxWidth: '600px', lineHeight: '1.6' }}>
          We create innovative software solutions that help businesses 
          and individuals achieve their goals through technology.
        </p>
      </div>
    </main>
  )
}