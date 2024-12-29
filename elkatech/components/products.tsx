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

function Products() {
  useSlowScroll();
  
  useEffect(() => {
    // Define a function to start the animation for all children
    const animateElements = (container: HTMLElement) => {
      const elements = container.querySelectorAll('.products-h1');
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
      const container = document.querySelector('.products-div') as HTMLElement | null;
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
    <div className='products-div'>
      <h1 className='products-h1'>Our Products</h1> 
    {/* <div className='logo-div'> 
     
    </div> */}

  </div>
    </>
  );
}

export default Products;
