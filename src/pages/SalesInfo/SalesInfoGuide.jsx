import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
// import page1 from "../../assets/SalesInfo/guide/page1.jpg"

import Ready from "../../components/Ready/Ready";


const ComplexGuide1 = () => {
  const menuContents = [
    { title: "공급안내", url: "/BusinessGuide/documents" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    // { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
    // { title: "청약방법안내", url: "/SalesInfo/SubscriptionGuide" },
    // { title: "청약안내문", url: "/SalesInfo/guide" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로드 상태
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

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

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>엘리프 고덕 센트럴하이 - 청약안내</title>
        <meta
          name="description"
          content="엘리프 고덕 센트럴하이 청약안내. 특별공급, 1순위·2순위 청약 일정, 신청 자격, 필요서류, 인터넷 청약 절차와 유의사항을 확인하세요."
        />
        <link rel="canonical" href="https://www.diarivalencia.com/SalesInfo/SubscriptionGuide" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="청약안내" />

      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        엘리프 고덕 센트럴하이 - 청약안내
      </h1>
      <p className={styles.screenReaderOnly}>
        엘리프 고덕 센트럴하이 청약안내 페이지입니다.
        특별공급, 1순위·2순위 청약 접수 전 신청 자격과 필요서류,
        인터넷 청약 절차 및 유의사항을 확인하고 공식 기준에 맞춰 준비하세요.
      </p>

      <div className={styles.textBox}>
        <div>인터넷 청약 절차를 확인하세요</div>
        <div>엘리프 고덕 센트럴하이 청약안내</div>
      </div>

      {/* 이미지에 애니메이션 효과 추가 */}
      {/* <img
        className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
        src={page1}
        alt="엘리프 고덕 센트럴하이 청약안내 이미지"
        onLoad={handleImageLoad}
      /> */}

      <Ready/>



      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 고객의 이해를 돕기 위한 것으로 성공적인 청약을 위해
          도움을 드리고있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
