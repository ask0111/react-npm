import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImages = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    // const accessKey = 'oixo1MBi2RCylgJYiOb9LvfO4S0dt6zoBnsQ2_ewYeU'
    // const Image = 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU';

    const PlaceholderImage = 'https://placehold.co/600x400/EEE/31343C';


    const [data, setData] = useState([]);



    const fetch = async () => {
        try {
            const res = await axios('https://picsum.photos/v2/list');
            console.log(res.data[0].url, 'll')
            setData(res.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        fetch()
    }, [])



    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    const handleImageError = () => {
        setIsLoaded(false);
    };

    console.log('yes')


    return (
        <>
   
            {
                data?.map((Image, ind) => (
                    <div key={ind} style={{ border: '1px solid red', width: '250px', height: '250px' }}>
                        {!isLoaded ? 
                        
                        <img 
                        style={{ width: '100%', height: '100%' }} 
                        src={PlaceholderImage}
                        placeholder={PlaceholderImage}
                        onLoad={handleImageLoad}
        onError={handleImageError}
                        /> :
                            <LazyLoadImage src={Image.download_url}
                                width={'100%'} height={'100%'}
                                PlaceholderSrc={PlaceholderImage}
                                effect="blur"
                                key={ind}
                                alt={'image' + ind}
                            />}
                    </div>)

                )
            }
        </>
    );
};

export default LazyImages;

