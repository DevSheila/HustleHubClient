import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import a from 'next/a'
import { useState } from 'react'
import { getSession, useSession, signOut } from "next-auth/react"
import LandingPage from './landingPage'
import HandymanVerification from './HandymanVerification'
// import HandymanVerification from './handymanVerification'


export default function Home() {

  const { data: session } = useSession()

  function handleSignOut(){
    signOut()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      <LandingPage/>
      
      {/* <HandymanVerification/> */}
    </div>
  )
}

