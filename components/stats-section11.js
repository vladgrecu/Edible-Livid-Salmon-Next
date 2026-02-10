import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const StatsSection11 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="stats-section11-thq-stats-section-elm stats-section">
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
                    <span className="stats-section11-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_KkyHuT'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="section-content">
                {props.sectionContent ?? (
                  <Fragment>
                    <span className="stats-section11-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_1Pz6qg'),
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
                      <span className="stats-section11-text15">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_i3tLtG'),
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
                    <span className="stats-section11-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Mdlv1J'),
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
                      <span className="stats-section11-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_7c5WTN'),
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
                      <span className="stats-section11-text21">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_yOND9I'),
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
                      <span className="stats-section11-text22">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_nepEVc'),
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
                      <span className="stats-section11-text16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_NZ9Ucr'),
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
          .stats-section11-thq-stats-section-elm {
            position: relative;
          }
          .stats-section11-text15 {
            display: inline-block;
          }
          .stats-section11-text16 {
            display: inline-block;
          }
          .stats-section11-text17 {
            display: inline-block;
          }
          .stats-section11-text18 {
            display: inline-block;
          }
          .stats-section11-text19 {
            display: inline-block;
          }
          .stats-section11-text20 {
            display: inline-block;
          }
          .stats-section11-text21 {
            display: inline-block;
          }
          .stats-section11-text22 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

StatsSection11.defaultProps = {
  text: undefined,
  text4: undefined,
  sectionContent: undefined,
  sectionSubtitle: undefined,
  text1: undefined,
  sectionTitle: undefined,
  statsImgBgSrc:
    'https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg?auto=compress&cs=tinysrgb&w=1500',
  statsImgBgAlt: 'Data background',
  text2: undefined,
  text3: undefined,
}

StatsSection11.propTypes = {
  text: PropTypes.element,
  text4: PropTypes.element,
  sectionContent: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  text1: PropTypes.element,
  sectionTitle: PropTypes.element,
  statsImgBgSrc: PropTypes.string,
  statsImgBgAlt: PropTypes.string,
  text2: PropTypes.element,
  text3: PropTypes.element,
}

export default StatsSection11
