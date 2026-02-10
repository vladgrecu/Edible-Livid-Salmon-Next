import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CtaSection1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="cta-section1-thq-cta-section-elm cta-section">
        <div className="cta-bento-grid">
          <div className="cta-cell-main">
            <h2 className="section-title">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="cta-section1-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_UedB6J'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="section-subtitle">
              {props.sectionSubtitle ?? (
                <Fragment>
                  <span className="cta-section1-text17">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_YyNYfQ'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <form
              action="/submit"
              method="POST"
              data-form-id="8b4a7b6e-fa0e-4762-9558-6bb307ee2696"
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
                        <span className="cta-section1-text27">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_OHXpvZ'),
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
                    <span className="cta-section1-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_unHOxK'),
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
                  <span className="cta-section1-text18">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_vfFlaG'),
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
                        <span className="cta-section1-text23">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_MpWLFX'),
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
                        <span className="cta-section1-text24">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_o3hGij'),
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
                        <span className="cta-section1-text25">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_TKWSu0'),
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
                        <span className="cta-section1-text26">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_qzaNKF'),
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
                  <span className="cta-section1-text19">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_bYIXIL'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="section-content">
              {props.sectionContent ?? (
                <Fragment>
                  <span className="cta-section1-text20">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_lpTSss'),
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
                      <span className="cta-section1-text22">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Mhf2y8'),
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
          .cta-section1-thq-cta-section-elm {
            position: relative;
          }
          .cta-section1-text16 {
            display: inline-block;
          }
          .cta-section1-text17 {
            display: inline-block;
          }
          .cta-section1-text18 {
            display: inline-block;
          }
          .cta-section1-text19 {
            display: inline-block;
          }
          .cta-section1-text20 {
            display: inline-block;
          }
          .cta-section1-text21 {
            display: inline-block;
          }
          .cta-section1-text22 {
            display: inline-block;
          }
          .cta-section1-text23 {
            display: inline-block;
          }
          .cta-section1-text24 {
            display: inline-block;
          }
          .cta-section1-text25 {
            display: inline-block;
          }
          .cta-section1-text26 {
            display: inline-block;
          }
          .cta-section1-text27 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

CtaSection1.defaultProps = {
  sectionTitle: undefined,
  sectionSubtitle: undefined,
  sectionTitle1: undefined,
  sectionTitle2: undefined,
  sectionContent: undefined,
  formDisclaimer: undefined,
  text: undefined,
  formInputPlaceholder: 'Enter your work email',
  text1: undefined,
  text2: undefined,
  text3: undefined,
  text4: undefined,
  btn: undefined,
}

CtaSection1.propTypes = {
  sectionTitle: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  sectionTitle1: PropTypes.element,
  sectionTitle2: PropTypes.element,
  sectionContent: PropTypes.element,
  formDisclaimer: PropTypes.element,
  text: PropTypes.element,
  formInputPlaceholder: PropTypes.string,
  text1: PropTypes.element,
  text2: PropTypes.element,
  text3: PropTypes.element,
  text4: PropTypes.element,
  btn: PropTypes.element,
}

export default CtaSection1
