import { useState, useRef, useEffect } from 'react';
import { useScroll } from 'react-use-gesture';

export default function useSectionScroll(sections: Array<{id: string}>) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const getScrollOffset = () => {
    const titleElement = document.querySelector('.module-title');
    return titleElement ? titleElement.getBoundingClientRect().height : 0;
  };

  const updateActiveSection = (direction: 'up' | 'down') => {
    const container = scrollContainerRef.current;
    if (!container) return;
  
    const scrollOffset = getScrollOffset();
    const scrollPos = container.scrollTop + scrollOffset;
    const containerHeight = container.clientHeight;
  
    if (scrollPos + containerHeight >= container.scrollHeight) {
      setActiveSection(sections[sections.length - 1].id);
      return;
    }

    const firstElement = document.getElementById(sections[0]?.id);
    if (firstElement && scrollPos <= firstElement.offsetTop + scrollOffset) {
      setActiveSection(sections[0].id);
      return;
    }

    let activeIndex = 0;
    let minDistance = Infinity;
    
    sections.forEach((section, index) => {
      const element = document.getElementById(section.id);
      if (element) {
        const distance = Math.abs(element.offsetTop - scrollPos);
        if (distance < minDistance) {
          minDistance = distance;
          activeIndex = index;
        }
      }
    });

    if (direction === 'up' && activeIndex > 0) {
      const currentElement = document.getElementById(sections[activeIndex].id);
      const prevElement = document.getElementById(sections[activeIndex - 1].id);
      
      if (currentElement && prevElement) {
        const viewportMiddle = container.scrollTop + (container.clientHeight / 2);
        if (viewportMiddle < currentElement.offsetTop) {
          activeIndex--;
        }
      }
    }

    const newActiveSection = sections[activeIndex]?.id;
    if (newActiveSection && newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let lastScrollTop = container.scrollTop;
    let scrollTimeout: number;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const direction = scrollTop > lastScrollTop ? 'down' : 'up';
      setScrollDirection(direction);
      lastScrollTop = scrollTop;

      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        updateActiveSection(direction);
      }, 50);
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      window.clearTimeout(scrollTimeout);
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
  const bind = useScroll(({ delta: [, dy], dragging, last }) => {
    if (!scrollContainerRef.current || isScrolling.current) return;
    
    if (dragging) {
      const direction = dy > 0 ? 'down' : 'up';
      const container = scrollContainerRef.current;
      const newScrollTop = container.scrollTop + dy * 1.5;
      
      container.scrollTop = newScrollTop;
      setScrollDirection(direction);
      
      if (newScrollTop <= 0) {
        setActiveSection(sections[0]?.id || '');
      } else if (last) {
        updateActiveSection(direction);
      }
    }
  }, { eventOptions: { passive: true } });


const scrollToSection = (sectionId: string) => {
    requestAnimationFrame(() => {
      const element = document.getElementById(sectionId);
      const container = scrollContainerRef.current;
      if (!element || !container) return;
  
      isScrolling.current = true;
      setActiveSection(sectionId);
  
      const scrollOffset = getScrollOffset();
      const containerHeight = container.clientHeight;
    //   const elementHeight = element.offsetHeight;
      

      const targetScrollTop = Math.min(
        element.offsetTop - scrollOffset,
        container.scrollHeight - containerHeight
      );

      container.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });
  
  
      const checkScrollComplete = () => {
        if (Math.abs(container.scrollTop - targetScrollTop) < 1) {
          isScrolling.current = false;
          updateActiveSection(scrollDirection);
        } else {
          requestAnimationFrame(checkScrollComplete);
        }
      };
  
      requestAnimationFrame(checkScrollComplete);
    });
  };

  return {
    activeSection,
    scrollContainerRef,
    scrollToSection,
    bind,
    scrollDirection
  };
}