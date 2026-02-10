import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import CtaBandSection7 from '../components/cta-band-section7'
import CtaBandSection8 from '../components/cta-band-section8'
import CtaBandSection9 from '../components/cta-band-section9'
import CtaBandSection10 from '../components/cta-band-section10'
import CtaBandSection11 from '../components/cta-band-section11'

const Page41 = (props) => {
  const translate = useTranslations()
  const router = useRouter()
  return (
    <>
      <div className="page41-container">
        <Head>
          <title>
            Page41 - My awesome website title (taken from my meta Title)
          </title>
          <meta
            name="description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <meta
            property="og:title"
            content="Page41 - My awesome website title (taken from my meta Title)"
          />
          <meta
            property="og:description"
            content="Hello my little friend .... this is taken from the site general Meta description\n"
          />
          <link
            rel="canonical"
            href={`https://admin.teleporthq.ai${
              router.locale === router.defaultLocale ? '' : '/' + router.locale
            }/page41`}
          />
          <link
            rel="alternate"
            hreflang="en"
            href="https://admin.teleporthq.ai/page41"
          />
          <link
            rel="alternate"
            hreflang="es"
            href="https://admin.teleporthq.ai/es/page41"
          />
          <link
            rel="alternate"
            hreflang="x-default"
            href="https://admin.teleporthq.ai/page41"
          />
        </Head>
        <CtaBandSection7
          sectionTitle={
            <Fragment>
              <span className="page41-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bU8P2p'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page41-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iyqPwp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page41-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FouLau'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page41-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iFwITT'),
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
              <span className="page41-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_t3x-zM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page41-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6FXsag'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page41-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bEm3SY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page41-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WPEZqN'),
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
              <span className="page41-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vfBMSY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page41-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cJD3OD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page41-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Lqy3rx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page41-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0JeJTc'),
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
              <span className="page41-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_I_hZsU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page41-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zF9oD6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page41-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iu7KC0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page41-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1XTKCU'),
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
              <span className="page41-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZNwm6I'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="page41-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6xGXmA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="page41-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_06zQsI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          sectionContent={
            <Fragment>
              <span className="page41-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_U67FLE'),
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
          .page41-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page41-text10 {
            display: inline-block;
          }
          .page41-text11 {
            display: inline-block;
          }
          .page41-text12 {
            display: inline-block;
          }
          .page41-text13 {
            display: inline-block;
          }
          .page41-text14 {
            display: inline-block;
          }
          .page41-text15 {
            display: inline-block;
          }
          .page41-text16 {
            display: inline-block;
          }
          .page41-text17 {
            display: inline-block;
          }
          .page41-text18 {
            display: inline-block;
          }
          .page41-text19 {
            display: inline-block;
          }
          .page41-text20 {
            display: inline-block;
          }
          .page41-text21 {
            display: inline-block;
          }
          .page41-text22 {
            display: inline-block;
          }
          .page41-text23 {
            display: inline-block;
          }
          .page41-text24 {
            display: inline-block;
          }
          .page41-text25 {
            display: inline-block;
          }
          .page41-text26 {
            display: inline-block;
          }
          .page41-text27 {
            display: inline-block;
          }
          .page41-text28 {
            display: inline-block;
          }
          .page41-text29 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Page41

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
