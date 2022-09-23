import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// const Arrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", backgroundColor: '#000', color: '#fff', padding: '20px' }}
//             onClick={onClick}
//         >
//             <i class="fas fa-chevron-left"></i>
//         </div>
//     );
// }

const MySlider = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: props.autoplay,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {props.children}
        </Slider>


    );
}

export default MySlider