import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const StatsSection = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="stats-section-thq-stats-section-elm stats-section">
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
                    <span className="stats-section-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionTitle_k6k---'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="section-content">
                {props.sectionContent ?? (
                  <Fragment>
                    <span className="stats-section-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_s0GGUa'),
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
                      <span className="stats-section-text22">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_eClKji'),
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
                    <span className="stats-section-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionSubtitle_wZz4Ad'),
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
                      <span className="stats-section-text15">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_DJplSA'),
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
                      <span className="stats-section-text16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_s31v15'),
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
                      <span className="stats-section-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_bdQ2zE'),
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
                      <span className="stats-section-text21">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_8VvmUk'),
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
          .stats-section-thq-stats-section-elm {
            position: relative;
          }
          .stats-section-text15 {
            display: inline-block;
          }
          .stats-section-text16 {
            display: inline-block;
          }
          .stats-section-text17 {
            display: inline-block;
          }
          .stats-section-text18 {
            display: inline-block;
          }
          .stats-section-text19 {
            display: inline-block;
          }
          .stats-section-text20 {
            display: inline-block;
          }
          .stats-section-text21 {
            display: inline-block;
          }
          .stats-section-text22 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

StatsSection.defaultProps = {
  text1: undefined,
  text2: undefined,
  sectionTitle: undefined,
  text3: undefined,
  sectionSubtitle: undefined,
  statsImgBgAlt: 'Data background',
  sectionContent: undefined,
  statsImgBgSrc:
    'https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg?auto=compress&cs=tinysrgb&w=1500',
  text4: undefined,
  text: undefined,
}

StatsSection.propTypes = {
  text1: PropTypes.element,
  text2: PropTypes.element,
  sectionTitle: PropTypes.element,
  text3: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  statsImgBgAlt: PropTypes.string,
  sectionContent: PropTypes.element,
  statsImgBgSrc: PropTypes.string,
  text4: PropTypes.element,
  text: PropTypes.element,
}

export default StatsSection
