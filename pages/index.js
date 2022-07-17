import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
      <div className={styles.title}>
        <h1> Home Page</h1>  
        <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. </p>
        <p className={styles.text}>It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged. </p>
       <Link href="/posts">
       <a className={styles.btn}> See Latest  Posts</a>
       </Link>
      </div>
 
  )
}
