import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TrustSection4 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section
        className={`trust-section4-thq-thq-trust-section-elm-elm trust-section ${props.rootClassName} `}
      >
        <div className="shield-lattice"></div>
        <div className="trust-container">
          <h2 className="section-title centered">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="trust-section4-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_pceaE5'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <p className="max-w-600 centered-text section-content">
            {props.sectionContent ?? (
              <Fragment>
                <span className="trust-section4-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_c5bWNs'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </p>
          <div className="trust-grid">
            <div className="trust-col">
              <div className="col-header">
                <div className="lock-icon">
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
                      <rect
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                        width="18"
                        height="11"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  {props.sectionSubtitle ?? (
                    <Fragment>
                      <span className="trust-section4-text22">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionSubtitle_OR-xbY'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
              </div>
              <ul className="promise-list">
                <li className="promise-item">
                  <span>
                    {props.text ?? (
                      <Fragment>
                        <span className="trust-section4-text20">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_DPZOvM'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="promise-item">
                  <span>
                    {props.text1 ?? (
                      <Fragment>
                        <span className="trust-section4-text23">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_A8FLhD'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="promise-item">
                  <span>
                    {props.text2 ?? (
                      <Fragment>
                        <span className="trust-section4-text21">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_4W3feK'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="promise-item">
                  <span>
                    {props.text3 ?? (
                      <Fragment>
                        <span className="trust-section4-text25">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_jS8mst'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="promise-item">
                  <span>
                    {props.text4 ?? (
                      <Fragment>
                        <span className="trust-section4-text26">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_82mFwg'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
              </ul>
            </div>
            <div className="trust-col">
              <div className="col-header">
                <div className="lock-icon">
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
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  {props.sectionSubtitle1 ?? (
                    <Fragment>
                      <span className="trust-section4-text31">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionSubtitle_3Dwl8l'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
              </div>
              <ul className="promise-list">
                <li className="promise-item">
                  <span>
                    {props.text5 ?? (
                      <Fragment>
                        <span className="trust-section4-text29">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Nq7j06'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="promise-item">
                  <span>
                    {props.text6 ?? (
                      <Fragment>
                        <span className="trust-section4-text27">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_GnuUxE'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="promise-item">
                  <span>
                    {props.text7 ?? (
                      <Fragment>
                        <span className="trust-section4-text19">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_dJxWXR'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="promise-item">
                  <span>
                    {props.text8 ?? (
                      <Fragment>
                        <span className="trust-section4-text28">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_8xgTty'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .trust-section4-thq-thq-trust-section-elm-elm {
            position: relative;
          }
          .trust-section4-text19 {
            display: inline-block;
          }
          .trust-section4-text20 {
            display: inline-block;
          }
          .trust-section4-text21 {
            display: inline-block;
          }
          .trust-section4-text22 {
            display: inline-block;
          }
          .trust-section4-text23 {
            display: inline-block;
          }
          .trust-section4-text24 {
            display: inline-block;
          }
          .trust-section4-text25 {
            display: inline-block;
          }
          .trust-section4-text26 {
            display: inline-block;
          }
          .trust-section4-text27 {
            display: inline-block;
          }
          .trust-section4-text28 {
            display: inline-block;
          }
          .trust-section4-text29 {
            display: inline-block;
          }
          .trust-section4-text30 {
            display: inline-block;
          }
          .trust-section4-text31 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

TrustSection4.defaultProps = {
  text7: undefined,
  text: undefined,
  rootClassName: '',
  text2: undefined,
  sectionSubtitle: undefined,
  text1: undefined,
  sectionContent: undefined,
  text3: undefined,
  text4: undefined,
  text6: undefined,
  text8: undefined,
  text5: undefined,
  sectionTitle: undefined,
  sectionSubtitle1: undefined,
}

TrustSection4.propTypes = {
  text7: PropTypes.element,
  text: PropTypes.element,
  rootClassName: PropTypes.string,
  text2: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  text1: PropTypes.element,
  sectionContent: PropTypes.element,
  text3: PropTypes.element,
  text4: PropTypes.element,
  text6: PropTypes.element,
  text8: PropTypes.element,
  text5: PropTypes.element,
  sectionTitle: PropTypes.element,
  sectionSubtitle1: PropTypes.element,
}

export default TrustSection4
