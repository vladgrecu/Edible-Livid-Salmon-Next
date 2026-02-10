import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CtaSection3 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="cta-section3-thq-cta-section-elm cta-section">
        <div className="cta-bento-grid">
          <div className="cta-cell-main">
            <h2 className="section-title">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="cta-section3-text27">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_Tfgl6P'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="section-subtitle">
              {props.sectionSubtitle ?? (
                <Fragment>
                  <span className="cta-section3-text19">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionSubtitle_XUZIWM'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <form
              action="/submit"
              method="POST"
              data-form-id="591f1d77-3353-4768-a7fd-e8dc100e8f41"
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
                        <span className="cta-section3-text26">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('Btn_jlbGPX'),
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
                    <span className="cta-section3-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('FormDisclaimer_uciaKl'),
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
                  <span className="cta-section3-text24">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_PrBQ_k'),
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
                        <span className="cta-section3-text25">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_9JE1Ri'),
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
                        <span className="cta-section3-text21">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_SHVBZI'),
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
                        <span className="cta-section3-text23">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_gfFS4T'),
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
                        <span className="cta-section3-text16">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_VSDYYx'),
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
                  <span className="cta-section3-text18">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_Ih8Cbt'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="section-content">
              {props.sectionContent ?? (
                <Fragment>
                  <span className="cta-section3-text17">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_kpurhI'),
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
                      <span className="cta-section3-text22">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_p5E9fX'),
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
          .cta-section3-thq-cta-section-elm {
            position: relative;
          }
          .cta-section3-text16 {
            display: inline-block;
          }
          .cta-section3-text17 {
            display: inline-block;
          }
          .cta-section3-text18 {
            display: inline-block;
          }
          .cta-section3-text19 {
            display: inline-block;
          }
          .cta-section3-text20 {
            display: inline-block;
          }
          .cta-section3-text21 {
            display: inline-block;
          }
          .cta-section3-text22 {
            display: inline-block;
          }
          .cta-section3-text23 {
            display: inline-block;
          }
          .cta-section3-text24 {
            display: inline-block;
          }
          .cta-section3-text25 {
            display: inline-block;
          }
          .cta-section3-text26 {
            display: inline-block;
          }
          .cta-section3-text27 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

CtaSection3.defaultProps = {
  formInputPlaceholder: 'Enter your work email',
  text4: undefined,
  sectionContent: undefined,
  sectionTitle2: undefined,
  sectionSubtitle: undefined,
  formDisclaimer: undefined,
  text2: undefined,
  text: undefined,
  text3: undefined,
  sectionTitle1: undefined,
  text1: undefined,
  btn: undefined,
  sectionTitle: undefined,
}

CtaSection3.propTypes = {
  formInputPlaceholder: PropTypes.string,
  text4: PropTypes.element,
  sectionContent: PropTypes.element,
  sectionTitle2: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  formDisclaimer: PropTypes.element,
  text2: PropTypes.element,
  text: PropTypes.element,
  text3: PropTypes.element,
  sectionTitle1: PropTypes.element,
  text1: PropTypes.element,
  btn: PropTypes.element,
  sectionTitle: PropTypes.element,
}

export default CtaSection3
