"use client";
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';
import AboutUs from '../components/aboutus';
import Products from '@/components/products';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
export default function Home() {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('about-us-section');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScroll = () => {
    // Use window.scrollY to check the vertical position of the scroll bar
    const screenHeight = window.innerHeight; // Height of the viewport
    const mainContentHeight = document.getElementById('main-content')?.clientHeight || screenHeight;
    
    // Check if we've scrolled past the main content
    setShowNavbar(window.scrollY > mainContentHeight);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  


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
        <button className="get-started-button" onClick={scrollToAboutUs}>Get Started</button>
      </div>
      {showNavbar && <Navbar />}
      <div id="about-us-section" style={{marginBottom:'100px'}}>
        <AboutUs /> 
      </div>
      <Products/>
      <Footer />
    </>
  );
}

