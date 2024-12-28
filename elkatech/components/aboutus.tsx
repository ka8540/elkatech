import React, { useEffect } from 'react';

function AboutUs() {
  useEffect(() => {
    // Define a function to start the animation for all children
    const animateElements = (container: HTMLElement) => {
      const elements = container.querySelectorAll('.about-us-h1, .about-us-p');
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
    <div className='about-us-background'>
      <h1 className='about-us-h1'>About Us</h1>
      <p className='about-us-p'>Established in 2021, ElkaTech is a prominent wholesaler and distributor of a broad spectrum of Printing and Lamination Equipment. Our comprehensive selection encompasses top-of-the-line Solvent Printing Machine, Laser Engraving and Cutting Machine, UV LED Flatbed Printing Machine, and a Vinyl Cutting Machine outfitted with a Camera, among others. The equipment we provide is lauded for its simplicity, durability, extensive lifespan, and lightweight characteristics. Furthermore, we make these offerings available at remarkably affordable prices.</p>
    </div>
  );
}

export default AboutUs;
