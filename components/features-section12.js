import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeaturesSection12 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section
        className={`features-section12-thq-thq-features-section-elm-elm features-section ${props.rootClassName} `}
      >
        <div className="features-container">
          <div className="features-header">
            <h2 className="section-title">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features-section12-text17">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_kg374w'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="section-subtitle">
              {props.sectionSubtitle ?? (
                <Fragment>
                  <span className="features-section12-text18">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_vGyEUW'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
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
                {props.sectionTitle1 ?? (
                  <Fragment>
                    <span className="features-section12-text10">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_hKHYOX'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="section-content">
                {props.sectionContent ?? (
                  <Fragment>
                    <span className="features-section12-text13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_l8lsxw'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
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
                {props.sectionTitle2 ?? (
                  <Fragment>
                    <span className="features-section12-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_GQu-40'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="section-content">
                {props.sectionContent1 ?? (
                  <Fragment>
                    <span className="features-section12-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text__iZZvH'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
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
                {props.sectionTitle3 ?? (
                  <Fragment>
                    <span className="features-section12-text11">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Ifhdjh'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h4>
              <p className="section-content">
                {props.sectionContent2 ?? (
                  <Fragment>
                    <span className="features-section12-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_kAaTQF'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
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
                {props.sectionTitle4 ?? (
                  <Fragment>
                    <span className="features-section12-text12">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ISKvSO'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h4>
              <p className="section-content">
                {props.sectionContent3 ?? (
                  <Fragment>
                    <span className="features-section12-text15">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Zdu9KY'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
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
                {props.sectionTitle5 ?? (
                  <Fragment>
                    <span className="features-section12-text16">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_9dNop3'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="section-content">
                {props.sectionContent4 ?? (
                  <Fragment>
                    <span className="features-section12-text14">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Fhn8X8'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .features-section12-thq-thq-features-section-elm-elm {
            position: relative;
          }
          .features-section12-text10 {
            display: inline-block;
          }
          .features-section12-text11 {
            display: inline-block;
          }
          .features-section12-text12 {
            display: inline-block;
          }
          .features-section12-text13 {
            display: inline-block;
          }
          .features-section12-text14 {
            display: inline-block;
          }
          .features-section12-text15 {
            display: inline-block;
          }
          .features-section12-text16 {
            display: inline-block;
          }
          .features-section12-text17 {
            display: inline-block;
          }
          .features-section12-text18 {
            display: inline-block;
          }
          .features-section12-text19 {
            display: inline-block;
          }
          .features-section12-text20 {
            display: inline-block;
          }
          .features-section12-text21 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

FeaturesSection12.defaultProps = {
  sectionTitle1: undefined,
  rootClassName: '',
  sectionTitle3: undefined,
  sectionTitle4: undefined,
  sectionContent: undefined,
  sectionContent4: undefined,
  sectionContent3: undefined,
  sectionTitle5: undefined,
  sectionTitle: undefined,
  sectionSubtitle: undefined,
  sectionContent2: undefined,
  sectionTitle2: undefined,
  sectionContent1: undefined,
}

FeaturesSection12.propTypes = {
  sectionTitle1: PropTypes.element,
  rootClassName: PropTypes.string,
  sectionTitle3: PropTypes.element,
  sectionTitle4: PropTypes.element,
  sectionContent: PropTypes.element,
  sectionContent4: PropTypes.element,
  sectionContent3: PropTypes.element,
  sectionTitle5: PropTypes.element,
  sectionTitle: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  sectionContent2: PropTypes.element,
  sectionTitle2: PropTypes.element,
  sectionContent1: PropTypes.element,
}

export default FeaturesSection12
