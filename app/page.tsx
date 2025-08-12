'use client'

import { useState } from 'react'

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Gmail API integration will be added later
    alert('お問い合わせありがとうございます。後ほどご連絡させていただきます。')
    setFormData({ name: '', company: '', email: '', message: '' })
  }

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* ヒーローセクション */}
      <section style={{
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        color: 'white',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            ビジネスの成長を加速させる<br />
            クラウドインフラ構築のプロフェッショナル
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            marginBottom: '2rem',
            opacity: '0.95',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            AWS・Google Cloud・Azureの豊富な経験と実績で、<br />
            最適なクラウドソリューションをご提供します
          </p>
          <a href="#contact" style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            background: '#ff6b6b',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            無料相談を申し込む
          </a>
        </div>
      </section>

      {/* 実績・信頼性セクション */}
      <section style={{
        padding: '4rem 2rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: '#1e3c72',
                marginBottom: '0.5rem'
              }}>7年</div>
              <p style={{ color: '#666' }}>エンジニア実績</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: '#1e3c72',
                marginBottom: '0.5rem'
              }}>20+</div>
              <p style={{ color: '#666' }}>保有資格数</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: '#1e3c72',
                marginBottom: '0.5rem'
              }}>3大</div>
              <p style={{ color: '#666' }}>クラウド対応</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: '#1e3c72',
                marginBottom: '0.5rem'
              }}>100%</div>
              <p style={{ color: '#666' }}>顧客満足度</p>
            </div>
          </div>
        </div>
      </section>

      {/* サービス内容 */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#333'
          }}>提供サービス</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: '#1e3c72'
              }}>クラウドインフラ構築</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                AWS、Google Cloud、Azureを活用した最適なインフラ設計・構築を行います。
                コストパフォーマンスと拡張性を重視した提案を実施。
              </p>
              <ul style={{
                marginTop: '1rem',
                paddingLeft: '1.5rem',
                color: '#666',
                lineHeight: '1.8'
              }}>
                <li>マルチクラウド対応</li>
                <li>高可用性設計</li>
                <li>セキュリティ最適化</li>
              </ul>
            </div>

            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: '#1e3c72'
              }}>自動化・効率化</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                IaCやCI/CDパイプラインの構築により、開発・運用の効率を大幅に改善。
                人的ミスを削減し、迅速なデプロイを実現します。
              </p>
              <ul style={{
                marginTop: '1rem',
                paddingLeft: '1.5rem',
                color: '#666',
                lineHeight: '1.8'
              }}>
                <li>Terraform/CloudFormation</li>
                <li>GitHub Actions/GitLab CI</li>
                <li>Python/Shell自動化</li>
              </ul>
            </div>

            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: '#1e3c72'
              }}>運用・保守サポート</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                24時間365日の監視体制構築から、トラブルシューティング、
                パフォーマンスチューニングまで幅広くサポートします。
              </p>
              <ul style={{
                marginTop: '1rem',
                paddingLeft: '1.5rem',
                color: '#666',
                lineHeight: '1.8'
              }}>
                <li>監視システム構築</li>
                <li>障害対応</li>
                <li>コスト最適化</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 専門技術・資格 */}
      <section style={{
        padding: '4rem 2rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#333'
          }}>専門技術と資格</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem',
                color: '#1e3c72'
              }}>AWS認定資格</h3>
              <ul style={{
                paddingLeft: '1.5rem',
                color: '#666',
                lineHeight: '1.8'
              }}>
                <li>Solutions Architect Professional</li>
                <li>DevOps Engineer Professional</li>
                <li>Developer Associate</li>
                <li>Cloud Practitioner</li>
              </ul>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem',
                color: '#1e3c72'
              }}>その他クラウド資格</h3>
              <ul style={{
                paddingLeft: '1.5rem',
                color: '#666',
                lineHeight: '1.8'
              }}>
                <li>Google Cloud Professional Architect</li>
                <li>Azure Fundamentals</li>
                <li>Azure AI Fundamentals</li>
              </ul>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem',
                color: '#1e3c72'
              }}>専門技術</h3>
              <ul style={{
                paddingLeft: '1.5rem',
                color: '#666',
                lineHeight: '1.8'
              }}>
                <li>LinuC Level-1/2/3</li>
                <li>Python認定（基礎/データ分析）</li>
                <li>ORACLE MASTER Silver DBA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声・事例 */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#333'
          }}>導入事例</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem',
                color: '#1e3c72'
              }}>EC事業者様の事例</h3>
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                「オンプレミスからAWSへの移行により、インフラコストを40%削減。
                自動スケーリングの導入で、セール時のアクセス集中にも安定対応できるようになりました。」
              </p>
              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid #eee',
                color: '#999',
                fontSize: '0.9rem'
              }}>
                業種：EC・小売 | 規模：中規模
              </div>
            </div>

            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem',
                color: '#1e3c72'
              }}>SaaS企業様の事例</h3>
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                「CI/CDパイプラインの構築により、デプロイ時間を従来の1/10に短縮。
                開発チームの生産性が大幅に向上し、機能リリースサイクルが加速しました。」
              </p>
              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid #eee',
                color: '#999',
                fontSize: '0.9rem'
              }}>
                業種：IT・ソフトウェア | 規模：スタートアップ
              </div>
            </div>

            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem',
                color: '#1e3c72'
              }}>製造業様の事例</h3>
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                「IoTデータ基盤をGoogle Cloudで構築。リアルタイムデータ分析により、
                設備の予防保全を実現し、ダウンタイムを60%削減することに成功。」
              </p>
              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid #eee',
                color: '#999',
                fontSize: '0.9rem'
              }}>
                業種：製造業 | 規模：大企業
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section id="contact" style={{
        padding: '4rem 2rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '1rem',
            color: '#333'
          }}>お問い合わせ</h2>
          <p style={{
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#666'
          }}>
            まずはお気軽にご相談ください。無料でヒアリングいたします。
          </p>

          <form onSubmit={handleSubmit} style={{
            background: '#f8f9fa',
            padding: '2rem',
            borderRadius: '10px'
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#333'
              }}>
                お名前 <span style={{ color: '#ff6b6b' }}>*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#333'
              }}>
                会社名
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#333'
              }}>
                メールアドレス <span style={{ color: '#ff6b6b' }}>*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#333'
              }}>
                お問い合わせ内容 <span style={{ color: '#ff6b6b' }}>*</span>
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                background: '#ff6b6b',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#ff5252'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#ff6b6b'}
            >
              送信する
            </button>
          </form>
        </div>
      </section>

      {/* 会社情報 */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '2rem',
            color: '#333',
            textAlign: 'center'
          }}>会社概要</h2>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '1rem', fontWeight: '600', width: '30%', color: '#666' }}>商号</td>
                <td style={{ padding: '1rem' }}>株式会社団野ソフトウェア</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '1rem', fontWeight: '600', color: '#666' }}>代表者</td>
                <td style={{ padding: '1rem' }}>代表取締役</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '1rem', fontWeight: '600', color: '#666' }}>法人番号</td>
                <td style={{ padding: '1rem' }}>6120001264667</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '1rem', fontWeight: '600', verticalAlign: 'top', color: '#666' }}>本店所在地</td>
                <td style={{ padding: '1rem', lineHeight: '1.6' }}>
                  〒530-0001<br />
                  大阪府大阪市北区梅田１丁目２番２号<br />
                  大阪駅前第２ビル１２－１２
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '1rem', fontWeight: '600', color: '#666' }}>事業内容</td>
                <td style={{ padding: '1rem' }}>
                  クラウドインフラ構築・運用<br />
                  システム開発・保守<br />
                  ITコンサルティング
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* フッター */}
      <footer style={{
        background: '#1e3c72',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <p style={{ marginBottom: '0.5rem' }}>
          &copy; 2024 株式会社団野ソフトウェア All Rights Reserved.
        </p>
        <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>
          お問い合わせ：info@danno-software.com
        </p>
      </footer>
    </main>
  )
}