import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const PrinciplesSection = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="principles-section-thq-principles-section-elm principles-section">
        <div className="principles-container">
          <h2 className="section-title centered">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="principles-section-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_JXHr4s'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <div className="principles-list">
            <details className="glass-rail principle-item">
              <summary>
                <div className="principle-header">
                  <span className="principle-label">
                    {props.principleLabel ?? (
                      <Fragment>
                        <span className="principles-section-text23">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('PrincipleLabel_sefZl7'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="section-subtitle">
                    {props.sectionSubtitle ?? (
                      <Fragment>
                        <span className="principles-section-text22">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('SectionSubtitle_T5LrM1'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <div className="glow-bar"></div>
                </div>
              </summary>
              <div className="principle-content">
                <p className="section-content">
                  {props.sectionContent ?? (
                    <Fragment>
                      <span className="principles-section-text13">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionContent_nhiedy'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </details>
            <details className="glass-rail principle-item">
              <summary>
                <div className="principle-header">
                  <span className="principle-label">
                    {props.principleLabel1 ?? (
                      <Fragment>
                        <span className="principles-section-text15">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('PrincipleLabel_AA6Zw6'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="section-subtitle">
                    {props.sectionSubtitle1 ?? (
                      <Fragment>
                        <span className="principles-section-text14">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('SectionSubtitle_MBU1mP'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <div className="glow-bar"></div>
                </div>
              </summary>
              <div className="principle-content">
                <p className="section-content">
                  {props.sectionContent1 ?? (
                    <Fragment>
                      <span className="principles-section-text16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionContent_PxkMTf'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </details>
            <details className="glass-rail principle-item">
              <summary>
                <div className="principle-header">
                  <span className="principle-label">
                    {props.principleLabel2 ?? (
                      <Fragment>
                        <span className="principles-section-text25">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('PrincipleLabel_hQvvXa'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="section-subtitle">
                    {props.sectionSubtitle2 ?? (
                      <Fragment>
                        <span className="principles-section-text10">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('SectionSubtitle_CRJO2T'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <div className="glow-bar"></div>
                </div>
              </summary>
              <div className="principle-content">
                <p className="section-content">
                  {props.sectionContent2 ?? (
                    <Fragment>
                      <span className="principles-section-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionContent_FMou4A'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </details>
            <details className="glass-rail principle-item">
              <summary>
                <div className="principle-header">
                  <span className="principle-label">
                    {props.principleLabel3 ?? (
                      <Fragment>
                        <span className="principles-section-text20">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('PrincipleLabel_Y0DZpA'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="section-subtitle">
                    {props.sectionSubtitle3 ?? (
                      <Fragment>
                        <span className="principles-section-text18">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('SectionSubtitle_orLv5Q'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <div className="glow-bar"></div>
                </div>
              </summary>
              <div className="principle-content">
                <p className="section-content">
                  {props.sectionContent3 ?? (
                    <Fragment>
                      <span className="principles-section-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionContent_dBa8Em'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </details>
            <details className="glass-rail principle-item">
              <summary>
                <div className="principle-header">
                  <span className="principle-label">
                    {props.principleLabel4 ?? (
                      <Fragment>
                        <span className="principles-section-text24">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('PrincipleLabel_lVJybk'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="section-subtitle">
                    {props.sectionSubtitle4 ?? (
                      <Fragment>
                        <span className="principles-section-text12">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('SectionSubtitle_QdicV1'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <div className="glow-bar"></div>
                </div>
              </summary>
              <div className="principle-content">
                <p className="section-content">
                  {props.sectionContent4 ?? (
                    <Fragment>
                      <span className="principles-section-text21">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionContent_rZ1BQe'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .principles-section-thq-principles-section-elm {
            position: relative;
          }
          .principles-section-text10 {
            display: inline-block;
          }
          .principles-section-text11 {
            display: inline-block;
          }
          .principles-section-text12 {
            display: inline-block;
          }
          .principles-section-text13 {
            display: inline-block;
          }
          .principles-section-text14 {
            display: inline-block;
          }
          .principles-section-text15 {
            display: inline-block;
          }
          .principles-section-text16 {
            display: inline-block;
          }
          .principles-section-text17 {
            display: inline-block;
          }
          .principles-section-text18 {
            display: inline-block;
          }
          .principles-section-text19 {
            display: inline-block;
          }
          .principles-section-text20 {
            display: inline-block;
          }
          .principles-section-text21 {
            display: inline-block;
          }
          .principles-section-text22 {
            display: inline-block;
          }
          .principles-section-text23 {
            display: inline-block;
          }
          .principles-section-text24 {
            display: inline-block;
          }
          .principles-section-text25 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

PrinciplesSection.defaultProps = {
  sectionSubtitle2: undefined,
  sectionTitle: undefined,
  sectionSubtitle4: undefined,
  sectionContent: undefined,
  sectionSubtitle1: undefined,
  principleLabel1: undefined,
  sectionContent1: undefined,
  sectionContent2: undefined,
  sectionSubtitle3: undefined,
  sectionContent3: undefined,
  principleLabel3: undefined,
  sectionContent4: undefined,
  sectionSubtitle: undefined,
  principleLabel: undefined,
  principleLabel4: undefined,
  principleLabel2: undefined,
}

PrinciplesSection.propTypes = {
  sectionSubtitle2: PropTypes.element,
  sectionTitle: PropTypes.element,
  sectionSubtitle4: PropTypes.element,
  sectionContent: PropTypes.element,
  sectionSubtitle1: PropTypes.element,
  principleLabel1: PropTypes.element,
  sectionContent1: PropTypes.element,
  sectionContent2: PropTypes.element,
  sectionSubtitle3: PropTypes.element,
  sectionContent3: PropTypes.element,
  principleLabel3: PropTypes.element,
  sectionContent4: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  principleLabel: PropTypes.element,
  principleLabel4: PropTypes.element,
  principleLabel2: PropTypes.element,
}

export default PrinciplesSection
