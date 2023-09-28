import React, {useRef, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import '../../App.css'


const Carousels = () => {

  const [state, setState] = useState(0);
  const [active, setActive] = useState(false);

  const carouselRef = useRef(null);

  const handleButtonHover = (index,e) => {
    
    // carouselRef.current.classList.remove('active');
    e.target.setAttribute('data-bs-slide-to', index);
    // if(index >= 3){
    //   setState(0)
    // }
    // else if(index < 0){
    //   setState(2)
    // }else{
    //   setState(index)
    // }
    console.log(e.target, index,  'l')
    
    
  };

  const carousel = document.querySelector('#carouselExampleCaptions');
const carouselIndicators = document.querySelector('.carousel-indicators');

carouselIndicators?.addEventListener('mouseover', (event) => {
  const button = event.target;
  const slideIndex = button.getAttribute('data-bs-slide-to');
console.log('kdfk')
  carousel.setActiveSlide(slideIndex);
});


//   const carousel = document.querySelector('#carouselExampleCaptions');
// const carouselInstance = new bootstrap.Carousel(carousel);



  return (<>
 
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div style={{position: 'relative'}} class="carousel-indicators">
    <button type="button"  data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="https://img.freepik.com/premium-photo/hustle-central-casual-entrepreneur-cartoon-character-work_965363-397.jpg" class="d-block w-100" alt="..." /></button>
    <button type="button"  data-bs-slide-to="1" aria-label="Slide 2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbIKi0mh0P10kK8W_fcUgXF7CsZPpE2XDL5OMpusv294zcLI8Tt-kXiU3ZsN64DPt2fY&usqp=CAU" class="d-block w-100" alt="..." />
    </button>
    <button type="button"  data-bs-slide-to="2" aria-label="Slide 3">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_pw1BpBfuZAevTRIg7RFQD1NZzdrEy016w&usqp=CAU" class="d-block w-100" alt="..." />
    </button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/premium-photo/hustle-central-casual-entrepreneur-cartoon-character-work_965363-397.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbIKi0mh0P10kK8W_fcUgXF7CsZPpE2XDL5OMpusv294zcLI8Tt-kXiU3ZsN64DPt2fY&usqp=CAU" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_pw1BpBfuZAevTRIg7RFQD1NZzdrEy016w&usqp=CAU" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  
    {/* <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" >
      

      <div ref={carouselRef}
 class="carousel-inner">
        <div  class={`carousel-item ${state == 0 ? 'active' : ''} w-100 h-100`}>
          <img src="https://img.freepik.com/premium-photo/hustle-central-casual-entrepreneur-cartoon-character-work_965363-397.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div  class={`carousel-item ${state == 1 ? 'active' : ''} w-100 h-100`}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbIKi0mh0P10kK8W_fcUgXF7CsZPpE2XDL5OMpusv294zcLI8Tt-kXiU3ZsN64DPt2fY&usqp=CAU" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div  class={`carousel-item ${state == 2 ? 'active' : ''} w-100 h-100`}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_pw1BpBfuZAevTRIg7RFQD1NZzdrEy016w&usqp=CAU" class="d-block w-100 h-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>

      <div style={{position: 'relative'}} className="carousel-indicators border">


        <button type="button"  data-bs-slide-to="0" class={`active ${state == 0 ? 'hover' : ''}`} aria-current="true" aria-label="Slide 1"
        onMouseEnter={(e) => {
          handleButtonHover(0, e)}
        }
        >
          <img src="https://img.freepik.com/premium-photo/hustle-central-casual-entrepreneur-cartoon-character-work_965363-397.jpg" class="d-block w-100" alt="..." />
        </button>

        <button type="button" class={` ${state == 1 ? 'hover' : ''}`}  data-bs-slide-to="1" aria-label="Slide 2" onMouseEnter={(e) => handleButtonHover(1, e)} >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbIKi0mh0P10kK8W_fcUgXF7CsZPpE2XDL5OMpusv294zcLI8Tt-kXiU3ZsN64DPt2fY&usqp=CAU" class="d-block w-100" alt="..." />
        </button>


        <button type="button" class={` ${state == 2 ? 'hover' : ''}`}  data-bs-slide-to="2" aria-label="Slide 3" onMouseEnter={(e) => handleButtonHover(2, e)}  >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_pw1BpBfuZAevTRIg7RFQD1NZzdrEy016w&usqp=CAU" class="d-block w-100 h-100" alt="..." />
        </button>
      </div>

      <button type="button" class="carousel-control-prev" type="button" data-bs-slide="prev" 
      onClick={(e) => handleButtonHover(state - 1, e)}
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button type="button" class="carousel-control-next" type="button" data-bs-slide="next"
      onClick={(e) => handleButtonHover(state + 1, e)}>
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> */}
  </>

  );
};

export default Carousels;