import Head from 'next/head'
import Image from 'next/image'
import Header from './components/header.tsx'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TriCoJams</title>
        <meta name="description" content="Jam session finder for the Swarthmore/Haverford/Bryn Mawr community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
      </main>
    </div>
  )
}
