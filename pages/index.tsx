import type { GetStaticProps, NextPage } from 'next'

import Head from 'next/head'

import Dose from '../components/dose'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Profile from '../components/profile'
import Hospital from '../components/hospital'

import { data } from '../data'

const Home: NextPage = (props: any) => {
  return (
    <div className='bg-light-grey relative'>
      <Head>
        <title>Depression of Captainistz</title>
        <meta name='description' content='Dose tracker of captainistz depression' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='min-h-screen overflow-hidden flex flex-col'>
        <Navbar />
        <Profile {...props} />
        <Hospital {...props} />
        <Dose {...props} />
        <Footer />
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      hospital: data['hospital'],
      dose: data['dose'],
    },
  }
}

export default Home
