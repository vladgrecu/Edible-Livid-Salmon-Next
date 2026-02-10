import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const DashboardSection = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="dashboard-section-thq-dashboard-section-elm dashboard-section">
        <div className="dashboard-tabs-layout">
          <div className="dashboard-tabs-nav">
            <button data-target="dash-1" className="tab-trigger active">
              <span className="dashboard-section-thq-tab-label-elm1">
                {props.tabLabel ?? (
                  <Fragment>
                    <span className="dashboard-section-text1">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('TabLabel_Q__vtA'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="dashboard-section-thq-tab-desc-elm1">
                {props.tabDesc ?? (
                  <Fragment>
                    <span className="dashboard-section-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('TabDesc_jPZDgx'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button data-target="dash-2" className="tab-trigger">
              <span className="dashboard-section-thq-tab-label-elm2">
                {props.tabLabel1 ?? (
                  <Fragment>
                    <span className="dashboard-section-text2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('TabLabel_u37ymP'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="dashboard-section-thq-tab-desc-elm2">
                {props.tabDesc1 ?? (
                  <Fragment>
                    <span className="dashboard-section-text5">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('TabDesc_GHykMD'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button data-target="dash-3" className="tab-trigger">
              <span className="dashboard-section-thq-tab-label-elm3">
                {props.tabLabel2 ?? (
                  <Fragment>
                    <span className="dashboard-section-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('TabLabel_7TYeIx'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="dashboard-section-thq-tab-desc-elm3">
                {props.tabDesc2 ?? (
                  <Fragment>
                    <span className="dashboard-section-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('TabDesc_kiCVit'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="dashboard-tabs-content">
            <div id="dash-1" className="active tab-panel">
              <img
                alt={props.dashboardImgAlt}
                src={props.dashboardImgSrc}
                className="dashboard-img"
              />
            </div>
            <div id="dash-2" className="tab-panel">
              <img
                alt={props.dashboardImgAlt1}
                src={props.dashboardImgSrc1}
                className="dashboard-img"
              />
            </div>
            <div id="dash-3" className="tab-panel">
              <img
                alt={props.dashboardImgAlt2}
                src={props.dashboardImgSrc2}
                className="dashboard-img"
              />
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .dashboard-section-thq-dashboard-section-elm {
            position: relative;
          }
          .dashboard-section-thq-tab-label-elm1 {
            display: block;
            font-size: var(--font-size-xl);
            font-family: var(--font-family-heading);
            font-weight: bold;
            margin-bottom: var(--spacing-xs);
            text-transform: uppercase;
          }
          .dashboard-section-thq-tab-desc-elm1 {
            opacity: 0.7;
            font-size: var(--font-size-sm);
          }
          .dashboard-section-thq-tab-label-elm2 {
            display: block;
            font-size: var(--font-size-xl);
            font-family: var(--font-family-heading);
            font-weight: bold;
            margin-bottom: var(--spacing-xs);
            text-transform: uppercase;
          }
          .dashboard-section-thq-tab-desc-elm2 {
            opacity: 0.7;
            font-size: var(--font-size-sm);
          }
          .dashboard-section-thq-tab-label-elm3 {
            display: block;
            font-size: var(--font-size-xl);
            font-family: var(--font-family-heading);
            font-weight: bold;
            margin-bottom: var(--spacing-xs);
            text-transform: uppercase;
          }
          .dashboard-section-thq-tab-desc-elm3 {
            opacity: 0.7;
            font-size: var(--font-size-sm);
          }
          .dashboard-section-text1 {
            display: inline-block;
          }
          .dashboard-section-text2 {
            display: inline-block;
          }
          .dashboard-section-text3 {
            display: inline-block;
          }
          .dashboard-section-text4 {
            display: inline-block;
          }
          .dashboard-section-text5 {
            display: inline-block;
          }
          .dashboard-section-text6 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

DashboardSection.defaultProps = {
  tabLabel: undefined,
  tabLabel1: undefined,
  dashboardImgAlt: 'Intake Interface',
  dashboardImgAlt1: 'Monitoring Interface',
  tabLabel2: undefined,
  dashboardImgAlt2: 'Reporting Interface',
  tabDesc2: undefined,
  tabDesc1: undefined,
  dashboardImgSrc1:
    'https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&w=1500',
  dashboardImgSrc2:
    'https://images.pexels.com/photos/17279853/pexels-photo-17279853.jpeg?auto=compress&cs=tinysrgb&w=1500',
  tabDesc: undefined,
  dashboardImgSrc:
    'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&w=1500',
}

DashboardSection.propTypes = {
  tabLabel: PropTypes.element,
  tabLabel1: PropTypes.element,
  dashboardImgAlt: PropTypes.string,
  dashboardImgAlt1: PropTypes.string,
  tabLabel2: PropTypes.element,
  dashboardImgAlt2: PropTypes.string,
  tabDesc2: PropTypes.element,
  tabDesc1: PropTypes.element,
  dashboardImgSrc1: PropTypes.string,
  dashboardImgSrc2: PropTypes.string,
  tabDesc: PropTypes.element,
  dashboardImgSrc: PropTypes.string,
}

export default DashboardSection
