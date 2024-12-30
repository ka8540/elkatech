import React, { useEffect } from 'react';
import useSlowScroll from './usescroll';
import ProductsContainer from './productcontainer';

function Products() {
    useSlowScroll();
  
    useEffect(() => {
      let allAnimated = false;
  
      const animateElements = (container: HTMLElement) => {
        const elements = container.querySelectorAll('.products-h1');
        elements.forEach((element) => {
          const htmlElement = element as HTMLElement;
          if (!htmlElement.classList.contains('animated')) { 
            htmlElement.style.animation = 'none'; 
            setTimeout(() => {
              htmlElement.style.visibility = 'visible';
              htmlElement.style.animation = 'fadeInOnScroll 1s forwards ease-out';
              htmlElement.classList.add('animated'); 
            }, 5); 
          }
        });
  
        allAnimated = Array.from(elements).every(el => el.classList.contains('animated'));
      };
  
      const setupObserver = () => {
        const container = document.querySelector('.products-div') as HTMLElement | null;
        if (!container) return null;
  
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateElements(entry.target as HTMLElement);
              if (allAnimated) { // If all elements have been animated
                observer.disconnect(); // Stop observing
              }
            }
          });
        }, { threshold: 0.1 });
  
        observer.observe(container);
  
        return observer;
      };
  
      const observer = setupObserver();
  
      return () => {
        observer?.disconnect();
      };
    }, []);

  
  return (
    <>
    <div className='products-div'>
      <h1 className='products-h1'>Our Products</h1> 
      <ProductsContainer />

  </div>
    </>
  );
}

export default Products;
