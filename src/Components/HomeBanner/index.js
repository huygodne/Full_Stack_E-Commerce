import Slider from "react-slick";

const HomeBanner = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
    };

    return (
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://danfigure.vn/wp-content/uploads/2024/11/banner-211-%C3%97-62-cm-1200-%C3%97-518-px-1.png" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://danfigure.vn/wp-content/uploads/2024/11/banner-211-%C3%97-62-cm-1200-%C3%97-518-px-1.png" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://danfigure.vn/wp-content/uploads/2024/11/banner-211-%C3%97-62-cm-1200-%C3%97-518-px-1.png" className="w-100"/>
                </div>
            </Slider>
        </div>
    )
}

export default HomeBanner;