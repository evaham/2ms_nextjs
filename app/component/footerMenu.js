'use client';

import Link from 'next/link';
import React from 'react';

const FooterMenu = () => {
  const [showPopup4, setShowPopup4] = React.useState(false);

  return (
    <>
      <div className="footmenu">
        <Link className="footmenu__link" href={"/"}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" /></svg>
          <span>전단</span>
        </Link>
        <button className="footmenu__link" onClick={() => setShowPopup4(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm0-160q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm320 440H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v160q0 33-23.5 56.5T800-160Z" /></svg>
          <span>쿠폰</span>
        </button>
        <Link className="footmenu__link disabled" href={"/cartlist"}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" /></svg>
          <span>장바구니</span>
        </Link>
        <Link className="footmenu__link" href={"/orderslist"}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" /></svg>
          <span>주문내역</span>
        </Link>
      </div>
      {showPopup4 && (
        <div className="layer__wrap">
          <div className="layer__bg"></div>
          <div className="layer__panel">
            <p className="layer__tit">고객정보</p>
            <div className="layer__userinfo">
              <label className='layer__usertxt'>온라인 주문 및 쿠폰기능을 사용하기 위해 휴대폰 번호를 입력해주세요</label>
              <input type='text' className="layer__userinput" placeholder="휴대폰 번호 입력" />
              <div className="layer__usercheckbox">
                <input alt="" className="" type="checkbox" />
                <label className=""><span className="layer__userunderline">개인정보 수집이용</span>에 동의합니다.<span className="text-teal-600"></span>
                </label>
              </div>
              <button className="layer__userbtn">이용동의 및 사용시작</button>
              <button onClick={() => setShowPopup4(false)} className="layer__close">
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default FooterMenu;
