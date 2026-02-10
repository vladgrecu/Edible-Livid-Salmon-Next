import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CtaSection = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="cta-section-thq-cta-section-elm cta-section">
        <div className="cta-bento-grid">
          <div className="cta-cell-main">
            <h2 className="section-title">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="cta-section-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle__X597L'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="section-subtitle">
              {props.sectionSubtitle ?? (
                <Fragment>
                  <span className="cta-section-text17">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_4e0AUv'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <form
              action="/submit"
              method="POST"
              data-form-id="9121fdb5-6740-4b20-a4d6-97c48f91b8f0"
              className="cta-form"
            >
              <div className="form-group">
                <input
                  type="email"
                  id="thq_textinput_g3vS"
                  name="textinput"
                  required="true"
                  placeholder={props.formInputPlaceholder}
                  data-form-field-id="thq_textinput_g3vS"
                  className="form-input"
                />
                <button
                  id="thq_button_KKji"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_KKji"
                  className="btn btn-accent"
                >
                  <span>
                    {props.btn ?? (
                      <Fragment>
                        <span className="cta-section-text23">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('Btn_2SYWsn'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <p className="form-disclaimer">
                {props.formDisclaimer ?? (
                  <Fragment>
                    <span className="cta-section-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('FormDisclaimer_CkEwis'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </form>
          </div>
          <div className="cta-cell-links">
            <h3 className="section-title">
              {props.sectionTitle1 ?? (
                <Fragment>
                  <span className="cta-section-text18">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_hOouMq'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h3>
            <nav className="cta-nav">
              <a href="#">
                <div className="btn-link">
                  <span>
                    {props.text1 ?? (
                      <Fragment>
                        <span className="cta-section-text24">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_7X6e9H'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </a>
              <a href="#">
                <div className="btn-link">
                  <span>
                    {props.text2 ?? (
                      <Fragment>
                        <span className="cta-section-text25">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_mLyKRR'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </a>
              <a href="#">
                <div className="btn-link">
                  <span>
                    {props.text3 ?? (
                      <Fragment>
                        <span className="cta-section-text26">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_fcmFvm'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </a>
              <a href="#">
                <div className="btn-link">
                  <span>
                    {props.text4 ?? (
                      <Fragment>
                        <span className="cta-section-text27">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_yJjPON'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </a>
            </nav>
          </div>
          <div className="cta-cell-contact">
            <h3 className="section-title">
              {props.sectionTitle2 ?? (
                <Fragment>
                  <span className="cta-section-text19">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_NO2cjc'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="section-content">
              {props.sectionContent ?? (
                <Fragment>
                  <span className="cta-section-text20">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_z68wo9'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <a href="mailto:contact@flowvista.com?subject=">
              <div className="btn btn-sm btn-outline">
                <span>
                  {props.text ?? (
                    <Fragment>
                      <span className="cta-section-text22">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_drGGEA'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .cta-section-thq-cta-section-elm {
            position: relative;
          }
          .cta-section-text16 {
            display: inline-block;
          }
          .cta-section-text17 {
            display: inline-block;
          }
          .cta-section-text18 {
            display: inline-block;
          }
          .cta-section-text19 {
            display: inline-block;
          }
          .cta-section-text20 {
            display: inline-block;
          }
          .cta-section-text21 {
            display: inline-block;
          }
          .cta-section-text22 {
            display: inline-block;
          }
          .cta-section-text23 {
            display: inline-block;
          }
          .cta-section-text24 {
            display: inline-block;
          }
          .cta-section-text25 {
            display: inline-block;
          }
          .cta-section-text26 {
            display: inline-block;
          }
          .cta-section-text27 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

CtaSection.defaultProps = {
  sectionTitle: undefined,
  sectionSubtitle: undefined,
  sectionTitle1: undefined,
  sectionTitle2: undefined,
  sectionContent: undefined,
  formDisclaimer: undefined,
  text: undefined,
  formInputPlaceholder: 'Enter your work email',
  btn: undefined,
  text1: undefined,
  text2: undefined,
  text3: undefined,
  text4: undefined,
}

CtaSection.propTypes = {
  sectionTitle: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  sectionTitle1: PropTypes.element,
  sectionTitle2: PropTypes.element,
  sectionContent: PropTypes.element,
  formDisclaimer: PropTypes.element,
  text: PropTypes.element,
  formInputPlaceholder: PropTypes.string,
  btn: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
  text3: PropTypes.element,
  text4: PropTypes.element,
}

export default CtaSection
