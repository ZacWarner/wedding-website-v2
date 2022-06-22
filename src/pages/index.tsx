import { trpc } from '@/utils/trpc'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>ZacAndLisa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen flex flex-col justify-center">
        <div className='bg-red-200'>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
        </div>
        <div className='bg-pink-400'>
          second
        </div>
      </div>
    </div>
  )
}

export default Home
