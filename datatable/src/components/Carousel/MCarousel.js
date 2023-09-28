import React, { useEffect, useState } from 'react';
import '../../App.css'


const MCarousel = () => {

    const [state, setState] = useState(0);

    

    const StateHnadler = (index)=>{
        if(index > 2){
            setState(0)
        }
        else if(index < 0){
            setState(2)
        }else{
            setState(index)
        }
    }

    useEffect(()=>{
        const Inter = setInterval(()=>{
           
        //     if(state > 2){
        //         setState(0)
        //     }
        //    else{
        // }
        setState((prevSlide) => (prevSlide + 1) % 3)
            console.log(state)
        }, 3000)
        return ()=> {clearInterval(Inter) };
    }, [])

    
    return (
        <>
            <div className="container">
                <div className={`mySlides ${state == 0 ? 'show' : ''}`}>
                    <img className={`numbertext`} src="https://img.freepik.com/premium-photo/hustle-central-casual-entrepreneur-cartoon-character-work_965363-397.jpg"  alt="..." />
                </div>
                <div className={`mySlides ${state == 1 ? 'show' : ''}`}>
                    <img className={`numbertext`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbIKi0mh0P10kK8W_fcUgXF7CsZPpE2XDL5OMpusv294zcLI8Tt-kXiU3ZsN64DPt2fY&usqp=CAU"  alt="..." />
                </div>
                <div className={`mySlides ${state == 2 ? 'show' : ''}`} >
                    <img className={`numbertext`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_pw1BpBfuZAevTRIg7RFQD1NZzdrEy016w&usqp=CAU" alt="..." />
                </div>


                <a className="prev" onClick={()=>StateHnadler(state-1)}>❮</a>
                <a className="next" onClick={()=>StateHnadler(state+1)}>❯</a>


                <div className="row">
                    <div className="column">
                        <img onMouseOver={()=>setState(0)} className={`demo cursor ${state == 0 ? 'active' : ''}`} src="https://img.freepik.com/premium-photo/hustle-central-casual-entrepreneur-cartoon-character-work_965363-397.jpg"  alt="..." />
                    </div>
                    <div className="column">
                        <img onMouseOver={()=>setState(1)} className={`demo cursor ${state == 1 ? 'active' : ''}`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbIKi0mh0P10kK8W_fcUgXF7CsZPpE2XDL5OMpusv294zcLI8Tt-kXiU3ZsN64DPt2fY&usqp=CAU" alt="..." />
                    </div>
                    <div className="column">
                        <img onMouseOver={()=>setState(2)} className={`demo cursor ${state == 2 ? 'active' : ''}`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_pw1BpBfuZAevTRIg7RFQD1NZzdrEy016w&usqp=CAU" alt="..." />
                    </div>
                </div>
            </div>

        </>
    );
};

export default MCarousel;