import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  const menuContents = [
    // { title: "84A㎡", key: "84A㎡" },
    // { title: "84C㎡", key: "84C㎡" },
    // { title: "101㎡", key: "101㎡" },
    // { title: "84B", key: "84B" },
  ];

  const vrUrls = {
    // "84A㎡": "https://xn--289apcxu78q5pay10eghb4a107h3gx0d900a0h0a.com/vr/84a.html",
    // "84C㎡": "https://xn--289apcxu78q5pay10eghb4a107h3gx0d900a0h0a.com/vr/84c.html",
    // "101㎡": "https://xn--289apcxu78q5pay10eghb4a107h3gx0d900a0h0a.com/vr/101.html",  
    // "84B": "https://www.prugio.com/hb/2025/onecluster/vr/84b.html",
  };


  const [selectedType, setSelectedType] = useState("84A㎡");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  {/* 핵심 SEO 페이지: E모델하우스 */}
  <title>엘리프 고덕 센트럴하이 | E모델하우스</title>

  <meta
    name="description"
    content="엘리프 고덕 센트럴하이 E모델하우스 안내. 평택 고덕국제화계획지구 Aab-13BL ELIF 브랜드 아파트의 세대 평면, 실내 구조, 공간 구성과 주거 동선을 온라인으로 확인하세요."
  />

  <meta
    name="keywords"
    content="엘리프 고덕 센트럴하이 E모델하우스, 엘리프 고덕 센트럴하이 모델하우스, 평택 엘리프 고덕 센트럴하이, 고덕국제화계획지구 Aab-13BL, 평택 고덕 아파트 모델하우스, 엘리프 고덕 센트럴하이 평면도"
  />

  <meta name="robots" content="index,follow" />

  <link
    rel="canonical"
    href="https://www.elifgodeok-central.co.kr/FloorPlan/Emodel"
  />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="엘리프 고덕 센트럴하이" />
  <meta property="og:title" content="엘리프 고덕 센트럴하이 | E모델하우스" />
  <meta
    property="og:description"
    content="평택 고덕국제화계획지구 Aab-13BL ELIF 브랜드 아파트 E모델하우스에서 세대 평면과 공간 구성을 온라인으로 확인하세요."
  />
  <meta property="og:url" content="https://www.elifgodeok-central.co.kr/FloorPlan/Emodel" />
  <meta property="og:image" content="https://www.elifgodeok-central.co.kr/img/og/emodel.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="엘리프 고덕 센트럴하이 | E모델하우스" />
  <meta
    name="twitter:description"
    content="엘리프 고덕 센트럴하이 E모델하우스로 세대 평면과 실내 공간을 확인하세요."
  />
  <meta name="twitter:image" content="https://www.elifgodeok-central.co.kr/img/og/emodel.jpg" />
  <meta name="twitter:url" content="https://www.elifgodeok-central.co.kr/FloorPlan/Emodel" />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "엘리프 고덕 센트럴하이 - E모델하우스",
      "url": "https://www.elifgodeok-central.co.kr/FloorPlan/Emodel",
      "description":
        "엘리프 고덕 센트럴하이 E모델하우스 페이지입니다. 평택 고덕국제화계획지구 Aab-13BL에 조성되는 ELIF 브랜드 아파트의 세대 평면, 실내 구조, 공간 구성과 주거 동선을 온라인으로 확인할 수 있습니다.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.elifgodeok-central.co.kr/img/og/emodel.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.elifgodeok-central.co.kr/" },
          { "@type": "ListItem", "position": 2, "name": "E모델하우스", "item": "https://www.elifgodeok-central.co.kr/FloorPlan/Emodel" }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />
<Bener title="E모델하우스" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  엘리프 고덕 센트럴하이 - E모델하우스
</h1>

<p className={styles.screenReaderOnly}>
  엘리프 고덕 센트럴하이 E모델하우스 페이지입니다.
  평택 고덕국제화계획지구 Aab-13BL에 조성되는 ELIF 브랜드 아파트의
  세대 평면, 실내 구조, 공간 구성과 주거 동선을 온라인으로 확인할 수 있습니다.
</p>

<div className={styles.textBox}>
  <div>평택 고덕국제화계획지구의 주거 공간을 온라인으로 확인</div>
  <div>엘리프 고덕 센트럴하이 E모델하우스를 살펴보세요.</div>
</div>




      <Header isChanged={isScroll} />
      <FixIcon />

      <h1 className={styles.screenReaderOnly}>엘리프 고덕 센트럴하이- E모델하우스</h1>

      <div className={styles.tabMenu}>
        {menuContents.slice(0, 5).map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
