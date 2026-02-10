import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TimelineSection2 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section
        className={`timeline-section2-thq-thq-timeline-section-elm-elm timeline-section ${props.rootClassName} `}
      >
        <div className="timeline-container">
          <h2 className="section-title centered">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="timeline-section2-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_4f6o9e'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <div className="timeline-wrapper">
            <div className="timeline-rail">
              <div className="rail-progress"></div>
            </div>
            <div className="milestone-grid">
              <div className="milestone-item">
                <div className="node-container">
                  <div className="orbiting-dot"></div>
                  <div className="node-center"></div>
                </div>
                <div className="milestone-content">
                  <span className="date-stamp">
                    {props.dateStamp ?? (
                      <Fragment>
                        <span className="timeline-section2-text14">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('DateStamp_wAErEp'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="section-subtitle">
                    {props.sectionSubtitle ?? (
                      <Fragment>
                        <span className="timeline-section2-text19">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('SectionSubtitle_pb491C'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="section-content">
                    {props.sectionContent ?? (
                      <Fragment>
                        <span className="timeline-section2-text10">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('SectionContent_M3WZ4_'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
              <div className="milestone-item">
                <div className="node-container">
                  <div className="orbiting-dot"></div>
                  <div className="node-center"></div>
                </div>
                <div className="milestone-content">
                  <span className="date-stamp">
                    {props.dateStamp1 ?? (
                      <Fragment>
                        <span className="timeline-section2-text12">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('DateStamp_y6TSXI'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="section-subtitle">
                    {props.sectionSubtitle1 ?? (
                      <Fragment>
                        <span className="timeline-section2-text11">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('SectionSubtitle_puAY4u'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="section-content">
                    {props.sectionContent1 ?? (
                      <Fragment>
                        <span className="timeline-section2-text20">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('SectionContent_gvzvOz'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
              <div className="milestone-item">
                <div className="node-container">
                  <div className="orbiting-dot"></div>
                  <div className="node-center"></div>
                </div>
                <div className="milestone-content">
                  <span className="date-stamp">
                    {props.dateStamp2 ?? (
                      <Fragment>
                        <span className="timeline-section2-text17">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('DateStamp_Q_4wsb'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="section-subtitle">
                    {props.sectionSubtitle2 ?? (
                      <Fragment>
                        <span className="timeline-section2-text13">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('SectionSubtitle_54NfnT'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="section-content">
                    {props.sectionContent2 ?? (
                      <Fragment>
                        <span className="timeline-section2-text15">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('SectionContent_XDmj-8'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
              <div className="milestone-item">
                <div className="node-container">
                  <div className="orbiting-dot"></div>
                  <div className="node-center"></div>
                </div>
                <div className="milestone-content">
                  <span className="date-stamp">
                    {props.dateStamp3 ?? (
                      <Fragment>
                        <span className="timeline-section2-text21">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('DateStamp_YuW0dZ'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="section-subtitle">
                    {props.sectionSubtitle3 ?? (
                      <Fragment>
                        <span className="timeline-section2-text16">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('SectionSubtitle_Ao4_Wp'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="section-content">
                    {props.sectionContent3 ?? (
                      <Fragment>
                        <span className="timeline-section2-text22">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('SectionContent_FHSnAj'),
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
        </div>
      </section>
      <style jsx>
        {`
          .timeline-section2-thq-thq-timeline-section-elm-elm {
            position: relative;
          }
          .timeline-section2-text10 {
            display: inline-block;
          }
          .timeline-section2-text11 {
            display: inline-block;
          }
          .timeline-section2-text12 {
            display: inline-block;
          }
          .timeline-section2-text13 {
            display: inline-block;
          }
          .timeline-section2-text14 {
            display: inline-block;
          }
          .timeline-section2-text15 {
            display: inline-block;
          }
          .timeline-section2-text16 {
            display: inline-block;
          }
          .timeline-section2-text17 {
            display: inline-block;
          }
          .timeline-section2-text18 {
            display: inline-block;
          }
          .timeline-section2-text19 {
            display: inline-block;
          }
          .timeline-section2-text20 {
            display: inline-block;
          }
          .timeline-section2-text21 {
            display: inline-block;
          }
          .timeline-section2-text22 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

TimelineSection2.defaultProps = {
  sectionContent: undefined,
  sectionSubtitle1: undefined,
  dateStamp1: undefined,
  sectionSubtitle2: undefined,
  dateStamp: undefined,
  sectionContent2: undefined,
  sectionSubtitle3: undefined,
  dateStamp2: undefined,
  sectionTitle: undefined,
  sectionSubtitle: undefined,
  rootClassName: '',
  sectionContent1: undefined,
  dateStamp3: undefined,
  sectionContent3: undefined,
}

TimelineSection2.propTypes = {
  sectionContent: PropTypes.element,
  sectionSubtitle1: PropTypes.element,
  dateStamp1: PropTypes.element,
  sectionSubtitle2: PropTypes.element,
  dateStamp: PropTypes.element,
  sectionContent2: PropTypes.element,
  sectionSubtitle3: PropTypes.element,
  dateStamp2: PropTypes.element,
  sectionTitle: PropTypes.element,
  sectionSubtitle: PropTypes.element,
  rootClassName: PropTypes.string,
  sectionContent1: PropTypes.element,
  dateStamp3: PropTypes.element,
  sectionContent3: PropTypes.element,
}

export default TimelineSection2
