import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const StatsSection1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="stats-section1-thq-stats-section-elm stats-section">
        <div className="stats-bento-layout">
          <div className="stats-cell-wide">
            <div className="stats-visual-bg">
              <img
                alt={props.statsImgBgAlt}
                src={props.statsImgBgSrc}
                className="stats-img-bg"
              />
            </div>
            <div className="stats-content">
              <h2 className="section-title">
                {props.sectionTitle ?? (
                  <Fragment>
                    <span className="stats-section1-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_eSH1VP'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="section-content">
                {props.sectionContent ?? (
                  <Fragment>
                    <span className="stats-section1-text22">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_De3Wsa'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="stats-main-number">
                <span>
                  {props.text ?? (
                    <Fragment>
                      <span className="stats-section1-text21">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_oJSZW1'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <p className="section-subtitle">
                {props.sectionSubtitle ?? (
                  <Fragment>
                    <span className="stats-section1-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_jubBgF'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="stats-cell-narrow">
            <div className="stat-item">
              <div className="stat-value">
                <span>
                  {props.text1 ?? (
                    <Fragment>
                      <span className="stats-section1-text16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_s4eW52'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="stat-label">
                <span>
                  {props.text2 ?? (
                    <Fragment>
                      <span className="stats-section1-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_ir7KH9'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="stats-cell-narrow">
            <div className="stat-item">
              <div className="stat-value">
                <span>
                  {props.text3 ?? (
                    <Fragment>
                      <span className="stats-section1-text15">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_NEFZOg'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="stat-label">
                <span>
                  {props.text4 ?? (
                    <Fragment>
                      <span className="stats-section1-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_0IyYt-'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .stats-section1-thq-stats-section-elm {
            position: relative;
          }
          .stats-section1-text15 {
            display: inline-block;
          }
          .stats-section1-text16 {
            display: inline-block;
          }
          .stats-section1-text17 {
            display: inline-block;
          }
          .stats-section1-text18 {
            display: inline-block;
          }
          .stats-section1-text19 {
            display: inline-block;
          }
          .stats-section1-text20 {
            display: inline-block;
          }
          .stats-section1-text21 {
            display: inline-block;
          }
          .stats-section1-text22 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

StatsSection1.defaultProps = {
  text3: undefined,
  text1: undefined,
  sectionTitle: undefined,
  sectionSubtitle: undefined,
  statsImgBgAlt: 'Data background',
  text2: undefined,
  text4: undefined,
  text: undefined,
  sectionContent: undefined,
  statsImgBgSrc:
    'https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg?auto=compress&cs=tinysrgb&w=1500',
}

StatsSection1.propTypes = {
  text3: PropTypes.element,
  text1: PropTypes.element,
  sectionTitle: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  statsImgBgAlt: PropTypes.string,
  text2: PropTypes.element,
  text4: PropTypes.element,
  text: PropTypes.element,
  sectionContent: PropTypes.element,
  statsImgBgSrc: PropTypes.string,
}

export default StatsSection1
