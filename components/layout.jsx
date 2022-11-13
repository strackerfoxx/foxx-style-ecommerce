import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout({children, title = ''}) {
  return (
    <>
        <Head>
            <title>Foxx Style - {title}</title>
        </Head>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}
