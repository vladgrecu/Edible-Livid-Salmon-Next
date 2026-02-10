import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CtaSection11 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="cta-section11-thq-cta-section-elm cta-section">
        <div className="cta-bento-grid">
          <div className="cta-cell-main">
            <h2 className="section-title">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="cta-section11-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_9MNN9m'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="section-subtitle">
              {props.sectionSubtitle ?? (
                <Fragment>
                  <span className="cta-section11-text17">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_nQCvlb'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <form
              action="/submit"
              method="POST"
              data-form-id="db57e4cf-93d2-44aa-a417-50fb57d39524"
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
                        <span className="cta-section11-text27">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_7wK99s'),
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
                    <span className="cta-section11-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_l_ws6M'),
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
                  <span className="cta-section11-text18">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_r6m2Wb'),
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
                        <span className="cta-section11-text23">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_w4FrrB'),
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
                        <span className="cta-section11-text24">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_e3qp-E'),
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
                        <span className="cta-section11-text25">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_bT58aY'),
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
                        <span className="cta-section11-text26">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_XHC5mV'),
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
                  <span className="cta-section11-text19">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_lgZJT4'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="section-content">
              {props.sectionContent ?? (
                <Fragment>
                  <span className="cta-section11-text20">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Ho_17D'),
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
                      <span className="cta-section11-text22">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_xEC90i'),
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
          .cta-section11-thq-cta-section-elm {
            position: relative;
          }
          .cta-section11-text16 {
            display: inline-block;
          }
          .cta-section11-text17 {
            display: inline-block;
          }
          .cta-section11-text18 {
            display: inline-block;
          }
          .cta-section11-text19 {
            display: inline-block;
          }
          .cta-section11-text20 {
            display: inline-block;
          }
          .cta-section11-text21 {
            display: inline-block;
          }
          .cta-section11-text22 {
            display: inline-block;
          }
          .cta-section11-text23 {
            display: inline-block;
          }
          .cta-section11-text24 {
            display: inline-block;
          }
          .cta-section11-text25 {
            display: inline-block;
          }
          .cta-section11-text26 {
            display: inline-block;
          }
          .cta-section11-text27 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

CtaSection11.defaultProps = {
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

CtaSection11.propTypes = {
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

export default CtaSection11
