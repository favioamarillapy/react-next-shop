import Head from 'next/head'
import { Menu } from '../ui/Menu'
import { Navbar } from '../ui/Navbar'

export const ShopLayout = ({ children, title, description, image, category }) => {
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

      <Navbar />

      <Menu />

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

      </footer>
    </>
  )
}