import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import CtaBandSection7 from '../components/cta-band-section7'
import CtaBandSection8 from '../components/cta-band-section8'
import CtaBandSection9 from '../components/cta-band-section9'
import CtaBandSection10 from '../components/cta-band-section10'
import CtaBandSection11 from '../components/cta-band-section11'

const Page42 = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="page42-container">
        <Head>
          <title>
            Page42 - My awesome website title (taken from my meta Title)
          </title>
          <meta
            name="description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <meta
            property="og:title"
            content="Page42 - My awesome website title (taken from my meta Title)"
          />
          <meta
            property="og:description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/page42`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/page42"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/page42"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/page42"
          />
        </Head>
        <CtaBandSection7
          sectionTitle={
            <Fragment>
              <span className="page42-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YTeQoY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page42-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_91ZVmV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page42-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_su1bkA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page42-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_A-4le4'),
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
              <span className="page42-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Hh1NIW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page42-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HOJuU-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page42-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZSonKz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page42-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6KhV9T'),
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
              <span className="page42-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_i7AeKK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page42-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_siVfpP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page42-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_oK9nC1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page42-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pgspWZ'),
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
              <span className="page42-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NWExGs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page42-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-en42X'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page42-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RYMHV3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page42-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zO0YMk'),
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
              <span className="page42-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MeQu2l'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page42-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kqr51E'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page42-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zBaWYE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page42-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7Pu8HN'),
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
          .page42-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page42-text10 {
            display: inline-block;
          }
          .page42-text11 {
            display: inline-block;
          }
          .page42-text12 {
            display: inline-block;
          }
          .page42-text13 {
            display: inline-block;
          }
          .page42-text14 {
            display: inline-block;
          }
          .page42-text15 {
            display: inline-block;
          }
          .page42-text16 {
            display: inline-block;
          }
          .page42-text17 {
            display: inline-block;
          }
          .page42-text18 {
            display: inline-block;
          }
          .page42-text19 {
            display: inline-block;
          }
          .page42-text20 {
            display: inline-block;
          }
          .page42-text21 {
            display: inline-block;
          }
          .page42-text22 {
            display: inline-block;
          }
          .page42-text23 {
            display: inline-block;
          }
          .page42-text24 {
            display: inline-block;
          }
          .page42-text25 {
            display: inline-block;
          }
          .page42-text26 {
            display: inline-block;
          }
          .page42-text27 {
            display: inline-block;
          }
          .page42-text28 {
            display: inline-block;
          }
          .page42-text29 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Page42

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
