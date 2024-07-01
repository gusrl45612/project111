'use client';
import React, { useEffect, useState } from 'react';
import {
  Grid,
  Box,
  TextField,
  Typography,
  MenuItem,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import map from "../../../public/img/map.jpg";
import review from "../../../public/img/review.jpg";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import CallIcon from "@mui/icons-material/Call";
import dynamic from "next/dynamic";
import "../layout/Content.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./styles.css";
import Image from "next/image";




// const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), { ssr: false });
// const SwiperSlide = dynamic(() => import("swiper/react").then((mod) => mod.SwiperSlide), { ssr: false });

const currencies = [
  {
    value: "구 선택",
    label: "구 선택",
  },
  {
    value: "북구",
    label: "북구",
  },
  {
    value: "서구",
    label: "서구",
  },
  {
    value: "중구",
    label: "중구",
  },
  {
    value: "달서구",
    label: "달서구",
  },
  {
    value: "수성구",
    label: "수성구",
  },
  {
    value: "달성군",
    label: "달성군",
  },
  {
    value: "군위군",
    label: "군위군",
  },
];

const Content = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="content">
      <div className="styledBox">
        <div className="grid-container">
          <div className="grid-item">
            {/* <img className="styledImage" src={svgGroup} alt="사진" /> */}
          </div>
          <div className="grid-item">
            <div className="styleBox">
              <div className="title">온라인상담</div>
              <hr />
              <div className="form-container">
                <div className="form-item">
                  <input className="form-input" type="text" placeholder="이름" />
                </div>
                <div className="form-item">
                  <input className="form-input" type="tel" placeholder="전화번호" />
                </div>
                <div className="form-item">
                  <select className="form-select" defaultValue="중구">
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-item">
                  <textarea className="form-textarea" placeholder="요청사항/문의사항"></textarea>
                </div>
              </div>
              <button className="styledButton">
                첨부파일
                <input className="visually-hidden-input" type="file" />
              </button>
              <div className="checkbox">
                <label className="checkbox-label">
                  <input className="checkbox" type="checkbox" />
                  개인정보수집 및 이용동의
                </label>
              </div>
              <div className="submit">
                <button className="submit-button">신청하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 박스 */}
      <div className="grid-container">
        <div className="grid-item">
          <div className="SBox">
            <CallIcon fontSize="large" />
            053-123-1234
          </div>
        </div>
        <div className="grid-item">
          <div className="SBox">
            <div className="SlideSwiper">
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </div>
          </div>
        </div>
      </div>

      {/* 지도, 공지사항 */}
      <div className="grid-container">
        <div className="grid-item">
          <div className="SsBox">
            <Image className="styleImage" src={map} alt="지도사진" />
          </div>
        </div>
        <div className="grid-item">
          <div className="SsBox"></div>
        </div>
      </div>

      {/* 인스타그램 */}
      <div className="Insta">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={64}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="InBox">Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="InBox">Slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="InBox">Slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="InBox">Slide 4</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="InBox">Slide 5</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="InBox">Slide 6</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="InBox">Slide 7</div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 이용후기 */}
      <div className="grid-container">
        <div className="grid-items">
          <div className="RBox">
            <Image className="reviewImage" src={review} alt="이용후기" />
            <Image className="reviewImage" src={review} alt="이용후기" />
            <Image className="reviewImage" src={review} alt="이용후기" />
            <Image className="reviewImage" src={review} alt="이용후기" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
