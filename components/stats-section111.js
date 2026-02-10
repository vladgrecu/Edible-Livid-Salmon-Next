import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const StatsSection111 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="stats-section111-thq-stats-section-elm stats-section">
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
                    <span className="stats-section111-text19">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_fVJL8t'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="section-content">
                {props.sectionContent ?? (
                  <Fragment>
                    <span className="stats-section111-text15">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_G4tLe_'),
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
                      <span className="stats-section111-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Kkxgf2'),
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
                    <span className="stats-section111-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_u7MFzD'),
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
                      <span className="stats-section111-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_vwTt4o'),
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
                      <span className="stats-section111-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_L0ZyQC'),
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
                      <span className="stats-section111-text22">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Z73M1o'),
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
                      <span className="stats-section111-text16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_v7JnRB'),
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
          .stats-section111-thq-stats-section-elm {
            position: relative;
          }
          .stats-section111-text15 {
            display: inline-block;
          }
          .stats-section111-text16 {
            display: inline-block;
          }
          .stats-section111-text17 {
            display: inline-block;
          }
          .stats-section111-text18 {
            display: inline-block;
          }
          .stats-section111-text19 {
            display: inline-block;
          }
          .stats-section111-text20 {
            display: inline-block;
          }
          .stats-section111-text21 {
            display: inline-block;
          }
          .stats-section111-text22 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

StatsSection111.defaultProps = {
  sectionContent: undefined,
  text4: undefined,
  text: undefined,
  text2: undefined,
  sectionTitle: undefined,
  text1: undefined,
  statsImgBgAlt: 'Data background',
  sectionSubtitle: undefined,
  text3: undefined,
  statsImgBgSrc:
    'https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg?auto=compress&cs=tinysrgb&w=1500',
}

StatsSection111.propTypes = {
  sectionContent: PropTypes.element,
  text4: PropTypes.element,
  text: PropTypes.element,
  text2: PropTypes.element,
  sectionTitle: PropTypes.element,
  text1: PropTypes.element,
  statsImgBgAlt: PropTypes.string,
  sectionSubtitle: PropTypes.element,
  text3: PropTypes.element,
  statsImgBgSrc: PropTypes.string,
}

export default StatsSection111
