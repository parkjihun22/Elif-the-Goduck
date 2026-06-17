// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>평택 고덕국제화지구 Aab-13블록 공동주택 신축공사</span>
        </li>
        <li>
          <strong>단지명</strong>
          <span>엘리프 고덕 센트럴하이</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>
            평택고덕 국제화계획지구 내 Aab-13BL<br />
            고덕동 산 353번지 일원
          </span>
        </li>
        <li>
          <strong>건축용도</strong>
          <span>공동주택(아파트), 부대복리시설, 근린생활시설</span>
        </li>
        <li>
          <strong>사업규모</strong>
          <span>지하 2층 / 지상 25층, 아파트 9개동, 총 996세대</span>
        </li>
        <li>
          <strong>세대정보</strong>
          <span>전용 59㎡ · 84㎡, 총 996세대</span>
        </li>
        <li>
          <strong>대지면적</strong>
          <span>61,563.00㎡</span>
        </li>
        <li>
          <strong>건축면적 / 건폐율</strong>
          <span>7,632.3005㎡ / 12.40%</span>
        </li>
        <li>
          <strong>연면적 / 용적률</strong>
          <span>159,903.3341㎡ / 159.96%</span>
        </li>
        <li>
          <strong>브랜드</strong>
          <span>ELIF 엘리프 브랜드 아파트</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="엘리프 고덕 센트럴하이 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="고덕국제신도시 수자인풍경채 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            고덕국제신도시 생활 인프라와 미래가치를 누리는<br />
            엘리프 고덕 센트럴하이 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "고덕국제화지구 중심 프리미엄",
      desc:
        "평택 고덕국제화지구의 우수한 생활 인프라<br/>신도시 개발에 따른 미래가치 기대<br/>엘리프 고덕 센트럴하이의 프리미엄 입지",
    },
    {
      img: slide2,
      title: "전용 59㎡·84㎡ 선호 타입 구성",
      desc:
        "실수요 선호도가 높은 59㎡·84㎡ 구성<br/>효율적인 공간 활용과 실용적인 평면 설계<br/>가족의 라이프스타일을 고려한 주거공간",
    },
    {
      img: slide3,
      title: "서정리역 생활권 프리미엄",
      desc:
        "서정리역 생활권을 누리는 편리한 입지<br/>고덕국제화지구와 연결되는 교통 환경<br/>출퇴근과 일상을 더욱 편리하게",
    },
    {
      img: slide4,
      title: "교육·생활 인프라를 품은 고덕신도시",
      desc:
        "교육시설과 생활편의시설을 가까이 누리는 입지<br/>공원과 상업시설을 함께 이용하는 생활환경<br/>쾌적한 신도시 라이프를 실현하는 주거공간",
    },
    {
      img: slide5,
      title: "ELIF 브랜드 프리미엄",
      desc:
        "엘리프 브랜드만의 차별화된 주거 가치<br/>입주민 중심의 단지 설계와 커뮤니티 구성<br/>고덕국제화지구를 대표하는 브랜드 아파트",
    },
    {
      img: slide6,
      title: "미래가치를 품은 고덕국제화지구",
      desc:
        "평택 고덕국제화지구의 지속적인 개발 기대감<br/>생활·교통·인프라를 모두 갖춘 미래 주거지<br/>실거주와 미래가치를 함께 고려한 선택",
    },
  ];

  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
