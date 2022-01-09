import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elite-Pizza</title>
        <meta name="description" content="Best tasty pizza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>home page</div>
    </div>
  )
}
