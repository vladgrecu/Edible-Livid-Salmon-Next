import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const IntegrationsSection = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="integrations-section-thq-integrations-section-elm integrations-section">
        <div className="integrations-container">
          <div className="integrations-header">
            <h2 className="section-title">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="integrations-section-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_MEaMCR'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="section-subtitle">
              {props.sectionSubtitle ?? (
                <Fragment>
                  <span className="integrations-section-text15">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_ihZ1uw'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="integrations-bento">
            <div className="main-cell int-cell">
              <div className="int-content">
                <h3 className="section-title">
                  {props.sectionTitle2 ?? (
                    <Fragment>
                      <span className="integrations-section-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionTitle_yyVc8x'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="section-content">
                  {props.sectionContent1 ?? (
                    <Fragment>
                      <span className="integrations-section-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionContent_YmgDJV'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="int-tags">
                  <span className="int-tag">
                    {props.intTag ?? (
                      <Fragment>
                        <span className="integrations-section-text20">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('IntTag_8nGW_Q'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="int-tag">
                    {props.intTag1 ?? (
                      <Fragment>
                        <span className="integrations-section-text21">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('IntTag_ASgfOj'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="int-tag">
                    {props.intTag2 ?? (
                      <Fragment>
                        <span className="integrations-section-text22">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('IntTag_mNOXqy'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="logo-cell int-cell">
              <div className="logo-grid">
                <div className="logo-item">
                  <span>
                    {props.text ?? (
                      <Fragment>
                        <span className="integrations-section-text23">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_tzvRf0'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="logo-item">
                  <span>
                    {props.text1 ?? (
                      <Fragment>
                        <span className="integrations-section-text24">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_huv5sx'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="logo-item">
                  <span>
                    {props.text2 ?? (
                      <Fragment>
                        <span className="integrations-section-text25">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_hAGzcP'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="logo-item">
                  <span>
                    {props.text3 ?? (
                      <Fragment>
                        <span className="integrations-section-text26">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_tLXqe3'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="note-cell int-cell">
              <h4 className="section-title">
                {props.sectionTitle1 ?? (
                  <Fragment>
                    <span className="integrations-section-text16">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionTitle_5KZn9e'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h4>
              <p className="section-content">
                {props.sectionContent ?? (
                  <Fragment>
                    <span className="integrations-section-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_ref19h'),
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
          .integrations-section-thq-integrations-section-elm {
            position: relative;
          }
          .integrations-section-text14 {
            display: inline-block;
          }
          .integrations-section-text15 {
            display: inline-block;
          }
          .integrations-section-text16 {
            display: inline-block;
          }
          .integrations-section-text17 {
            display: inline-block;
          }
          .integrations-section-text18 {
            display: inline-block;
          }
          .integrations-section-text19 {
            display: inline-block;
          }
          .integrations-section-text20 {
            display: inline-block;
          }
          .integrations-section-text21 {
            display: inline-block;
          }
          .integrations-section-text22 {
            display: inline-block;
          }
          .integrations-section-text23 {
            display: inline-block;
          }
          .integrations-section-text24 {
            display: inline-block;
          }
          .integrations-section-text25 {
            display: inline-block;
          }
          .integrations-section-text26 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

IntegrationsSection.defaultProps = {
  sectionTitle: undefined,
  sectionSubtitle: undefined,
  sectionTitle1: undefined,
  sectionContent: undefined,
  sectionTitle2: undefined,
  sectionContent1: undefined,
  intTag: undefined,
  intTag1: undefined,
  intTag2: undefined,
  text: undefined,
  text1: undefined,
  text2: undefined,
  text3: undefined,
}

IntegrationsSection.propTypes = {
  sectionTitle: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  sectionTitle1: PropTypes.element,
  sectionContent: PropTypes.element,
  sectionTitle2: PropTypes.element,
  sectionContent1: PropTypes.element,
  intTag: PropTypes.element,
  intTag1: PropTypes.element,
  intTag2: PropTypes.element,
  text: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
  text3: PropTypes.element,
}

export default IntegrationsSection
