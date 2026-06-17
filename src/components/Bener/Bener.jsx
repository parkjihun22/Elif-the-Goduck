import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="엘리프 고덕 센트럴하이 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '엘리프 고덕 센트럴하이') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 고덕국제신도시에서 만나는 브랜드 아파트, 엘리프 고덕 센트럴하이.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          고덕신도시 생활권과 직주근접 프리미엄을 누리는 평택 고덕 신규 분양 아파트.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교통·교육·생활 인프라와 미래가치를 함께 갖춘 엘리프 고덕 센트럴하이 분양 정보.
        </div>
      </>
    );
  } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          엘리프 고덕 센트럴하이는 평택 고덕국제신도시 생활권에서 주목받는 신규 아파트입니다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          사업개요, 세대안내, 청약일정, 모집공고 등 분양 핵심 정보를 한눈에 확인하세요.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 고덕 아파트 분양을 찾는 실수요자와 투자수요 모두에게 관심 높은 주거 선택지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          엘리프 고덕 센트럴하이
        </div>
      </>
    );
  } else if (text === '입지환경'|| text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          고덕국제신도시 생활 인프라와 삼성 평택캠퍼스 직주근접 수혜를 기대할 수 있는 입지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 고덕신도시의 교통, 교육, 생활, 개발호재를 누리는 엘리프 고덕 센트럴하이.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          쾌적한 단지 설계와 실거주 중심의 공간 구성을 갖춘 엘리프 고덕 센트럴하이.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 고덕 아파트 분양 수요에 맞춘 커뮤니티, 조경, 주거 편의성을 제안합니다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          고덕국제신도시 프리미엄 라이프를 완성하는 엘리프 고덕 센트럴하이.
        </div>
      </>
    );
  }
};
