import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const WhatIsSection = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="what-is-section-thq-what-is-section-elm what-is-section">
        <div className="what-is-container">
          <div className="what-is-header">
            <h2 className="section-title">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="what-is-section-text18">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_FtSOJl'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="section-content">
              {props.sectionContent ?? (
                <Fragment>
                  <span className="what-is-section-text19">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_qWmFG2'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="capability-grid">
            <div className="capability-tile glass-chip">
              <div className="tile-header">
                <div className="icon-hologram">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 19h8M4 17l6-6l-6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <span className="spec-label">
                  {props.specLabel ?? (
                    <Fragment>
                      <span className="what-is-section-text24">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SpecLabel_di0AEB'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <h3 className="section-subtitle">
                {props.sectionSubtitle ?? (
                  <Fragment>
                    <span className="what-is-section-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionSubtitle_9jsmfy'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <ul className="tile-list">
                <li>
                  <div className="status-dot"></div>
                  <span>
                    {props.text ?? (
                      <Fragment>
                        <span className="what-is-section-text28">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_eDsiRR'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li>
                  <div className="status-dot"></div>
                  <span>
                    {props.text1 ?? (
                      <Fragment>
                        <span className="what-is-section-text29">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Z4Nuk2'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
              </ul>
              <div className="grid-overlay"></div>
            </div>
            <div className="capability-tile glass-chip">
              <div className="tile-header">
                <div className="icon-hologram">
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
                <span className="spec-label">
                  {props.specLabel1 ?? (
                    <Fragment>
                      <span className="what-is-section-text25">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SpecLabel_r3oxZ4'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <h3 className="section-subtitle">
                {props.sectionSubtitle1 ?? (
                  <Fragment>
                    <span className="what-is-section-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionSubtitle_yiLeEr'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <ul className="tile-list">
                <li>
                  <div className="status-dot"></div>
                  <span>
                    {props.text2 ?? (
                      <Fragment>
                        <span className="what-is-section-text30">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_rN6Cag'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li>
                  <div className="status-dot"></div>
                  <span>
                    {props.text3 ?? (
                      <Fragment>
                        <span className="what-is-section-text31">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Wop0KF'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
              </ul>
              <div className="grid-overlay"></div>
            </div>
            <div className="capability-tile glass-chip">
              <div className="tile-header">
                <div className="icon-hologram">
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
                <span className="spec-label">
                  {props.specLabel2 ?? (
                    <Fragment>
                      <span className="what-is-section-text26">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SpecLabel_319bTq'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <h3 className="section-subtitle">
                {props.sectionSubtitle2 ?? (
                  <Fragment>
                    <span className="what-is-section-text22">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionSubtitle_NYAtzj'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <ul className="tile-list">
                <li>
                  <div className="status-dot"></div>
                  <span>
                    {props.text4 ?? (
                      <Fragment>
                        <span className="what-is-section-text32">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_u9_YE-'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li>
                  <div className="status-dot"></div>
                  <span>
                    {props.text5 ?? (
                      <Fragment>
                        <span className="what-is-section-text33">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_OrHLrN'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
              </ul>
              <div className="grid-overlay"></div>
            </div>
            <div className="capability-tile glass-chip">
              <div className="tile-header">
                <div className="icon-hologram">
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
                <span className="spec-label">
                  {props.specLabel3 ?? (
                    <Fragment>
                      <span className="what-is-section-text27">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SpecLabel_0qobd_'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <h3 className="section-subtitle">
                {props.sectionSubtitle3 ?? (
                  <Fragment>
                    <span className="what-is-section-text23">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionSubtitle_f2c1jr'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <ul className="tile-list">
                <li>
                  <div className="status-dot"></div>
                  <span>
                    {props.text6 ?? (
                      <Fragment>
                        <span className="what-is-section-text34">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_drcp0f'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li>
                  <div className="status-dot"></div>
                  <span>
                    {props.text7 ?? (
                      <Fragment>
                        <span className="what-is-section-text35">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_0cHXwT'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
              </ul>
              <div className="grid-overlay"></div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .what-is-section-thq-what-is-section-elm {
            position: relative;
          }
          .what-is-section-text18 {
            display: inline-block;
          }
          .what-is-section-text19 {
            display: inline-block;
          }
          .what-is-section-text20 {
            display: inline-block;
          }
          .what-is-section-text21 {
            display: inline-block;
          }
          .what-is-section-text22 {
            display: inline-block;
          }
          .what-is-section-text23 {
            display: inline-block;
          }
          .what-is-section-text24 {
            display: inline-block;
          }
          .what-is-section-text25 {
            display: inline-block;
          }
          .what-is-section-text26 {
            display: inline-block;
          }
          .what-is-section-text27 {
            display: inline-block;
          }
          .what-is-section-text28 {
            display: inline-block;
          }
          .what-is-section-text29 {
            display: inline-block;
          }
          .what-is-section-text30 {
            display: inline-block;
          }
          .what-is-section-text31 {
            display: inline-block;
          }
          .what-is-section-text32 {
            display: inline-block;
          }
          .what-is-section-text33 {
            display: inline-block;
          }
          .what-is-section-text34 {
            display: inline-block;
          }
          .what-is-section-text35 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

WhatIsSection.defaultProps = {
  sectionTitle: undefined,
  sectionContent: undefined,
  sectionSubtitle: undefined,
  sectionSubtitle1: undefined,
  sectionSubtitle2: undefined,
  sectionSubtitle3: undefined,
  specLabel: undefined,
  specLabel1: undefined,
  specLabel2: undefined,
  specLabel3: undefined,
  text: undefined,
  text1: undefined,
  text2: undefined,
  text3: undefined,
  text4: undefined,
  text5: undefined,
  text6: undefined,
  text7: undefined,
}

WhatIsSection.propTypes = {
  sectionTitle: PropTypes.element,
  sectionContent: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  sectionSubtitle1: PropTypes.element,
  sectionSubtitle2: PropTypes.element,
  sectionSubtitle3: PropTypes.element,
  specLabel: PropTypes.element,
  specLabel1: PropTypes.element,
  specLabel2: PropTypes.element,
  specLabel3: PropTypes.element,
  text: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
  text3: PropTypes.element,
  text4: PropTypes.element,
  text5: PropTypes.element,
  text6: PropTypes.element,
  text7: PropTypes.element,
}

export default WhatIsSection
