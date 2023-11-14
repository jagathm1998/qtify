import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carousel.css';

function Carousel({data}) {
 return <div className='carousel-container'>  
<Swiper
 modules={[Virtual, Navigation, Pagination]}
//  onSwiper={setSwiperRef}
 slidesPerView={8}
//  centeredSlides={true}
 spaceBetween={30}
//  pagination={{
//    type: 'fraction',
//  }}
//  navigation={true}
 navigation = {{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
 virtual
>
    {data.map(cardData => <SwiperSlide key={cardData.id}><Card 
        imgSrc={cardData.image}
        label={cardData.title}
        followersCount={cardData.follows}
        /></SwiperSlide>)}
</Swiper>
    <div className='arrow-left arrow'><img src='leftIcon.png'/></div>
    <div className='arrow-right arrow'><img src='rightIcon.png'/></div>
</div>

}

export default Carousel;