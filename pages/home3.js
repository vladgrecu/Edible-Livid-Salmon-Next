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

const Home3 = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="home3-container1">
        <Head>
          <title>{translate.raw('text_TW9B5N')}</title>
          <meta name="description" content={translate.raw('text_W-8OxN')} />
          <meta property="og:title" content={translate.raw('text_TW9B5N')} />
          <meta
            property="og:description"
            content={translate.raw('text_W-8OxN')}
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/home3`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/home3"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/home3"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/home3"
          />
        </Head>
        <Navigation locale={props?.locale ?? ''}></Navigation>
        <main className="homepage-wrapper">
          <HeroSection1
            heroTitle={
              <Fragment>
                <span className="home3-text10">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_V_BAgk'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heroSubtitle={
              <Fragment>
                <span className="home3-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_tjXUFM'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text={
              <Fragment>
                <span className="home3-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_8aw6H0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home3-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kwjxwW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="home3-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_FjCBUz'),
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
                <span className="home3-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_L441Vl'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionSubtitle={
              <Fragment>
                <span className="home3-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_O5xNDC'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle1={
              <Fragment>
                <span className="home3-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_phTnG1'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home3-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_-pY7Ct'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle2={
              <Fragment>
                <span className="home3-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_HsPg6x'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent1={
              <Fragment>
                <span className="home3-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Dgi8vE'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle3={
              <Fragment>
                <span className="home3-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_7l1n9j'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent2={
              <Fragment>
                <span className="home3-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ICjIXN'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle4={
              <Fragment>
                <span className="home3-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_3Dyhu0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent3={
              <Fragment>
                <span className="home3-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_UUV-MC'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle5={
              <Fragment>
                <span className="home3-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rvzoDO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent4={
              <Fragment>
                <span className="home3-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_iYyNSa'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></FeaturesSection2>
          <DashboardSection
            tabLabel={
              <Fragment>
                <span className="home3-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_tmJOdk'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            tabDesc={
              <Fragment>
                <span className="home3-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_uboz2b'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            tabLabel1={
              <Fragment>
                <span className="home3-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_0WbByo'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            tabDesc1={
              <Fragment>
                <span className="home3-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_1KYZCZ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            tabLabel2={
              <Fragment>
                <span className="home3-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_T2FVJb'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            tabDesc2={
              <Fragment>
                <span className="home3-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kQq7GE'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></DashboardSection>
          <IntegrationsSection
            sectionTitle={
              <Fragment>
                <span className="home3-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_uJbtaO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionSubtitle={
              <Fragment>
                <span className="home3-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_pUGOsv'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle1={
              <Fragment>
                <span className="home3-text35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_q_y7cX'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home3-text36">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fzwjgV'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle2={
              <Fragment>
                <span className="home3-text37">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Ppaj5F'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent1={
              <Fragment>
                <span className="home3-text38">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_tHlCGH'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            intTag={
              <Fragment>
                <span className="home3-text39">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_EGZSqD'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            intTag1={
              <Fragment>
                <span className="home3-text40">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_kaU38Y'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            intTag2={
              <Fragment>
                <span className="home3-text41">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_V_EYI-'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text={
              <Fragment>
                <span className="home3-text42">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_bUViCU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home3-text43">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_4aOIAg'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home3-text44">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_wMXaPv'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="home3-text45">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_I_GgYu'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></IntegrationsSection>
          <StatsSection2
            sectionTitle={
              <Fragment>
                <span className="home3-text46">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_dx9LPk'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home3-text47">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_A7pYfs'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionSubtitle={
              <Fragment>
                <span className="home3-text48">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_95GNwC'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text={
              <Fragment>
                <span className="home3-text49">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_RR4k9P'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home3-text50">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_M39CbJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home3-text51">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_NUX39o'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="home3-text52">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XhIU0q'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="home3-text53">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_pzQdkW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></StatsSection2>
          <TestimonialsSection
            sectionTitle={
              <Fragment>
                <span className="home3-text54">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_noXuQL'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home3-text55">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_S9IpRs'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent1={
              <Fragment>
                <span className="home3-text56">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_s8VFsf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent2={
              <Fragment>
                <span className="home3-text57">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VEh6so'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            authorName={
              <Fragment>
                <span className="home3-text58">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Hpw2R4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            authorRole={
              <Fragment>
                <span className="home3-text59">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_zIQ2HT'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            authorName1={
              <Fragment>
                <span className="home3-text60">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_o_d3ep'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            authorRole1={
              <Fragment>
                <span className="home3-text61">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_V4Qs7W'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            authorName2={
              <Fragment>
                <span className="home3-text62">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_28mD8q'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            authorRole2={
              <Fragment>
                <span className="home3-text63">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ALJmZO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></TestimonialsSection>
          <CtaSection3
            sectionTitle={
              <Fragment>
                <span className="home3-text64">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_AljrY0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionSubtitle={
              <Fragment>
                <span className="home3-text65">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_3cIikN'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle1={
              <Fragment>
                <span className="home3-text66">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_OC8F81'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle2={
              <Fragment>
                <span className="home3-text67">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BqI8N6'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home3-text68">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rB19bz'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            formDisclaimer={
              <Fragment>
                <span className="home3-text69">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_sjocqG'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text={
              <Fragment>
                <span className="home3-text70">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_m5dgjS'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            btn={
              <Fragment>
                <span className="home3-text71">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_lneSls'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home3-text72">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Vt4UjI'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home3-text73">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_uOPL1E'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="home3-text74">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fQcTYq'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="home3-text75">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rPiWcb'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></CtaSection3>
        </main>
        <div className="home3-container2">
          <div className="home3-container3">
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
        <div className="home3-container4">
          <div className="home3-container5">
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
          src="/screen%20recording%202026-02-09%20at%2020.29.202.mov"
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay="true"
          muted="true"
          loop="true"
          playsInline="true"
          className="home3-video1"
        ></video>
        <video
          src="/screen%20recording%202026-02-09%20at%2020.29.201.mov"
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay="true"
          muted="true"
          loop="true"
          playsInline="true"
          className="home3-video2"
        ></video>
        <video
          src="/screen%20recording%202026-02-09%20at%2020.29.20.mov"
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay="true"
          muted="true"
          loop="true"
          playsInline="true"
          className="home3-video3"
        ></video>
      </div>
      <style jsx>
        {`
          .home3-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home3-text10 {
            display: inline-block;
          }
          .home3-text11 {
            display: inline-block;
          }
          .home3-text12 {
            display: inline-block;
          }
          .home3-text13 {
            display: inline-block;
          }
          .home3-text14 {
            display: inline-block;
          }
          .home3-text15 {
            display: inline-block;
          }
          .home3-text16 {
            display: inline-block;
          }
          .home3-text17 {
            display: inline-block;
          }
          .home3-text18 {
            display: inline-block;
          }
          .home3-text19 {
            display: inline-block;
          }
          .home3-text20 {
            display: inline-block;
          }
          .home3-text21 {
            display: inline-block;
          }
          .home3-text22 {
            display: inline-block;
          }
          .home3-text23 {
            display: inline-block;
          }
          .home3-text24 {
            display: inline-block;
          }
          .home3-text25 {
            display: inline-block;
          }
          .home3-text26 {
            display: inline-block;
          }
          .home3-text27 {
            display: inline-block;
          }
          .home3-text28 {
            display: inline-block;
          }
          .home3-text29 {
            display: inline-block;
          }
          .home3-text30 {
            display: inline-block;
          }
          .home3-text31 {
            display: inline-block;
          }
          .home3-text32 {
            display: inline-block;
          }
          .home3-text33 {
            display: inline-block;
          }
          .home3-text34 {
            display: inline-block;
          }
          .home3-text35 {
            display: inline-block;
          }
          .home3-text36 {
            display: inline-block;
          }
          .home3-text37 {
            display: inline-block;
          }
          .home3-text38 {
            display: inline-block;
          }
          .home3-text39 {
            display: inline-block;
          }
          .home3-text40 {
            display: inline-block;
          }
          .home3-text41 {
            display: inline-block;
          }
          .home3-text42 {
            display: inline-block;
          }
          .home3-text43 {
            display: inline-block;
          }
          .home3-text44 {
            display: inline-block;
          }
          .home3-text45 {
            display: inline-block;
          }
          .home3-text46 {
            display: inline-block;
          }
          .home3-text47 {
            display: inline-block;
          }
          .home3-text48 {
            display: inline-block;
          }
          .home3-text49 {
            display: inline-block;
          }
          .home3-text50 {
            display: inline-block;
          }
          .home3-text51 {
            display: inline-block;
          }
          .home3-text52 {
            display: inline-block;
          }
          .home3-text53 {
            display: inline-block;
          }
          .home3-text54 {
            display: inline-block;
          }
          .home3-text55 {
            display: inline-block;
          }
          .home3-text56 {
            display: inline-block;
          }
          .home3-text57 {
            display: inline-block;
          }
          .home3-text58 {
            display: inline-block;
          }
          .home3-text59 {
            display: inline-block;
          }
          .home3-text60 {
            display: inline-block;
          }
          .home3-text61 {
            display: inline-block;
          }
          .home3-text62 {
            display: inline-block;
          }
          .home3-text63 {
            display: inline-block;
          }
          .home3-text64 {
            display: inline-block;
          }
          .home3-text65 {
            display: inline-block;
          }
          .home3-text66 {
            display: inline-block;
          }
          .home3-text67 {
            display: inline-block;
          }
          .home3-text68 {
            display: inline-block;
          }
          .home3-text69 {
            display: inline-block;
          }
          .home3-text70 {
            display: inline-block;
          }
          .home3-text71 {
            display: inline-block;
          }
          .home3-text72 {
            display: inline-block;
          }
          .home3-text73 {
            display: inline-block;
          }
          .home3-text74 {
            display: inline-block;
          }
          .home3-text75 {
            display: inline-block;
          }
          .home3-container2 {
            display: none;
          }
          .home3-container3 {
            display: contents;
          }
          .home3-container4 {
            display: none;
          }
          .home3-container5 {
            display: contents;
          }
          .home3-video1 {
            width: 320px;
            height: 180px;
          }
          .home3-video2 {
            width: 320px;
            height: 180px;
          }
          .home3-video3 {
            width: 320px;
            height: 180px;
          }
        `}
      </style>
    </>
  )
}

export default Home3

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
