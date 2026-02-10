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
import FeaturesSection from '../components/features-section'
import IntegrationsContainer from '../components/integrations-container'
import StatsSection from '../components/stats-section'
import CtaSection from '../components/cta-section'
import Footer from '../components/footer'
import PricingPlans from '../components/pricing-plans'
import javascriptData5ef2eac3 from '../utils/data-sources/javascript-data-5ef2eac3'

const Home11 = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="home11-container1">
        <Head>
          <title>{translate.raw('text_JYuJr7')}</title>
          <meta name="description" content={translate.raw('text_Fiphws')} />
          <meta property="og:title" content={translate.raw('text_JYuJr7')} />
          <meta
            property="og:description"
            content={translate.raw('text_Fiphws')}
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/home11`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/home11"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/home11"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/home11"
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
                        __html: translate.raw('HeroTitle_rUBVoj'),
                      }}
                    ></span>
                  </h1>
                  <p className="hero-subtitle home-hero-subtitle">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('HeroSubtitle_DOGanU'),
                      }}
                    ></span>
                  </p>
                  <div className="hero-cta-group">
                    <a href="#demo">
                      <div className="btn btn-lg btn-primary">
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_WUUJbu'),
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
                              __html: translate.raw('text_4jfPs1'),
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
                    initialData={props.javascript_PEC_data_data_g6ctNEAeX}
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
          <FeaturesSection
            sectionTitle={
              <Fragment>
                <span className="home11-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_vaMwSk'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle1={
              <Fragment>
                <span className="home11-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kl87qZ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle2={
              <Fragment>
                <span className="home11-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_yqIQcM'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle3={
              <Fragment>
                <span className="home11-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_nGakSf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle4={
              <Fragment>
                <span className="home11-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rwcHxG'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle5={
              <Fragment>
                <span className="home11-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_j0jm72'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home11-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fgO-XW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent1={
              <Fragment>
                <span className="home11-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_SaZreB'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent2={
              <Fragment>
                <span className="home11-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7EvkUm'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent3={
              <Fragment>
                <span className="home11-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_xnOIE0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent4={
              <Fragment>
                <span className="home11-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_eZL3xN'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionSubtitle={
              <Fragment>
                <span className="home11-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7NCx0q'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></FeaturesSection>
          <section className="dashboard-section">
            <div className="dashboard-tabs-layout">
              <div className="dashboard-tabs-nav">
                <button data-target="dash-1" className="tab-trigger active">
                  <span className="home11-thq-tab-label-elm1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('TabLabel_piz_cc'),
                      }}
                    ></span>
                  </span>
                  <span className="home11-thq-tab-desc-elm1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('TabDesc_a19w35'),
                      }}
                    ></span>
                  </span>
                </button>
                <button data-target="dash-2" className="tab-trigger">
                  <span className="home11-thq-tab-label-elm2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('TabLabel_qAJrfP'),
                      }}
                    ></span>
                  </span>
                  <span className="home11-thq-tab-desc-elm2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('TabDesc_kWud1x'),
                      }}
                    ></span>
                  </span>
                </button>
                <button data-target="dash-3" className="tab-trigger">
                  <span className="home11-thq-tab-label-elm3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('TabLabel_xWD6Na'),
                      }}
                    ></span>
                  </span>
                  <span className="home11-thq-tab-desc-elm3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('TabDesc_GENmZ1'),
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
            <IntegrationsContainer
              text={
                <Fragment>
                  <span className="home11-text25">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_cBRRYB'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="home11-text26">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_SlwKL9'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text2={
                <Fragment>
                  <span className="home11-text27">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_lqVz0Y'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              text3={
                <Fragment>
                  <span className="home11-text28">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_luVQhi'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              intTag={
                <Fragment>
                  <span className="home11-text29">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_paGKTk'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              intTag1={
                <Fragment>
                  <span className="home11-text30">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_1rQjjy'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              intTag2={
                <Fragment>
                  <span className="home11-text31">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_DL7Vh2'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              sectionTitle={
                <Fragment>
                  <span className="home11-text32">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_eq2vR1'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              sectionTitle1={
                <Fragment>
                  <span className="home11-text33">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_cwAJim'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              sectionTitle2={
                <Fragment>
                  <span className="home11-text34">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text__hYXmV'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              sectionContent={
                <Fragment>
                  <span className="home11-text35">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_T21lJH'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              sectionContent1={
                <Fragment>
                  <span className="home11-text36">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_0Ah-hv'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              sectionSubtitle={
                <Fragment>
                  <span className="home11-text37">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_wltWdt'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              locale={props?.locale ?? ''}
            ></IntegrationsContainer>
          </section>
          <StatsSection
            text={
              <Fragment>
                <span className="home11-text38">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_QUey_m'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home11-text39">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_sM774x'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home11-text40">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_X1PeU5'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="home11-text41">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_H_3TSK'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="home11-text42">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Gz0MhU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle={
              <Fragment>
                <span className="home11-text43">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_o83GZt'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home11-text44">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_dqJE5u'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionSubtitle={
              <Fragment>
                <span className="home11-text45">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ApqSXT'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></StatsSection>
          <section className="testimonials-section">
            <div className="testimonials-carousel-wrapper">
              <h2 className="section-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionTitle_dP6M3j'),
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
                        __html: translate.raw('SectionContent_9JA2yM'),
                      }}
                    ></span>
                  </p>
                  <div className="testimonial-author">
                    <span className="author-name">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('AuthorName_Gysm-K'),
                        }}
                      ></span>
                    </span>
                    <span className="author-role">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('AuthorRole_knPuzi'),
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
                        __html: translate.raw('SectionContent_owubrF'),
                      }}
                    ></span>
                  </p>
                  <div className="testimonial-author">
                    <span className="author-name">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('AuthorName_t4IEea'),
                        }}
                      ></span>
                    </span>
                    <span className="author-role">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('AuthorRole_lhfLwf'),
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
                        __html: translate.raw('SectionContent_K-G5kj'),
                      }}
                    ></span>
                  </p>
                  <div className="testimonial-author">
                    <span className="author-name">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('AuthorName_toCJNV'),
                        }}
                      ></span>
                    </span>
                    <span className="author-role">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('AuthorRole_h9fC-j'),
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
          <CtaSection
            btn={
              <Fragment>
                <span className="home11-text46">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_-Efg_9'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text={
              <Fragment>
                <span className="home11-text47">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_RYBA1E'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home11-text48">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_WiLaL1'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home11-text49">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_inIZ9V'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="home11-text50">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_WHZWjf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="home11-text51">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_EL5EpQ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle={
              <Fragment>
                <span className="home11-text52">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_DiZTH2'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle1={
              <Fragment>
                <span className="home11-text53">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_z3fp9V'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle2={
              <Fragment>
                <span className="home11-text54">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_wZ-01a'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            formDisclaimer={
              <Fragment>
                <span className="home11-text55">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_s13x1A'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home11-text56">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_jf9pu6'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionSubtitle={
              <Fragment>
                <span className="home11-text57">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7Jnhqi'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></CtaSection>
        </main>
        <div className="home11-container2">
          <div className="home11-container3">
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
        <div className="home11-container4">
          <div className="home11-container5">
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
          .home11-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home11-text13 {
            display: inline-block;
          }
          .home11-text14 {
            display: inline-block;
          }
          .home11-text15 {
            display: inline-block;
          }
          .home11-text16 {
            display: inline-block;
          }
          .home11-text17 {
            display: inline-block;
          }
          .home11-text18 {
            display: inline-block;
          }
          .home11-text19 {
            display: inline-block;
          }
          .home11-text20 {
            display: inline-block;
          }
          .home11-text21 {
            display: inline-block;
          }
          .home11-text22 {
            display: inline-block;
          }
          .home11-text23 {
            display: inline-block;
          }
          .home11-text24 {
            display: inline-block;
          }
          .home11-thq-tab-label-elm1 {
            display: block;
            font-size: var(--font-size-xl);
            font-family: var(--font-family-heading);
            font-weight: bold;
            margin-bottom: var(--spacing-xs);
            text-transform: uppercase;
          }
          .home11-thq-tab-desc-elm1 {
            opacity: 0.7;
            font-size: var(--font-size-sm);
          }
          .home11-thq-tab-label-elm2 {
            display: block;
            font-size: var(--font-size-xl);
            font-family: var(--font-family-heading);
            font-weight: bold;
            margin-bottom: var(--spacing-xs);
            text-transform: uppercase;
          }
          .home11-thq-tab-desc-elm2 {
            opacity: 0.7;
            font-size: var(--font-size-sm);
          }
          .home11-thq-tab-label-elm3 {
            display: block;
            font-size: var(--font-size-xl);
            font-family: var(--font-family-heading);
            font-weight: bold;
            margin-bottom: var(--spacing-xs);
            text-transform: uppercase;
          }
          .home11-thq-tab-desc-elm3 {
            opacity: 0.7;
            font-size: var(--font-size-sm);
          }
          .home11-text25 {
            display: inline-block;
          }
          .home11-text26 {
            display: inline-block;
          }
          .home11-text27 {
            display: inline-block;
          }
          .home11-text28 {
            display: inline-block;
          }
          .home11-text29 {
            display: inline-block;
          }
          .home11-text30 {
            display: inline-block;
          }
          .home11-text31 {
            display: inline-block;
          }
          .home11-text32 {
            display: inline-block;
          }
          .home11-text33 {
            display: inline-block;
          }
          .home11-text34 {
            display: inline-block;
          }
          .home11-text35 {
            display: inline-block;
          }
          .home11-text36 {
            display: inline-block;
          }
          .home11-text37 {
            display: inline-block;
          }
          .home11-text38 {
            display: inline-block;
          }
          .home11-text39 {
            display: inline-block;
          }
          .home11-text40 {
            display: inline-block;
          }
          .home11-text41 {
            display: inline-block;
          }
          .home11-text42 {
            display: inline-block;
          }
          .home11-text43 {
            display: inline-block;
          }
          .home11-text44 {
            display: inline-block;
          }
          .home11-text45 {
            display: inline-block;
          }
          .home11-text46 {
            display: inline-block;
          }
          .home11-text47 {
            display: inline-block;
          }
          .home11-text48 {
            display: inline-block;
          }
          .home11-text49 {
            display: inline-block;
          }
          .home11-text50 {
            display: inline-block;
          }
          .home11-text51 {
            display: inline-block;
          }
          .home11-text52 {
            display: inline-block;
          }
          .home11-text53 {
            display: inline-block;
          }
          .home11-text54 {
            display: inline-block;
          }
          .home11-text55 {
            display: inline-block;
          }
          .home11-text56 {
            display: inline-block;
          }
          .home11-text57 {
            display: inline-block;
          }
          .home11-container2 {
            display: none;
          }
          .home11-container3 {
            display: contents;
          }
          .home11-container4 {
            display: none;
          }
          .home11-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home11

export async function getStaticProps(context) {
  try {
    const messages = (await import('/locales/' + context.locale + '.json'))
      .default
    const [javascript_PEC_data_data_g6ctNEAeX] = await Promise.all([
      javascriptData5ef2eac3
        .fetchData({
          limit: 20,
        })
        .catch((error) => {
          console.error(
            'Error fetching javascript_PEC_data_data_g6ctNEAeX:',
            error
          )
          return []
        }),
    ])
    return {
      props: {
        messages,
        javascript_PEC_data_data_g6ctNEAeX: javascript_PEC_data_data_g6ctNEAeX,
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
