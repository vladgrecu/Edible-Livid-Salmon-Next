import React, {
  Fragment,
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import PricingPlans from '../components/pricing-plans'
import javascriptData5ef2eac3 from '../utils/data-sources/javascript-data-5ef2eac3'

const Home111 = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="home111-container1">
        <Head>
          <title>{translate.raw('text_H2oiTv')}</title>
          <meta name="description" content={translate.raw('text_kIelwL')} />
          <meta property="og:title" content={translate.raw('text_H2oiTv')} />
          <meta
            property="og:description"
            content={translate.raw('text_kIelwL')}
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/home111`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/home111"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/home111"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/home111"
          />
        </Head>
        <Navigation locale={props?.locale ?? ''}></Navigation>
        <main className="homepage-wrapper">
          <section className="hero-section">
            <div className="hero-video-container">
              <video
                src="https://videos.pexels.com/video-files/34645102/14683780_640_360_30fps.mp4"
                loop="true"
                muted="true"
                poster="https://images.pexels.com/videos/34645102/pictures/preview-0.jpg"
                autoPlay="true"
                playsInline="true"
                className="hero-bg-video"
              ></video>
              <div className="hero-overlay"></div>
            </div>
            <div className="hero-diagonal-split">
              <div className="hero-content-area">
                <div className="hero-text-block">
                  <h1 className="home-hero-title hero-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('HeroTitle_YfrsLr'),
                      }}
                    ></span>
                  </h1>
                  <p className="hero-subtitle home-hero-subtitle">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('HeroSubtitle_J7H_q7'),
                      }}
                    ></span>
                  </p>
                  <div className="hero-cta-group">
                    <a href="#demo">
                      <div className="btn btn-lg btn-primary">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_mvVcIc'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                    <a href="#workflow">
                      <div className="btn btn-lg btn-outline">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_qA6J7F'),
                            }}
                          ></span>
                        </span>
                      </div>
                    </a>
                  </div>
                  <DataProvider
                    resourceDefinition={{
                      type: 'external-data-source',
                      dataSourceId: '5ef2eac3-98df-498a-873f-77bac5d019c0',
                      tableName: 'data',
                      dataSourceType: 'javascript',
                    }}
                    name={'javascript_PEC_data_data'}
                    renderSuccess={(javascript_PEC_data_data) => (
                      <>
                        <Fragment>
                          <Repeater
                            items={javascript_PEC_data_data || []}
                            renderItem={(context_qrowm, index) => (
                              <Fragment key={`${context_qrowm?.id}${index}`}>
                                <h1>
                                  {typeof context_qrowm?.name === 'object' &&
                                  context_qrowm?.name !== null
                                    ? JSON.stringify(context_qrowm?.name)
                                    : context_qrowm?.name}
                                </h1>
                              </Fragment>
                            )}
                          />
                        </Fragment>
                      </>
                    )}
                    params={useMemo(
                      () => ({
                        limit: 20,
                      }),
                      []
                    )}
                    initialData={props.javascript_PEC_data_data_Ob9Uyqjns}
                    persistDataDuringLoading={true}
                    fetchData={useCallback(
                      (params) =>
                        fetch(
                          `/api/javascript-data-5ef2eac3?${new URLSearchParams(
                            params
                          )}`,
                          {
                            headers: {
                              'Content-Type': 'application/json',
                            },
                          }
                        )
                          .then((res) => res.json())
                          .then((response) => response?.data),
                      []
                    )}
                  />
                </div>
              </div>
              <div className="hero-visual-area">
                <div className="hero-dashboard-preview">
                  <img
                    alt="FlowVista Dashboard Interface"
                    src="/screenshot%202026-02-04%20at%2013.45.15-1500w.png"
                    className="hero-preview-img"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="features-section">
            <div className="features-container">
              <div className="features-header">
                <h2 className="section-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_NuBVMu'),
                    }}
                  ></span>
                </h2>
                <p className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_UQ1RQ8'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="features-bento-grid">
                <div className="cell-large bento-cell">
                  <div className="bento-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" rx="2" width="8" height="8"></rect>
                        <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                        <rect x="13" y="13" rx="2" width="8" height="8"></rect>
                      </g>
                    </svg>
                  </div>
                  <h3 className="section-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_6OaTa2'),
                      }}
                    ></span>
                  </h3>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_BWjh57'),
                      }}
                    ></span>
                  </p>
                </div>
                <div className="cell-medium bento-cell">
                  <div className="bento-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="section-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_Uhnpsi'),
                      }}
                    ></span>
                  </h3>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_d9HSKv'),
                      }}
                    ></span>
                  </p>
                </div>
                <div className="cell-small bento-cell">
                  <div className="bento-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                        <path d="m19 9l-5 5l-4-4l-3 3"></path>
                      </g>
                    </svg>
                  </div>
                  <h4 className="section-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_tHENe9'),
                      }}
                    ></span>
                  </h4>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_RLYUuu'),
                      }}
                    ></span>
                  </p>
                </div>
                <div className="cell-small bento-cell">
                  <div className="bento-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10 6h8m-6 10h6M3 3v16a2 2 0 0 0 2 2h16M8 11h7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="section-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_qe_O0W'),
                      }}
                    ></span>
                  </h4>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_ZNZped'),
                      }}
                    ></span>
                  </p>
                </div>
                <div className="cell-medium bento-cell">
                  <div className="bento-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle r="10" cx="12" cy="12"></circle>
                        <circle r="1" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                  </div>
                  <h3 className="section-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_Kj3xCZ'),
                      }}
                    ></span>
                  </h3>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_iXF-1p'),
                      }}
                    ></span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="dashboard-section">
            <div className="dashboard-tabs-layout">
              <div className="dashboard-tabs-nav">
                <button data-target="dash-1" className="tab-trigger active">
                  <span className="home111-thq-tab-label-elm1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('TabLabel_DQOwd_'),
                      }}
                    ></span>
                  </span>
                  <span className="home111-thq-tab-desc-elm1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('TabDesc_s7onln'),
                      }}
                    ></span>
                  </span>
                </button>
                <button data-target="dash-2" className="tab-trigger">
                  <span className="home111-thq-tab-label-elm2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('TabLabel_v7StcM'),
                      }}
                    ></span>
                  </span>
                  <span className="home111-thq-tab-desc-elm2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('TabDesc_JAM_uy'),
                      }}
                    ></span>
                  </span>
                </button>
                <button data-target="dash-3" className="tab-trigger">
                  <span className="home111-thq-tab-label-elm3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('TabLabel_pBOuaM'),
                      }}
                    ></span>
                  </span>
                  <span className="home111-thq-tab-desc-elm3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('TabDesc_gUzLvI'),
                      }}
                    ></span>
                  </span>
                </button>
              </div>
              <div className="dashboard-tabs-content">
                <div id="dash-1" className="active tab-panel">
                  <img
                    alt="Intake Interface"
                    src="https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="dashboard-img"
                  />
                </div>
                <div id="dash-2" className="tab-panel">
                  <img
                    alt="Monitoring Interface"
                    src="https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="dashboard-img"
                  />
                </div>
                <div id="dash-3" className="tab-panel">
                  <img
                    alt="Reporting Interface"
                    src="https://images.pexels.com/photos/17279853/pexels-photo-17279853.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="dashboard-img"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="integrations-section">
            <div className="integrations-container">
              <div className="integrations-header">
                <h2 className="section-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_qN_MNx'),
                    }}
                  ></span>
                </h2>
                <p className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_pDz0M4'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="integrations-bento">
                <div className="main-cell int-cell">
                  <div className="int-content">
                    <h3 className="section-title">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionTitle_e6fpxO'),
                        }}
                      ></span>
                    </h3>
                    <p className="section-content">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_PPczzd'),
                        }}
                      ></span>
                    </p>
                    <div className="int-tags">
                      <span className="int-tag">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('IntTag_76VEzC'),
                          }}
                        ></span>
                      </span>
                      <span className="int-tag">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('IntTag_zYG1eT'),
                          }}
                        ></span>
                      </span>
                      <span className="int-tag">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('IntTag_wWlofD'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="logo-cell int-cell">
                  <div className="logo-grid">
                    <div className="logo-item">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Gk7r9K'),
                          }}
                        ></span>
                      </span>
                    </div>
                    <div className="logo-item">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_06pZlf'),
                          }}
                        ></span>
                      </span>
                    </div>
                    <div className="logo-item">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_HaeLlv'),
                          }}
                        ></span>
                      </span>
                    </div>
                    <div className="logo-item">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_PArxnu'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="note-cell int-cell">
                  <h4 className="section-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_OhlxZ-'),
                      }}
                    ></span>
                  </h4>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_rDRjUB'),
                      }}
                    ></span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="stats-section">
            <div className="stats-bento-layout">
              <div className="stats-cell-wide">
                <div className="stats-visual-bg">
                  <img
                    alt="Data background"
                    src="https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="stats-img-bg"
                  />
                </div>
                <div className="stats-content">
                  <h2 className="section-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_9cTdc3'),
                      }}
                    ></span>
                  </h2>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_TPlwzj'),
                      }}
                    ></span>
                  </p>
                  <div className="stats-main-number">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_dfIBIm'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <p className="section-subtitle">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_j0eRIi'),
                      }}
                    ></span>
                  </p>
                </div>
              </div>
              <div className="stats-cell-narrow">
                <div className="stat-item">
                  <div className="stat-value">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_eLepJ3'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="stat-label">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_hxlhlk'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="stats-cell-narrow">
                <div className="stat-item">
                  <div className="stat-value">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_foW5F8'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="stat-label">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_K1mbQM'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="testimonials-section">
            <div className="testimonials-carousel-wrapper">
              <h2 className="section-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionTitle_iPYGtm'),
                  }}
                ></span>
              </h2>
              <div id="testimonialSlider" className="testimonials-container">
                <div className="testimonial-card">
                  <div className="quote-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_1zovKw'),
                      }}
                    ></span>
                  </p>
                  <div className="testimonial-author">
                    <span className="author-name">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('AuthorName_jN-CBR'),
                        }}
                      ></span>
                    </span>
                    <span className="author-role">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('AuthorRole_PbeR0l'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="quote-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_Zp30ke'),
                      }}
                    ></span>
                  </p>
                  <div className="testimonial-author">
                    <span className="author-name">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('AuthorName_-qbVsg'),
                        }}
                      ></span>
                    </span>
                    <span className="author-role">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('AuthorRole_-M085e'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="quote-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_blzSYL'),
                      }}
                    ></span>
                  </p>
                  <div className="testimonial-author">
                    <span className="author-name">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('AuthorName_bBetXm'),
                        }}
                      ></span>
                    </span>
                    <span className="author-role">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('AuthorRole_ij1s7w'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="carousel-controls">
                <button id="prevBtn" className="carousel-btn prev">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 12H5m7 7l-7-7l7-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <button id="nextBtn" className="carousel-btn next">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-7-7l7 7l-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </section>
          <section className="cta-section">
            <div className="cta-bento-grid">
              <div className="cta-cell-main">
                <h2 className="section-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_HVVgU8'),
                    }}
                  ></span>
                </h2>
                <p className="section-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_6nnd2f'),
                    }}
                  ></span>
                </p>
                <form
                  action="/submit"
                  method="POST"
                  data-form-id="2b6daf20-e50b-4b79-b6f8-f781e4ef060a"
                  className="cta-form"
                >
                  <div className="form-group">
                    <input
                      type="email"
                      id="thq_textinput_g3vS"
                      name="textinput"
                      required="true"
                      placeholder="Enter your work email"
                      data-form-field-id="thq_textinput_g3vS"
                      className="form-input"
                    />
                    <button
                      id="thq_button_KKji"
                      name="button"
                      type="submit"
                      data-form-field-id="thq_button_KKji"
                      className="btn btn-accent"
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Btn_cYeLDM'),
                        }}
                      ></span>
                    </button>
                  </div>
                  <p className="form-disclaimer">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('FormDisclaimer_BlAh5o'),
                      }}
                    ></span>
                  </p>
                </form>
              </div>
              <div className="cta-cell-links">
                <h3 className="section-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_o-Oqhc'),
                    }}
                  ></span>
                </h3>
                <nav className="cta-nav">
                  <a href="#">
                    <div className="btn-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_NWHUIS'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="btn-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_bUVbOP'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="btn-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_UXodNz'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="btn-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_P-T0-S'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="cta-cell-contact">
                <h3 className="section-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_hTjkX1'),
                    }}
                  ></span>
                </h3>
                <p className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_j3caVq'),
                    }}
                  ></span>
                </p>
                <a href="mailto:contact@flowvista.com?subject=">
                  <div className="btn btn-sm btn-outline">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_wagCjg'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </main>
        <div className="home111-container2">
          <div className="home111-container3">
            <Script
              html={`<style>
        @keyframes fadeIn {from {opacity: 0;
transform: scale(1.02);}
to {opacity: 1;
transform: scale(1);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home111-container4">
          <div className="home111-container5">
            <Script
              html={`<script defer data-name="flowvista-interactions">
(function(){
  // Dashboard Tab Logic
  const tabTriggers = document.querySelectorAll('.tab-trigger');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const targetId = trigger.getAttribute('data-target');
      
      tabTriggers.forEach(t => t.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      
      trigger.classList.add('active');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Testimonial Carousel Logic
  const slider = document.getElementById('testimonialSlider');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  let currentIndex = 0;

  function updateSlider() {
    const cards = document.querySelectorAll('.testimonial-card');
    const cardWidth = cards[0].offsetWidth + 32; // width + gap
    slider.style.transform = \`translateX(-\${currentIndex * cardWidth}px)\`;
  }

  nextBtn.addEventListener('click', () => {
    const cards = document.querySelectorAll('.testimonial-card');
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateSlider();
    } else {
      currentIndex = 0;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    const cards = document.querySelectorAll('.testimonial-card');
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    } else {
      currentIndex = cards.length - 1;
      updateSlider();
    }
  });

  // Responsive slider adjustment
  window.addEventListener('resize', updateSlider);

  // Simple form feedback (UX enhancement)
  const ctaForm = document.querySelector('.cta-form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      const emailInput = ctaForm.querySelector('.form-input');
      if (emailInput.checkValidity()) {
        // Native submission continues, but we could show a loading state here
        const btn = ctaForm.querySelector('.btn');
        btn.textContent = 'Processing...';
        btn.disabled = true;
      }
    });
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer locale={props?.locale ?? ''}></Footer>
        <PricingPlans locale={props?.locale ?? ''}></PricingPlans>
      </div>
      <style jsx>
        {`
          .home111-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home111-thq-tab-label-elm1 {
            display: block;
            font-size: var(--font-size-xl);
            font-family: var(--font-family-heading);
            font-weight: bold;
            margin-bottom: var(--spacing-xs);
            text-transform: uppercase;
          }
          .home111-thq-tab-desc-elm1 {
            opacity: 0.7;
            font-size: var(--font-size-sm);
          }
          .home111-thq-tab-label-elm2 {
            display: block;
            font-size: var(--font-size-xl);
            font-family: var(--font-family-heading);
            font-weight: bold;
            margin-bottom: var(--spacing-xs);
            text-transform: uppercase;
          }
          .home111-thq-tab-desc-elm2 {
            opacity: 0.7;
            font-size: var(--font-size-sm);
          }
          .home111-thq-tab-label-elm3 {
            display: block;
            font-size: var(--font-size-xl);
            font-family: var(--font-family-heading);
            font-weight: bold;
            margin-bottom: var(--spacing-xs);
            text-transform: uppercase;
          }
          .home111-thq-tab-desc-elm3 {
            opacity: 0.7;
            font-size: var(--font-size-sm);
          }
          .home111-container2 {
            display: none;
          }
          .home111-container3 {
            display: contents;
          }
          .home111-container4 {
            display: none;
          }
          .home111-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home111

export async function getStaticProps(context) {
  try {
    const messages = (await import('/locales/' + context.locale + '.json'))
      .default
    const [javascript_PEC_data_data_Ob9Uyqjns] = await Promise.all([
      javascriptData5ef2eac3
        .fetchData({
          limit: 20,
        })
        .catch((error) => {
          console.error(
            'Error fetching javascript_PEC_data_data_Ob9Uyqjns:',
            error
          )
          return []
        }),
    ])
    return {
      props: {
        messages,
        javascript_PEC_data_data_Ob9Uyqjns: javascript_PEC_data_data_Ob9Uyqjns,
      },
      revalidate: 1,
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return {
      props: {},
    }
  }
}
