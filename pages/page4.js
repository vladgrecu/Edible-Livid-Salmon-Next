import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import CtaBandSection7 from '../components/cta-band-section7'
import CtaBandSection8 from '../components/cta-band-section8'
import CtaBandSection9 from '../components/cta-band-section9'
import CtaBandSection10 from '../components/cta-band-section10'
import CtaBandSection11 from '../components/cta-band-section11'

const Page4 = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="page4-container">
        <Head>
          <title>
            Page4 - My awesome website title (taken from my meta Title)
          </title>
          <meta
            name="description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <meta
            property="og:title"
            content="Page4 - My awesome website title (taken from my meta Title)"
          />
          <meta
            property="og:description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/page4`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/page4"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/page4"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/page4"
          />
        </Head>
        <CtaBandSection7
          sectionTitle={
            <Fragment>
              <span className="page4-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zgZvLf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page4-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TUNvaK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page4-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_j9lZSb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page4-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_aHTz3s'),
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
              <span className="page4-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qLS7Hs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page4-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZAqPyg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page4-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gZIZUA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page4-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SgZ4Tp'),
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
              <span className="page4-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Am1pfO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page4-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_inSfao'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page4-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AHmMlQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page4-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OsZWhg'),
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
              <span className="page4-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Y1A-vo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page4-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zMRmnQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page4-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_COT__V'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page4-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nVF9X4'),
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
              <span className="page4-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mnD7vN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page4-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cUn6E1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page4-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pqCBCp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page4-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_M5ispX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></CtaBandSection11>
      </div>
      <style jsx>
        {`
          .page4-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page4-text10 {
            display: inline-block;
          }
          .page4-text11 {
            display: inline-block;
          }
          .page4-text12 {
            display: inline-block;
          }
          .page4-text13 {
            display: inline-block;
          }
          .page4-text14 {
            display: inline-block;
          }
          .page4-text15 {
            display: inline-block;
          }
          .page4-text16 {
            display: inline-block;
          }
          .page4-text17 {
            display: inline-block;
          }
          .page4-text18 {
            display: inline-block;
          }
          .page4-text19 {
            display: inline-block;
          }
          .page4-text20 {
            display: inline-block;
          }
          .page4-text21 {
            display: inline-block;
          }
          .page4-text22 {
            display: inline-block;
          }
          .page4-text23 {
            display: inline-block;
          }
          .page4-text24 {
            display: inline-block;
          }
          .page4-text25 {
            display: inline-block;
          }
          .page4-text26 {
            display: inline-block;
          }
          .page4-text27 {
            display: inline-block;
          }
          .page4-text28 {
            display: inline-block;
          }
          .page4-text29 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Page4

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
