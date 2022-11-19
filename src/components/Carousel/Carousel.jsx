import Slider from "react-slick";

import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    sliderHeadphoneImg
} from "../../assets/images"

function Carousel() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                centerMode: true,
                centerPadding: "20px",
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    //for example
    const data = [
        {
            img: sliderHeadphoneImg,
            text: 'Beats Fit Pro'
        },
        {
            img: sliderHeadphoneImg,
            text: 'Beats Fit Pro'
        },
        {
            img: sliderHeadphoneImg,
            text: 'Beats Fit Pro'
        },
        {
            img: sliderHeadphoneImg,
            text: 'Beats Fit Pro'
        },
        {
            img: sliderHeadphoneImg,
            text: 'Beats Fit Pro'
        },
        {
            img: sliderHeadphoneImg,
            text: 'Beats Fit Pro'
        },
    ]

    return (
        <div className='carousel container'>
            <Slider {...settings}>
                {data.map((item,i) => (<div className="carousel__item" key={i}>
                    <div className="carousel__itemBlock">
                        <img src={item.img} alt="" className="carousel__itemImg"/>
                        <h5 className="carousel__itemText">{item.text}</h5>
                    </div>
                </div>))}
            </Slider>
        </div>
    );
}

export default Carousel;
