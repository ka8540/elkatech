"use client";
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';
import AboutUs from '../components/aboutus';




export default function Home() {

  return (
    <>
      <Head>
        <title>ElkaTech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className='front-page-h1'>ElkaTech.</h1>
        <div style={{position:'relative',height:'500px', marginTop:'-100px', marginBottom:'100px'}}>
        <Image src="/ElkaTechLogo.png" 
        // width={500} 
        // height={500} 
        fill={true}
        sizes='100vw'
        
        style={{objectFit:'contain'}}
        className="front-page-logo"
         alt="Elka Tech" />
        </div> 
        <h4>Where Quality & Quantity Meets</h4>
        <button className="get-started-button">Get Started</button>
      </div>
      <AboutUs />
    </>
  );
}

