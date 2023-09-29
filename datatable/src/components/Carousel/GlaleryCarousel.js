import React, {useState} from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const GlaleryCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const images = [9, 8, 7, 6, 5].map((number, index) => ({
      src: `https://placedog.net/${number}00/${number}00?id=${number}`,
      onMouseEnter: () => setActiveSlide(index), // Set active slide on hover
      onMouseLeave: () => setActiveSlide(0), // Reset active slide on hover out
    }));
    return (
      <section className='section' aria-labelledby='example2'>
        <div className='carousel-container'>
          <Carousel 
          images={images} 
          className='framed-carousel'
          index={activeSlide} // Set the active slide based on state
          hasCaptionsAtMax='top'
          hasDotButtonsAtMax='bottom'
          
          hasThumbnailsAtMax={true}
          thumbnailWidth={'15%'}
          thumbnailHeight={'15%'}
          shouldMaximizeOnClick={true}
          shouldMinimizeOnClick={true}
          />
        </div>
      </section>
    );
  };
  
  export default GlaleryCarousel;