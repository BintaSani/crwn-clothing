import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
//import 'slick-ca'
import "slick-carousel/slick/slick-theme.css";
import './carousel.styles.scss';


const CarouselPage = ({ images }) => {

	const settings = {
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		autoplay: true,
		autoplaySpeed: 2000,

	};
	return (
		<>
			<div className="img-slider">
				<Slider {...settings}>
					{images.map((item) => (
						<div key={item.id}>
							<img src={item.src} alt={item.alt} />
						</div>
					))}
				</Slider>
			</div>
            <div className="tag">
				<h1>Deals</h1>
			</div>
		</>
	)
}




export default CarouselPage;
