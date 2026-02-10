import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CtaBandSection = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="cta-band-section-thq-cta-band-section-elm cta-band-section">
        <div className="portal-visual">
          <div className="portal-ring ring-outer"></div>
          <div className="portal-ring ring-inner"></div>
          <div className="portal-glow"></div>
        </div>
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="section-title">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="cta-band-section-text3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionTitle_NRYt8g'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="section-content">
              {props.sectionContent ?? (
                <Fragment>
                  <span className="cta-band-section-text4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_g5YrGU'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="cta-actions">
              <a href="#">
                <div className="btn btn-xl btn-primary glowing-btn">
                  <span>
                    {props.text ?? (
                      <Fragment>
                        <span className="cta-band-section-text5">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_dtJb5H'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </a>
              <a href="#">
                <div className="btn btn-xl trace-btn btn-outline">
                  <span>
                    {props.text1 ?? (
                      <Fragment>
                        <span className="cta-band-section-text6">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_3GGNSY'),
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
        </div>
      </section>
      <style jsx>
        {`
          .cta-band-section-thq-cta-band-section-elm {
            position: relative;
          }
          .cta-band-section-text3 {
            display: inline-block;
          }
          .cta-band-section-text4 {
            display: inline-block;
          }
          .cta-band-section-text5 {
            display: inline-block;
          }
          .cta-band-section-text6 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

CtaBandSection.defaultProps = {
  sectionTitle: undefined,
  sectionContent: undefined,
  text: undefined,
  text1: undefined,
}

CtaBandSection.propTypes = {
  sectionTitle: PropTypes.element,
  sectionContent: PropTypes.element,
  text: PropTypes.element,
  text1: PropTypes.element,
}

export default CtaBandSection
