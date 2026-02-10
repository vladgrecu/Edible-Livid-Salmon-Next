import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const IntegrationsContainer1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="integrations-container1-thq-integrations-container-elm integrations-container">
        <div className="integrations-header">
          <h2 className="section-title">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="integrations-container1-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_5v9f0z'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <p className="section-subtitle">
            {props.sectionSubtitle ?? (
              <Fragment>
                <span className="integrations-container1-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_HTrXUG'),
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
                    <span className="integrations-container1-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_yHbFth'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="section-content">
                {props.sectionContent1 ?? (
                  <Fragment>
                    <span className="integrations-container1-text26">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ReEAsj'),
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
                      <span className="integrations-container1-text22">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_sv2Oc0'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="int-tag">
                  {props.intTag1 ?? (
                    <Fragment>
                      <span className="integrations-container1-text16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_ONn2cu'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="int-tag">
                  {props.intTag2 ?? (
                    <Fragment>
                      <span className="integrations-container1-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Lmo3gc'),
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
                      <span className="integrations-container1-text23">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_F2c4Pf'),
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
                      <span className="integrations-container1-text24">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_vlC8zw'),
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
                      <span className="integrations-container1-text25">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_MiQ-yg'),
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
                      <span className="integrations-container1-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_qhvoVB'),
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
                  <span className="integrations-container1-text17">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_yPNebM'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h4>
            <p className="section-content">
              {props.sectionContent ?? (
                <Fragment>
                  <span className="integrations-container1-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_4yG5Qg'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .integrations-container1-thq-integrations-container-elm {
            position: relative;
          }
          .integrations-container1-text14 {
            display: inline-block;
          }
          .integrations-container1-text15 {
            display: inline-block;
          }
          .integrations-container1-text16 {
            display: inline-block;
          }
          .integrations-container1-text17 {
            display: inline-block;
          }
          .integrations-container1-text18 {
            display: inline-block;
          }
          .integrations-container1-text19 {
            display: inline-block;
          }
          .integrations-container1-text20 {
            display: inline-block;
          }
          .integrations-container1-text21 {
            display: inline-block;
          }
          .integrations-container1-text22 {
            display: inline-block;
          }
          .integrations-container1-text23 {
            display: inline-block;
          }
          .integrations-container1-text24 {
            display: inline-block;
          }
          .integrations-container1-text25 {
            display: inline-block;
          }
          .integrations-container1-text26 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

IntegrationsContainer1.defaultProps = {
  sectionContent: undefined,
  sectionTitle: undefined,
  intTag1: undefined,
  sectionTitle1: undefined,
  intTag2: undefined,
  sectionTitle2: undefined,
  text3: undefined,
  sectionSubtitle: undefined,
  intTag: undefined,
  text: undefined,
  text1: undefined,
  text2: undefined,
  sectionContent1: undefined,
}

IntegrationsContainer1.propTypes = {
  sectionContent: PropTypes.element,
  sectionTitle: PropTypes.element,
  intTag1: PropTypes.element,
  sectionTitle1: PropTypes.element,
  intTag2: PropTypes.element,
  sectionTitle2: PropTypes.element,
  text3: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  intTag: PropTypes.element,
  text: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
  sectionContent1: PropTypes.element,
}

export default IntegrationsContainer1
