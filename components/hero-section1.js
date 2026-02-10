import React, {
  Fragment,
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HeroSection1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="hero-section1-thq-hero-section-elm hero-section">
        <div className="hero-video-container">
          <video
            src={props.heroBgVideoSrc}
            loop="true"
            muted="true"
            poster="https://images.pexels.com/videos/34645102/pictures/preview-0.jpg"
            autoPlay="true"
            playsInline="true"
            className="hero-bg-video"
          ></video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-diagonal-split">
          <div className="hero-content-area">
            <div className="hero-text-block">
              <h1 className="home-hero-title hero-title">
                {props.heroTitle ?? (
                  <Fragment>
                    <span className="hero-section1-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('HeroTitle_FO4XYj'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h1>
              <p className="hero-subtitle home-hero-subtitle">
                {props.heroSubtitle ?? (
                  <Fragment>
                    <span className="hero-section1-text5">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('HeroSubtitle_1cghCK'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="hero-cta-group">
                <a href="#demo">
                  <div className="btn btn-lg btn-primary">
                    <span>
                      {props.text ?? (
                        <Fragment>
                          <span className="hero-section1-text6">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_dxwAr3'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </a>
                <a href="#workflow">
                  <div className="btn btn-lg btn-outline">
                    <span>
                      {props.text1 ?? (
                        <Fragment>
                          <span className="hero-section1-text7">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_zCThZW'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </a>
              </div>
              <DataProvider
                fetchData={(params) =>
                  fetch(
                    `/api/javascript-data-5ef2eac3?${new URLSearchParams(
                      params
                    )}`,
                    {
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    }
                  )
                    .then((res) => res.json())
                    .then((response) => response?.data)
                }
                resourceDefinition={{
                  type: 'external-data-source',
                  dataSourceId: '5ef2eac3-98df-498a-873f-77bac5d019c0',
                  tableName: 'data',
                  dataSourceType: 'javascript',
                }}
                name={'javascript_PEC_data_data'}
                renderSuccess={(javascript_PEC_data_data) => (
                  <>
                    <Fragment>
                      <Repeater
                        items={javascript_PEC_data_data || []}
                        renderItem={(context_qrowm, index) => (
                          <Fragment key={`${context_qrowm?.id}${index}`}>
                            <h1>
                              {props.heading ?? (
                                <Fragment>
                                  <span className="hero-section1-text8">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: translate.raw('text_CDpfmR'),
                                      }}
                                    ></span>
                                  </span>
                                </Fragment>
                              )}
                            </h1>
                          </Fragment>
                        )}
                      />
                    </Fragment>
                  </>
                )}
                params={useMemo(
                  () => ({
                    limit: 20,
                  }),
                  []
                )}
                persistDataDuringLoading={true}
              />
            </div>
          </div>
          <div className="hero-visual-area">
            <div className="hero-dashboard-preview">
              <img
                alt={props.heroPreviewImgAlt}
                src={props.heroPreviewImgSrc}
                className="hero-preview-img"
              />
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .hero-section1-thq-hero-section-elm {
            position: relative;
          }
          .hero-section1-text4 {
            display: inline-block;
          }
          .hero-section1-text5 {
            display: inline-block;
          }
          .hero-section1-text6 {
            display: inline-block;
          }
          .hero-section1-text7 {
            display: inline-block;
          }
          .hero-section1-text8 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

HeroSection1.defaultProps = {
  heroBgVideoSrc:
    'https://videos.pexels.com/video-files/34645102/14683780_640_360_30fps.mp4',
  heroTitle: undefined,
  heroSubtitle: undefined,
  heroPreviewImgSrc: '/screenshot%202026-02-04%20at%2013.45.15-200h.png',
  heroPreviewImgAlt: 'FlowVista Dashboard Interface',
  text: undefined,
  text1: undefined,
  heading: undefined,
}

HeroSection1.propTypes = {
  heroBgVideoSrc: PropTypes.string,
  heroTitle: PropTypes.element,
  heroSubtitle: PropTypes.element,
  heroPreviewImgSrc: PropTypes.string,
  heroPreviewImgAlt: PropTypes.string,
  text: PropTypes.element,
  text1: PropTypes.element,
  heading: PropTypes.element,
}

export default HeroSection1
