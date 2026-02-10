import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HeroSection = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="hero-section-thq-hero-section-elm about-nimbuscloud-hero-section">
        <div className="hero-bg-grid"></div>
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-eyebrow">
              {props.heroEyebrow ?? (
                <Fragment>
                  <span className="hero-section-text25">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('HeroEyebrow_Xbl7h1'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <h1 className="about-nimbuscloud-hero-title kinetic-text hero-title">
              {props.heroTitle ?? (
                <Fragment>
                  <span className="hero-section-text35">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('HeroTitle_8DhNuW'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero-subtitle about-nimbuscloud-hero-subtitle">
              {props.heroSubtitle ?? (
                <Fragment>
                  <span className="hero-section-text24">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('HeroSubtitle_hXAmTW'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <ul className="hero-proof-list">
              <li className="hero-proof-item">
                <div className="icon-wrapper">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <span>
                  {props.text ?? (
                    <Fragment>
                      <span className="hero-section-text26">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_gbc4FF'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </li>
              <li className="hero-proof-item">
                <div className="icon-wrapper">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                </div>
                <span>
                  {props.text1 ?? (
                    <Fragment>
                      <span className="hero-section-text32">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_X5o2OU'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </li>
            </ul>
            <div className="hero-actions">
              <a href="#">
                <div className="btn btn-xl btn-primary charging-btn">
                  <span>
                    {props.text2 ?? (
                      <Fragment>
                        <span className="hero-section-text31">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_VfGd0a'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="ring-effect"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hologram-container parallax-element">
              <div className="hologram-base"></div>
              <div className="hologram-content">
                <div className="console-header">
                  <div className="red dot"></div>
                  <div className="yellow dot"></div>
                  <div className="green dot"></div>
                  <span className="console-title">
                    {props.consoleTitle ?? (
                      <Fragment>
                        <span className="hero-section-text22">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('ConsoleTitle_S_uhk_'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="console-body">
                  <div className="shimmer-line"></div>
                  <div className="code-line">
                    <span>
                      {props.text3 ?? (
                        <Fragment>
                          <span className="hero-section-text27">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_YzawgP'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.text4 ?? (
                        <Fragment>
                          <span className="hero-section-text23">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_jGMpVb'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="code-line">
                    <span>
                      {props.text5 ?? (
                        <Fragment>
                          <span className="hero-section-text28">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_hFLSWR'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.text6 ?? (
                        <Fragment>
                          <span className="hero-section-text21">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_01nD_a'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="code-line">
                    <span>
                      {props.text7 ?? (
                        <Fragment>
                          <span className="hero-section-text30">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_nd6Qyj'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.text8 ?? (
                        <Fragment>
                          <span className="hero-section-text29">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_rizsHD'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="code-line success">
                    <span>
                      {props.text9 ?? (
                        <Fragment>
                          <span className="hero-section-text34">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_vaMjV4'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.text10 ?? (
                        <Fragment>
                          <span className="hero-section-text33">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_LO2ajD'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .hero-section-thq-hero-section-elm {
            position: relative;
          }
          .hero-section-text21 {
            display: inline-block;
          }
          .hero-section-text22 {
            display: inline-block;
          }
          .hero-section-text23 {
            display: inline-block;
          }
          .hero-section-text24 {
            display: inline-block;
          }
          .hero-section-text25 {
            display: inline-block;
          }
          .hero-section-text26 {
            display: inline-block;
          }
          .hero-section-text27 {
            display: inline-block;
          }
          .hero-section-text28 {
            display: inline-block;
          }
          .hero-section-text29 {
            display: inline-block;
          }
          .hero-section-text30 {
            display: inline-block;
          }
          .hero-section-text31 {
            display: inline-block;
          }
          .hero-section-text32 {
            display: inline-block;
          }
          .hero-section-text33 {
            display: inline-block;
          }
          .hero-section-text34 {
            display: inline-block;
          }
          .hero-section-text35 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

HeroSection.defaultProps = {
  text6: undefined,
  consoleTitle: undefined,
  text4: undefined,
  heroSubtitle: undefined,
  heroEyebrow: undefined,
  text: undefined,
  text3: undefined,
  text5: undefined,
  text8: undefined,
  text7: undefined,
  text2: undefined,
  text1: undefined,
  text10: undefined,
  text9: undefined,
  heroTitle: undefined,
}

HeroSection.propTypes = {
  text6: PropTypes.element,
  consoleTitle: PropTypes.element,
  text4: PropTypes.element,
  heroSubtitle: PropTypes.element,
  heroEyebrow: PropTypes.element,
  text: PropTypes.element,
  text3: PropTypes.element,
  text5: PropTypes.element,
  text8: PropTypes.element,
  text7: PropTypes.element,
  text2: PropTypes.element,
  text1: PropTypes.element,
  text10: PropTypes.element,
  text9: PropTypes.element,
  heroTitle: PropTypes.element,
}

export default HeroSection
