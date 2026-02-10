import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const IntegrationsContainer = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="integrations-container-thq-integrations-container-elm integrations-container">
        <div className="integrations-header">
          <h2 className="section-title">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="integrations-container-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_AadAFR'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <p className="section-subtitle">
            {props.sectionSubtitle ?? (
              <Fragment>
                <span className="integrations-container-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionSubtitle_7ujEZz'),
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
                    <span className="integrations-container-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionTitle_yTfi6F'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="section-content">
                {props.sectionContent1 ?? (
                  <Fragment>
                    <span className="integrations-container-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_vCcH-p'),
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
                      <span className="integrations-container-text14">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('IntTag_Mfa0FB'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="int-tag">
                  {props.intTag1 ?? (
                    <Fragment>
                      <span className="integrations-container-text22">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('IntTag_c1uyMh'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="int-tag">
                  {props.intTag2 ?? (
                    <Fragment>
                      <span className="integrations-container-text21">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('IntTag_mNI_Ji'),
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
                      <span className="integrations-container-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_acrTIV'),
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
                      <span className="integrations-container-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_HgQ34i'),
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
                      <span className="integrations-container-text16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_smhmDg'),
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
                      <span className="integrations-container-text23">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_h3Rp6e'),
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
                  <span className="integrations-container-text24">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_Qqk4Kh'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h4>
            <p className="section-content">
              {props.sectionContent ?? (
                <Fragment>
                  <span className="integrations-container-text26">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_1n-Oin'),
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
          .integrations-container-thq-integrations-container-elm {
            position: relative;
          }
          .integrations-container-text14 {
            display: inline-block;
          }
          .integrations-container-text15 {
            display: inline-block;
          }
          .integrations-container-text16 {
            display: inline-block;
          }
          .integrations-container-text17 {
            display: inline-block;
          }
          .integrations-container-text18 {
            display: inline-block;
          }
          .integrations-container-text19 {
            display: inline-block;
          }
          .integrations-container-text20 {
            display: inline-block;
          }
          .integrations-container-text21 {
            display: inline-block;
          }
          .integrations-container-text22 {
            display: inline-block;
          }
          .integrations-container-text23 {
            display: inline-block;
          }
          .integrations-container-text24 {
            display: inline-block;
          }
          .integrations-container-text25 {
            display: inline-block;
          }
          .integrations-container-text26 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

IntegrationsContainer.defaultProps = {
  intTag: undefined,
  sectionTitle: undefined,
  text2: undefined,
  text1: undefined,
  text: undefined,
  sectionContent1: undefined,
  sectionTitle2: undefined,
  intTag2: undefined,
  intTag1: undefined,
  text3: undefined,
  sectionTitle1: undefined,
  sectionSubtitle: undefined,
  sectionContent: undefined,
}

IntegrationsContainer.propTypes = {
  intTag: PropTypes.element,
  sectionTitle: PropTypes.element,
  text2: PropTypes.element,
  text1: PropTypes.element,
  text: PropTypes.element,
  sectionContent1: PropTypes.element,
  sectionTitle2: PropTypes.element,
  intTag2: PropTypes.element,
  intTag1: PropTypes.element,
  text3: PropTypes.element,
  sectionTitle1: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  sectionContent: PropTypes.element,
}

export default IntegrationsContainer
