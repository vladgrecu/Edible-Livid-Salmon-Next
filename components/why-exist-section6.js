import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const WhyExistSection6 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section
        className={`why-exist-section6-thq-thq-why-exist-section-elm-elm why-exist-section ${props.rootClassName} `}
      >
        <div className="nebula-bg"></div>
        <div className="why-exist-container">
          <div className="why-exist-grid">
            <div className="glass-plaque-wrapper">
              <div className="glass-plaque">
                <div className="diagonal-sweep"></div>
                <h2 className="about-nimbuscloud-hero-title hero-title">
                  {props.heroTitle ?? (
                    <Fragment>
                      <span className="why-exist-section6-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('HeroTitle_AsTP9M'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="plaque-statement">
                  {props.plaqueStatement ?? (
                    <Fragment>
                      <span className="why-exist-section6-text8">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('PlaqueStatement_2AdWe4'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="signal-meter">
                  <div className="meter-bar"></div>
                  <div className="meter-bar"></div>
                  <div className="meter-bar"></div>
                  <div className="meter-bar inactive"></div>
                </div>
              </div>
            </div>
            <div className="narrative-card">
              <p className="typewriter-reveal section-content">
                {props.sectionContent ?? (
                  <Fragment>
                    <span className="why-exist-section6-text5">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_6J3vXT'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <blockquote className="pull-quote">
                <span className="quote-mark">
                  {props.quoteMark ?? (
                    <Fragment>
                      <span className="why-exist-section6-text2">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('QuoteMark_ir77q1'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span>
                  {props.text ?? (
                    <Fragment>
                      <span className="why-exist-section6-text6">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_VXq0cQ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="quote-mark">
                  {props.quoteMark1 ?? (
                    <Fragment>
                      <span className="why-exist-section6-text7">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('QuoteMark_ynpU--'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </blockquote>
              <p className="closing-statement">
                {props.closingStatement ?? (
                  <Fragment>
                    <span className="why-exist-section6-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('ClosingStatement_EaCVCY'),
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
          .why-exist-section6-thq-thq-why-exist-section-elm-elm {
            position: relative;
          }
          .why-exist-section6-text2 {
            display: inline-block;
          }
          .why-exist-section6-text3 {
            display: inline-block;
          }
          .why-exist-section6-text4 {
            display: inline-block;
          }
          .why-exist-section6-text5 {
            display: inline-block;
          }
          .why-exist-section6-text6 {
            display: inline-block;
          }
          .why-exist-section6-text7 {
            display: inline-block;
          }
          .why-exist-section6-text8 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

WhyExistSection6.defaultProps = {
  rootClassName: '',
  quoteMark: undefined,
  closingStatement: undefined,
  heroTitle: undefined,
  sectionContent: undefined,
  text: undefined,
  quoteMark1: undefined,
  plaqueStatement: undefined,
}

WhyExistSection6.propTypes = {
  rootClassName: PropTypes.string,
  quoteMark: PropTypes.element,
  closingStatement: PropTypes.element,
  heroTitle: PropTypes.element,
  sectionContent: PropTypes.element,
  text: PropTypes.element,
  quoteMark1: PropTypes.element,
  plaqueStatement: PropTypes.element,
}

export default WhyExistSection6
