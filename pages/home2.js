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

const Home2 = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="home2-container1">
        <Head>
          <title>{translate.raw('text_KxQ1w7')}</title>
          <meta name="description" content={translate.raw('text_dJ3FZO')} />
          <meta property="og:title" content={translate.raw('text_KxQ1w7')} />
          <meta
            property="og:description"
            content={translate.raw('text_dJ3FZO')}
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/home2`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/home2"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/home2"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/home2"
          />
        </Head>
        <Navigation locale={props?.locale ?? ''}></Navigation>
        <main className="homepage-wrapper">
          <HeroSection1
            text={
              <Fragment>
                <span className="home2-text10">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rYuO0g'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home2-text11">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_a0K2kQ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="home2-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_cZ_L9x'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heroTitle={
              <Fragment>
                <span className="home2-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZCZ9Jo'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            heroSubtitle={
              <Fragment>
                <span className="home2-text14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_xa7tUc'),
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
                <span className="home2-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_hpv2Iw'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle1={
              <Fragment>
                <span className="home2-text16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_v4Rq5f'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle2={
              <Fragment>
                <span className="home2-text17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_3FiljE'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle3={
              <Fragment>
                <span className="home2-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_9M8rkf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle4={
              <Fragment>
                <span className="home2-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_-qizqX'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle5={
              <Fragment>
                <span className="home2-text20">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_r96nlY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home2-text21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BQ5UGJ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent1={
              <Fragment>
                <span className="home2-text22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_XRckKa'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent2={
              <Fragment>
                <span className="home2-text23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_TMQcGu'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent3={
              <Fragment>
                <span className="home2-text24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GAaH_s'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent4={
              <Fragment>
                <span className="home2-text25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_PsDlJE'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionSubtitle={
              <Fragment>
                <span className="home2-text26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_YyHarS'),
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
                <span className="home2-text27">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_lPpM2a'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            tabDesc1={
              <Fragment>
                <span className="home2-text28">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_b_4JnO'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            tabDesc2={
              <Fragment>
                <span className="home2-text29">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ZgnH2r'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            tabLabel={
              <Fragment>
                <span className="home2-text30">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_d160uY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            tabLabel1={
              <Fragment>
                <span className="home2-text31">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_cJN_6p'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            tabLabel2={
              <Fragment>
                <span className="home2-text32">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Huqgmd'),
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
                <span className="home2-text33">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_TrLTXf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home2-text34">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BOBjtc'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home2-text35">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_wk4Cc4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="home2-text36">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CklrKB'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            intTag={
              <Fragment>
                <span className="home2-text37">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_gVBx_2'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            intTag1={
              <Fragment>
                <span className="home2-text38">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_yLewIG'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            intTag2={
              <Fragment>
                <span className="home2-text39">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_uv3bjU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle={
              <Fragment>
                <span className="home2-text40">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_N2gslb'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle1={
              <Fragment>
                <span className="home2-text41">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ldT16N'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle2={
              <Fragment>
                <span className="home2-text42">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_QIRCzT'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home2-text43">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_5gh4Ny'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent1={
              <Fragment>
                <span className="home2-text44">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_FRnfvu'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionSubtitle={
              <Fragment>
                <span className="home2-text45">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_GiL7_o'),
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
                <span className="home2-text46">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_BFv5hd'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home2-text47">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_2fNppa'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home2-text48">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_o9k8ey'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="home2-text49">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_s5uzTD'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="home2-text50">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_whvSot'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle={
              <Fragment>
                <span className="home2-text51">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fTf8VG'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home2-text52">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_4M4aDj'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionSubtitle={
              <Fragment>
                <span className="home2-text53">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_thAxDi'),
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
                <span className="home2-text54">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_wLSB3T'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            authorRole={
              <Fragment>
                <span className="home2-text55">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fuWyOb'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            authorName1={
              <Fragment>
                <span className="home2-text56">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_-KKu_1'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            authorName2={
              <Fragment>
                <span className="home2-text57">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_RFEzl8'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            authorRole1={
              <Fragment>
                <span className="home2-text58">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_OzJU19'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            authorRole2={
              <Fragment>
                <span className="home2-text59">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_yExeX0'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle={
              <Fragment>
                <span className="home2-text60">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_UVCCVU'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home2-text61">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_AncUZh'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent1={
              <Fragment>
                <span className="home2-text62">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_fjLpyl'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent2={
              <Fragment>
                <span className="home2-text63">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_NXTaXX'),
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
                <span className="home2-text64">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_6zoIWK'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text={
              <Fragment>
                <span className="home2-text65">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_MkQ7Ny'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home2-text66">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_93ID-h'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home2-text67">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Vu_Dua'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="home2-text68">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_E45zDQ'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="home2-text69">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VpHSX8'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle={
              <Fragment>
                <span className="home2-text70">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_lgD0tG'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle1={
              <Fragment>
                <span className="home2-text71">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_WfnmRd'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionTitle2={
              <Fragment>
                <span className="home2-text72">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_X2JRyY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            formDisclaimer={
              <Fragment>
                <span className="home2-text73">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_8_3Wt4'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionContent={
              <Fragment>
                <span className="home2-text74">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_EG8Ri8'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            sectionSubtitle={
              <Fragment>
                <span className="home2-text75">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_m817XW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            }
            locale={props?.locale ?? ''}
          ></CtaSection3>
        </main>
        <div className="home2-container2">
          <div className="home2-container3">
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
        <div className="home2-container4">
          <div className="home2-container5">
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
          loop="true"
          muted="true"
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay="true"
          playsInline="true"
          className="home2-video1"
        ></video>
        <video
          src="/screen%20recording%202026-02-09%20at%2020.29.201.mov"
          loop="true"
          muted="true"
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay="true"
          playsInline="true"
          className="home2-video2"
        ></video>
        <video
          src="/screen%20recording%202026-02-09%20at%2020.29.20.mov"
          loop="true"
          muted="true"
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay="true"
          playsInline="true"
          className="home2-video3"
        ></video>
      </div>
      <style jsx>
        {`
          .home2-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home2-text10 {
            display: inline-block;
          }
          .home2-text11 {
            display: inline-block;
          }
          .home2-text12 {
            display: inline-block;
          }
          .home2-text13 {
            display: inline-block;
          }
          .home2-text14 {
            display: inline-block;
          }
          .home2-text15 {
            display: inline-block;
          }
          .home2-text16 {
            display: inline-block;
          }
          .home2-text17 {
            display: inline-block;
          }
          .home2-text18 {
            display: inline-block;
          }
          .home2-text19 {
            display: inline-block;
          }
          .home2-text20 {
            display: inline-block;
          }
          .home2-text21 {
            display: inline-block;
          }
          .home2-text22 {
            display: inline-block;
          }
          .home2-text23 {
            display: inline-block;
          }
          .home2-text24 {
            display: inline-block;
          }
          .home2-text25 {
            display: inline-block;
          }
          .home2-text26 {
            display: inline-block;
          }
          .home2-text27 {
            display: inline-block;
          }
          .home2-text28 {
            display: inline-block;
          }
          .home2-text29 {
            display: inline-block;
          }
          .home2-text30 {
            display: inline-block;
          }
          .home2-text31 {
            display: inline-block;
          }
          .home2-text32 {
            display: inline-block;
          }
          .home2-text33 {
            display: inline-block;
          }
          .home2-text34 {
            display: inline-block;
          }
          .home2-text35 {
            display: inline-block;
          }
          .home2-text36 {
            display: inline-block;
          }
          .home2-text37 {
            display: inline-block;
          }
          .home2-text38 {
            display: inline-block;
          }
          .home2-text39 {
            display: inline-block;
          }
          .home2-text40 {
            display: inline-block;
          }
          .home2-text41 {
            display: inline-block;
          }
          .home2-text42 {
            display: inline-block;
          }
          .home2-text43 {
            display: inline-block;
          }
          .home2-text44 {
            display: inline-block;
          }
          .home2-text45 {
            display: inline-block;
          }
          .home2-text46 {
            display: inline-block;
          }
          .home2-text47 {
            display: inline-block;
          }
          .home2-text48 {
            display: inline-block;
          }
          .home2-text49 {
            display: inline-block;
          }
          .home2-text50 {
            display: inline-block;
          }
          .home2-text51 {
            display: inline-block;
          }
          .home2-text52 {
            display: inline-block;
          }
          .home2-text53 {
            display: inline-block;
          }
          .home2-text54 {
            display: inline-block;
          }
          .home2-text55 {
            display: inline-block;
          }
          .home2-text56 {
            display: inline-block;
          }
          .home2-text57 {
            display: inline-block;
          }
          .home2-text58 {
            display: inline-block;
          }
          .home2-text59 {
            display: inline-block;
          }
          .home2-text60 {
            display: inline-block;
          }
          .home2-text61 {
            display: inline-block;
          }
          .home2-text62 {
            display: inline-block;
          }
          .home2-text63 {
            display: inline-block;
          }
          .home2-text64 {
            display: inline-block;
          }
          .home2-text65 {
            display: inline-block;
          }
          .home2-text66 {
            display: inline-block;
          }
          .home2-text67 {
            display: inline-block;
          }
          .home2-text68 {
            display: inline-block;
          }
          .home2-text69 {
            display: inline-block;
          }
          .home2-text70 {
            display: inline-block;
          }
          .home2-text71 {
            display: inline-block;
          }
          .home2-text72 {
            display: inline-block;
          }
          .home2-text73 {
            display: inline-block;
          }
          .home2-text74 {
            display: inline-block;
          }
          .home2-text75 {
            display: inline-block;
          }
          .home2-container2 {
            display: none;
          }
          .home2-container3 {
            display: contents;
          }
          .home2-container4 {
            display: none;
          }
          .home2-container5 {
            display: contents;
          }
          .home2-video1 {
            width: 320px;
            height: 180px;
          }
          .home2-video2 {
            width: 320px;
            height: 180px;
          }
          .home2-video3 {
            width: 320px;
            height: 180px;
          }
        `}
      </style>
    </>
  )
}

export default Home2

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
