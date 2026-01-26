import React from "react";
import { Link } from "react-router-dom";

function Footer(props)  {
  return  (
    <footer className="footer">

      <div className="footerNotice">
        <p>공지사항</p>
      </div>
      <div className="footerContent">
        <div className="footerContentWrap">
          <div className="footerPolicy">
            <Link to='/'>개인정보처리방침</Link>
            <Link to='/'>쇼핑몰약관</Link>
            <Link to='/'><img src={`${process.env.PUBLIC_URL}/images/title_instar_icon.png`} alt="열기" /></Link>
          </div>
          <div className="footerCsCenter">
            <p>고객센터</p>
            <h3>02-1234-5678</h3>
            <p>
              평일 10:00 - 17:00 <br />
              (점심: 12:00 - 13:00)
            </p>
          </div>
          <div className="footerBusinessInfo">
            <button>
              <span>지니펫 사업자 정보 확인</span> &nbsp;&nbsp;
              <img src={`${process.env.PUBLIC_URL}/images/iconArrow_bottom.png`} alt="쇼핑하러가기기" />
            </button>
          </div>
        </div>     
      </div>

    </footer>
  );
}
export default Footer;