import Head from 'next/head'
import React from 'react'

export const ShopLayout = ({ children, title, description, image }) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name='description' content={description} />

        <meta name='og:title' content={title} />
        <meta name='og:description' content={description} />
        {
          image && (<meta name='og:image' content={image} />)
        }
      </Head>

      <nav></nav>

      <main
        style={{
          margin: '80px auto',
          maxWidth: '1440px',
          padding: '0px 30px'
        }}
      >
        {children}
      </main>

      <footer style={{
        position: 'absolute',
        bottom: 0
      }}
      >
        asda
      </footer>
    </>
  )
}