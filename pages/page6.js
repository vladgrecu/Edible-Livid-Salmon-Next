import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import CtaBandSection7 from '../components/cta-band-section7'
import CtaBandSection8 from '../components/cta-band-section8'
import CtaBandSection9 from '../components/cta-band-section9'
import CtaBandSection10 from '../components/cta-band-section10'
import CtaBandSection11 from '../components/cta-band-section11'

const Page6 = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="page6-container">
        <Head>
          <title>
            Page6 - My awesome website title (taken from my meta Title)
          </title>
          <meta
            name="description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <meta
            property="og:title"
            content="Page6 - My awesome website title (taken from my meta Title)"
          />
          <meta
            property="og:description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/page6`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/page6"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/page6"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/page6"
          />
        </Head>
        <CtaBandSection7
          sectionTitle={
            <Fragment>
              <span className="page6-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lSARcT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page6-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__HF1E-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page6-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Kn6l1K'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page6-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MMS-X1'),
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
              <span className="page6-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EssdeL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page6-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mDB4Tb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page6-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0mNwKE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page6-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ljawwh'),
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
              <span className="page6-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_17zjk6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page6-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2lJlBA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page6-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wZFbHq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page6-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jZxGoK'),
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
              <span className="page6-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_r-FQnN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page6-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YYqRbq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page6-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GOnHj_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page6-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3NMbO-'),
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
              <span className="page6-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_w3RfyS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page6-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NQIuu4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page6-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KFDQr2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page6-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Qu0UqX'),
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
          .page6-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page6-text10 {
            display: inline-block;
          }
          .page6-text11 {
            display: inline-block;
          }
          .page6-text12 {
            display: inline-block;
          }
          .page6-text13 {
            display: inline-block;
          }
          .page6-text14 {
            display: inline-block;
          }
          .page6-text15 {
            display: inline-block;
          }
          .page6-text16 {
            display: inline-block;
          }
          .page6-text17 {
            display: inline-block;
          }
          .page6-text18 {
            display: inline-block;
          }
          .page6-text19 {
            display: inline-block;
          }
          .page6-text20 {
            display: inline-block;
          }
          .page6-text21 {
            display: inline-block;
          }
          .page6-text22 {
            display: inline-block;
          }
          .page6-text23 {
            display: inline-block;
          }
          .page6-text24 {
            display: inline-block;
          }
          .page6-text25 {
            display: inline-block;
          }
          .page6-text26 {
            display: inline-block;
          }
          .page6-text27 {
            display: inline-block;
          }
          .page6-text28 {
            display: inline-block;
          }
          .page6-text29 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Page6

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
