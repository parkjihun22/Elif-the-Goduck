import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>


<Helmet>
  <title>엘리프 고덕 센트럴하이 | 프리미엄</title>

  <meta
    name="description"
    content="엘리프 고덕 센트럴하이 프리미엄 안내. 평택 고덕국제화계획지구 Aab-13BL에 조성되는 ELIF 브랜드 아파트의 입지 가치, 생활 인프라, 서정리역 생활권, 미래가치를 확인하세요."
  />

  <meta
    name="keywords"
    content="엘리프 고덕 센트럴하이 프리미엄, 평택 엘리프 고덕 센트럴하이, 고덕국제화계획지구 Aab-13BL, 평택 고덕 아파트, 엘리프 고덕 센트럴하이 입지, 서정리역 생활권, 고덕국제화계획지구 미래가치"
  />

  <link
    rel="canonical"
    href="https://www.elifgodeok-central.co.kr/LocationEnvironment/primium"
  />

  <meta name="robots" content="index,follow" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="엘리프 고덕 센트럴하이" />

  <meta
    property="og:title"
    content="엘리프 고덕 센트럴하이 | 프리미엄"
  />

  <meta
    property="og:description"
    content="평택 고덕국제화계획지구 Aab-13BL ELIF 브랜드 아파트의 입지 가치와 프리미엄을 확인하세요."
  />

  <meta
    property="og:url"
    content="https://www.elifgodeok-central.co.kr/LocationEnvironment/primium"
  />

  <meta
    property="og:image"
    content="https://www.elifgodeok-central.co.kr/img/og/location.jpg"
  />

  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="엘리프 고덕 센트럴하이 | 프리미엄"
  />

  <meta
    name="twitter:description"
    content="엘리프 고덕 센트럴하이의 프리미엄 입지와 생활 가치를 확인하세요."
  />

  <meta
    name="twitter:image"
    content="https://www.elifgodeok-central.co.kr/img/og/location.jpg"
  />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="프리미엄" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  엘리프 고덕 센트럴하이 - 프리미엄
</h1>

<p className={styles.screenReaderOnly}>
  엘리프 고덕 센트럴하이만의 프리미엄을 확인하세요.
  평택 고덕국제화계획지구 Aab-13BL에 조성되는 ELIF 브랜드 아파트로,
  생활 인프라와 서정리역 생활권, 쾌적한 주거환경,
  미래가치를 함께 갖춘 프리미엄 주거단지를 소개합니다.
</p>

<div className={styles.textBox}>
  <div>평택 고덕국제화계획지구의 프리미엄 라이프</div>
  <div>엘리프 고덕 센트럴하이의 새로운 주거 가치를 만나보세요.</div>
</div>

<img
  src={page1}
  className={styles.image3}
  alt="엘리프 고덕 센트럴하이 프리미엄 및 평택 고덕국제화계획지구 주거가치 이미지"
/>


      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
