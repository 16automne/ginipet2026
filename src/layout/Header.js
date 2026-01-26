import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header(props)  {

  // [1] 변수
  const [menuOpen, setMenuOpen] = useState(false);
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout =()=> {
    localStorage.removeItem('token'); //기존 로그인 데이터 삭제
    localStorage.removeItem('username'); //사용자 아이디 데이터 삭제

    setMenuOpen(false);
  
    alert('로그아웃 되었습니다.');
    navigate('/login');
    window.location.reload();
  }

  return  (
    <header className="header">
      <h1>
        <Link to='/' title="메인페이지로 바로가기">
          <img src={`${process.env.PUBLIC_URL}/images/logo_clr.png`} alt="상단로고" />
        </Link>   
      </h1>

      <button className="toggle_btn" onClick={() => setMenuOpen(true)}>
        <img src={`${process.env.PUBLIC_URL}/images/topIcon_burger.png`} alt="전체메뉴" />
      </button>

      <Link to='/cart' title="장바구니" className="cart_btn">
        <img src={`${process.env.PUBLIC_URL}/images/topIcon_cart.png`} alt="장바구니" />
      </Link>

      {/* 모바일 내비게이션 */}
      <nav className="navi" 
        style={{left:menuOpen?'0%':'-100%'}}
      >
        <button className="close_btn" onClick={() => setMenuOpen(false)}>
          <img src={`${process.env.PUBLIC_URL}/images/btn_close.png`}

            alt="닫기" />
        </button>
        
        <p className="member_info">
          <b>{username}</b>님 환영합니다.
        </p>

        <ul className="gnb">
          <li><Link to='/'>지니펫 쇼핑몰</Link></li>
          <li><Link to='/intro'>브랜드 소개</Link></li>
          <li><Link to='/info'>반려견 정보</Link></li>
          <li><Link to='/event'>이벤트</Link></li>
          <li><Link to='/customer'>고객지원</Link></li>
        </ul>
        <ul className="form_nav">
        {username ? (
          <>
            {/* 로그인 된 상태: 로그아웃 버튼 표시 */}
             {/* 로그인 정보 삭제 */}
            <li><Link to='/' onClick={handleLogout}>로그아웃</Link></li>
            <li>&nbsp;</li>
          </>
        ) : (
          <>
            {/* 로그인 안 된 상태: 로그인/회원가입 표시 */}
            <li><Link to='/login' onClick={() => setMenuOpen(false)}>로그인</Link></li>
            <li><Link to='/join' onClick={() => setMenuOpen(false)}>회원가입</Link></li>
          </>
        )}

        <li><Link to='/order' onClick={() => setMenuOpen(false)}>주문조회</Link></li>
        <li><Link to='/cart' onClick={() => setMenuOpen(false)}>장바구니</Link></li>
      </ul>
      </nav>
    </header>
  );
}
export default Header;