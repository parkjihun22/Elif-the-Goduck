import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [
      { title: "브랜드 소개", url: "/brand/intro" }, 
      // { title: "홍보 영상", url: "/brand/video" }
    ];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>엘리프 고덕 센트럴하이 | 브랜드 소개</title>

  <meta
    name="description"
    content="엘리프 고덕 센트럴하이 브랜드 소개. 평택 고덕국제화계획지구 Aab-13BL에 조성되는 총 996세대 ELIF 브랜드 아파트의 주거 가치와 서정리역세권 입지를 소개합니다."
  />

  <meta
    name="keywords"
    content="엘리프 고덕 센트럴하이, 평택 엘리프 고덕 센트럴하이, 고덕국제화계획지구 Aab-13BL, 서정리역세권 엘리프, 평택 고덕 아파트, 고덕국제신도시 아파트, 엘리프 브랜드"
  />

  <link
    rel="canonical"
    href="https://www.diarivalencia.com/Brand/intro"
  />

  <meta name="robots" content="index,follow" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="엘리프 고덕 센트럴하이" />

  <meta
    property="og:title"
    content="엘리프 고덕 센트럴하이 | 브랜드 소개"
  />

  <meta
    property="og:description"
    content="평택 고덕국제화계획지구 Aab-13BL, 총 996세대 규모의 ELIF 브랜드 아파트 엘리프 고덕 센트럴하이를 소개합니다."
  />

  <meta
    property="og:url"
    content="https://www.diarivalencia.com/Brand/intro"
  />

  <meta
    property="og:image"
    content="https://www.diarivalencia.com/images/og/main.jpg"
  />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  엘리프 고덕 센트럴하이 - 브랜드 소개
</h1>

<p className={styles.screenReaderOnly}>
  엘리프 고덕 센트럴하이 브랜드 소개 페이지입니다.
  평택 고덕국제화계획지구 Aab-13BL에 조성되는 ELIF 브랜드 아파트로,
  지하 2층부터 지상 25층, 아파트 9개동, 총 996세대 규모의 주거단지입니다.
  전용 59㎡와 84㎡ 타입으로 구성되며, 서정리역세권 생활권과 고덕국제신도시의
  생활 인프라를 함께 누릴 수 있는 주거 가치를 소개합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>고덕 프리미엄의 완성</div>
  <div>서정리역세권 엘리프 고덕 센트럴하이</div>
</div>

<img
  className={`${styles.image} ${isImageVisible ? styles.visible : ''}`}
  src={page1}
  alt="엘리프 고덕 센트럴하이 브랜드 소개 및 고덕국제신도시 주거 가치 이미지"
/>
            <Footer />
        </div>
    );
}

export default Brand1;
