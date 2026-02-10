import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CtaSection113 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section
        className={`cta-section113-thq-thq-cta-section-elm-elm cta-section ${props.rootClassName} `}
      >
        <div className="cta-bento-grid">
          <div className="cta-cell-main">
            <h2 className="section-title">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="cta-section113-text20">
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
                  <span className="cta-section113-text17">
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
              action="https://play.teleporthq.io/static/svg/default-img.svg"
              method="POST"
              data-form-id="5ec1fca7-dbf3-427a-905c-1d24cb20206b"
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
                        <span className="cta-section113-text23">
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
                    <span className="cta-section113-text22">
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
                  <span className="cta-section113-text16">
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
                        <span className="cta-section113-text27">
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
                        <span className="cta-section113-text18">
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
                        <span className="cta-section113-text21">
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
                        <span className="cta-section113-text26">
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
                  <span className="cta-section113-text25">
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
                  <span className="cta-section113-text24">
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
                      <span className="cta-section113-text19">
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
          .cta-section113-thq-thq-cta-section-elm-elm {
            position: relative;
          }
          .cta-section113-text16 {
            display: inline-block;
          }
          .cta-section113-text17 {
            display: inline-block;
          }
          .cta-section113-text18 {
            display: inline-block;
          }
          .cta-section113-text19 {
            display: inline-block;
          }
          .cta-section113-text20 {
            display: inline-block;
          }
          .cta-section113-text21 {
            display: inline-block;
          }
          .cta-section113-text22 {
            display: inline-block;
          }
          .cta-section113-text23 {
            display: inline-block;
          }
          .cta-section113-text24 {
            display: inline-block;
          }
          .cta-section113-text25 {
            display: inline-block;
          }
          .cta-section113-text26 {
            display: inline-block;
          }
          .cta-section113-text27 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

CtaSection113.defaultProps = {
  rootClassName: '',
  sectionTitle1: undefined,
  sectionSubtitle: undefined,
  text2: undefined,
  text: undefined,
  sectionTitle: undefined,
  text3: undefined,
  formDisclaimer: undefined,
  btn: undefined,
  sectionContent: undefined,
  sectionTitle2: undefined,
  text4: undefined,
  text1: undefined,
  formInputPlaceholder: 'Enter your work email',
}

CtaSection113.propTypes = {
  rootClassName: PropTypes.string,
  sectionTitle1: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  text2: PropTypes.element,
  text: PropTypes.element,
  sectionTitle: PropTypes.element,
  text3: PropTypes.element,
  formDisclaimer: PropTypes.element,
  btn: PropTypes.element,
  sectionContent: PropTypes.element,
  sectionTitle2: PropTypes.element,
  text4: PropTypes.element,
  text1: PropTypes.element,
  formInputPlaceholder: PropTypes.string,
}

export default CtaSection113
