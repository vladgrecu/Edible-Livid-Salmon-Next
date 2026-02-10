import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import CtaBandSection7 from '../components/cta-band-section7'
import CtaBandSection8 from '../components/cta-band-section8'
import CtaBandSection9 from '../components/cta-band-section9'
import CtaBandSection10 from '../components/cta-band-section10'
import CtaBandSection11 from '../components/cta-band-section11'
import CtaBandSection12 from '../components/cta-band-section12'
import CtaBandSection13 from '../components/cta-band-section13'
import CtaBandSection14 from '../components/cta-band-section14'
import CtaBandSection15 from '../components/cta-band-section15'
import CtaBandSection16 from '../components/cta-band-section16'
import CtaBandSection17 from '../components/cta-band-section17'
import CtaBandSection18 from '../components/cta-band-section18'
import CtaBandSection19 from '../components/cta-band-section19'
import CtaBandSection20 from '../components/cta-band-section20'
import CtaBandSection21 from '../components/cta-band-section21'

const Page = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="page-container1">
        <Head>
          <title>
            Page - My awesome website title (taken from my meta Title)
          </title>
          <meta
            name="description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <meta
            property="og:title"
            content="Page - My awesome website title (taken from my meta Title)"
          />
          <meta
            property="og:description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/page`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/page"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/page"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/page"
          />
        </Head>
        <CtaBandSection7
          text={
            <Fragment>
              <span className="page-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_p-iEca'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pihjeA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bkNu4M'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_J9UvSR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection7>
        <CtaBandSection8
          text={
            <Fragment>
              <span className="page-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VDbo1S'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8csbE3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HRhSfp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DZarnb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection8>
        <CtaBandSection9
          text={
            <Fragment>
              <span className="page-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Asj3gV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__3_LlD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_owngyV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oGdD3y'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection9>
        <CtaBandSection10
          text={
            <Fragment>
              <span className="page-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uFajrG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_THXu4a'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5qiWSe'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KaABos'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection10>
        <CtaBandSection11
          text={
            <Fragment>
              <span className="page-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kAHGkP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_U_G6RA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZOUNsW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TFNkTI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection11>
        <CtaBandSection12
          text={
            <Fragment>
              <span className="page-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Msr3b9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_t49VL_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fCkC0z'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6XVooW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection12>
        <CtaBandSection13
          text={
            <Fragment>
              <span className="page-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oN6xxg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0woIGg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_q_AKeQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CitK0S'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection13>
        <CtaBandSection14
          text={
            <Fragment>
              <span className="page-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2Xj1qk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CYTACw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5a2Rn-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_k6s5dm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection14>
        <CtaBandSection15
          text={
            <Fragment>
              <span className="page-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Bdaast'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FejrVz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7NVlHb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cnURjZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection15>
        <CtaBandSection16
          text={
            <Fragment>
              <span className="page-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tNcCvi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xtGARK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vk5ZA1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_j6c5fQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection16>
        <CtaBandSection17
          text={
            <Fragment>
              <span className="page-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2Mfg6N'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8IpW30'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qk_RfH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wGIquR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection17>
        <CtaBandSection18
          text={
            <Fragment>
              <span className="page-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nIJ4Y5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ppn1OS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page-text56">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_02luCr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page-text57">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QnVKNQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection18>
        <CtaBandSection19
          text={
            <Fragment>
              <span className="page-text58">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zDIycH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page-text59">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iLsb2j'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page-text60">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0XH32v'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page-text61">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vpEb1R'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection19>
        <CtaBandSection20
          text={
            <Fragment>
              <span className="page-text62">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YC12PS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page-text63">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1o04rU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page-text64">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_aEUsVj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page-text65">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yAyftO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection20>
        <CtaBandSection21
          text={
            <Fragment>
              <span className="page-text66">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RAvD28'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page-text67">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_t1kUiv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page-text68">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_boO5gu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page-text69">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vo9pdU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection21>
        <div className="page-container2"></div>
      </div>
      <style jsx>
        {`
          .page-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page-text10 {
            display: inline-block;
          }
          .page-text11 {
            display: inline-block;
          }
          .page-text12 {
            display: inline-block;
          }
          .page-text13 {
            display: inline-block;
          }
          .page-text14 {
            display: inline-block;
          }
          .page-text15 {
            display: inline-block;
          }
          .page-text16 {
            display: inline-block;
          }
          .page-text17 {
            display: inline-block;
          }
          .page-text18 {
            display: inline-block;
          }
          .page-text19 {
            display: inline-block;
          }
          .page-text20 {
            display: inline-block;
          }
          .page-text21 {
            display: inline-block;
          }
          .page-text22 {
            display: inline-block;
          }
          .page-text23 {
            display: inline-block;
          }
          .page-text24 {
            display: inline-block;
          }
          .page-text25 {
            display: inline-block;
          }
          .page-text26 {
            display: inline-block;
          }
          .page-text27 {
            display: inline-block;
          }
          .page-text28 {
            display: inline-block;
          }
          .page-text29 {
            display: inline-block;
          }
          .page-text30 {
            display: inline-block;
          }
          .page-text31 {
            display: inline-block;
          }
          .page-text32 {
            display: inline-block;
          }
          .page-text33 {
            display: inline-block;
          }
          .page-text34 {
            display: inline-block;
          }
          .page-text35 {
            display: inline-block;
          }
          .page-text36 {
            display: inline-block;
          }
          .page-text37 {
            display: inline-block;
          }
          .page-text38 {
            display: inline-block;
          }
          .page-text39 {
            display: inline-block;
          }
          .page-text40 {
            display: inline-block;
          }
          .page-text41 {
            display: inline-block;
          }
          .page-text42 {
            display: inline-block;
          }
          .page-text43 {
            display: inline-block;
          }
          .page-text44 {
            display: inline-block;
          }
          .page-text45 {
            display: inline-block;
          }
          .page-text46 {
            display: inline-block;
          }
          .page-text47 {
            display: inline-block;
          }
          .page-text48 {
            display: inline-block;
          }
          .page-text49 {
            display: inline-block;
          }
          .page-text50 {
            display: inline-block;
          }
          .page-text51 {
            display: inline-block;
          }
          .page-text52 {
            display: inline-block;
          }
          .page-text53 {
            display: inline-block;
          }
          .page-text54 {
            display: inline-block;
          }
          .page-text55 {
            display: inline-block;
          }
          .page-text56 {
            display: inline-block;
          }
          .page-text57 {
            display: inline-block;
          }
          .page-text58 {
            display: inline-block;
          }
          .page-text59 {
            display: inline-block;
          }
          .page-text60 {
            display: inline-block;
          }
          .page-text61 {
            display: inline-block;
          }
          .page-text62 {
            display: inline-block;
          }
          .page-text63 {
            display: inline-block;
          }
          .page-text64 {
            display: inline-block;
          }
          .page-text65 {
            display: inline-block;
          }
          .page-text66 {
            display: inline-block;
          }
          .page-text67 {
            display: inline-block;
          }
          .page-text68 {
            display: inline-block;
          }
          .page-text69 {
            display: inline-block;
          }
          .page-container2 {
            flex: 0 0 auto;
            width: 200px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Page

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
