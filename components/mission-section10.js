import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const MissionSection10 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section
        className={`mission-section10-thq-thq-mission-section-elm-elm mission-section ${props.rootClassName} `}
      >
        <div className="mission-container">
          <div className="mission-grid">
            <div className="mission-copy">
              <h2 className="section-title">
                {props.sectionTitle ?? (
                  <Fragment>
                    <span className="mission-section10-text7">
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
                    <span className="mission-section10-text2">
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
                      <span className="mission-section10-text8">
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
                      <span className="mission-section10-text4">
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
                      <span className="mission-section10-text3">
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
                      <span className="mission-section10-text5">
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
                      <span className="mission-section10-text6">
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
                      <span className="mission-section10-text1">
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
          .mission-section10-thq-thq-mission-section-elm-elm {
            position: relative;
          }
          .mission-section10-text1 {
            display: inline-block;
          }
          .mission-section10-text2 {
            display: inline-block;
          }
          .mission-section10-text3 {
            display: inline-block;
          }
          .mission-section10-text4 {
            display: inline-block;
          }
          .mission-section10-text5 {
            display: inline-block;
          }
          .mission-section10-text6 {
            display: inline-block;
          }
          .mission-section10-text7 {
            display: inline-block;
          }
          .mission-section10-text8 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

MissionSection10.defaultProps = {
  sectionContent3: undefined,
  sectionContent: undefined,
  sectionSubtitle1: undefined,
  sectionContent1: undefined,
  sectionContent2: undefined,
  sectionSubtitle2: undefined,
  rootClassName: '',
  sectionTitle: undefined,
  sectionSubtitle: undefined,
}

MissionSection10.propTypes = {
  sectionContent3: PropTypes.element,
  sectionContent: PropTypes.element,
  sectionSubtitle1: PropTypes.element,
  sectionContent1: PropTypes.element,
  sectionContent2: PropTypes.element,
  sectionSubtitle2: PropTypes.element,
  rootClassName: PropTypes.string,
  sectionTitle: PropTypes.element,
  sectionSubtitle: PropTypes.element,
}

export default MissionSection10
