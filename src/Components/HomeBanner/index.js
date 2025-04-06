import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Đảm bảo import Font Awesome

const HomeBanner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container mt-3">
      <div className="homeBannerSection" style={{ position: "relative" }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <img
                src="https://danfigure.vn/wp-content/uploads/2024/11/banner-211-%C3%97-62-cm-1200-%C3%97-518-px-1.png"
                alt="Banner 1"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://danfigure.vn/wp-content/uploads/2024/11/banner-211-%C3%97-62-cm-1200-%C3%97-518-px.png"
                alt="Banner 2"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://danfigure.vn/wp-content/uploads/2024/11/banner-211-%C3%97-62-cm-1200-%C3%97-518-px-1.png"
                alt="Banner 3"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://danfigure.vn/wp-content/uploads/2024/11/banner-211-%C3%97-62-cm-1200-%C3%97-518-px.png"
                alt="Banner 4"
                className="w-100"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        {/* Nút điều hướng tùy chỉnh */}
        <div className="swiper-button-prev" ref={prevRef}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div className="swiper-button-next" ref={nextRef}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
