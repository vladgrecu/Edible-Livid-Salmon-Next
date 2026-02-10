import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TeamSection6 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section
        className={`team-section6-thq-thq-team-section-elm-elm team-section ${props.rootClassName} `}
      >
        <div className="constellation-bg"></div>
        <div className="team-container">
          <div className="team-layout">
            <div className="team-info">
              <h2 className="section-title">
                {props.sectionTitle ?? (
                  <Fragment>
                    <span className="team-section6-text13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionTitle_Q3dAHu'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="section-content">
                {props.sectionContent ?? (
                  <Fragment>
                    <span className="team-section6-text16">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_8-aMB9'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="stats-chips">
                <span className="chip">
                  {props.chip ?? (
                    <Fragment>
                      <span className="team-section6-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('Chip_aFjhki'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="chip">
                  {props.chip1 ?? (
                    <Fragment>
                      <span className="team-section6-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('Chip_h8YkF8'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="chip">
                  {props.chip2 ?? (
                    <Fragment>
                      <span className="team-section6-text12">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('Chip_569p7r'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="team-grid">
              <div className="glass-card team-card">
                <div className="holo-avatar">
                  <div className="signal-ring"></div>
                </div>
                <span className="section-subtitle">
                  {props.sectionSubtitle ?? (
                    <Fragment>
                      <span className="team-section6-text10">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionSubtitle_v1bzEg'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="glass-card team-card">
                <div className="holo-avatar">
                  <div className="signal-ring"></div>
                </div>
                <span className="section-subtitle">
                  {props.sectionSubtitle1 ?? (
                    <Fragment>
                      <span className="team-section6-text14">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionSubtitle_97kg8S'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="glass-card team-card">
                <div className="holo-avatar">
                  <div className="signal-ring"></div>
                </div>
                <span className="section-subtitle">
                  {props.sectionSubtitle2 ?? (
                    <Fragment>
                      <span className="team-section6-text15">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionSubtitle_AF7cNd'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="glass-card team-card">
                <div className="holo-avatar">
                  <div className="signal-ring"></div>
                </div>
                <span className="section-subtitle">
                  {props.sectionSubtitle3 ?? (
                    <Fragment>
                      <span className="team-section6-text11">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionSubtitle_NkOPry'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="glass-card team-card">
                <div className="holo-avatar">
                  <div className="signal-ring"></div>
                </div>
                <span className="section-subtitle">
                  {props.sectionSubtitle4 ?? (
                    <Fragment>
                      <span className="team-section6-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionSubtitle_FLzrCF'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="glass-card team-card">
                <div className="holo-avatar">
                  <div className="signal-ring"></div>
                </div>
                <span className="section-subtitle">
                  {props.sectionSubtitle5 ?? (
                    <Fragment>
                      <span className="team-section6-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionSubtitle_Jvy8_G'),
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
          .team-section6-thq-thq-team-section-elm-elm {
            position: relative;
          }
          .team-section6-text10 {
            display: inline-block;
          }
          .team-section6-text11 {
            display: inline-block;
          }
          .team-section6-text12 {
            display: inline-block;
          }
          .team-section6-text13 {
            display: inline-block;
          }
          .team-section6-text14 {
            display: inline-block;
          }
          .team-section6-text15 {
            display: inline-block;
          }
          .team-section6-text16 {
            display: inline-block;
          }
          .team-section6-text17 {
            display: inline-block;
          }
          .team-section6-text18 {
            display: inline-block;
          }
          .team-section6-text19 {
            display: inline-block;
          }
          .team-section6-text20 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

TeamSection6.defaultProps = {
  sectionSubtitle: undefined,
  sectionSubtitle3: undefined,
  chip2: undefined,
  sectionTitle: undefined,
  rootClassName: '',
  sectionSubtitle1: undefined,
  sectionSubtitle2: undefined,
  sectionContent: undefined,
  chip1: undefined,
  chip: undefined,
  sectionSubtitle5: undefined,
  sectionSubtitle4: undefined,
}

TeamSection6.propTypes = {
  sectionSubtitle: PropTypes.element,
  sectionSubtitle3: PropTypes.element,
  chip2: PropTypes.element,
  sectionTitle: PropTypes.element,
  rootClassName: PropTypes.string,
  sectionSubtitle1: PropTypes.element,
  sectionSubtitle2: PropTypes.element,
  sectionContent: PropTypes.element,
  chip1: PropTypes.element,
  chip: PropTypes.element,
  sectionSubtitle5: PropTypes.element,
  sectionSubtitle4: PropTypes.element,
}

export default TeamSection6
