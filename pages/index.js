import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <><h1>this is cf2 {process.env.NEXT_PUBLIC_HOSTNAME}</h1></>
  )
}
