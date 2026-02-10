import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const WhatIsSection14 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section
        className={`what-is-section14-thq-thq-what-is-section-elm-elm what-is-section ${props.rootClassName} `}
      >
        <div className="what-is-container">
          <div className="what-is-header">
            <h2 className="section-title">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="what-is-section14-text28">
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
                  <span className="what-is-section14-text31">
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
                      <span className="what-is-section14-text27">
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
                    <span className="what-is-section14-text25">
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
                        <span className="what-is-section14-text29">
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
                        <span className="what-is-section14-text35">
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
                      <span className="what-is-section14-text32">
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
                    <span className="what-is-section14-text30">
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
                        <span className="what-is-section14-text26">
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
                        <span className="what-is-section14-text20">
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
                      <span className="what-is-section14-text21">
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
                    <span className="what-is-section14-text33">
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
                        <span className="what-is-section14-text34">
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
                        <span className="what-is-section14-text23">
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
                      <span className="what-is-section14-text24">
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
                    <span className="what-is-section14-text18">
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
                        <span className="what-is-section14-text19">
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
                        <span className="what-is-section14-text22">
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
          .what-is-section14-thq-thq-what-is-section-elm-elm {
            position: relative;
          }
          .what-is-section14-text18 {
            display: inline-block;
          }
          .what-is-section14-text19 {
            display: inline-block;
          }
          .what-is-section14-text20 {
            display: inline-block;
          }
          .what-is-section14-text21 {
            display: inline-block;
          }
          .what-is-section14-text22 {
            display: inline-block;
          }
          .what-is-section14-text23 {
            display: inline-block;
          }
          .what-is-section14-text24 {
            display: inline-block;
          }
          .what-is-section14-text25 {
            display: inline-block;
          }
          .what-is-section14-text26 {
            display: inline-block;
          }
          .what-is-section14-text27 {
            display: inline-block;
          }
          .what-is-section14-text28 {
            display: inline-block;
          }
          .what-is-section14-text29 {
            display: inline-block;
          }
          .what-is-section14-text30 {
            display: inline-block;
          }
          .what-is-section14-text31 {
            display: inline-block;
          }
          .what-is-section14-text32 {
            display: inline-block;
          }
          .what-is-section14-text33 {
            display: inline-block;
          }
          .what-is-section14-text34 {
            display: inline-block;
          }
          .what-is-section14-text35 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

WhatIsSection14.defaultProps = {
  sectionSubtitle3: undefined,
  text6: undefined,
  text3: undefined,
  specLabel2: undefined,
  text7: undefined,
  text5: undefined,
  specLabel3: undefined,
  sectionSubtitle: undefined,
  text2: undefined,
  specLabel: undefined,
  sectionTitle: undefined,
  text: undefined,
  rootClassName: '',
  sectionSubtitle1: undefined,
  sectionContent: undefined,
  specLabel1: undefined,
  sectionSubtitle2: undefined,
  text4: undefined,
  text1: undefined,
}

WhatIsSection14.propTypes = {
  sectionSubtitle3: PropTypes.element,
  text6: PropTypes.element,
  text3: PropTypes.element,
  specLabel2: PropTypes.element,
  text7: PropTypes.element,
  text5: PropTypes.element,
  specLabel3: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  text2: PropTypes.element,
  specLabel: PropTypes.element,
  sectionTitle: PropTypes.element,
  text: PropTypes.element,
  rootClassName: PropTypes.string,
  sectionSubtitle1: PropTypes.element,
  sectionContent: PropTypes.element,
  specLabel1: PropTypes.element,
  sectionSubtitle2: PropTypes.element,
  text4: PropTypes.element,
  text1: PropTypes.element,
}

export default WhatIsSection14
