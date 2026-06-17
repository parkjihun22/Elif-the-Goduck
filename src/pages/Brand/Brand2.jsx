import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [
		// { title: "브랜드 소개", url: "/brand/intro" }, 
		{ title: "홍보 영상", url: "/brand/video" }];


	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
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

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>
<Helmet>
  <title>엘리프 고덕 센트럴하이 | 홍보영상</title>

  <meta
    name="description"
    content="엘리프 고덕 센트럴하이 홍보영상 안내. 평택 고덕국제화계획지구 Aab-13BL에 조성되는 총 996세대 ELIF 브랜드 아파트의 입지환경, 단지 가치, 주거 프리미엄을 영상으로 확인하세요."
  />

  <meta
    name="keywords"
    content="엘리프 고덕 센트럴하이 홍보영상, 평택 엘리프 고덕 센트럴하이, 고덕국제화계획지구 Aab-13BL, 서정리역세권 엘리프, 평택 고덕 아파트, 엘리프 고덕 센트럴하이 모델하우스, 엘리프 고덕 센트럴하이 영상"
  />

  <link
    rel="canonical"
    href="https://www.elifgodeok-central.co.kr/Brand/video"
  />

  <meta name="robots" content="index,follow" />

  {/* OG 태그 */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="엘리프 고덕 센트럴하이" />

  <meta
    property="og:title"
    content="엘리프 고덕 센트럴하이 | 홍보영상"
  />

  <meta
    property="og:description"
    content="평택 고덕국제화계획지구 Aab-13BL, 총 996세대 규모의 ELIF 브랜드 아파트 엘리프 고덕 센트럴하이 홍보영상을 확인하세요."
  />

  <meta
    property="og:url"
    content="https://www.elifgodeok-central.co.kr/Brand/video"
  />

  <meta
    property="og:image"
    content="https://www.elifgodeok-central.co.kr/images/og/main.jpg"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="엘리프 고덕 센트럴하이 | 홍보영상"
  />

  <meta
    name="twitter:description"
    content="엘리프 고덕 센트럴하이의 입지환경과 ELIF 브랜드 가치를 홍보영상으로 확인하세요."
  />

  <meta
    name="twitter:image"
    content="https://www.elifgodeok-central.co.kr/images/og/main.jpg"
  />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="홍보영상" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  엘리프 고덕 센트럴하이 - 홍보영상
</h1>

<p className={styles.screenReaderOnly}>
  엘리프 고덕 센트럴하이 홍보영상 페이지입니다.
  평택 고덕국제화계획지구 Aab-13BL에 조성되는 ELIF 브랜드 아파트로,
  지하 2층부터 지상 25층, 아파트 9개동, 총 996세대 규모의 단지입니다.
  전용 59㎡와 84㎡ 타입 구성, 서정리역세권 생활권, 고덕국제신도시 인프라,
  단지 가치와 주거 프리미엄을 영상으로 확인할 수 있습니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>고덕 프리미엄의 완성, 서정리역세권 엘리프</div>
  <div>엘리프 고덕 센트럴하이의 주거 가치를 영상으로 만나보세요.</div>
</div>


			<div className={styles.videoContainer}>
				<YouTube
					videoId="9z8_2qPGqqs"
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div>

			<Footer />
		</div>
	)
}

export default Brand2;
