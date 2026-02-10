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

const Page = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="page-container">
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
          sectionTitle={
            <Fragment>
              <span className="page-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bkNu4M'),
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
          text={
            <Fragment>
              <span className="page-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_p-iEca'),
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
          sectionTitle={
            <Fragment>
              <span className="page-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HRhSfp'),
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
          text={
            <Fragment>
              <span className="page-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VDbo1S'),
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
          sectionTitle={
            <Fragment>
              <span className="page-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_owngyV'),
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
          text={
            <Fragment>
              <span className="page-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Asj3gV'),
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
          sectionTitle={
            <Fragment>
              <span className="page-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5qiWSe'),
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
          text={
            <Fragment>
              <span className="page-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uFajrG'),
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
          sectionTitle={
            <Fragment>
              <span className="page-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZOUNsW'),
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
          text={
            <Fragment>
              <span className="page-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kAHGkP'),
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
          sectionTitle={
            <Fragment>
              <span className="page-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fCkC0z'),
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
          text={
            <Fragment>
              <span className="page-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Msr3b9'),
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
      </div>
      <style jsx>
        {`
          .page-container {
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
