import styles from "./footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.topNav}>
                    <ul>
                        <li>신규 직영점 입점 제의</li>
                        <li>점포개설문의</li>
                        <li>채용문의</li>
                        <li>윤리신고센터</li>
                        <li>해피포인트카드 이용약관</li>
                        <li>배스킨라빈스 리워드 이용약관</li>
                        <li>개인정보처리방침</li>
                        <li>영상정보처리기기운영관리방침</li>
                        <li>안전보건 경영방침</li>
                        <li>공정거래자율준수</li>
                        <li>거래희망회사 사전등록</li>
                    </ul>
                </div>

                <div className={styles.middle}>
                    <div className={styles.brandBlock}>
                        <div className={styles.brandLogo}>
                            <img
                                src={process.env.PUBLIC_URL + "/images/logo_gray.png"}
                                alt="Baskin Robbins 로고"
                            />
                        </div>
                        <div className={styles.brandInfo}>
                            <p>사업자 등록번호 : 303-81-09535</p>
                            <p>비알코리아㈜ 대표이사 도세호</p>
                            <p>서울특별시 서초구 남부순환로 2620(양재동 11-149번지)</p>
                            <p>TEL : 080-555-3131</p>
                            <p>개인정보관리책임자 : 이경율/실장</p>
                        </div>
                    </div>

                    <div className={styles.menuColumns}>
                        <div>
                            <h4>Menu</h4>
                            <ul>
                                <li>이달의 맛</li>
                                <li>아이스크림</li>
                                <li>프리팩</li>
                                <li>아이스크림케이크</li>
                                <li>디저트</li>
                                <li>음료</li>
                                <li>커피</li>
                            </ul>
                        </div>
                        <div>
                            <h4>BR Play</h4>
                            <ul>
                                <li>이벤트</li>
                                <li>배라광장</li>
                                <li>BR레시피</li>
                                <li>마이플레이버리스트</li>
                            </ul>
                        </div>
                        <div>
                            <h4>BR Story</h4>
                            <ul>
                                <li>브랜드 스토리</li>
                                <li>이달의 맛 히스토리</li>
                                <li>BR 소개</li>
                                <li>Be Better</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Delivery/Store</h4>
                            <ul>
                                <li>매장 찾기</li>
                                <li>100대 배달앱</li>
                                <li>배달주문</li>
                                <li>선물하기</li>
                                <li>단체 주문</li>
                            </ul>
                        </div>
                        <div>
                            <h4>배라앱</h4>
                            <ul>
                                <li>배라앱 소개 및 다운로드</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Information Center</h4>
                            <ul>
                                <li>고객센터</li>
                                <li>소비자중심경영(CCM)</li>
                                <li>공지사항</li>
                                <li>보도자료</li>
                                <li>공장견학/교육신청</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        Copyright &copy; 2023 BRKOREA Company. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

