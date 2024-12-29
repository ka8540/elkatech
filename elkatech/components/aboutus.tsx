import React, { useEffect } from 'react';
import useSlowScroll from './usescroll';
import Head from 'next/head';
import { MdGroups3 } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { GiReceiveMoney } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbWorldDollar } from "react-icons/tb";
import { GrDocumentVerified } from "react-icons/gr";

function AboutUs() {
  useSlowScroll();
  
  useEffect(() => {
    // Define a function to start the animation for all children
    const animateElements = (container: HTMLElement) => {
      const elements = container.querySelectorAll('.about-us-h1, .about-us-p, .logo-div');
      elements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.animation = 'none'; // Reset animation
        setTimeout(() => {
          htmlElement.style.visibility = 'visible';
          htmlElement.style.animation = 'fadeInOnScroll 1s forwards ease-out';
        }, 5); // Timeout to reapply the animation
      });
    };

    // Setup observer with the animation logic for the container
    const setupObserver = () => {
      const container = document.querySelector('.about-us-background') as HTMLElement | null;
      if (!container) return null;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateElements(entry.target as HTMLElement);
          }
        });
      }, { threshold: 0.1 });

      observer.observe(container);

      return observer;
    };

    // Initialize observer for the container
    const observer = setupObserver();

    // Clean up the observer when the component unmounts
    return () => {
      observer?.disconnect();
    };
  }, []);

  return (
    <>
     <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=block" />
      </Head>
    <div className='about-us-background'>
      <h1 className='about-us-h1'>About Us</h1>
      <p className='about-us-p'>Established in 2021, ElkaTech is a prominent wholesaler and distributor of a broad spectrum of Printing and Lamination Equipment. Our comprehensive selection encompasses top-of-the-line Solvent Printing Machine, Laser Engraving and Cutting Machine, UV LED Flatbed Printing Machine, and a Vinyl Cutting Machine outfitted with a Camera, among others. The equipment we provide is lauded for its simplicity, durability, extensive lifespan, and lightweight characteristics. Furthermore, we make these offerings available at remarkably affordable prices.</p>
    {/* First logo Div */}  
    <div className='logo-div'> 
      <div style={{ display: 'flex', alignItems: 'center', fontSize: '1rem'}}>
        <div className='circle-div'>
          <FaRegBuilding style={{ fontSize: '1.5rem', color: 'white' }} />
        </div>
        <div>
          <span style={{ display: 'block', color: '#939393', marginBottom: '5px', fontWeight: 'bold'}}>
            Year of Establishment
          </span>
          <span style={{ display: 'block', color: 'black' , fontWeight:'bold'}}>
            2021
          </span>
        </div>
      </div> 

      <div style={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
        <div className='circle-div'>
          <MdGroups3 style={{ fontSize: '2.5rem', color: 'white' }} />
        </div>
        <div>
          <span style={{ display: 'block', color: '#939393', marginBottom: '5px', fontWeight: 'bold'}}>
            Total Number of Employees
          </span>
          <span style={{ display: 'block', color: 'black' , fontWeight:'bold'}}>
            11 to 25 People
          </span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
        <div className='circle-div'>
          <GoLaw style={{ fontSize: '2.5rem', color: 'white' }} />
        </div>
        <div>
          <span style={{ display: 'block', color: '#939393', marginBottom: '5px', fontWeight: 'bold'}}>
          Legal Status of Firm
          </span>
          <span style={{ display: 'block', color: 'black' , fontWeight:'bold'}}>
          Partnership Firm
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', fontSize: '1rem'}}>
        <div className='circle-div'>
          <GiReceiveMoney style={{ fontSize: '2.5rem', color: 'white' }} />
        </div>
        <div>
          <span style={{ display: 'block', color: '#939393', marginBottom: '5px', fontWeight: 'bold'}}>
          Nature of Business
          </span>
          <span style={{ display: 'block', color: 'black' , fontWeight:'bold'}}>
          Exporter and Wholesaler
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}>
        <div className='circle-div'>
          <BsGraphUpArrow style={{ fontSize: '1.5rem', color: 'white' }} />
        </div>
        <div>
          <span style={{ display: 'block', color: '#939393', marginBottom: '5px', fontWeight: 'bold'}}>
          Annual Turnover
          </span>
          <span style={{ display: 'block', color: 'black' , fontWeight:'bold'}}>
          Rs. 1 - 2 Crore
          </span>
        </div>
      </div>

      {/* These divs will now stack vertically within the outer div */}
      <div style={{ display: 'flex', alignItems: 'center', fontSize: '1rem', }}>
        <div className='circle-div'>
          <TbWorldDollar style={{ fontSize: '2.5rem', color: 'white' }} />
        </div>
        <div>
          <span style={{ display: 'block', color: '#939393', marginBottom: '5px', fontWeight: 'bold'}}>
          Import Export Code (IEC)
          </span>
          <span style={{ display: 'block', color: 'black' , fontWeight:'bold'}}>
          AAPFV*****
          </span>
        </div>
      </div> 

      <div style={{ display: 'flex', alignItems: 'center', fontSize: '1rem',}}>
        <div className='circle-div'>
          <GrDocumentVerified style={{ fontSize: '2.5rem', color: 'white' }} />
        </div>
        <div>
          <span style={{ display: 'block', color: '#939393', marginBottom: '5px', fontWeight: 'bold'}}>
          GST Number
          </span>
          <span style={{ display: 'block', color: 'black' , fontWeight:'bold'}}>
          24AAPFV0858C1Z4
          </span>
        </div>
      </div>

    </div>

    {/* Second Logo Div */}

   
  </div>
    </>
  );
}

export default AboutUs;
