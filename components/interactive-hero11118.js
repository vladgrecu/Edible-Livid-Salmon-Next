import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const InteractiveHero11118 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`interactive-hero11118-container1 ${props.rootClassName} `}
      >
        <div className="interactive-hero11118-container2">
          <div className="interactive-hero11118-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.interactive-hero-cube {
  animation: none;
  transform: rotateX(25deg) rotateY(25deg);
}
.interactive-hero-stat-card:hover {
  transform: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="interactive-hero-root">
          <video
            src="https://videos.pexels.com/video-files/4990247/4990247-hd_1920_1080_30fps.mp4"
            loop="true"
            muted="true"
            poster="https://images.pexels.com/videos/4990247/pictures/preview-0.jpg"
            autoPlay="true"
            playsInline="true"
            className="interactive-hero-video"
          ></video>
          <div id="heroSpotlight" className="interactive-hero-spotlight"></div>
          <div className="interactive-hero-overlay"></div>
          <div className="interactive-hero-container">
            <div className="interactive-hero-content">
              <div className="interactive-hero-badge">
                <div className="interactive-hero-icon-wrapper">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <span className="section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_HckhD_'),
                    }}
                  ></span>
                </span>
              </div>
              <h1 className="hero-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('HeroTitle_oE9JYW'),
                  }}
                ></span>
              </h1>
              <p className="hero-subtitle">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('HeroSubtitle_luD_X7'),
                  }}
                ></span>
              </p>
              <div className="interactive-hero-actions">
                <a href="#demo">
                  <div className="btn btn-xl btn-primary interactive-hero-btn-xl">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_07ucNS'),
                        }}
                      ></span>
                    </span>
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                    </svg>
                  </div>
                </a>
                <a href="#pricing">
                  <div className="btn btn-xl interactive-hero-btn-xl btn-outline">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_KhyXTD'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="interactive-hero-visual">
              <div className="interactive-hero-scene">
                <div id="rotatingCube" className="interactive-hero-cube">
                  <div className="interactive-hero-face interactive-hero-front">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"></path>
                    </svg>
                    <span className="section-content">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_FZIjhZ'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="interactive-hero-face interactive-hero-back">
                    <svg
                      fill="none"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m17 18l-1.535 1.605a5 5 0 0 1-8-1.5"></path>
                        <path d="M17 22v-4h-4m7.996-2.749A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607"></path>
                        <path d="M7 10v4h4"></path>
                        <path d="m7 14l1.535-1.605a5 5 0 0 1 8 1.5"></path>
                      </g>
                    </svg>
                    <span className="section-content">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_-pW1hJ'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="interactive-hero-right interactive-hero-face">
                    <span className="section-content">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_Eei3Jr'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="interactive-hero-face interactive-hero-left">
                    <span className="section-content">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_0B5w7I'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="interactive-hero-face interactive-hero-top">
                    <span className="section-content">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_RQjnGz'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="interactive-hero-face interactive-hero-bottom">
                    <span className="section-content">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('SectionContent_1Fe-bC'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="interactive-hero-stats">
                <div className="interactive-hero-stat-card">
                  <span className="interactive-hero-stat-value">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw(
                          'InteractiveHeroStatValue_u-a7Z0'
                        ),
                      }}
                    ></span>
                  </span>
                  <span className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_UqlZIp'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="interactive-hero-stat-card">
                  <span className="interactive-hero-stat-value">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw(
                          'InteractiveHeroStatValue_bpByFj'
                        ),
                      }}
                    ></span>
                  </span>
                  <span className="section-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('SectionContent_bdIg6p'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="interactive-hero11118-container4">
          <div className="interactive-hero11118-container5">
            <Script
              html={`<style>
        @keyframes cubeRotate {0% {transform: rotateX(0deg) rotateY(0deg);}
100% {transform: rotateX(360deg) rotateY(360deg);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="interactive-hero11118-container6">
          <div className="interactive-hero11118-container7">
            <Script
              html={`<script defer data-name="hero-interactions">
(function(){
  const spotlight = document.getElementById("heroSpotlight")
  const heroRoot = document.querySelector(".interactive-hero-root")
  const cube = document.getElementById("rotatingCube")

  let isDragging = false
  let startX, startY
  let currentRotationX = 0
  let currentRotationY = 0

  heroRoot.addEventListener("mousemove", (e) => {
    const rect = heroRoot.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    spotlight.style.setProperty("--x", \`\${x}%\`)
    spotlight.style.setProperty("--y", \`\${y}%\`)
  })

  cube.addEventListener("mousedown", (e) => {
    isDragging = true
    startX = e.clientX
    startY = e.clientY
    cube.style.animation = "none"
  })

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return

    const deltaX = e.clientX - startX
    const deltaY = e.clientY - startY

    currentRotationY += deltaX * 0.5
    currentRotationX -= deltaY * 0.5

    cube.style.transform = \`rotateX(\${currentRotationX}deg) rotateY(\${currentRotationY}deg)\`

    startX = e.clientX
    startY = e.clientY
  })

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false
      setTimeout(() => {
        if (!isDragging) {
          cube.style.animation = "cubeRotate 20s linear infinite"
        }
      }, 2000)
    }
  })

  cube.addEventListener(
    "touchstart",
    (e) => {
      isDragging = true
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
      cube.style.animation = "none"
    },
    { passive: true }
  )

  document.addEventListener(
    "touchmove",
    (e) => {
      if (!isDragging) return

      const deltaX = e.touches[0].clientX - startX
      const deltaY = e.touches[0].clientY - startY

      currentRotationY += deltaX * 0.5
      currentRotationX -= deltaY * 0.5

      cube.style.transform = \`rotateX(\${currentRotationX}deg) rotateY(\${currentRotationY}deg)\`

      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    },
    { passive: true }
  )

  document.addEventListener("touchend", () => {
    isDragging = false
    setTimeout(() => {
      if (!isDragging) {
        cube.style.animation = "cubeRotate 20s linear infinite"
      }
    }, 2000)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .interactive-hero11118-container1 {
            display: contents;
          }
          .interactive-hero11118-container2 {
            display: none;
          }
          .interactive-hero11118-container3 {
            display: contents;
          }
          .interactive-hero11118-container4 {
            display: none;
          }
          .interactive-hero11118-container5 {
            display: contents;
          }
          .interactive-hero11118-container6 {
            display: none;
          }
          .interactive-hero11118-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

InteractiveHero11118.defaultProps = {
  rootClassName: '',
}

InteractiveHero11118.propTypes = {
  rootClassName: PropTypes.string,
}

export default InteractiveHero11118
