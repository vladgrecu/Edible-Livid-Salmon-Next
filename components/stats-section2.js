import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const StatsSection2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="stats-section2-thq-stats-section-elm stats-section">
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
                    <span className="stats-section2-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionTitle_41JvtA'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="section-content">
                {props.sectionContent ?? (
                  <Fragment>
                    <span className="stats-section2-text16">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent__QRLZb'),
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
                      <span className="stats-section2-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_CUs54A'),
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
                    <span className="stats-section2-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionSubtitle_tFSLAw'),
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
                      <span className="stats-section2-text22">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_RdeJCd'),
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
                      <span className="stats-section2-text21">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_uLLiK1'),
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
                      <span className="stats-section2-text15">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_U0wKFX'),
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
                      <span className="stats-section2-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_FCYumu'),
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
          .stats-section2-thq-stats-section-elm {
            position: relative;
          }
          .stats-section2-text15 {
            display: inline-block;
          }
          .stats-section2-text16 {
            display: inline-block;
          }
          .stats-section2-text17 {
            display: inline-block;
          }
          .stats-section2-text18 {
            display: inline-block;
          }
          .stats-section2-text19 {
            display: inline-block;
          }
          .stats-section2-text20 {
            display: inline-block;
          }
          .stats-section2-text21 {
            display: inline-block;
          }
          .stats-section2-text22 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

StatsSection2.defaultProps = {
  text3: undefined,
  sectionContent: undefined,
  statsImgBgAlt: 'Data background',
  text4: undefined,
  statsImgBgSrc:
    'https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg?auto=compress&cs=tinysrgb&w=1500',
  text: undefined,
  sectionSubtitle: undefined,
  sectionTitle: undefined,
  text2: undefined,
  text1: undefined,
}

StatsSection2.propTypes = {
  text3: PropTypes.element,
  sectionContent: PropTypes.element,
  statsImgBgAlt: PropTypes.string,
  text4: PropTypes.element,
  statsImgBgSrc: PropTypes.string,
  text: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  sectionTitle: PropTypes.element,
  text2: PropTypes.element,
  text1: PropTypes.element,
}

export default StatsSection2
