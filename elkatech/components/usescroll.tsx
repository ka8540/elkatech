import { useEffect } from 'react';

function useSlowScroll() {
  useEffect(() => {
    // Function to handle the scroll
    const handleScroll = (e: WheelEvent) => { // Use the specific type for wheel events
      // Prevent default scroll behavior if the event is cancelable
      if (!e.cancelable) {
        return; // Do not prevent default if the event is not cancelable
      }
      e.preventDefault();
      const { deltaY } = e;
      const speedFactor = 3; // Adjust the scroll speed, lower is slower
      window.scrollBy(0, deltaY * speedFactor);
    };

    // Target element
    const target = document.querySelector('.about-us-background') as HTMLElement | null;
    
    // Ensure the target exists before adding the event listener
    if (target) {
      target.addEventListener('wheel', handleScroll, { passive: false });
    
      // Clean up function
      return () => {
        target.removeEventListener('wheel', handleScroll);
      };
    }
  }, []);
}

export default useSlowScroll;
