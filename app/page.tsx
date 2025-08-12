export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        padding: '3rem'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '2rem',
          color: '#333',
          borderBottom: '3px solid #0066cc',
          paddingBottom: '1rem'
        }}>
          株式会社団野ソフトウェア
        </h1>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '1.5rem',
            color: '#555'
          }}>
            会社概要
          </h2>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 0', fontWeight: 'bold', width: '30%', color: '#666' }}>商号</td>
                <td style={{ padding: '12px 0' }}>株式会社団野ソフトウェア</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 0', fontWeight: 'bold', color: '#666' }}>商号カナ</td>
                <td style={{ padding: '12px 0' }}>ダンノソフトウェア</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 0', fontWeight: 'bold', color: '#666' }}>法人種別</td>
                <td style={{ padding: '12px 0' }}>株式会社</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 0', fontWeight: 'bold', color: '#666' }}>法人番号</td>
                <td style={{ padding: '12px 0' }}>6120001264667</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 0', fontWeight: 'bold', color: '#666' }}>会社法人等番号</td>
                <td style={{ padding: '12px 0' }}>120001264667</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 0', fontWeight: 'bold', verticalAlign: 'top', color: '#666' }}>本店所在地</td>
                <td style={{ padding: '12px 0', lineHeight: '1.6' }}>
                  〒530-0001<br />
                  大阪府大阪市北区梅田１丁目２番２号<br />
                  大阪駅前第２ビル１２－１２
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div style={{ 
          textAlign: 'right', 
          color: '#999', 
          fontSize: '0.9rem',
          marginTop: '2rem',
          paddingTop: '1rem',
          borderTop: '1px solid #eee'
        }}>
          更新日：2024-05-08
        </div>
      </div>
    </main>
  )
}