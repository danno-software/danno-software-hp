'use client'

import { useState, useEffect } from 'react'

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  })
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      // Update active section based on scroll position
      const sections = ['home', 'achievements', 'services', 'skills', 'cases', 'testimonials', 'pricing', 'faq', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Gmail API integration will be added later
    alert('お問い合わせありがとうございます。24時間以内にご返信させていただきます。')
    setFormData({ name: '', company: '', email: '', message: '' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {/* Fixed Navigation */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: isScrolled ? 'rgba(30, 60, 114, 0.98)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        zIndex: 1000,
        boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none'
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: 'white',
            cursor: 'pointer'
          }}
          onClick={() => scrollToSection('home')}
          >
            団野ソフトウェア
          </div>
          
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {[
              { id: 'services', label: 'サービス' },
              { id: 'cases', label: '導入事例' },
              { id: 'pricing', label: '料金' },
              { id: 'contact', label: 'お問い合わせ' }
            ].map(item => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  opacity: activeSection === item.id ? 1 : 0.8,
                  borderBottom: activeSection === item.id ? '2px solid white' : 'none',
                  paddingBottom: '2px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = activeSection === item.id ? '1' : '0.8'}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              style={{
                padding: '0.5rem 1.5rem',
                background: '#ff6b6b',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              無料相談
            </button>
          </div>
        </nav>
      </header>

      <main style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}>
        {/* ヒーローセクション */}
        <section id="home" style={{
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          color: 'white',
          padding: '8rem 2rem 5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated background elements */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '100px',
            height: '100px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: '150px',
            height: '150px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite'
          }} />
          
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '25px',
              marginBottom: '2rem',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              🏆 AWS・Google Cloud・Azure認定パートナー
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              animation: 'fadeInUp 0.8s ease-out'
            }}>
              ビジネスの成長を加速させる<br />
              <span style={{ color: '#ffd93d' }}>クラウドインフラ構築</span>のプロフェッショナル
            </h1>
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              marginBottom: '2rem',
              opacity: '0.95',
              maxWidth: '800px',
              margin: '0 auto 2rem',
              animation: 'fadeInUp 0.8s ease-out 0.2s',
              animationFillMode: 'both'
            }}>
              7年の実績と20以上の専門資格を持つエンジニアが<br />
              御社のDXを成功に導きます
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'fadeInUp 0.8s ease-out 0.4s',
              animationFillMode: 'both'
            }}>
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
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.3)'
              }}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
              >
                無料相談を申し込む
              </a>
              
              <a href="#cases" style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                background: 'transparent',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '600',
                border: '2px solid white',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white'
                e.currentTarget.style.color = '#1e3c72'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'white'
              }}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('cases')
              }}
              >
                導入事例を見る
              </a>
            </div>
          </div>
        </section>

        {/* 実績・信頼性セクション */}
        <section id="achievements" style={{
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
              {[
                { number: '7年', label: 'エンジニア実績', icon: '💼' },
                { number: '20+', label: '保有資格数', icon: '🏆' },
                { number: '50+', label: '導入実績', icon: '🚀' },
                { number: '99.9%', label: '稼働率', icon: '📊' }
              ].map((item, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  padding: '2rem',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#1e3c72',
                    marginBottom: '0.5rem'
                  }}>{item.number}</div>
                  <p style={{ color: '#666', fontWeight: '600' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サービス内容 */}
        <section id="services" style={{
          padding: '4rem 2rem',
          backgroundColor: '#f8f9fa'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              textAlign: 'center',
              marginBottom: '1rem',
              color: '#333'
            }}>提供サービス</h2>
            <p style={{
              textAlign: 'center',
              color: '#666',
              marginBottom: '3rem',
              fontSize: '1.1rem'
            }}>
              お客様のビジネスニーズに合わせた最適なソリューションをご提供します
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  icon: '☁️',
                  title: 'クラウドインフラ構築',
                  description: 'AWS、Google Cloud、Azureを活用した最適なインフラ設計・構築を行います。',
                  features: ['マルチクラウド対応', '高可用性設計', 'セキュリティ最適化', 'コスト最適化'],
                  color: '#1e3c72'
                },
                {
                  icon: '⚡',
                  title: '自動化・効率化',
                  description: 'IaCやCI/CDパイプラインの構築により、開発・運用の効率を大幅に改善。',
                  features: ['Terraform/CloudFormation', 'GitHub Actions/GitLab CI', 'Python/Shell自動化', 'ChatOps導入'],
                  color: '#2a5298'
                },
                {
                  icon: '🛡️',
                  title: '運用・保守サポート',
                  description: '24時間365日の監視体制構築から、トラブルシューティングまで幅広くサポート。',
                  features: ['監視システム構築', '障害対応', 'パフォーマンス改善', 'セキュリティ監査'],
                  color: '#1e3c72'
                }
              ].map((service, index) => (
                <div key={index} style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '10px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)'
                }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '100px',
                    height: '100px',
                    background: service.color,
                    borderRadius: '50%',
                    opacity: '0.1'
                  }} />
                  
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    color: service.color
                  }}>{service.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {service.description}
                  </p>
                  <ul style={{
                    paddingLeft: '1.5rem',
                    color: '#666',
                    lineHeight: '1.8'
                  }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem' }}>
                        <span style={{ color: service.color, marginRight: '0.5rem' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 専門技術・資格 */}
        <section id="skills" style={{
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
                  color: '#1e3c72',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span>🎯</span> AWS認定資格
                </h3>
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
                  color: '#1e3c72',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span>🌐</span> その他クラウド資格
                </h3>
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
                  color: '#1e3c72',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span>💻</span> 専門技術
                </h3>
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
        <section id="cases" style={{
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
              {[
                {
                  industry: 'EC・小売',
                  company: 'EC事業者様',
                  result: 'インフラコスト40%削減',
                  testimonial: 'オンプレミスからAWSへの移行により、インフラコストを40%削減。自動スケーリングの導入で、セール時のアクセス集中にも安定対応できるようになりました。',
                  metrics: ['コスト40%削減', '可用性99.9%達成', 'デプロイ時間80%短縮']
                },
                {
                  industry: 'IT・ソフトウェア',
                  company: 'SaaS企業様',
                  result: 'デプロイ時間90%短縮',
                  testimonial: 'CI/CDパイプラインの構築により、デプロイ時間を従来の1/10に短縮。開発チームの生産性が大幅に向上し、機能リリースサイクルが加速しました。',
                  metrics: ['リリース頻度10倍', '障害率70%削減', '開発効率200%向上']
                },
                {
                  industry: '製造業',
                  company: '製造業様',
                  result: 'ダウンタイム60%削減',
                  testimonial: 'IoTデータ基盤をGoogle Cloudで構築。リアルタイムデータ分析により、設備の予防保全を実現し、ダウンタイムを60%削減することに成功。',
                  metrics: ['稼働率99.5%', 'メンテナンスコスト50%削減', 'データ処理速度5倍']
                }
              ].map((item, index) => (
                <div key={index} style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '10px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)'
                }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      background: '#1e3c72',
                      color: 'white',
                      padding: '0.3rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      marginRight: '1rem'
                    }}>
                      {item.industry}
                    </div>
                    <div style={{
                      color: '#ff6b6b',
                      fontWeight: 'bold'
                    }}>
                      {item.result}
                    </div>
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.3rem',
                    marginBottom: '1rem',
                    color: '#1e3c72'
                  }}>{item.company}の事例</h3>
                  
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    fontStyle: 'italic'
                  }}>
                    "{item.testimonial}"
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap'
                  }}>
                    {item.metrics.map((metric, i) => (
                      <div key={i} style={{
                        background: '#f8f9fa',
                        padding: '0.5rem 1rem',
                        borderRadius: '5px',
                        fontSize: '0.9rem',
                        color: '#555'
                      }}>
                        ✓ {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* お客様の声 */}
        <section id="testimonials" style={{
          padding: '4rem 2rem',
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          color: 'white'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              textAlign: 'center',
              marginBottom: '3rem'
            }}>お客様の声</h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  name: '田中 様',
                  role: 'IT企業 CTO',
                  comment: '技術力の高さはもちろん、ビジネス視点でのご提案をいただけるのが素晴らしいです。おかげさまで開発効率が大幅に向上しました。'
                },
                {
                  name: '鈴木 様',
                  role: 'スタートアップ CEO',
                  comment: '限られた予算内で最大限の効果を出していただきました。スケーラビリティを考慮した設計で、事業成長に合わせて柔軟に対応できています。'
                },
                {
                  name: '佐藤 様',
                  role: '製造業 情報システム部長',
                  comment: '24時間365日の安定稼働を実現していただきました。トラブル時の迅速な対応にも感謝しています。'
                }
              ].map((testimonial, index) => (
                <div key={index} style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '2rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    opacity: '0.3'
                  }}>"</div>
                  <p style={{
                    marginBottom: '1.5rem',
                    lineHeight: '1.6',
                    fontSize: '1.1rem'
                  }}>
                    {testimonial.comment}
                  </p>
                  <div>
                    <div style={{ fontWeight: 'bold', marginBottom: '0.3rem' }}>
                      {testimonial.name}
                    </div>
                    <div style={{ opacity: '0.8', fontSize: '0.9rem' }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 料金プラン */}
        <section id="pricing" style={{
          padding: '4rem 2rem',
          backgroundColor: 'white'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              textAlign: 'center',
              marginBottom: '1rem',
              color: '#333'
            }}>料金プラン</h2>
            <p style={{
              textAlign: 'center',
              color: '#666',
              marginBottom: '3rem',
              fontSize: '1.1rem'
            }}>
              お客様のニーズに合わせた柔軟な料金体系をご用意しています
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {[
                {
                  name: 'スポットサポート',
                  price: '¥50,000〜',
                  unit: '/回',
                  features: [
                    '単発のご相談・作業',
                    '最短1日から対応',
                    'リモート対応可能',
                    '成果物の納品'
                  ],
                  recommended: false
                },
                {
                  name: '月額サポート',
                  price: '¥200,000〜',
                  unit: '/月',
                  features: [
                    '定期的な保守・運用',
                    '月40時間までの作業',
                    '優先対応',
                    '定期レポート提出'
                  ],
                  recommended: true
                },
                {
                  name: 'プロジェクト型',
                  price: 'お見積もり',
                  unit: '',
                  features: [
                    '大規模構築・移行',
                    '専任チーム体制',
                    'プロジェクト管理',
                    '導入後サポート込み'
                  ],
                  recommended: false
                }
              ].map((plan, index) => (
                <div key={index} style={{
                  background: plan.recommended ? 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' : 'white',
                  color: plan.recommended ? 'white' : '#333',
                  padding: '2rem',
                  borderRadius: '10px',
                  border: plan.recommended ? 'none' : '2px solid #e0e0e0',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  transform: plan.recommended ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = plan.recommended ? 'scale(1.08)' : 'scale(1.03)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = plan.recommended ? 'scale(1.05)' : 'scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                >
                  {plan.recommended && (
                    <div style={{
                      position: 'absolute',
                      top: '-15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#ff6b6b',
                      padding: '0.3rem 1.5rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold'
                    }}>
                      おすすめ
                    </div>
                  )}
                  
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    textAlign: 'center'
                  }}>{plan.name}</h3>
                  
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    {plan.price}
                    <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>{plan.unit}</span>
                  </div>
                  
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    marginTop: '2rem'
                  }}>
                    {plan.features.map((feature, i) => (
                      <li key={i} style={{
                        padding: '0.5rem 0',
                        borderBottom: `1px solid ${plan.recommended ? 'rgba(255,255,255,0.2)' : '#f0f0f0'}`
                      }}>
                        <span style={{ marginRight: '0.5rem', color: plan.recommended ? '#ffd93d' : '#ff6b6b' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => scrollToSection('contact')}
                    style={{
                      width: '100%',
                      marginTop: '2rem',
                      padding: '0.75rem',
                      background: plan.recommended ? 'white' : '#1e3c72',
                      color: plan.recommended ? '#1e3c72' : 'white',
                      border: 'none',
                      borderRadius: '5px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    詳細を問い合わせる
                  </button>
                </div>
              ))}
            </div>

            <div style={{
              background: '#f8f9fa',
              padding: '2rem',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '1rem', color: '#1e3c72' }}>
                🎁 初回限定特典
              </h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                初回ご契約のお客様は、初月料金を<span style={{ color: '#ff6b6b', fontWeight: 'bold' }}>20%割引</span>いたします！
              </p>
              <p style={{ color: '#999', fontSize: '0.9rem' }}>
                ※月額サポートプラン、プロジェクト型が対象です
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{
          padding: '4rem 2rem',
          backgroundColor: '#f8f9fa'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              textAlign: 'center',
              marginBottom: '3rem',
              color: '#333'
            }}>よくあるご質問</h2>

            {[
              {
                q: '相談は無料ですか？',
                a: 'はい、初回のご相談は完全無料です。お客様の課題やご要望をお聞きした上で、最適なソリューションをご提案させていただきます。'
              },
              {
                q: 'どのクラウドサービスに対応していますか？',
                a: 'AWS、Google Cloud、Microsoft Azureの3大クラウドに対応しています。マルチクラウド環境の構築も可能です。'
              },
              {
                q: '地方からでも依頼できますか？',
                a: 'もちろん可能です。リモートでの対応を基本としているため、全国どこからでもご依頼いただけます。'
              },
              {
                q: '小規模な案件でも対応してもらえますか？',
                a: 'はい、規模に関わらず対応いたします。スタートアップから大企業まで、幅広いお客様をサポートしています。'
              },
              {
                q: 'セキュリティ対策は大丈夫ですか？',
                a: '各クラウドのセキュリティベストプラクティスに基づいた設計を行います。また、定期的なセキュリティ監査も実施可能です。'
              }
            ].map((item, index) => (
              <div key={index} style={{
                background: 'white',
                marginBottom: '1rem',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
              }}>
                <details>
                  <summary style={{
                    padding: '1.5rem',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    color: '#333',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    userSelect: 'none'
                  }}>
                    {item.q}
                    <span style={{ fontSize: '1.5rem', color: '#1e3c72' }}>+</span>
                  </summary>
                  <div style={{
                    padding: '0 1.5rem 1.5rem',
                    color: '#666',
                    lineHeight: '1.6'
                  }}>
                    {item.a}
                  </div>
                </details>
              </div>
            ))}
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
              まずはお気軽にご相談ください。24時間以内にご返信いたします。
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
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#1e3c72'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
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
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#1e3c72'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
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
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#1e3c72'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
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
                    resize: 'vertical',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#1e3c72'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
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
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ff5252'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ff6b6b'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.3)'
                }}
              >
                送信する
              </button>
            </form>

            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: '#f0f8ff',
              borderRadius: '10px',
              border: '1px solid #d0e8ff'
            }}>
              <h4 style={{ marginBottom: '0.5rem', color: '#1e3c72' }}>
                📞 お急ぎの場合
              </h4>
              <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                平日 9:00-18:00
              </p>
              <p style={{ color: '#1e3c72', fontWeight: 'bold' }}>
                050-1234-5678
              </p>
            </div>
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
                  <td style={{ padding: '1rem', fontWeight: '600', color: '#666' }}>設立</td>
                  <td style={{ padding: '1rem' }}>2024年</td>
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
          padding: '3rem 2rem 2rem',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <div>
                <h3 style={{ marginBottom: '1rem' }}>株式会社団野ソフトウェア</h3>
                <p style={{ opacity: '0.8', lineHeight: '1.6' }}>
                  クラウドインフラ構築のプロフェッショナルとして、
                  お客様のビジネス成長を技術で支えます。
                </p>
              </div>
              
              <div>
                <h4 style={{ marginBottom: '1rem' }}>サービス</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }} 
                       style={{ color: 'white', textDecoration: 'none', opacity: '0.8' }}>
                      クラウドインフラ構築
                    </a>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}
                       style={{ color: 'white', textDecoration: 'none', opacity: '0.8' }}>
                      自動化・効率化
                    </a>
                  </li>
                  <li>
                    <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}
                       style={{ color: 'white', textDecoration: 'none', opacity: '0.8' }}>
                      運用・保守サポート
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ marginBottom: '1rem' }}>お問い合わせ</h4>
                <p style={{ opacity: '0.8', marginBottom: '0.5rem' }}>
                  📧 info@danno-software.com
                </p>
                <p style={{ opacity: '0.8', marginBottom: '0.5rem' }}>
                  📞 050-1234-5678
                </p>
                <p style={{ opacity: '0.8' }}>
                  平日 9:00-18:00
                </p>
              </div>
            </div>
            
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.2)',
              paddingTop: '2rem',
              textAlign: 'center'
            }}>
              <p style={{ marginBottom: '0.5rem' }}>
                &copy; 2024 株式会社団野ソフトウェア All Rights Reserved.
              </p>
              <p style={{ fontSize: '0.9rem', opacity: '0.6' }}>
                Empowering Your Business with Cloud Technology
              </p>
            </div>
          </div>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        details summary::-webkit-details-marker {
          display: none;
        }

        details[open] summary span {
          transform: rotate(45deg);
        }

        details summary span {
          transition: transform 0.3s ease;
        }
      ` }} />
    </>
  )
}