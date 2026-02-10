import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeaturesSection29 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section
        className={`features-section29-thq-thq-features-section-elm-elm features-section ${props.rootClassName} `}
      >
        <div className="features-container">
          <div className="features-header">
            <h2 className="section-title">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features-section29-text10">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_fLOKqq'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="section-subtitle">
              {props.sectionSubtitle ?? (
                <Fragment>
                  <span className="features-section29-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_1E82n_'),
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
                    <span className="features-section29-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionTitle_gOdXou'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="section-content">
                {props.sectionContent ?? (
                  <Fragment>
                    <span className="features-section29-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_3yO8gV'),
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
                    <span className="features-section29-text12">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionTitle_BmtHDf'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="section-content">
                {props.sectionContent1 ?? (
                  <Fragment>
                    <span className="features-section29-text13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_WoU_Nw'),
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
                    <span className="features-section29-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionTitle_YyEFw_'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h4>
              <p className="section-content">
                {props.sectionContent2 ?? (
                  <Fragment>
                    <span className="features-section29-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_44kSzI'),
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
                    <span className="features-section29-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionTitle_BUqjTF'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h4>
              <p className="section-content">
                {props.sectionContent3 ?? (
                  <Fragment>
                    <span className="features-section29-text15">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_7GXXIK'),
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
                    <span className="features-section29-text11">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionTitle_4AKLbL'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="section-content">
                {props.sectionContent4 ?? (
                  <Fragment>
                    <span className="features-section29-text14">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_0s_XVC'),
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
          .features-section29-thq-thq-features-section-elm-elm {
            position: relative;
          }
          .features-section29-text10 {
            display: inline-block;
          }
          .features-section29-text11 {
            display: inline-block;
          }
          .features-section29-text12 {
            display: inline-block;
          }
          .features-section29-text13 {
            display: inline-block;
          }
          .features-section29-text14 {
            display: inline-block;
          }
          .features-section29-text15 {
            display: inline-block;
          }
          .features-section29-text16 {
            display: inline-block;
          }
          .features-section29-text17 {
            display: inline-block;
          }
          .features-section29-text18 {
            display: inline-block;
          }
          .features-section29-text19 {
            display: inline-block;
          }
          .features-section29-text20 {
            display: inline-block;
          }
          .features-section29-text21 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

FeaturesSection29.defaultProps = {
  sectionTitle: undefined,
  sectionTitle5: undefined,
  sectionTitle2: undefined,
  sectionContent1: undefined,
  sectionContent4: undefined,
  sectionContent3: undefined,
  sectionSubtitle: undefined,
  rootClassName: '',
  sectionTitle4: undefined,
  sectionContent: undefined,
  sectionTitle1: undefined,
  sectionTitle3: undefined,
  sectionContent2: undefined,
}

FeaturesSection29.propTypes = {
  sectionTitle: PropTypes.element,
  sectionTitle5: PropTypes.element,
  sectionTitle2: PropTypes.element,
  sectionContent1: PropTypes.element,
  sectionContent4: PropTypes.element,
  sectionContent3: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  rootClassName: PropTypes.string,
  sectionTitle4: PropTypes.element,
  sectionContent: PropTypes.element,
  sectionTitle1: PropTypes.element,
  sectionTitle3: PropTypes.element,
  sectionContent2: PropTypes.element,
}

export default FeaturesSection29
