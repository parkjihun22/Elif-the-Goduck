import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "평택 고덕국제화계획지구<br />프리미엄 입지",
    contentText:
      "고덕국제화계획지구 Aab-13BL 중심 입지<br />미래가치를 기대할 수 있는 ELIF 브랜드 아파트",
  },
  {
    img: section2Image2,
    titleText: "풍부한 생활 인프라<br />편리한 생활환경",
    contentText:
      "상업시설과 생활편의시설을 가까이 누리는 입지<br />일상을 더욱 편리하게 만드는 생활 인프라",
  },
  {
    img: section2Image3,
    titleText: "서정리역 생활권<br />광역 교통 프리미엄",
    contentText:
      "서정리역 생활권과 주요 도로망 접근성<br />편리한 이동 환경을 누리는 교통 입지",
  },
  {
    img: section2Image4,
    titleText: "교육·생활 인프라<br />쾌적한 주거환경",
    contentText:
      "교육시설과 생활편의시설이 가까운 생활권<br />가족 중심 라이프를 위한 주거 환경",
  },
  {
    img: section2Image5,
    titleText: "총 996세대 ELIF 브랜드<br />엘리프 고덕 센트럴하이",
    contentText:
      "전용 59㎡·84㎡ 구성의 브랜드 아파트<br />실거주 가치를 높이는 주거 공간 설계",
  },
  {
    img: section2Image6,
    titleText: "자연과 함께하는 힐링 라이프<br />고덕 프리미엄 생활권",
    contentText:
      "쾌적한 공원과 녹지 공간을 가까이 누리는 생활<br />평택 고덕국제화계획지구의 미래가치를 담은 주거 공간",
  },
];


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
  {/* 페이지별 메타 */}
  <title>엘리프 고덕 센트럴하이 | 입지환경</title>

  <meta
    name="description"
    content="엘리프 고덕 센트럴하이 입지환경 안내. 평택 고덕국제화계획지구 Aab-13BL ELIF 브랜드 아파트의 생활 인프라, 서정리역 생활권, 교육환경 및 쾌적한 주거환경을 확인하세요."
  />

  <meta
    name="keywords"
    content="엘리프 고덕 센트럴하이 입지환경, 평택 엘리프 고덕 센트럴하이, 고덕국제화계획지구 Aab-13BL, 평택 고덕 아파트, 서정리역 생활권, 엘리프 고덕 센트럴하이 교통, 고덕국제화계획지구"
  />

  <meta name="robots" content="index,follow" />

  <link
    rel="canonical"
    href="https://www.elifgodeok-central.co.kr/LocationEnvironment/intro"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="엘리프 고덕 센트럴하이" />

  <meta
    property="og:title"
    content="엘리프 고덕 센트럴하이 | 입지환경"
  />

  <meta
    property="og:description"
    content="평택 고덕국제화계획지구 Aab-13BL ELIF 브랜드 아파트의 생활 인프라와 서정리역 생활권 입지를 확인하세요."
  />

  <meta
    property="og:url"
    content="https://www.elifgodeok-central.co.kr/LocationEnvironment/intro"
  />

  <meta
    property="og:image"
    content="https://www.elifgodeok-central.co.kr/img/og/location.jpg"
  />

  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="엘리프 고덕 센트럴하이 | 입지환경"
  />

  <meta
    name="twitter:description"
    content="엘리프 고덕 센트럴하이의 교통, 생활 인프라와 주거환경을 확인하세요."
  />

  <meta
    name="twitter:image"
    content="https://www.elifgodeok-central.co.kr/img/og/location.jpg"
  />

  <meta
    name="twitter:url"
    content="https://www.elifgodeok-central.co.kr/LocationEnvironment/intro"
  />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",

      "name": "엘리프 고덕 센트럴하이 - 입지환경",

      "url": "https://www.elifgodeok-central.co.kr/LocationEnvironment/intro",

      "description":
        "엘리프 고덕 센트럴하이 입지환경 페이지입니다. 평택 고덕국제화계획지구 Aab-13BL ELIF 브랜드 아파트의 생활 인프라, 서정리역 생활권, 교육환경 및 쾌적한 주거환경을 안내합니다.",

      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.elifgodeok-central.co.kr/img/og/location.jpg",
        "width": 1200,
        "height": 630
      },

      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "홈",
            "item": "https://www.elifgodeok-central.co.kr/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "입지환경",
            "item": "https://www.elifgodeok-central.co.kr/LocationEnvironment/intro"
          }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="입지환경" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  엘리프 고덕 센트럴하이 - 입지환경
</h1>

<p className={styles.screenReaderOnly}>
  엘리프 고덕 센트럴하이 입지환경 페이지입니다.
  평택 고덕국제화계획지구 Aab-13BL에 조성되는 ELIF 브랜드 아파트의
  생활 인프라와 서정리역 생활권, 교육환경, 공원 및 녹지공간 등
  우수한 입지 가치를 확인할 수 있습니다.
</p>

<div className={styles.textBox}>
  <div>평택 고덕국제화계획지구 중심에서</div>
  <div>삶의 가치가 높아지는 프리미엄 입지</div>
  <div>엘리프 고덕 센트럴하이가 새로운 주거 가치를 제안합니다.</div>
</div>

<img
  src={page1}
  className={styles.image2}
  alt="엘리프 고덕 센트럴하이 입지환경 및 평택 고덕국제화계획지구 생활권 이미지"
/>


      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 엘리프 고덕 센트럴하이사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
