import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../../utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Hero.scss";

import { Pagination } from "swiper/modules";
import { HeroProduct } from "../../types";
const Hero = () => {
  const [heroProducts, setHeroProducts] = useState<HeroProduct[]>([]);
  useEffect(() => {
    async function fetchHerodata() {
      try {
        const response: Response = await fetch("http://localhost:3000/hero");
        const data: HeroProduct[] = await response.json();
        setHeroProducts(data);
      } catch (error: unknown) {
        console.log(error);
      }
    }
    fetchHerodata();
  });
  return (
    <div className="hero">
      <Swiper
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {heroProducts.map((heroProduct: HeroProduct) => (
          <SwiperSlide key={heroProduct.id}>
            <div className="swiper-slide__container">
              <div className="swiper-slide__content">
                <h1>{heroProduct.product_name}</h1>
                <div className="swiper-slide__btns">
                  <Button className="btn" type="button" btn-size="lg" mode="p">
                    Shop Now
                  </Button>
                  <Button className="btn" type="button" btn-size="lg" mode="s">
                    Shop Now
                  </Button>
                </div>
              </div>
              <div className="swiper-price__img">
                <img src={heroProduct.product_image} alt="" />
                <div className="swiper-price__content">
                  <p className="swiper-price__text">
                    only <br />${heroProduct.product_price}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
