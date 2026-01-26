import React from "react-dom";

function Main(props)  {
  return  (
    <main className="main">
      <div className="imgList">
        <div className="imageWrap">
          <img src={`${process.env.PUBLIC_URL}/images/main1.jpg`} alt="메인배너" />
        </div>
        <div className="imageWrap">
          <img src={`${process.env.PUBLIC_URL}/images/shop.jpg`} alt="쇼핑하러가기기" />
        </div>
        <div className="imageWrap">
          <img src={`${process.env.PUBLIC_URL}/images/story.jpg`} alt="펫스토리자세히보기" />
        </div>
        <div className="imageWrap">
          <img src={`${process.env.PUBLIC_URL}/images/in_star.jpg`} alt="펫인스타바로가기" />
        </div>
      </div>
    </main>
  );
}
export default Main;