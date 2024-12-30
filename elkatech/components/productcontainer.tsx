import React, { useEffect, useRef } from 'react';

const ProductsContainer: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const container = containerRef.current;
      if (container) {
        const productCards = container.querySelectorAll('.product-card');
  
        let delay = 0; // Starting delay for the first card
        const delayIncrement = 0.1; // Increment delay for each subsequent card
  
        const observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry, index) => {
              if (entry.isIntersecting) {
                const htmlElement = entry.target as HTMLElement;
                htmlElement.style.animation = `fadeInOnScroll 1s ${delay}s forwards ease-out`;
                delay += delayIncrement; // Increment delay for the next card
                observer.unobserve(entry.target); // Stop observing the current card
              }
            });
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
          }
        );
  
        productCards.forEach((card) => {
          observer.observe(card as HTMLElement);
        });
  
        return () => {
          productCards.forEach((card) => {
            observer.unobserve(card as HTMLElement);
          });
        };
      }
    }, []);
  

  return (
    <div ref={containerRef} className='products-container'>
       <div className='product-card'>
            <img src="https://5.imimg.com/data5/YH/NO/KP/SELLER-44078721/cnc-router-250x250.jpg" alt="CNC" />
            <h2>CNC Router</h2>
            <p>High precision CNC routers for all your cutting</p>
        </div>
        <div className='product-card'>
            <img src="https://5.imimg.com/data5/SK/LJ/MY-44078721/vje-km-512-42pl-solvent-printing-machine-250x250.jpg" alt="SPM"  style={{width:'85%'}}/>
            <h2>Solvent Printing Machine</h2>
            <p>High quality solvent printing machines</p>
        </div>
        <div className='product-card'>
            <img src="https://5.imimg.com/data5/VZ/WG/HQ/SELLER-44078721/channel-letter-bending-machine-250x250.jpg" alt="CLBM" />
            <h2>Channel Letter Bending Machine</h2>
            <p>High precision channel letter bending machines</p>
        </div>
        <div className='product-card'>
            <img src="https://5.imimg.com/data5/EA/JT/MY-44078721/vje-jq1390c-laser-eng-250x250.jpg" alt="LECM" style={{width:'85%'}} />
            <h2>Laser Engraving Cutting Machine</h2>
            <p>High precision laser engraving cutting machines</p>
        </div>
        <div className='product-card'>
            <img src="https://5.imimg.com/data5/KQ/RY/MY-44078721/vje-vinyl-cutting-machine-with-camera-250x250.jpg" alt="VCM" />
            <h2>Vinyl Cutting Machine</h2>
            <p>High precision vinyl cutting machines</p>
        </div>
        <div className='product-card'>
            <img src="https://5.imimg.com/data5/AE/PI/MY-44078721/vje-inkjet-rotary-engraver-250x250.jpg" alt="TIEM" />
            <h2>Textile Inkjet Engraver Machine</h2>
            <p>High precision textile inkjet engraver machines</p>
        </div>
        <div className='product-card'>
            <img src="https://5.imimg.com/data5/YT/TW/MY-44078721/vje-uv-laser-flatbed-engraver-250x250.jpg" alt="TLE" />
            <h2>Textile UV Laser Engraver</h2>
            <p>High precision textile uv laser engraver machines</p>
        </div>
        <div className='product-card'>
            <img src="https://5.imimg.com/data5/LY/NA/MY-44078721/vje-uv-led-flatbed-printing-machine-250x250.jpg" alt="FPM" />
            <h2>UV LED Flatbed Printing Machine</h2>
            <p>High precision uv led flatbed printing machines</p>
        </div>
    </div>
  );
};

export default ProductsContainer;
