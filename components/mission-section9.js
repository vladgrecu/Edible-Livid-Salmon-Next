import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const MissionSection9 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section
        className={`mission-section9-thq-thq-mission-section-elm-elm mission-section ${props.rootClassName} `}
      >
        <div className="mission-container">
          <div className="mission-grid">
            <div className="mission-copy">
              <h2 className="section-title">
                {props.sectionTitle ?? (
                  <Fragment>
                    <span className="mission-section9-text8">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionTitle_Vy3dJh'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="section-content">
                {props.sectionContent ?? (
                  <Fragment>
                    <span className="mission-section9-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_82ZIyq'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="energy-beam"></div>
            </div>
            <div className="mission-stack">
              <div className="magnetic-card pillar-card">
                <div className="notch"></div>
                <h3 className="section-subtitle">
                  {props.sectionSubtitle ?? (
                    <Fragment>
                      <span className="mission-section9-text6">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionSubtitle_r6ritu'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="section-content">
                  {props.sectionContent1 ?? (
                    <Fragment>
                      <span className="mission-section9-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionContent_jbrVay'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="magnetic-card pillar-card">
                <div className="notch"></div>
                <h3 className="section-subtitle">
                  {props.sectionSubtitle1 ?? (
                    <Fragment>
                      <span className="mission-section9-text1">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionSubtitle_iQoQu-'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="section-content">
                  {props.sectionContent2 ?? (
                    <Fragment>
                      <span className="mission-section9-text7">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionContent_wRqrtu'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="magnetic-card pillar-card">
                <div className="notch"></div>
                <h3 className="section-subtitle">
                  {props.sectionSubtitle2 ?? (
                    <Fragment>
                      <span className="mission-section9-text5">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionSubtitle_36F2i0'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="section-content">
                  {props.sectionContent3 ?? (
                    <Fragment>
                      <span className="mission-section9-text2">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('SectionContent_mPa0rx'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .mission-section9-thq-thq-mission-section-elm-elm {
            position: relative;
          }
          .mission-section9-text1 {
            display: inline-block;
          }
          .mission-section9-text2 {
            display: inline-block;
          }
          .mission-section9-text3 {
            display: inline-block;
          }
          .mission-section9-text4 {
            display: inline-block;
          }
          .mission-section9-text5 {
            display: inline-block;
          }
          .mission-section9-text6 {
            display: inline-block;
          }
          .mission-section9-text7 {
            display: inline-block;
          }
          .mission-section9-text8 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

MissionSection9.defaultProps = {
  sectionSubtitle1: undefined,
  sectionContent3: undefined,
  sectionContent: undefined,
  sectionContent1: undefined,
  sectionSubtitle2: undefined,
  sectionSubtitle: undefined,
  rootClassName: '',
  sectionContent2: undefined,
  sectionTitle: undefined,
}

MissionSection9.propTypes = {
  sectionSubtitle1: PropTypes.element,
  sectionContent3: PropTypes.element,
  sectionContent: PropTypes.element,
  sectionContent1: PropTypes.element,
  sectionSubtitle2: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  rootClassName: PropTypes.string,
  sectionContent2: PropTypes.element,
  sectionTitle: PropTypes.element,
}

export default MissionSection9
