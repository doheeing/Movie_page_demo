import React from "react";
import "./Footer.style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div className="footer">
      <Row className="first-footer">
        <Col>
          <button>이용약관</button>
          <button>고객센터</button>
          <button>개인정보처리방침</button>
          <button>청소년 보호정책</button>
          <button>법적고지</button>
          <button>이벤트</button>
          <button>인재채용</button>
        </Col>
        <Col className="first-footer-second">
          <button>브랜드 바로가기</button>
          <button className="second-button">그룹 계열사 바로가기</button>
        </Col>
      </Row>
      <Row className="logo-footer">
        <img src="img/logo.png" />
      </Row>
      <Row className="second-footer">
        <Col className="copyright">
          <div>Copyright © </div>
          <div>Dohee Han All right reserved.</div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
