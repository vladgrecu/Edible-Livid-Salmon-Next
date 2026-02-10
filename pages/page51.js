import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import CtaBandSection7 from '../components/cta-band-section7'
import CtaBandSection8 from '../components/cta-band-section8'
import CtaBandSection9 from '../components/cta-band-section9'
import CtaBandSection10 from '../components/cta-band-section10'
import CtaBandSection11 from '../components/cta-band-section11'

const Page51 = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="page51-container">
        <Head>
          <title>
            Page51 - My awesome website title (taken from my meta Title)
          </title>
          <meta
            name="description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <meta
            property="og:title"
            content="Page51 - My awesome website title (taken from my meta Title)"
          />
          <meta
            property="og:description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/page51`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/page51"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/page51"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/page51"
          />
        </Head>
        <CtaBandSection7
          text={
            <Fragment>
              <span className="page51-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_t6_v0d'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page51-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7jg9fz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page51-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qvdnc4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page51-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QJnGl6'),
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
              <span className="page51-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZndpS6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page51-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_a9nAKb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page51-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IMtAhj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page51-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZbTsrk'),
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
              <span className="page51-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TYb_KD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page51-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_67IlN1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page51-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PgTQIZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page51-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9NoWB1'),
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
              <span className="page51-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VMi8ZZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page51-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_S0Q2d1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page51-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ngfTof'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page51-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_q3oVwL'),
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
              <span className="page51-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RO0P0C'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page51-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eBabel'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionTitle={
            <Fragment>
              <span className="page51-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VZmyY0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page51-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YmlJRz'),
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
          .page51-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page51-text10 {
            display: inline-block;
          }
          .page51-text11 {
            display: inline-block;
          }
          .page51-text12 {
            display: inline-block;
          }
          .page51-text13 {
            display: inline-block;
          }
          .page51-text14 {
            display: inline-block;
          }
          .page51-text15 {
            display: inline-block;
          }
          .page51-text16 {
            display: inline-block;
          }
          .page51-text17 {
            display: inline-block;
          }
          .page51-text18 {
            display: inline-block;
          }
          .page51-text19 {
            display: inline-block;
          }
          .page51-text20 {
            display: inline-block;
          }
          .page51-text21 {
            display: inline-block;
          }
          .page51-text22 {
            display: inline-block;
          }
          .page51-text23 {
            display: inline-block;
          }
          .page51-text24 {
            display: inline-block;
          }
          .page51-text25 {
            display: inline-block;
          }
          .page51-text26 {
            display: inline-block;
          }
          .page51-text27 {
            display: inline-block;
          }
          .page51-text28 {
            display: inline-block;
          }
          .page51-text29 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Page51

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
