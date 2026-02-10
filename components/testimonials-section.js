import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TestimonialsSection = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="testimonials-section-thq-testimonials-section-elm testimonials-section">
        <div className="testimonials-carousel-wrapper">
          <h2 className="section-title">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="testimonials-section-text10">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_Fzp7UQ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <div id="testimonialSlider" className="testimonials-container">
            <div className="testimonial-card">
              <div className="quote-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <p className="section-content">
                {props.sectionContent ?? (
                  <Fragment>
                    <span className="testimonials-section-text11">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_ylzUOB'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="testimonial-author">
                <span className="author-name">
                  {props.authorName ?? (
                    <Fragment>
                      <span className="testimonials-section-text14">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorName_Lg7auJ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="author-role">
                  {props.authorRole ?? (
                    <Fragment>
                      <span className="testimonials-section-text15">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorRole_tY5dmt'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <p className="section-content">
                {props.sectionContent1 ?? (
                  <Fragment>
                    <span className="testimonials-section-text12">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_6sWZfy'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="testimonial-author">
                <span className="author-name">
                  {props.authorName1 ?? (
                    <Fragment>
                      <span className="testimonials-section-text16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorName_cSDYaT'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="author-role">
                  {props.authorRole1 ?? (
                    <Fragment>
                      <span className="testimonials-section-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorRole_E1OU0z'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <p className="section-content">
                {props.sectionContent2 ?? (
                  <Fragment>
                    <span className="testimonials-section-text13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_uS3Zxc'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="testimonial-author">
                <span className="author-name">
                  {props.authorName2 ?? (
                    <Fragment>
                      <span className="testimonials-section-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorName_Lz9oEf'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="author-role">
                  {props.authorRole2 ?? (
                    <Fragment>
                      <span className="testimonials-section-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorRole_4hsanO'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="carousel-controls">
            <button id="prevBtn" className="carousel-btn prev">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 12H5m7 7l-7-7l7-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <button id="nextBtn" className="carousel-btn next">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-7-7l7 7l-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .testimonials-section-thq-testimonials-section-elm {
            position: relative;
          }
          .testimonials-section-text10 {
            display: inline-block;
          }
          .testimonials-section-text11 {
            display: inline-block;
          }
          .testimonials-section-text12 {
            display: inline-block;
          }
          .testimonials-section-text13 {
            display: inline-block;
          }
          .testimonials-section-text14 {
            display: inline-block;
          }
          .testimonials-section-text15 {
            display: inline-block;
          }
          .testimonials-section-text16 {
            display: inline-block;
          }
          .testimonials-section-text17 {
            display: inline-block;
          }
          .testimonials-section-text18 {
            display: inline-block;
          }
          .testimonials-section-text19 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

TestimonialsSection.defaultProps = {
  sectionTitle: undefined,
  sectionContent: undefined,
  sectionContent1: undefined,
  sectionContent2: undefined,
  authorName: undefined,
  authorRole: undefined,
  authorName1: undefined,
  authorRole1: undefined,
  authorName2: undefined,
  authorRole2: undefined,
}

TestimonialsSection.propTypes = {
  sectionTitle: PropTypes.element,
  sectionContent: PropTypes.element,
  sectionContent1: PropTypes.element,
  sectionContent2: PropTypes.element,
  authorName: PropTypes.element,
  authorRole: PropTypes.element,
  authorName1: PropTypes.element,
  authorRole1: PropTypes.element,
  authorName2: PropTypes.element,
  authorRole2: PropTypes.element,
}

export default TestimonialsSection
