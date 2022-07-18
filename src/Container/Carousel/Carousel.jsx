import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { DispatchHook } from '../../CoustomHook/DispatchHook/DispatchHook';


function CarouselMake() {
    const {data} = DispatchHook()
    const {Images} = data
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
  return (
    <div style={{ padding: "10px 0px", width: "100%" }}>
    <Carousel
        showDots
        responsive={responsive}
        infinite
        autoPlay={true}
        arrows={false}
    >
        {
            Images?.map((banner, index) => (
                <div style={{ width: "100%", height: "70vh" }} key={index }>
                    <img style={{ width: "100%", height: "100%", cursor: "pointer" , objectFit:"cover"}} src={banner} alt="" />
                </div>
            ))
        }
    </Carousel>
</div>
  )
}

export default CarouselMake