import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
const StyledSwiper = styled(Swiper)`
  display: grid;
  grid-column: 1/3;
  position: relative;
  width: 100%;

  & .swiper-wrapper {
    gap: 1rem;
  }

  & .swiper-button-prev,
  .swiper-button-next {
    color: rgb(95, 97, 96);
    width: 1rem;
    height: 1rem;
    background-color: white;
    padding: 1rem 1rem;
    border-radius: 59px;
  }

  & .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 10px;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  gap: 1rem;
  border-color: rgba(0, 0, 0, 0);
  overflow-x: scroll;
  padding-bottom: 1rem;

  & .liWrapper {
    background-color: #ccfdce;
    padding: 1rem;
    border-radius: 15px;
    & ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
  & .suggestion {
    font-size: 13px;
  }
`;

const SuggestionList = () => {
  return (
    <StyledSwiper
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        500: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        1010: { slidesPerView: 3 },
      }}
      watchSlidesProgress={true}
      className="mySwiper"
    >
      <StyledSwiperSlide>
        <div className="liWrapper">
          <h3>Write a standout title</h3>
          <ul>
            <li className="suggestion">
              We’ll recommend search terms that buyers often use, so be sure to
              add these in the title.
            </li>
            <li className="suggestion">
              Avoid all caps and focus on specific details like brand, model,
              size, and color.
            </li>
          </ul>
        </div>
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <div className="liWrapper">
          <h3>Take high-quality photos</h3>
          <ul>
            <li className="suggestion">
              Snap your items from multiple angles in a well-lit place, and
              capture any blemishes for transparency.
            </li>
            <li className="suggestion">
              On the greenBay app, you can clean up your images and add a white
              background.
            </li>
          </ul>
        </div>
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <div className="liWrapper">
          <h3>Pick a purchase format</h3>
          <ul>
            <li className="suggestion">
              If you want to sell your item quickly, Buy it Now is probably the
              best format for you.
            </li>
            <li className="suggestion">
              Otherwise, if you want to try your luck and shoot for the best
              possible price, choose Auction.
            </li>
          </ul>
        </div>
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <div className="liWrapper">
          <h3>Set the right price</h3>
          <ul>
            <li className="suggestion">
              We will recommend a price based on recent sales of similar items.
            </li>
            <li className="suggestion">
              You can even watch how other sellers are pricing their items, or
              use Best Offer to negotiate and sell faster.
            </li>
          </ul>
        </div>
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <div className="liWrapper">
          <h3>Ship with ease</h3>
          <ul>
            <li className="suggestion">
              We provide recommendations for delivery, but to save on shipping,
              use an eBay delivery label.
            </li>
            <li className="suggestion">
              Plus, if you’re selling locally, you can also offer Local Pickup.
            </li>
          </ul>
        </div>
      </StyledSwiperSlide>
    </StyledSwiper>
  );
};

export default SuggestionList;
