import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import HeroSection1 from '../components/hero-section1'
import FeaturesSection2 from '../components/features-section2'
import DashboardSection from '../components/dashboard-section'
import IntegrationsSection from '../components/integrations-section'
import StatsSection2 from '../components/stats-section2'
import TestimonialsSection from '../components/testimonials-section'
import CtaSection3 from '../components/cta-section3'
import Footer from '../components/footer'
import PricingPlans from '../components/pricing-plans'
import CtaBandSection2 from '../components/cta-band-section2'
import CtaBandSection3 from '../components/cta-band-section3'
import CtaBandSection4 from '../components/cta-band-section4'
import CtaBandSection5 from '../components/cta-band-section5'
import CtaBandSection6 from '../components/cta-band-section6'

const Home = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>{translate.raw('static_E_IR4L')}</title>
          <meta name="description" content={translate.raw('static_s3AC02')} />
          <meta property="og:title" content={translate.raw('static_E_IR4L')} />
          <meta
            property="og:description"
            content={translate.raw('static_s3AC02')}
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '/' : '/' + router.locale
            }`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/"
          />
        </Head>
        <Navigation locale={props?.locale ?? ''}></Navigation>
        <main className="homepage-wrapper">
          <HeroSection1
            text={
              <Fragment>
                <span className="home-text10">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_DNJYUg'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZXXtmW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="home-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_j1E7ea'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heroTitle={
              <Fragment>
                <span className="home-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_n0WinK'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heroSubtitle={
              <Fragment>
                <span className="home-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_nETUr9'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></HeroSection1>
          <FeaturesSection2
            sectionTitle={
              <Fragment>
                <span className="home-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_xHePTW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle1={
              <Fragment>
                <span className="home-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_xnLsyw'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle2={
              <Fragment>
                <span className="home-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_33nwE3'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle3={
              <Fragment>
                <span className="home-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CydqDL'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle4={
              <Fragment>
                <span className="home-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_RZEF0x'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle5={
              <Fragment>
                <span className="home-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_jWV72d'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_-JTMbU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent1={
              <Fragment>
                <span className="home-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_EfiPLs'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent2={
              <Fragment>
                <span className="home-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_eB6kj2'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent3={
              <Fragment>
                <span className="home-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Kggyew'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent4={
              <Fragment>
                <span className="home-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_J--Ymo'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionSubtitle={
              <Fragment>
                <span className="home-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6q-OCj'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></FeaturesSection2>
          <DashboardSection
            tabDesc={
              <Fragment>
                <span className="home-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_WXeptv'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            tabDesc1={
              <Fragment>
                <span className="home-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9NtSW_'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            tabDesc2={
              <Fragment>
                <span className="home-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_tCEiGO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            tabLabel={
              <Fragment>
                <span className="home-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_C5gqoX'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            tabLabel1={
              <Fragment>
                <span className="home-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GQuPNr'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            tabLabel2={
              <Fragment>
                <span className="home-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_U6Ow_8'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></DashboardSection>
          <IntegrationsSection
            text={
              <Fragment>
                <span className="home-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_P_rhbl'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_mcTb-U'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home-text35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_PNCMNU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="home-text36">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Z3AeDa'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            intTag={
              <Fragment>
                <span className="home-text37">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_I7fPBf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            intTag1={
              <Fragment>
                <span className="home-text38">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_0DyKUv'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            intTag2={
              <Fragment>
                <span className="home-text39">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZPKqZD'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle={
              <Fragment>
                <span className="home-text40">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Lv4ElY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle1={
              <Fragment>
                <span className="home-text41">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_K6s3C1'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle2={
              <Fragment>
                <span className="home-text42">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_jxYYXv'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home-text43">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_45ov9W'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent1={
              <Fragment>
                <span className="home-text44">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_dA1paX'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionSubtitle={
              <Fragment>
                <span className="home-text45">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_EMnMb_'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></IntegrationsSection>
          <StatsSection2
            text={
              <Fragment>
                <span className="home-text46">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_RJeJ2F'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text47">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_oK6O5r'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home-text48">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_vizA-N'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="home-text49">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9ZefIm'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="home-text50">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VUPJes'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle={
              <Fragment>
                <span className="home-text51">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_QUVeIw'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home-text52">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_tW21sA'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionSubtitle={
              <Fragment>
                <span className="home-text53">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Y2Cqcb'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></StatsSection2>
          <TestimonialsSection
            authorName={
              <Fragment>
                <span className="home-text54">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_KMndla'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            authorRole={
              <Fragment>
                <span className="home-text55">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_M5oaOZ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            authorName1={
              <Fragment>
                <span className="home-text56">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_LnBS9_'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            authorName2={
              <Fragment>
                <span className="home-text57">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_sktGBx'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            authorRole1={
              <Fragment>
                <span className="home-text58">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_MYQrzf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            authorRole2={
              <Fragment>
                <span className="home-text59">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Nhq29V'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle={
              <Fragment>
                <span className="home-text60">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_yVt8jM'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home-text61">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7i7FQG'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent1={
              <Fragment>
                <span className="home-text62">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_MEMQ7a'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent2={
              <Fragment>
                <span className="home-text63">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_TUiVi4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></TestimonialsSection>
          <CtaSection3
            btn={
              <Fragment>
                <span className="home-text64">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_TvMwk9'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text={
              <Fragment>
                <span className="home-text65">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_MDeD4U'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text66">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_YfynNd'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home-text67">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_aQUVSf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="home-text68">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_dT5diV'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="home-text69">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kOW99D'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle={
              <Fragment>
                <span className="home-text70">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_k5b0O7'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle1={
              <Fragment>
                <span className="home-text71">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_SbCfhY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle2={
              <Fragment>
                <span className="home-text72">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BmzSA3'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            formDisclaimer={
              <Fragment>
                <span className="home-text73">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_orgUpZ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home-text74">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CbW0YK'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionSubtitle={
              <Fragment>
                <span className="home-text75">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_FR1h4h'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></CtaSection3>
        </main>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes fadeIn {from {opacity: 0;
transform: scale(1.02);}
to {opacity: 1;
transform: scale(1);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="flowvista-interactions">
(function(){
  // Dashboard Tab Logic
  const tabTriggers = document.querySelectorAll('.tab-trigger');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const targetId = trigger.getAttribute('data-target');
      
      tabTriggers.forEach(t => t.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      
      trigger.classList.add('active');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Testimonial Carousel Logic
  const slider = document.getElementById('testimonialSlider');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  let currentIndex = 0;

  function updateSlider() {
    const cards = document.querySelectorAll('.testimonial-card');
    const cardWidth = cards[0].offsetWidth + 32; // width + gap
    slider.style.transform = \`translateX(-\${currentIndex * cardWidth}px)\`;
  }

  nextBtn.addEventListener('click', () => {
    const cards = document.querySelectorAll('.testimonial-card');
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateSlider();
    } else {
      currentIndex = 0;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    const cards = document.querySelectorAll('.testimonial-card');
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    } else {
      currentIndex = cards.length - 1;
      updateSlider();
    }
  });

  // Responsive slider adjustment
  window.addEventListener('resize', updateSlider);

  // Simple form feedback (UX enhancement)
  const ctaForm = document.querySelector('.cta-form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      const emailInput = ctaForm.querySelector('.form-input');
      if (emailInput.checkValidity()) {
        // Native submission continues, but we could show a loading state here
        const btn = ctaForm.querySelector('.btn');
        btn.textContent = 'Processing...';
        btn.disabled = true;
      }
    });
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer locale={props?.locale ?? ''}></Footer>
        <PricingPlans locale={props?.locale ?? ''}></PricingPlans>
        <video
          src="/screen%20recording%202026-02-09%20at%2020.29.204.mov"
          loop="true"
          muted="true"
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay="true"
          playsInline="true"
          className="home-video1"
        ></video>
        <video
          src="/screen%20recording%202026-02-09%20at%2020.29.203.mov"
          loop="true"
          muted="true"
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay="true"
          playsInline="true"
          className="home-video2"
        ></video>
        <video
          src="/screen%20recording%202026-02-09%20at%2020.29.202.mov"
          loop="true"
          muted="true"
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay="true"
          playsInline="true"
          className="home-video3"
        ></video>
        <video
          src="/screen%20recording%202026-02-09%20at%2020.29.201.mov"
          loop="true"
          muted="true"
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay="true"
          playsInline="true"
          className="home-video4"
        ></video>
        <video
          src="/screen%20recording%202026-02-09%20at%2020.29.20.mov"
          loop="true"
          muted="true"
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay="true"
          playsInline="true"
          className="home-video5"
        ></video>
        <CtaBandSection2
          sectionTitle={
            <Fragment>
              <span className="home-text76">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zbgdiG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text77">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jKesXL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="home-text78">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_itlswK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="home-text79">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wzkmjc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection2>
        <CtaBandSection3
          sectionTitle={
            <Fragment>
              <span className="home-text80">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8qG8eh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text81">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dsRYQV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="home-text82">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eBItoz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="home-text83">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lwTrxI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection3>
        <CtaBandSection4
          sectionTitle={
            <Fragment>
              <span className="home-text84">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KCG4Q8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text85">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HIgXU0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="home-text86">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_00qQKg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="home-text87">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Zyrt4y'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection4>
        <CtaBandSection5
          sectionTitle={
            <Fragment>
              <span className="home-text88">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_o3Uv21'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text89">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wkjEJh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="home-text90">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AZe6tc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="home-text91">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TubiNN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection5>
        <CtaBandSection6
          sectionTitle={
            <Fragment>
              <span className="home-text92">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pqAf5r'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text93">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Hhwaf8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="home-text94">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gLHgqI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="home-text95">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IQA1ZK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection6>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text37 {
            display: inline-block;
          }
          .home-text38 {
            display: inline-block;
          }
          .home-text39 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            display: inline-block;
          }
          .home-text53 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          .home-text55 {
            display: inline-block;
          }
          .home-text56 {
            display: inline-block;
          }
          .home-text57 {
            display: inline-block;
          }
          .home-text58 {
            display: inline-block;
          }
          .home-text59 {
            display: inline-block;
          }
          .home-text60 {
            display: inline-block;
          }
          .home-text61 {
            display: inline-block;
          }
          .home-text62 {
            display: inline-block;
          }
          .home-text63 {
            display: inline-block;
          }
          .home-text64 {
            display: inline-block;
          }
          .home-text65 {
            display: inline-block;
          }
          .home-text66 {
            display: inline-block;
          }
          .home-text67 {
            display: inline-block;
          }
          .home-text68 {
            display: inline-block;
          }
          .home-text69 {
            display: inline-block;
          }
          .home-text70 {
            display: inline-block;
          }
          .home-text71 {
            display: inline-block;
          }
          .home-text72 {
            display: inline-block;
          }
          .home-text73 {
            display: inline-block;
          }
          .home-text74 {
            display: inline-block;
          }
          .home-text75 {
            display: inline-block;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          .home-video1 {
            width: 320px;
            height: 180px;
          }
          .home-video2 {
            width: 320px;
            height: 180px;
          }
          .home-video3 {
            width: 320px;
            height: 180px;
          }
          .home-video4 {
            width: 320px;
            height: 180px;
          }
          .home-video5 {
            width: 320px;
            height: 180px;
          }
          .home-text76 {
            display: inline-block;
          }
          .home-text77 {
            display: inline-block;
          }
          .home-text78 {
            display: inline-block;
          }
          .home-text79 {
            display: inline-block;
          }
          .home-text80 {
            display: inline-block;
          }
          .home-text81 {
            display: inline-block;
          }
          .home-text82 {
            display: inline-block;
          }
          .home-text83 {
            display: inline-block;
          }
          .home-text84 {
            display: inline-block;
          }
          .home-text85 {
            display: inline-block;
          }
          .home-text86 {
            display: inline-block;
          }
          .home-text87 {
            display: inline-block;
          }
          .home-text88 {
            display: inline-block;
          }
          .home-text89 {
            display: inline-block;
          }
          .home-text90 {
            display: inline-block;
          }
          .home-text91 {
            display: inline-block;
          }
          .home-text92 {
            display: inline-block;
          }
          .home-text93 {
            display: inline-block;
          }
          .home-text94 {
            display: inline-block;
          }
          .home-text95 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
