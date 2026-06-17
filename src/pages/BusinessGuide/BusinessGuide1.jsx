import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";



const projectData = [
  { label: '사업명', value: '엘리프 고덕 센트럴하이' },
  { label: '대지위치', value: '경기도 평택시 고덕국제화계획지구 Aab-13BL' },
  { label: '주택형', value: '전용 59㎡ / 84㎡' },
  { label: '세대수', value: '총 996세대 (아파트 9개동)' },
  { label: '입지환경', value: '평택 고덕국제화계획지구 중심 생활권' },
  { label: '교통환경', value: '서정리역 생활권 및 광역교통망 이용 편리' },
  { label: '생활인프라', value: '교육·상업·공원 등 풍부한 생활 인프라' },
  { label: '건축규모', value: '지하 2층 ~ 지상 25층' },
  { label: '브랜드', value: 'ELIF(엘리프) 브랜드 아파트' },
];
const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>

<Helmet>
  <title>엘리프 고덕 센트럴하이 | 사업안내</title>

  <meta
    name="description"
    content="엘리프 고덕 센트럴하이 사업안내. 평택 고덕국제화계획지구 Aab-13BL에 조성되는 지하 2층~지상 25층, 아파트 9개동, 총 996세대 ELIF 브랜드 아파트의 사업개요와 입지 가치를 확인하세요."
  />

  <meta
    name="keywords"
    content="엘리프 고덕 센트럴하이, 평택 엘리프 고덕 센트럴하이, 고덕국제화계획지구 Aab-13BL, 평택 고덕 아파트, 고덕국제신도시 아파트, 서정리역세권 엘리프, 평택 신축아파트, 엘리프 브랜드"
  />

  <meta name="robots" content="index,follow" />

  <link
    rel="canonical"
    href="https://www.diarivalencia.com/BusinessGuide/intro"
  />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="엘리프 고덕 센트럴하이" />

  <meta
    property="og:title"
    content="엘리프 고덕 센트럴하이 | 사업안내"
  />

  <meta
    property="og:description"
    content="평택 고덕국제화계획지구 Aab-13BL, 총 996세대 규모의 ELIF 브랜드 아파트 엘리프 고덕 센트럴하이 사업개요를 확인하세요."
  />

  <meta
    property="og:url"
    content="https://www.diarivalencia.com/BusinessGuide/intro"
  />

  <meta
    property="og:image"
    content="https://www.diarivalencia.com/img/og/business.jpg"
  />

  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="엘리프 고덕 센트럴하이 | 사업안내"
  />

  <meta
    name="twitter:description"
    content="엘리프 고덕 센트럴하이 사업개요, 단지 규모, 전용 59㎡·84㎡ 타입, 고덕국제화지구 입지 정보를 확인하세요."
  />

  <meta
    name="twitter:image"
    content="https://www.diarivalencia.com/img/og/business.jpg"
  />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "엘리프 고덕 센트럴하이 사업안내",
      "url": "https://www.diarivalencia.com/BusinessGuide/intro",
      "description": "평택 고덕국제화계획지구 Aab-13BL에 조성되는 총 996세대 ELIF 브랜드 아파트 엘리프 고덕 센트럴하이의 사업개요, 단지 규모, 입지환경 정보를 제공합니다.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.diarivalencia.com/img/og/business.jpg",
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
            "item": "https://www.diarivalencia.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "사업안내",
            "item": "https://www.diarivalencia.com/BusinessGuide/intro"
          }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  엘리프 고덕 센트럴하이 - 사업안내
</h1>

<p className={styles.screenReaderOnly}>
  엘리프 고덕 센트럴하이는 평택 고덕국제화계획지구 Aab-13BL에 조성되는
  ELIF 브랜드 아파트입니다. 지하 2층부터 지상 25층, 아파트 9개동,
  총 996세대 규모로 계획되며 전용 59㎡와 84㎡ 타입으로 구성됩니다.
  평택 고덕 생활권, 서정리역세권 접근성, 교육·상업·공원 등 생활 인프라와
  함께 실거주 가치를 갖춘 브랜드 주거단지 정보를 제공합니다.
</p>

<div className={styles.textBox}>
  <div>Aab-13BL의 새로운 주거 가치</div>
  <div>총 996세대 ELIF 브랜드, 엘리프 고덕 센트럴하이</div>
</div>

<img className={styles.img3} src={page1} alt="엘리프 고덕 센트럴하이 사업개요 이미지"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
